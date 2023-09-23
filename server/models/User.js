const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    refreshToken: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", schema);
