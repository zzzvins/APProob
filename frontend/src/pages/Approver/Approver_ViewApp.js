import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "../../components/DrawerComponents/Drawer";
import AppSubPage from "../../components/ApplicationComponents/AppSubPage";
import ApproveAction from "../../components/ApproveAction";

const ApproverViewApp = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/approver-dashboard" },
    { icon: "profile.png", title: "Profile", route: "/profile"},
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

  const applications = [
    {
      remarks: remarkprev,
      repository: "https://www.youtube.com/",
      certificate: "assets/onboard.svg",
      status: "Cleared",
      step: 1,
      date: "11/29/1998",
      name: "temp"
    },
    {
      remarks: arraynull,
      repository: "https://www.youtube.com/",
      certificate: "assets/onboard.svg",
      status: "Cleared",
      step: 3,
      date: "01/01/01",
      name: "temp"
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
    <Drawer buttons={buttons}/>
    <div className="flex-1 relative rounded-lg my-3 ml-4 mr-5 p-5">
      <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-3xl rounded-md p-2"> Application </h1>  
      <div className="flex flex-row w-full p-6">
        <AppSubPage application={applications[0]} usertype="Approver"/>
        <ApproveAction/>
      </div>
      
    </div>
  </div>
  );
};

export default ApproverViewApp;
