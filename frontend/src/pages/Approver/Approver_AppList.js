import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TotalPending from "../../components/AppListComponents/TotalPending";
import SearchBar from "../../components/AppListComponents/SearchBar";
import PendingList from "../../components/AppListComponents/PendingList";
import FilterApps from "../../components/AppListComponents/FilterApps";
import Drawer from "../../components/DrawerComponents/Drawer";
import ApproveAction from "../../components/ApproveAction";

const ApproverAppList = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/approver-dashboard" },
    { icon: "profile.png", title: "Profile", route: "/profile"},
    { icon: "approver.png", title: "Approver", route: "/add-approver" },
  ];


  const dummy = [
    {name: "aaaa", studno: "2021-00000", date: "03/04/23", status:"Pending", step: "Adviser"},
    {name: "bbbb", studno: "2021-01000", date: "06/04/23", status:"Cleared", step: "Clearance"}
  ]

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
    <div className="flex h-full">
      <Drawer buttons={buttons} />
      <div className="flex-1 border-racing-green border-solid border-2 relative rounded-lg my-3 ml-4 mr-5 p-5">
        <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-3xl rounded-md">
          Pending Applications
        </h1>
        
        <TotalPending count="4"/>
        
        <hr className="h-px my-1 bg-racing-green border-0"/>
        <SearchBar/>
        <FilterApps/>

        <PendingList pendingapps={dummy}></PendingList>

      </div>
    </div>
  );
};

export default ApproverAppList;
