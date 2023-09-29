const User = require("../models/User");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);

    if (!result) {
      return res.status(404).json({
        message: "User not found",
        error: "invalid user id",
      });
    }
    const { _id, name, createdAt } = result;
    return res.status(200).json({ _id, name, createdAt });
  } catch (error) {
    console.error("Error in getUserById controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

module.exports = { getUserById };
