import dotenv from "dotenv";
import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Load environment variables from .env file
dotenv.config();

// Assign the secret key with fallback value
export const secretKey = process.env.SALT || "DEFAULT_SECRET_KEY";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  middleName: String,
  studentNumber: String,
  username: {
    type: String,
  },
  application: Types.ObjectId,
  adviser: Types.ObjectId,
  clearanceOfficer: {
    type: Boolean,
  },
  verified: Boolean,
  name: String,
});

UserSchema.pre("save", async function () {
  // hash password during creation
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.createJWT = function () {
  return jwt.sign({ id: this._id, userType: this.userType }, secretKey, {
    expiresIn: "1w",
  });
};

export default model("user", UserSchema);
