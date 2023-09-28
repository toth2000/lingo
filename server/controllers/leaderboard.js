const Statistic = require("../models/Statistic");
const User = require("../models/User");

const getLeaderboard = async (req, res) => {
  try {
    // Upgrade to Aggregate pending
    const progressData = await Statistic.find().sort({ points: -1 }).limit(10);

    const userIds = progressData.map((item) => item._id);

    const userData = await User.find({ _id: { $in: userIds } });

    const data = {};

    userData.forEach((item) => (data[item._id] = item.name));

    const result = progressData.map((item) => ({
      ...item._doc,
      name: data[item._id],
    }));

    res.status(200).json(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

module.exports = { getLeaderboard };
