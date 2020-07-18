/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Entity.........: User
 * ---------------------------------------------------------*/

const mongoose = require("../../config/database");
const bcrypt = require("bcryptjs");

const profile = require("./profileModel");

const UserModel = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  remember: {
    type: String,
  },
  profile: {
    type: profile.schema,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
  },
});

UserModel.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model("User", UserModel);

module.exports = User;
