import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "../components/Drawer";

import AppSubPage from "../components/AppSubPage";
import ApplicationHistory from "../components/ApplicationHistory";

const DashboardPage = () => {
  const buttons = [
    { icon: "logo192.png", title: "User" },
    { icon: "logo192.png", title: "Hello" },
    { icon: "logo192.png", title: "react" },
    { icon: "logo192.png", title: "reactasdfadfasd" },
  ];

  const remarkprev = [
    {
      date: "05/05/1998",
      step: "Clearance Officer",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      date: "05/05/1818",
      step: "Clearance Officer",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ];

  const appstatus = [
    {
      icon: "logo192.png",
      date: "05/05/1998",
      step: "Adviser",
      currentstatus: "Open",
    },
    {
      icon: "logo192.png",
      date: "05/05/1818",
      step: "Adviser",
      currentstatus: "Closed",
    },
  ];

  const cookies = new Cookies();
  const username = localStorage.getItem("username");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const logout = () => {
    cookies.remove("authToken");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    // <div className="container mx-auto">
    //   <div className="py-10">
    //     <h2 className="text-2xl font-bold mb-6">Dashboard Page</h2>
    //     {/* Dashboard content */}
    //     <div className="bg-white rounded-lg shadow-lg p-8">
    //       Welcome to the dashboard, {username}!
    //     </div>
    //     <button
    //       onClick={logout}
    //       className="mt-6 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
    //     >
    //       Log Out
    //     </button>
    //   </div>
    // </div>
    <div className="flex flex-row h-screen">
      <Drawer buttons={buttons} />
      <div className="flex flex-col flex-grow justify-center items-center font-lexend-deca text-baby-powder text-center">
        <div>
          <img
            className="h-52 mb-14"
            src="assets/onboard.svg"
            alt="ship"
            draggable="false"
          />
        </div>
        <div className="text-5xl font-bold">
          <span className="text-celadon">Hang on!</span> We're getting you
          onboard.
        </div>
        <div className="font-light my-4">
          <p>
            Please wait for an admin to assign you an adviser. Once an adviser
            is assigned, you can proceed with your clearance application.
          </p>
        </div>
        <button
          onClick={logout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Log Out
        </button>

        <div className="flex flex-row w-full p-32">
          <AppSubPage
            remarks={remarkprev}
            repository="https://github.com/"
            certificate="assets/onboard.svg"
            status="Cleared"
            step="Clearance Officer"
          />
          <ApplicationHistory appstatuslist={appstatus} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
