const express = require("express");
const router = express.Router();
const UserController = require("../../controller/Auth/Auth.js");
const fetchUser = require("../../middleware/fetchuser.js");

router.post("/login", UserController.login);

router.post("/signup", UserController.SignUp);

router.get("/verify", fetchUser, UserController.getVerify);

module.exports = router;
