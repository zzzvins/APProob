import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "../../components/DrawerComponents/Drawer";
import FullRemarks from "../../components/ApplicationComponents/FullRemarks";

const StudentViewRemarks = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", router: "/dashboard" },
    { icon: "profile.png", title: "Profile", router: "/profile" },
    { icon: "appli.png", title: "Application", router: "/application" },
  ];

  const remarkfull = [
    {
      date: "05/05/1998",
      step: "Clearance Officer",
      author: "Carl Angcana",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      date: "05/05/1818",
      step: "Clearance Officer",
      author: "Reg Recario",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      date: "05/05/1818",
      step: "Clearance Officer",
      author: "Reg Recario",
      remarks:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      date: "05/05/1818",
      step: "Clearance Officer",
      author: "Reg Recario",
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

  const storedUser = localStorage.getItem("user");
  //const user = JSON.parse(storedUser);
  const isLoggedIn = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex h-screen">
      <Drawer buttons={buttons} />
      <div className="flex-1 relative rounded-lg my-3 ml-4 mr-5 p-5">
        <h1 className="font-lexend-deca text-slate-800 text-left text-3xl rounded-md p-2">
          {" "}
          Application - View All Remarks{" "}
        </h1>
        <div className="flex flex-row w-full p-8 justify-center">
          <button className="mt-6 h-10 border-2 border-gray-200 text-slate-800 rounded-lg px-4 py-2 mx-2">
            Back
          </button>
          <FullRemarks remarkdata={remarkfull}></FullRemarks>
        </div>
      </div>
    </div>
  );
};

export default StudentViewRemarks;
