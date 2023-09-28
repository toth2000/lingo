const { validateKeys } = require("../utils/mongoose");
const {
  validationAddLevelKeys,
  validationCreateKeys,
} = require("../keys/language");
const Language = require("../models/Language");

const addLanguage = async (req, res) => {
  try {
    const data = req.body;

    if (!validateKeys(validationCreateKeys, data)) {
      return res.status(400).json({
        message: "Please fill all the required fields",
        error: "Required field not provided",
      });
    }

    const language = new Language(data);
    const result = await language.save();

    return res.status(201).json(result);
  } catch (error) {
    console.error("Error in create language controller: ", error);
    if (error?.code === 11000) {
      res
        .status(405)
        .json({ message: "Language Already Exists", error: error });
    } else {
      res.status(500).json({
        message: "An error Occured, Please Try again Later.",
        error: error,
      });
    }
  }
};

const addLevel = async (req, res) => {
  try {
    const data = req.body;

    if (!validateKeys(validationAddLevelKeys, data)) {
      return res.status(400).json({
        message: "Please select langauge first",
        error: "Language code not provided",
      });
    }

    const result = await Language.findOneAndUpdate(
      { code: data.code },
      { $inc: { lvls: 1 } },
      { new: true }
    );

    if (result === null) {
      res.status(404).json({
        message: "Language Does not exists",
        error: "Invalid Langauge code",
      });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error in add level controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

const getLanguage = async (req, res) => {
  try {
    const data = await Language.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error in get Language controller: ", error);
    res.status(500).json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

module.exports = { addLanguage, addLevel, getLanguage };
