const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    _id: { type: mongoose.ObjectId, required: true }, //User Id
    write: { type: Boolean, default: false }, //Can write new question and create new admin
    delete: { type: Boolean, default: false }, //Can write new question
    edit: { type: Boolean, default: false }, //Can write new question
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", schema);
