const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNo: { type: Number, required: true, unique: true },
  landlineNo: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
