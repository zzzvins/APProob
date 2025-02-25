import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { secretKey } from "../models/User.js";

// Get user model registered in Mongoose
const User = mongoose.model("user");

const signUp = async (req, res) => {
  try {
    const newuser = new User({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      studentNumber: req.body.studentNumber,
      email: req.body.email,
      password: req.body.password,
      adviser: req.body.adviser,
      userType: "student",
      verified: false,
    });

    const result = await newuser.save();

    result.createJWT();

    if (result._id) {
      return res.send({ success: true });
    } else {
      return res.send({ success: false });
    }
  } catch (err) {
    console.log(err);
  }
};

// just go localhost:3001/createAdmin
export const createAdmin = async (req, res) => {
  const admin = new User({
    firstName: "Admin",
    lastName: "Admin",
    email: "admin@up.edu.ph",
    password: "Admin123",
    userType: "admin",
    verified: true,
  });

  await admin.save();

  return res.sendStatus(204);
};

export const createApprover = async (req, res) => {
  const { firstName, lastName, middleName, username, password, email } =
    req.body;


  const approver = new User({
    firstName,
    middleName,
    lastName,
    username,
    email,
    password,
    userType: "approver",
    verified: true,
  });

  try {
    await approver.save();
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

const login = async (req, res) => {
  const email = req.body.email.trim();
  const password = req.body.password;

  // Check if email exists
  const user = await User.findOne({ email });

  // Scenario 1: FAIL - User doesn't exist
  if (!user) {
    return res.send({ success: false });
  }

  // Scenario 2: FAIL - Account not verified
  if (!user.verified) {
    return res.send({ success: false, message: "Account Not Yet Verified" });
  }

  try {
    // Check if password is correct using the Schema method defined in User Schema
    const isMatch = await user.correctPassword(password);

    if (!isMatch) {
      // Scenario 3: FAIL - Wrong password
      return res.send({ success: false });
    }

    // Scenario 4: SUCCESS - time to create a token
    const token = user.createJWT();

    // Return the token and user details to the client
    return res.send({
      success: true,
      token,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      studentNumber: user.studentNumber,
      email: user.email,
      userType: user.userType,
    });
  } catch (err) {
    // Handle error
    console.error(err);
    return res.status(500).send({ success: false });
  }
};

const checkIfLoggedIn = async (req, res) => {
  if (!req.cookies || !req.cookies.authToken) {
    // FAIL Scenario 1 - No cookies / no authToken cookie sent
    return res.send({ isLoggedIn: false });
  }

  try {
    // Try to verify the token
    const token = req.cookies.authToken;
    const tokenPayload = jwt.verify(token, secretKey);

    // Check if the _id in the payload is an existing user id
    const user = await User.findById(tokenPayload.id);

    if (user) {
      // SUCCESS Scenario - User is found
      return res.send({ isLoggedIn: true });
    } else {
      // FAIL Scenario 2 - Token is valid but user id not found
      return res.send({ isLoggedIn: false });
    }
  } catch (error) {
    // FAIL Scenario 3 - Error in validating token / Token is not valid
    console.error(error);
    return res.send({ isLoggedIn: false });
  }
};

export { signUp, login, checkIfLoggedIn };
