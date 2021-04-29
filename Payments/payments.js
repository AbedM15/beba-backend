const authenticateJWT = require("../AuthenticateJwt/authenticateJwt");
const stores = require("../Stores/stores");

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

module.exports = router;
