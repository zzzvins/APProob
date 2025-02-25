import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleStudentNumberChange = (e) => {
    setStudentNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform signup logic here
    // You can use the form field values to make an API call or register the user

    // Form validation
    if (!firstName || !lastName || !studentNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    axios
      .post("http://localhost:3001/signup", {
        firstName,
        middleName,
        lastName,
        studentNumber,
        email,
        password,
        verified: false,
      })
      .then((response) => {
        if (response.data.success) {
          alert("Successfully signed up!");
        } else {
          alert("Sign up failed");
        }
      })
      .catch((error) => {
        console.error("Sign up error:", error);
      });

    // Reset the form
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setStudentNumber("");
    setEmail("");
    setPassword("");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen font-lexend-deca">
      <div className="flex flex-col justify-center bg-white border-gray-200 drop-shadow-lg border-2 border-solid rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-new-blue">Tell us about yourself.</h2>
        <h4 className="text-s font-light mb-6 text-center text-new-blue">All fields are required.</h4>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-black">
              First Name:
            </label>
            <input
              type="text"
              id="s-firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="font-light border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="middleName" className="block text-black">
              Middle Name:
            </label>
            <input
              type="text"
              id="s-middleName"
              value={middleName}
              onChange={handleMiddleNameChange}
              className="font-light border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-black">
              Last Name:
            </label>
            <input
              type="text"
              id="s-lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className="font-light border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="studentNumber" className="block text-black">
              Student Number:
            </label>
            <input
              type="text"
              id="s-studentNumber"
              value={studentNumber}
              onChange={handleStudentNumberChange}
              className="font-light border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">
              Email:
            </label>
            <input
              type="email"
              id="s-email"
              value={email}
              onChange={handleEmailChange}
              className="font-light border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black">
              Password:
            </label>
            <input
              type="password"
              id="s-password"
              value={password}
              onChange={handlePasswordChange}
              className="font-light border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 "
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-new-blue hover:bg-new-blue-light border-solid  text-baby-powder rounded-full px-4 py-2 focus:outline-none focus:ring-2"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleGoBack}
              className=" bg-white border-gray-200 border-solid border-2  hover:drop-shadow-lg focus:bg-gray-400 text-black py-2 px-4 rounded-full focus:outline-none focus:ring-2 "
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
