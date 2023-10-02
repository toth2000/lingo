const express = require("express");
const {
  createAdmin,
  adminWritePermission,
  adminEditPermission,
  adminDeletePermission,
} = require("../controllers/admin");

const router = express.Router();

router.post("/", createAdmin);
router.post("/write", adminWritePermission);
router.post("/edit", adminEditPermission);
router.post("/delete", adminDeletePermission);

module.exports = router;
