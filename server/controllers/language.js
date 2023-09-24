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
      return res.json({
        message: "Please fill all the required fields",
        error: "Required field not provided",
      });
    }

    const language = new Language(data);
    const result = await language.save();

    return res.json(result);
  } catch (error) {
    console.error("Error in create language controller: ", error);
    if (error?.code === 11000) {
      res.json({ message: "Language Already Exists", error: error });
    } else {
      res.json({
        message: "An error Occured, Please Try again Later.",
        error: error,
      });
    }
  }
};

const addLevel = async (req, res) => {
  try {
    // findOneAndUpdate({ _id: res._id }, { $inc: { views: 1 } }, {new: true }
    const data = req.body;

    if (!validateKeys(validationAddLevelKeys, data)) {
      return res.json({
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
      res.json({
        message: "Language Does not exists",
        error: "Invalid Langauge code",
      });
    }

    res.json(result);
  } catch (error) {
    console.error("Error in add level controller: ", error);
    res.json({
      message: "An error occured, please try again later",
      error: error,
    });
  }
};

module.exports = { addLanguage, addLevel };
