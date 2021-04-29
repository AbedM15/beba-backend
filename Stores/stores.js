const Datastore = require("nedb");
const path = require("path");
const stores = {
  user: new Datastore({
    filename: path.join(__dirname, "users.db"),
    autoload: true,
  }),
  vehicles: new Datastore({
    filename: path.join(__dirname, "vehicles.db"),
    autoload: true,
  }),
  trip: new Datastore({
    filename: path.join(__dirname, "trips.db"),
    autoload: true,
  }),
  payments: new Datastore({
    filename: path.join(__dirname, "payments.db"),
    autoload: true,
  }),
};

module.exports = stores;
