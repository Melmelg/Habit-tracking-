const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");


router.post("/register", userController.createUser);
router.post("/login", userController.findByEmail);

module.exports = router;