import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Drawer from "../../components/DrawerComponents/Drawer";
import Card_HorizontalText from "../../components/Card_HorizontalText";

const AdminDashboard = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/admin-dashboard" },
    { icon: "appli.png", title: "Application" },
    { icon: "student.png", title: "Student", route: "/view-all-students" },
    { icon: "approver.png", title: "Approver", route: "/view-all-approver" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [pendingAccounts, setPendingAccounts] = useState([]);
  const [studentCount, setStudentCount] = useState([]);
  const [approverCount, setApproverCount] = useState([]);
  const [sortOption, setSortOption] = useState("studentNumber");

  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser);

  useEffect(() => {
    fetchStudentCount();
    fetchApproverCount();
    fetchPendingAccounts();
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

  const fetchPendingAccounts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/list-pending-account"
      );
      setPendingAccounts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const handleApprove = async (accountId) => {
    try {
      await axios.put(`http://localhost:3001/approve-account/${accountId}`);
      alert("Account successfully verified!");
      // Update pending accounts list after approval
      fetchStudentCount();
      fetchPendingAccounts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (accountId) => {
    try {
      await axios.get(`http://localhost:3001/reject-account/${accountId}`);
      alert("Account rejected!");
      // Update pending accounts list after rejection
      fetchPendingAccounts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    sortPendingAccounts(event.target.value);
  };

  const sortPendingAccounts = (option) => {
    const sortedAccounts = [...pendingAccounts];
    sortedAccounts.sort((a, b) => {
      if (option === "studentNumber") {
        return a.studentNumber.localeCompare(b.studentNumber);
      } else if (option === "name") {
        const nameA = `${a.firstName} ${a.middleName} ${a.lastName}`;
        const nameB = `${b.firstName} ${b.middleName} ${b.lastName}`;
        return nameA.localeCompare(nameB);
      }
      return 0;
    });
    setPendingAccounts(sortedAccounts);
  };

  return (
    <div className="flex flex-wrap h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex-1 my-3 mx-4">
        <h1 className="font-lexend-deca text-slate-800 text-left text-4xl rounded-md p-6">
          Dashboard
        </h1>

        <div className="flex flex-row justify-between ml-3">
          <div className="w-1/2 pr-3">
            <div className=" border-solid border-2 relative rounded-lg drop-shadow-md bg-white my-7 mx-auto px-5 py-5">
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
            <hr/>

            <Card_HorizontalText
              leading="Number of Students"
              trailing={studentCount.length}
            />
            <Card_HorizontalText
              leading="Number of Approvers"
              trailing={approverCount.length}
            />
            <Card_HorizontalText
              leading="No. of Pending Accounts"
              trailing={pendingAccounts.length}
            />
          </div>

          <div className="w-1/2 pl-3">
            <div className="flex flex-col">
              <h1 className="font-lexend-deca  text-slate-800 text-left text-xl rounded-md  mt-6 mb-3">
                Pending Accounts
              </h1>
              {pendingAccounts.length > 0 && (
                <div>
                  <div className="flex items-center mb-3">
                    <div>
                      <label
                        htmlFor="sortOption"
                        className="text-new-blue font-lexend-deca mr-auto"
                      >
                        Sort by:
                      </label>
                      <select
                        id="sortOption"
                        value={sortOption}
                        onChange={handleSortOptionChange}
                        className="bg-baby-powder text-new-blue-dark border-[1px] font-semibold rounded-md py-1 ml-3"
                      >
                        <option value="studentNumber">Student Number</option>
                        <option value="name">Name</option>
                      </select>
                    </div>
                  </div>
                  <ul
                    className="mt-2"
                    style={{ maxHeight: "20rem", overflowY: "auto" }}
                  >
                    {pendingAccounts.map((account, index) => (
                      <li key={account._id}>
                        <div
                          className={`bg-amber-400 drop-shadow-md transition-all font-lexend-deca rounded-lg p-4 mb-2 mr-3${
                            index !== pendingAccounts.length - 1 ? "mb-4" : ""
                          }`}
                        >
                          <div className="flex items-center text-white">
                            <span className="mr-2 text-lg">
                              <span className="text-slate-800">
                                [{account.studentNumber}]
                              </span>{" "}
                              {account.firstName} {account.lastName}
                            </span>
                            <div className="ml-auto flex">
                              <button
                                className="bg-green-500 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onClick={() => handleApprove(account._id)}
                              >
                                Approve
                              </button>
                              <button
                                className="bg-red-500 text-white font-semibold py-2 px-4 rounded ml-2 transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                onClick={() => handleReject(account._id)}
                              >
                                Reject
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
