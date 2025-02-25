import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card_HorizontalText from "../../components/Card_HorizontalText";
import Drawer from "../../components/DrawerComponents/Drawer";
import ProfilePage from "../ProfilePage";

const StudentDashboardPage = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/dashboard" },
    { icon: "profile.png", title: "Profile", route: "/profile" },
    { icon: "appli.png", title: "Application", route: "/application" },
  ];

  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  const [adviserName, setAdviserName] = useState(null);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchAdviserName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/get-student-by-studentId/${user.studentNumber}`
        );
        const student = response.data;
        const adviserId = student.adviser;

        if (adviserId) {
          const adviserResponse = await axios.get(
            `http://localhost:3001/get-adviser-by-id/${adviserId}`
          );
          const adviser = adviserResponse.data;
          const adviserFullName = `${adviser.firstName} ${adviser.lastName}`;
          setAdviserName(adviserFullName);
        } else {
          setAdviserName("None");
        }
      } catch (error) {
        console.error(error);
        // Handle error case
      }
    };

    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/find-application-by-id/${user.studentNumber}`
        );
        const applications = response.data;
        setApplications(applications);
      } catch (error) {
        console.error(error);
        // Handle error case
      }
    };

    if (user && user.studentNumber) {
      fetchAdviserName();
      fetchApplications();
    }
  }, [user]);

  const handleButtonClick = (route) => {
    if (route === "/application" && adviserName === "None") {
      alert("Please wait for an adviser to be assigned to you by the admin.");
      return; // Disable the button when there is no adviser
    }
    navigate(route);
  };

  if (!storedUser) return undefined;

  return (
    <div className="flex h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex-1 relative rounded-lg my-3 ml-4 mr-5 p-5">
        <h1 className="font-lexend-deca text-4xl text-slate-800 text-left  rounded-md">
          Dashboard
        </h1>

        <div
          className="flex-col border-racing-green border-solid border-2 relative rounded-lg my-5 mx-auto px-5 py-5"
          style={{ maxWidth: "50rem" }}
        >
          <div className="flex items-center">
            <img
              src="assets/sun_moon.png"
              alt="ARAW"
              className="w-17 h-20 mr-4"
            />
            <div>
              <h5 className="font-lexend-deca font-bold text-slate-800 text-left text-m rounded-md">
                Good Day!
              </h5>
              <h5 className="font-lexend-deca text-celadon text-2xl rounded-md">
                {user.firstName}
              </h5>
            </div>
          </div>
        </div>

        <hr
          className="border-racing-green border-solid border-1 my-4 mx-auto"
          style={{ maxWidth: "50rem" }}
        />

        <Card_HorizontalText
          leading="Application Status"
          {...console.log(applications)}
          trailing={applications.length > 0 ? "Open" : "No open application"}
        />
        <Card_HorizontalText
          leading="Adviser"
          trailing={adviserName || "None"}
        />

        <h2 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md mt-5">
          Your Applications
        </h2>
        <div>
          {applications.map((application) => (
            <div key={application.id} className="my-2">
              {/* Render application details */}
              {application.adviserName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
