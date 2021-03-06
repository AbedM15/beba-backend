const stores = require("../Stores/stores");

async function fullTrips(tripIds) {
  let trips = [];
  for (let tripId of tripIds) {
    //first we get the payments
    const payments = await new Promise((resolve, reject) => {
      stores.payments.find({ tripId }, {}, (error, payments) => {
        if (error) reject(error);
        resolve(payments);
      });
    });
    const trip = await new Promise((resolve, reject) => {
      stores.trip.findOne({ id: tripId }, (error, trip) => {
        if (error) reject(error);

        resolve(trip);
      });
    });
    trip.payments = payments;
    trips.push(trip);
  }
  return trips;
}

async function tripIdsFromPhoneNumber(phoneNumber) {
  //first get the payments
  const payments = await new Promise((resolve, reject) => {
    stores.payments.find({ phoneNumber }, {}, (error, payments) => {
      if (error) reject(error);

      resolve(payments);
    });
  });

  return payments.map((payment) => payment.tripId);
}

module.exports = { fullTrips, tripIdsFromPhoneNumber };
