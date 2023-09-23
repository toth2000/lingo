const express = require("express");
const { registerUser, login, refreshToken } = require("../controllers/auth");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Route");
});

router.post("/register", registerUser);

router.post("/login", login);

router.post("/refresh", refreshToken);

module.exports = router;
