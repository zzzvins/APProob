import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Drawer from "../../components/DrawerComponents/Drawer";

const StudentApplicationHome = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/dashboard" },
    { icon: "profile.png", title: "Profile", route: "/profile" },
    { icon: "appli.png", title: "Application", route: "/application" },
  ];

  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);


  const [repoLink, setRepoLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const handleSubmit = async () => {
    if (!repoLink) {
      alert("Github link required!");
      return;
    }
    try {
      alert("Success adding application!");
      const data = {
        studentNumber: user.studentNumber,
        link: repoLink,
      };


      await axios.post("http://localhost:3001/submit-application", data);

      setRepoLink("");
      // Handle the successful submission, such as showing a success message or updating the UI
    } catch (error) {
      console.error(error);
      // Handle errors if necessary
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex flex-col w-full h-fit relative rounded-lg my-3 p-5 ">
        <h1 className="font-lexend-deca  text-slate-800 text-left text-3xl rounded-md p-2">
          Application
        </h1>
        <div className="flex flex-row w-full p-8">
          <div className="flex flex-col items-center justify-center mx-2">
            <input
              type="text"
              value={repoLink}
              onChange={(e) => setRepoLink(e.target.value)}
              autoComplete="off"
              className="w-full border-2 bg-white border-new-blue text-slate-800 text-sm font-semibold m-2 px-2 py-1 rounded-xl"
              placeholder="Enter GitHub link"
            />
            <button
              className="w-full border-2 bg-new-blue border-new-blue-dark rounded-lg  focus:outline-none hover:bg-new-blue-light focus:drop-shadow-md font-lexend-deca text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentApplicationHome;
