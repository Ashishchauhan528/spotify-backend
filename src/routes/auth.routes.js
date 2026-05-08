const userModel = require("../models/user.model");
const express  = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth.controller");

const router = express.Router();


// /api/auth/...
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;