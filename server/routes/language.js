const express = require("express");
const { addLanguage, addLevel } = require("../controllers/language");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Language Route");
});

// Create new language
router.post("/", addLanguage);

// Create new level
router.put("/", addLevel);  

module.exports = router;
