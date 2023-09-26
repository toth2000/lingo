const express = require("express");
const { getLeaderboard } = require("../controllers/leaderboard");

const router = express.Router();

router.get("/", getLeaderboard);

module.exports = router;
