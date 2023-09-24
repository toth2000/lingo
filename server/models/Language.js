const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    lang: { type: String, required: true }, //Language Name
    code: { type: String, required: true, unique: true, index: true }, //Language Code
    lvls: { type: Number, default: 1 }, //Total Levels
  },
  { timestamps: true }
);

module.exports = mongoose.model("Language", schema);
