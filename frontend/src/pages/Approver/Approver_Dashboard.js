import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Drawer from "../../components/DrawerComponents/Drawer";
import Card_HorizontalText from "../../components/Card_HorizontalText";

const ApproverDashboard = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/approver-dashboard" },
    { icon: "profile.png", title: "Profile", route: "/profile" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [openApplications, setOpenApplications] = useState([]);
  const [studentCount, setStudentCount] = useState([]);
  const [approverCount, setApproverCount] = useState([]);
  const [sortOption, setSortOption] = useState("studentNumber");
  const [remarks, setRemarks] = useState("");

  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  useEffect(() => {
    fetchStudentCount();
    fetchApproverCount();
    fetchOpenApplications();
  }, []);

  if (!storedUser) return undefined;

  const fetchApproverCount = async () => {
    try {
      const response = await axios.get("http://localhost:3001/list-approver");
      setApproverCount(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStudentCount = async () => {
    try {
      const response = await axios.get("http://localhost:3001/list-student");
      setStudentCount(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOpenApplications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/get-open-applications"
      );
      setOpenApplications(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    sortOpenApplications(event.target.value);
  };

  const sortOpenApplications = (option) => {
    const sortedApplications = [...openApplications];
    sortedApplications.sort((a, b) => {
      if (option === "studentNumber") {
        return a.createdBy.studentNumber.localeCompare(
          b.createdBy.studentNumber
        );
      } else if (option === "name") {
        const nameA = `${a.createdBy.firstName} ${a.createdBy.lastName}`;
        const nameB = `${b.createdBy.firstName} ${b.createdBy.lastName}`;
        return nameA.localeCompare(nameB);
      }
      return 0;
    });
    setOpenApplications(sortedApplications);
  };

  const handleApprove = async (applicationId) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/approve-application/${applicationId}`
      );
      // Handle successful approve action (e.g., show success message, update UI)
      console.log("Application approved:", response.data);
      fetchOpenApplications();
    } catch (error) {
      // Handle error in approve action (e.g., show error message)
      console.error("Failed to approve application:", error);
    }
  };

  const handleReject = async (applicationId) => {
    try {
      // Display the modal text box and get the remarks input
      const inputRemarks = window.prompt("Enter remarks for rejection:");
      if (inputRemarks !== null) {
        // If the user provided remarks, update the state
        setRemarks(inputRemarks);
        const response = await axios.put(
          `http://localhost:3001/return-application/${applicationId}`,
          { remarks: inputRemarks }
        );
        // Handle successful reject action (e.g., show success message, update UI)
        console.log("Application rejected:", response.data);
        fetchOpenApplications();
      }
    } catch (error) {
      // Handle error in reject action (e.g., show error message)
      console.error("Failed to reject application:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex-1 relative rounded-lg my-3 ml-4 mr-5 p-5">
        <h1 className="font-lexend-deca text-slate-800 text-left text-4xl rounded-md">
          Dashboard
        </h1>
        {/* Div for the first card contains the Good Day and Name */}
        <div
          className="flex-col border-racing-green border-solid border-2 relative rounded-lg my-5 mx-auto px-5 py-5"
          style={{ maxWidth: "50rem" }}
        >
          <div className="flex items-center">
            <img
              src="/assets/sun_moon.png"
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
          leading="Number of Students"
          trailing={studentCount.length}
        />
        <Card_HorizontalText
          leading="Number of Approvers"
          trailing={approverCount.length}
        />
        <Card_HorizontalText
          leading="No. of Open Applications"
          trailing={openApplications.length}
        />

        {openApplications.length > 0 && (
          <div>
            <div className="flex items-center">
              <h2 className="font-lexend-deca font-bold text-slate-800 text-left text-xl rounded-md mt-4 mr-2">
                Open Applications
              </h2>
              <div className="ml-2">
                <label htmlFor="sortOption" className="">
                  Sort by:
                </label>
                <select
                  id="sortOption"
                  value={sortOption}
                  onChange={handleSortOptionChange}
                  className="border-new-blue-dark text-racing-green font-semibold rounded-md py-1 px-2 ml-1"
                >
                  <option value="studentNumber">Student Number</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
            <ul className="mt-2">
              {openApplications.map((application) => (
                <li key={application._id} className="flex items-center">
                  <span className="mr-2">
                    [{application.createdBy.studentNumber}]{" "}
                    {application.createdBy.firstName}{" "}
                    {application.createdBy.lastName} |
                    {application.submission.date} |
                    {`${application.adviser.firstName} ${application.adviser.lastName}`}{" "}
                    |{`Step ${application.submission.stepSubmitted}`}
                  </span>
                  <button
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleApprove(application._id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() => handleReject(application._id)}
                  >
                    Reject
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApproverDashboard;
