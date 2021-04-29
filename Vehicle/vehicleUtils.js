const stores = require("../Stores/stores");
const { fullTrips } = require("../Trip/tripUtils");

async function fullVehicles(vehicleIds) {
  let vehicles = [];
  for (let vehicleId of vehicleIds) {
    let shallowTrips = await new Promise((resolve, reject) => {
      stores.trip.find({ vehicleId }, {}, (error, trips) => {
        if (error) reject(error);
        resolve(trips);
      });
    });
    let trips = await fullTrips(shallowTrips.map((trip) => trip.id));
    //get the vehicle
    let vehicle = await new Promise((resolve, reject) => {
      stores.vehicles.findOne({ id: vehicleId }, (error, vehicle) => {
        if (error) reject(error);

        resolve(vehicle);
      });
    });
    vehicle.trips = trips;
    vehicles.push(vehicle);
  }
  return vehicles;
}

module.exports = { fullVehicles };
