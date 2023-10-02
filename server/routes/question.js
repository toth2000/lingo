const express = require("express");
const {
  insertQuestion,
  insertManyQuestion,
} = require("../controllers/question");
const { verifyAdmin, verifyAdminWriteAccess } = require("../middleware/admin");
const { verifyTokenMiddleware } = require("../middleware/auth");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Question Route");
});

// Add a single question
router.post(
  "/",
  verifyTokenMiddleware,
  verifyAdmin,
  verifyAdminWriteAccess,
  insertQuestion
);
// Add many questions
router.post(
  "/many",
  verifyTokenMiddleware,
  verifyAdmin,
  verifyAdminWriteAccess,
  insertManyQuestion
);

module.exports = router;
