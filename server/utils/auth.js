const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { TOKEN_CONFIG } = require("../config/auth");
const { getAdminRights } = require("./admin");

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
    const adminRight = await getAdminRights(userId);

    const authData = { userId: userId };

    if (adminRight !== null) {
      authData["admin"] = true;
      authData["adminRight"] = adminRight;
    } else {
      authData["admin"] = false;
    }

    const refreshToken = jwt.sign(authData, REFRESH_TOKEN_SECRET, {
      expiresIn: TOKEN_CONFIG.refresh_token_expire_time,
    });

    const accessToken = jwt.sign(authData, ACCESS_TOKEN_SECRET, {
      expiresIn: TOKEN_CONFIG.access_token_expire_time,
    });

    const user = await User.findByIdAndUpdate(
      userId,
      { refreshToken: refreshToken },
      { new: true }
    );

    const { password, ...other } = user._doc;
    const response = { ...other, accessToken };

    return response;
  } catch (error) {
    console.error("Error generating refreshToken: ", error);
    return error;
  }
};

const jwtVerifyRefreshToken = (token) => {
  try {
    const decoded = jwt.decode(token, REFRESH_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    console.error("Error in jwtVerifyRefreshToken: ", error);
    return error;
  }
};

const jwtVerifyAccessToken = (token) => {
  try {
    const decoded = jwt.decode(token, ACCESS_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    console.error("Error in jwtVerifyAccessToken: ", error);
    return error;
  }
};

const jwtCheckExpiry = (decodedToken) => {
  try {
    if (Date.now() >= decodedToken.exp * 1000) {
      // Expired
      return true;
    } else {
      // Still Valid
      return false;
    }
  } catch (error) {}
};

const getHeaderToken = (req) => {
  try {
    const { token } = req.headers;
    const acessToken = token.split(" ")[1];
    return acessToken;
  } catch (error) {
    console.error("Header not provided", error);
    return null;
  }
};

module.exports = {
  encryptPassword,
  verifyPassword,
  jwtSign,
  jwtVerifyAccessToken,
  jwtVerifyRefreshToken,
  jwtCheckExpiry,
  getHeaderToken,
};
