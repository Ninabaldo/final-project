const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  favourites:[{type: Schema.Types.ObjectId, ref: 'Color'}]
})

const User = model("User", userSchema);

module.exports = User;