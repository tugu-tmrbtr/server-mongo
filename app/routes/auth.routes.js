const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  updateRole,
  handleRefreshToken,
  logout,
  updatePassword,
  loginAdmin,
} = require("../controllers/user.controller");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);

router.get("/all-users", getAllUser);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

router.put("/password", authMiddleware, updatePassword);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/edit-role/:id", authMiddleware, isAdmin, updateRole);

router.delete("/:id", deleteUser);

module.exports = router;
