const express = require("express");
const {
  createAdmin,
  adminWritePermission,
  adminEditPermission,
  adminDeletePermission,
} = require("../controllers/admin");
const { verifyTokenMiddleware } = require("../middleware/auth");
const { verifyAdmin, verifyAdminWriteAccess } = require("../middleware/admin");

const router = express.Router();

router.post(
  "/",
  verifyTokenMiddleware,
  verifyAdmin,
  verifyAdminWriteAccess,
  createAdmin
);
router.post(
  "/write",
  verifyTokenMiddleware,
  verifyAdmin,
  verifyAdminWriteAccess,
  adminWritePermission
);
router.post(
  "/edit",
  verifyTokenMiddleware,
  verifyAdmin,
  verifyAdminWriteAccess,
  adminEditPermission
);
router.post(
  "/delete",
  verifyTokenMiddleware,
  verifyAdmin,
  verifyAdminWriteAccess,
  adminDeletePermission
);

module.exports = router;
