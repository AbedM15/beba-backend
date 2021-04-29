const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require("./User/user");
const vehicle = require("./Vehicle/vehicle");
const trip = require("./Trip/trip");
const payment = require("./Payments/payments");
// app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/user", user);
app.use("/vehicle", vehicle);
app.use("/trip", trip);
app.use("/payment", payment);

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Online at port ${PORT}`);
});
