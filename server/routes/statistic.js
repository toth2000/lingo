const express = require("express");
const { getStatisticById } = require("../controllers/statistic");

const router = express.Router();

router.get("/:id", getStatisticById);

module.exports = router;
