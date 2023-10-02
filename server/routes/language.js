const express = require("express");
const { addLanguage, addLevel, getLanguage } = require("../controllers/language");
const { verifyTokenMiddleware } = require("../middleware/auth");
const { verifyAdmin, verifyAdminWriteAccess } = require("../middleware/admin");

const router = express.Router();

router.get("/", verifyTokenMiddleware ,getLanguage);

// Create new language
router.post("/", verifyTokenMiddleware, verifyAdmin, verifyAdminWriteAccess, addLanguage);

// Create new level
router.put("/", verifyTokenMiddleware, verifyAdmin, verifyAdminWriteAccess, addLevel);  

module.exports = router;
