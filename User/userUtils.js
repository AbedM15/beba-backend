const stores = require("../Stores/stores");
const { fullVehicles } = require("../Vehicle/vehicleUtils");

async function fullUser(userId) {
  //find shallow vehicles
  let shallowVehicles = await new Promise((resolve, reject) => {
    stores.vehicles.find({ userId }, {}, (error, vehicles) => {
      if (error) reject(error);
      resolve(vehicles);
    });
  });

  const vehicles = await fullVehicles(
    shallowVehicles.map((vehicle) => vehicle.id)
  );
  //now we find the user
  const user = await new Promise((resolve, reject) => {
    stores.user.findOne({ id: userId }, (error, user) => {
      if (error) reject(error);
      resolve(user);
    });
  });
  user.vehicles = vehicles;
  return user;
}

module.exports = { fullUser };
