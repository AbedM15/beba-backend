const authenticateJWT = require("../AuthenticateJwt/authenticateJwt");
const stores = require("../Stores/stores");

const router = require("express").Router();

router.post("/add", authenticateJWT, async (req, res) => {
  try {
    const { vehicle } = req.body;
    const { id: userId } = req.user;
    const addedVehicle = await new Promise((resolve, reject) => {
      stores.vehicles.insert({ ...vehicle, userId }, (error, addedVehicle) => {
        if (error) reject(error);

        resolve(addedVehicle);
      });
    });
    res.send({ success: true, addedVehicle });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.get("/list/all", authenticateJWT, async (req, res) => {
  try {
    const { id: userId } = req.user;
    const vehicles = await new Promise((resolve, reject) => {
      stores.vehicles.find({ userId }, {}, (error, vehicles) => {
        if (error) reject(error);

        resolve(vehicles);
      });
    });

    res.send({ success: true, vehicles });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;
