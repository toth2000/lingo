const mongoose = require("mongoose");
const Admin = require("../models/Admin");
const User = require("../models/User");

const createAdmin = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await User.findById(id);

    if (!result) {
      return res.status(404).json({
        message: "User not found",
        error: "invalid user id",
      });
    }

    const admin = await new Admin({
      _id: new mongoose.Types.ObjectId(result._id),
    }).save();

    return res.status(200).json(admin);
  } catch (error) {
    console.error("Error in create admin controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

const adminWritePermission = async (req, res) => {
  try {
    const { id } = req.body;
    const admin = await Admin.findByIdAndUpdate(
      id,
      { write: true },
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({
        message: "User does not exists",
        error: "Invalid User Id",
      });
    }

    return res.status(200).json(admin);
  } catch (error) {
    console.error("Error in allow admin write controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

const adminEditPermission = async (req, res) => {
  try {
    const { id } = req.body;
    const admin = await Admin.findByIdAndUpdate(
      id,
      { edit: true },
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({
        message: "User does not exists",
        error: "Invalid User Id",
      });
    }

    return res.status(200).json(admin);
  } catch (error) {
    console.error("Error in allow admin edit controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

const adminDeletePermission = async (req, res) => {
  try {
    const { id } = req.body;
    const admin = await Admin.findByIdAndUpdate(
      id,
      { delete: true },
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({
        message: "User does not exists",
        error: "Invalid User Id",
      });
    }

    return res.status(200).json(admin);
  } catch (error) {
    console.error("Error in allow admin delete controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

module.exports = { createAdmin, adminWritePermission, adminEditPermission, adminDeletePermission };
