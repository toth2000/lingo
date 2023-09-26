const Statistic = require("../models/Statistic");

const getLeaderboard = async (req, res) => {
  try {
    const result = await Statistic.find().sort({ points: -1 }).limit(10);
    res.json(result);
  } catch (error) {
    console.log("Error: ", error);
    res.json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

module.exports = { getLeaderboard };
