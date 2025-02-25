import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";

import Drawer from "../components/DrawerComponents/Drawer";
import NameCard from "../components/Name";
import ProfileCard from "../components/ProfileCards";

const ProfilePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!storedUser) return undefined;

  const handleButtonClick = (route) => {
    console.log(route);
    navigate(route);
  };

  let buttons = [];
  let idType = "";
  let idNo = "";

  if (user.userType === "student") {
    idType = "Student no.";
    idNo = user.studentNumber;
  }

  console.log(user.userType);

  if (user.userType === "student") {
    buttons = [
      { icon: "dashboard.png", title: "Dashboard", route: "/dashboard" },
      { icon: "profile.png", title: "Profile", route: "/profile" },
      { icon: "appli.png", title: "Application", route: "/application" },
    ];
  } else if (user.userType === "approver") {
    buttons = [
      { icon: "dashboard.png", title: "Dashboard" , route: "/approver-dashboard"  },
      { icon: "profile.png", title: "Profile" , route: "/profile"  },
    ];
  }

  // const username = localStorage.getItem("username");
  // const studentNumber = localStorage.getItem("studentNumber");

  return (
    <div className="flex h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 relative rounded-lg my-3 ml-4 mr-5 p-5">
          <h1 className="font-lexend-deca text-slate-800 text-left text-3xl rounded-md p-2">
            Profile
          </h1>

          <div className="flex-col bg-new-blue border-new-blue-dark text-white border-solid border-2 relative rounded-lg mb-3 mt-3 mr-auto px-5 py-3">
            <div className="flex items-center">
              <InformationCircleIcon className="w-8 h-10 mr-5" />
              <h5 className="font-lexend-deca font-bold rounded-md">
                User Information
              </h5>
            </div>
          </div>

          <NameCard
            userType={user.userType.toUpperCase()}
            name={user.firstName + " " + user.middleName + " " + user.lastName}
          />
          {user.userType === "student" ? (
            <ProfileCard header={idType} context={idNo} />
          ) : (
            <div></div>
          )}
          <ProfileCard header={"Email"} context={user.email} />

          {/* if student stud no. if iba emp no. */}
          {/* <ProfileCard header={props.infoType} context={props.info} />{" "} */}
          {/* info type is kapag student adviser pero kapag admin or approver dapat homeunit */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
