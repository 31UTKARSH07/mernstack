const UserModel = require("../models/user");
const express = require("express");
const {creacreateUserteProduct,getUser,updateUser,deleteUser} = require('../controllers/userControllers')


const router = express.Router();

router.post("/",createUser);
router.get("/", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
