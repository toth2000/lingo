const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    _id: { type: mongoose.ObjectId, required: true }, //User Id
    level: {
      type: Object,
      default: {
        en: {
          0: {
            complete: false,
            score: 0,
          },
        },
      },
    }, //Level Progress
    points: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Statistic", schema);
