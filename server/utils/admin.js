const Admin = require("../models/Admin");

const getAdminRights = async (userId) => {
  try {
    const data = await Admin.findById(userId);

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error in getAdminRights util: ", error);
    return null;
  }
};

module.exports = { getAdminRights };
