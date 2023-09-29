const express = require("express");
const { addLanguage, addLevel, getLanguage } = require("../controllers/language");
const { verifyTokenMiddleware } = require("../middleware/auth");

const router = express.Router();

router.get("/", verifyTokenMiddleware ,getLanguage);

// Create new language
router.post("/", addLanguage);

// Create new level
router.put("/", addLevel);  

module.exports = router;
