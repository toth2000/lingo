const Statistic = require("../models/Statistic");

const getStatisticById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Statistic.findById(id);

    if (!result) {
      return res.status(404).json({
        message: "User statistic not found",
        error: "invalid user id",
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in getStatisticById controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

module.exports = { getStatisticById };
