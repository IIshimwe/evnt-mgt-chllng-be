import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

userSchema.methods.generateToken = function () {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_PRIVATE_KEY
  );
};

export const User = model("User", userSchema);
