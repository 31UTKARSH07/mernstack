const { text } = require("express");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: text,
    required: true,
  },
  phone: {
    type: Number,
  },
});

let UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;