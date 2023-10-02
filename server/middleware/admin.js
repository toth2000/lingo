const verifyAdmin = (req, res, next) => {
  try {
    const { user } = req;

    console.log("User: ", user);

    if (!user.admin) {
      res.status(400).json({
        message: "Access Denied",
        error: "Not an Admin",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Admin middleware error: ", error);
    res.status(500).json({
      message: "An error occured, please try again later.",
      error: error,
    });
  }
};

const verifyAdminWriteAccess = (req, res, next) => {
  try {
    const { write } = req.user.adminRight;

    if (write === false) {
      res.status(400).json({
        message: "Access Denied",
        error: "Write access not avaiable",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Admin middleware error: ", error);
    res.status(500).json({
      message: "An error occured, please try again later.",
      error: error,
    });
  }
};

const verifyAdminEditAccess = (req, res, next) => {
  try {
    const { edit } = req.user.adminRight;

    if (edit === false) {
      res.status(400).json({
        message: "Access Denied",
        error: "Edit access not avaiable",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Admin middleware error: ", error);
    res.status(500).json({
      message: "An error occured, please try again later.",
      error: error,
    });
  }
};

const verifyAdminDeleteAccess = (req, res, next) => {
  try {
    const { delete: del } = req.user.adminRight;

    if (del === false) {
      res.status(400).json({
        message: "Access Denied",
        error: "Delete access not avaiable",
      });
      return;
    }

    next();
  } catch (error) {
    console.error("Admin middleware error: ", error);
    res.status(500).json({
      message: "An error occured, please try again later.",
      error: error,
    });
  }
};

module.exports = {
  verifyAdmin,
  verifyAdminWriteAccess,
  verifyAdminEditAccess,
  verifyAdminDeleteAccess,
};
