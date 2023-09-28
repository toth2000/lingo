const express = require("express");
const { addLanguage, addLevel, getLanguage } = require("../controllers/language");

const router = express.Router();

router.get("/", getLanguage);

// Create new language
router.post("/", addLanguage);

// Create new level
router.put("/", addLevel);  

module.exports = router;
