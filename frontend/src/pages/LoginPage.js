import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const cookies = new Cookies();
    const authToken = cookies.get("authToken");

    if (authToken) {
      navigate("/dashboard"); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here

    // Form validation goes here

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((body) => {
        if (body.success) {
          // Successful log in. Store the token as a cookie
          const cookies = new Cookies();
          cookies.set("authToken", body.token, {
            path: "/",
            maxAge: 60 * 60, // Expires in 1 hour
            sameSite: false,
          });

          localStorage.setItem("user", JSON.stringify(body));
          if (body.userType === "admin") {
            navigate("/admin-dashboard");
          } else if(body.userType === "student") {
            navigate("/dashboard"); // Redirect to dashboard after successful login
          } else{
            navigate("/approver-dashboard")
          }
        } else if (!body.verified) {
          alert("Account Not Yet Verified");
          return null;
        } else {
          alert("Log in failed");
          navigate("/");
        }
      });

    // Reset the form
    setEmail("");
    setPassword("");
  };

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the homepage
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="drop-shadow-lg border-solid border-[1px] bg-white border-gray-200 rounded-lg  p-8 w-full max-w-sm">
        <h2 className="font-lexend-deca text-new-blue text-2xl font-bold mb-6 text-center">APProob 👍 {">"} Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 font-lexend-deca">
            <label htmlFor="email" className="block text-black">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="font-light text-slate-800 border border-gray-300 rounded-full px-3 py-2 w-full focus:outline-none focus:ring-2"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4 font-lexend-deca">
            <label htmlFor="password" className="block text-black">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="font-light text-eerie-black border border-gray-300 rounded-full px-3 py-2 w-full focus:outline-none focus:ring-2"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-between font-lexend-deca">
            <button
              type="submit"
              className=" bg-new-blue hover:bg-new-blue-light border-solid  text-baby-powder rounded-full px-4 py-2 focus:outline-none focus:ring-2"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleGoBack}
              className="hover:drop-shadow-lg focus:bg-gray-400 bg-white border-gray-200 text-black py-2 px-4 rounded-full border-2"
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
