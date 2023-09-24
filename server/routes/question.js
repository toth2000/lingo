const express = require("express");
const {
  insertQuestion,
  insertManyQuestion,
} = require("../controllers/question");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Question Route");
});

// Add a single question
router.post("/", insertQuestion);
// Add many questions
router.post("/many", insertManyQuestion);

module.exports = router;
