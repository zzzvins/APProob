import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "../../components/DrawerComponents/Drawer";
import AppSubPage from "../../components/ApplicationComponents/AppSubPage";

const StudentViewPreviousApplication = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", router: "/dashboard" },
    { icon: "profile.png", title: "Profile", router: "/profile" },
    { icon: "appli.png", title: "Application", router: "/application" },
  ];

  const storedUser = localStorage.getItem("user");
  //const user = JSON.parse(storedUser);
  const isLoggedIn = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  

  // test variables

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

  const arraynull = [];

  
  let temp = storedUser.firstName.concat(" ", storedUser.middleName, " ", storedUser.lastName);

  const applications = [
    {
      remarks: remarkprev,
      repository: "https://www.youtube.com/",
      certificate: "assets/onboard.svg",
      status: "Cleared",
      step: 1,
      date: "11/29/1998",
      name: temp
    },
    {
      remarks: arraynull,
      repository: "https://www.youtube.com/",
      certificate: "assets/onboard.svg",
      status: "Cleared",
      step: 3,
      date: "01/01/01",
      name: temp
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

  //

  return (
    <div className="flex h-screen">
      <Drawer buttons={buttons} />
      <div className="flex-1 relative rounded-lg my-3 ml-4 mr-5 p-5">
        <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-3xl rounded-md p-2">
          {" "}
          Application - View All Remarks{" "}
        </h1>
        <div className="flex flex-row w-full p-6 justify-center">
          <button className="mt-6 h-10 bg-racing-green hover:bg-red-600 text-white rounded-lg px-4 py-2 mx-2">
            Back
          </button>
          <AppSubPage application={applications[0]} usertype="Student" />
        </div>
      </div>
    </div>
  );
};

export default StudentViewPreviousApplication;
