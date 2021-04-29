const authenticateJWT = require("../AuthenticateJwt/authenticateJwt");

const router = require("express").Router();

router.post("/add", authenticateJWT, async (req, res) => {
  try {
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;
