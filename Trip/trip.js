const authenticateJWT = require("../AuthenticateJwt/authenticateJwt");
const stores = require("../Stores/stores");
const { fullTrips, tripIdsFromPhoneNumber } = require("./tripUtils");

const router = require("express").Router();

router.post("/add", authenticateJWT, async (req, res) => {
  try {
    const { trip, vehicleId } = req.body;

    const addedTrip = await new Promise((resolve, reject) => {
      stores.trip.insert({ ...trip, vehicleId }, (error, addedTrip) => {
        if (error) reject(error);
        resolve(addedTrip);
      });
    });

    res.send({ success: true, addedTrip });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.get("/all/:vehicleId", authenticateJWT, async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const trips = await new Promise((resolve, reject) => {
      stores.trip.find({ vehicleId }, {}, (error, trips) => {
        if (error) reject(error);
        resolve(trips);
      });
    });
    res.send({ success: true, trips });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.get("/:tripId", authenticateJWT, async (req, res) => {
  try {
    const { tripId } = req.params;
    const shallowTrip = await new Promise((resolve, reject) => {
      stores.trip.findOne({ id: tripId }, (error, trip) => {
        if (error) reject(error);

        resolve(trip);
      });
    });
    if (!shallowTrip) throw new Error("Trip not found!");

    const [trip] = await fullTrips([shallowTrip.id]);
    res.send({ success: true, trip });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.get("/delete/:tripId", async (req, res) => {
  try {
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.get("/list/:phoneNumber", async (req, res) => {
  try {
    const { phoneNumber } = req.params;

    const tripIds = await tripIdsFromPhoneNumber(phoneNumber);

    const trips = await fullTrips(tripIds);

    res.send({ success: true, trips });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;
