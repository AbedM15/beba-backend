const authenticateJWT = require("../AuthenticateJwt/authenticateJwt");
const stores = require("../Stores/stores");
const { askSafForStkPush } = require("./safaricomUtils");

const router = require("express").Router();

router.post("/add", authenticateJWT, async (req, res) => {
  try {
    const { payment, tripId } = req.body;

    const addedPayment = await new Promise((resolve, reject) => {
      stores.payments.insert({ ...payment, tripId }, (error, addedPayment) => {
        if (error) reject(error);

        resolve(addedPayment);
      });
    });

    await askSafForStkPush(
      payment.phoneNumber,
      payment.id,
      parseInt(payment.amount)
    ).then(({ data }) => {
      console.log(data);
    });

    res.send({ success: true, addedPayment });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.get("/all/:tripId", authenticateJWT, async (req, res) => {
  try {
    const { tripId } = req.params;

    const trips = await new Promise((resolve, reject) => {
      stores.trip.find({ tripId }, {}, (error, trips) => {
        if (error) reject(error);

        resolve(trips);
      });
    });

    res.send({ success: true, trips });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.post("/callback/:paymentId", async (req, res) => {
  try {
    const { paymentId } = req.params;
    const body = req.body;
    //set error to db
    if (body.Body.stkCallback.ResultCode !== 0) {
      await new Promise((resolve, reject) => {
        stores.payments.update(
          { id: paymentId },
          {
            $set: {
              paid: "error",
              paymentDescription: body.Body.stkCallback.ResultDesc,
            },
          },
          {},
          (error, numUpdated) => {
            if (error) reject(error);

            resolve(numUpdated);
          }
        );
      });
      throw new Error("Payment unsucessful");
    }
    await new Promise((resolve, reject) => {
      stores.payments.update(
        { id: paymentId },
        { $set: { paid: true } },
        {},
        (error, numUpdated) => {
          if (error) reject(error);

          resolve(numUpdated);
        }
      );
    });
    res.send({});
  } catch (error) {
    res.send({ success: false });
  }
});

module.exports = router;
