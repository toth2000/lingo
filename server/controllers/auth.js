const {
  validationRegisterUserKeys,
  validationLoginKeys,
  validationRefreshTokenKeys,
} = require("../keys/auth");
const User = require("../models/User");
const {
  encryptPassword,
  jwtSign,
  verifyPassword,
  jwtVerifyRefreshToken,
  jwtCheckExpiry,
} = require("../utils/auth");
const { validateKeys } = require("../utils/mongoose");

const registerUser = async (req, res) => {
  try {
    if (!validateKeys(validationRegisterUserKeys, req.body)) {
      return res.json({
        message: "Please fill all the required fields",
        error: "Required Fields not passed",
      });
    }

    const { name, email, password } = req.body;

    const hashPassword = await encryptPassword(password);
    const user = new User({ name: name, email: email, password: hashPassword });
    const result = await user.save();

    const signUser = await jwtSign(result._id);
    res.json(signUser);
  } catch (error) {
    console.error("Error Occured in register user controller: ", error);

    if (error?.code === 11000) {
      res.json({ message: "User Already Exists", error: error });
    } else {
      res.json({
        message: "An error Occured, Please Try again Later.",
        error: error,
      });
    }
  }
};

const login = async (req, res) => {
  try {
    if (!validateKeys(validationLoginKeys, req.body)) {
      return res.json({
        message: "Please fill all the required fields",
        error: "Required Fields not passed",
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.json({
        message: "User does not exists",
        error: "Invalid email",
      });
    }

    const passwordVerified = await verifyPassword(password, user.password);

    if (!passwordVerified) {
      return res.json({
        message: "Incorrect Password",
        error: "Invalid Password",
      });
    }

    const signedUser = await jwtSign(user._id);
    return res.json(signedUser);
  } catch (error) {
    console.error("Error in login controller: ", error);
    return res.json({
      message: "An error occured, Please try again later.",
      error,
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    if (!validateKeys(validationRefreshTokenKeys, req.body)) {
      return res.json({
        message: "An error occured, Please Try again later",
        error: "Required Fields not passed",
      });
    }

    const { refreshToken } = req.body;

    const decodedData = await jwtVerifyRefreshToken(refreshToken);

    if (jwtCheckExpiry(decodedData) === false) {
      return res.json({
        message: "Token is valid",
        error: "Refresh only expired tokens",
      });
    }

    const user = await User.findById(decodedData.userId);

    if (!user) {
      return res.json({
        message: "User does not exists",
        error: "Invalid token",
      });
    }

    if (user.refreshToken !== refreshToken) {
      return res.json({
        message: "Invalid Token",
        error: "Invalid token",
      });
    }

    const updatedUser = await jwtSign(user._id);

    return res.json(updatedUser);
  } catch (error) {
    console.error("Error in Refresh Token Handler: ", error);

    return res.json({
      message: "An error occured, please try again later.",
      error: error,
    });
  }
};

module.exports = { registerUser, login, refreshToken };
