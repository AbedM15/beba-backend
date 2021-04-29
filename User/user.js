const stores = require("../Stores/stores");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const privateKey = require("../Secrets/privateKey");
const authenticateJWT = require("../AuthenticateJwt/authenticateJwt");
const { fullUser } = require("./userUtils");

router.post("/register", async (req, res) => {
  try {
    const { user } = req.body;

    const insertedUser = await new Promise((resolve, reject) => {
      stores.user.insert(user, (error, doc) => {
        if (error) reject(error);

        resolve(doc);
      });
    });
    const accessToken = jwt.sign(
      { id: insertedUser.id, name: insertedUser.name },
      privateKey
    );
    res.send({ success: true, accessToken });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user } = req.body;

    const foundUser = await new Promise((resolve, reject) => {
      stores.user.findOne(
        { name: user.name, password: user.password },
        (error, doc) => {
          if (error) reject(error);

          resolve(doc);
        }
      );
    });
    if (foundUser === null) throw new Error("Invalid credentials");

    const accessToken = jwt.sign(
      { id: foundUser.id, name: foundUser.name },
      privateKey
    );
    res.send({ success: true, accessToken });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

router.get("/", authenticateJWT, async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await fullUser(userId);
    res.send({ success: true, user });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;
