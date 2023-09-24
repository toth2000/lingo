const { validateKeys } = require("../utils/mongoose");
const { validationKeys } = require("../keys/question");
const Question = require("../models/Question");

const insertQuestion = async (req, res) => {
  try {
    const data = req.body;
    if (!validateKeys(validationKeys, data)) {
      return res.json({
        message: "Please fill all the required fields",
        error: "Required field not provided",
      });
    }

    const question = new Question(data);
    const result = await question.save();

    return res.json(result);
  } catch (error) {
    console.error("Error in insert question controller: ", error);
    return res.json({
      message: "An error occured, please try again later.",
      error: error,
    });
  }
};

const insertManyQuestion = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      return res.json({
        message: "Please provide an array of question",
        error: "Array of JSON is required",
      });
    }

    const validateFields = data.every((item) =>
      validateKeys(validationKeys, item)
    );

    if (!validateFields) {
      return res.json({
        message: "Please pass data in correct format",
        error: "JSON Validation Fail",
      });
    }

    const result = await Question.insertMany(data);
    return res.json(result);
  } catch (error) {
    console.error("Error in insert many question controller: ", error);
    return res.json({
      message: "An error occured, please try again later.",
      error: error,
    });
  }
};

module.exports = { insertQuestion, insertManyQuestion };
