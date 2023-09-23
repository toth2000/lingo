const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { TOKEN_CONFIG } = require("../config/auth");

dotenv.config();

const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_PRIVATE_KEY;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_PRIVATE_KEY;

const encryptPassword = async (password) => {
  const hash = await bcrypt.hash(password, TOKEN_CONFIG.token_salt_round);
  return hash;
};

const verifyPassword = async (password, hashPassword) => {
  const verified = await bcrypt.compare(password, hashPassword);
  return verified;
};

const jwtSign = async (userId) => {
  try {
    const refreshToken = jwt.sign({ userId: userId }, REFRESH_TOKEN_SECRET, {
      expiresIn: TOKEN_CONFIG.refresh_token_expire_time,
    });

    const accessToken = jwt.sign({ userId: userId }, ACCESS_TOKEN_SECRET, {
      expiresIn: TOKEN_CONFIG.access_token_expire_time,
    });

    const user = await User.findByIdAndUpdate(
      userId,
      { refreshToken: refreshToken },
      { new: true }
    );

    const { password, ...other } = user._doc;
    return { ...other, accessToken };
  } catch (error) {
    console.error("Error generating refreshToken: ", error);
    return error;
  }
};

module.exports = { encryptPassword, verifyPassword, jwtSign };
