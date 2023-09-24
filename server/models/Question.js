const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    ques: { type: String, required: true }, //Question
    opt: { type: [String], required: true }, //Options
    ans: { type: Number, required: true }, //Answer
    diff: { type: Number, required: true }, //Difficulty
    lvl: { type: Number, required: true }, //Level
    lang: { type: String, required: true }, //Language
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", schema);