import Drawer from "../../components/DrawerComponents/Drawer";
import Card_HorizontalText from "../../components/Card_HorizontalText";
import SquareButton from "../../components/SquareButton";
import StudentWithAdviserCard from "../../components/StudentWithAdviserCard";
import ApproverCard from "../../components/ApproverCard";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListOfApprovers() {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/admin-dashboard" },
    { icon: "appli.png", title: "Application" },
    { icon: "student.png", title: "Student", route: "/view-all-students" },
    { icon: "approver.png", title: "Approver", route: "/view-all-approver" },
  ];

  const [approvers, setApprovers] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchApprovers();
  }, []);

  const fetchApprovers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/list-approver");
      setApprovers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const sortApprovers = () => {
    const sortedApprovers = [...approvers].sort((a, b) => {
      if (sortOrder === "ascending") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });

    setApprovers(sortedApprovers);
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleButtonClick = (route) => {
    console.log(route);
    navigate(route);
  };

  const handleDeleteApprover = async (approverId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/deleteApprover/${approverId}`
      );

      if (response.status === 200) {
        // Successful deletion of the approver
        alert("Approver deleted successfully");
        fetchApprovers(); // Fetch updated list of approvers
      } else {
        // Error deleting the approver
        alert("Failed to delete approver");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete approver");
    }
  };

  const filteredApprovers = approvers.filter((approver) => {
    const fullName = approver.firstName + " " + approver.lastName;
    return fullName.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="flex flex-row h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex flex-col rounded-lg flex-grow my-3 ml-3 p-6">
        <div className="font-lexend-deca text-slate-800 text-4xl ">
          Approver
        </div>
        <div className="mx-24 overflow-hidden">
          <div className="flex flex-row justify-around">
            <div className="flex flex-grow">
              <Card_HorizontalText
                leading="All Approvers"
                trailing={approvers.length}
              />
            </div>
            <Link to={"/add-approver"}>
              <div className="flex ml-4">
                <Card_HorizontalText leading="Add an Approver" trailing="" />
              </div>
            </Link>
          </div>
          <hr />
          <div className="flex flex-col">
            <div className="flex flex-row my-5 flex-grow items-center">
              <input
                className="w-full h-full px-4 py-2 text-lg border-2 bg-white border-new-blue-dark rounded-lg text-slate-800 focus:outline-none focus:border-new-blue-light focus:drop-shadow-md font-lexend-deca font-light"
                type="text"
                placeholder="Search Approver"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <SquareButton icon={"🔍"} />
              <SquareButton icon={"🎚️"} onClick={sortApprovers} />
              <Link
                to="/edit-approver"
                className="font-lexend-deca my-4 bg-new-blue hover:bg-new-blue-light transition-all hover:drop-shadow-md text-white ml-4 font-bold py-2 px-8 rounded-full"
              >
                Edit
              </Link>
            </div>
          </div>

          <div className="h-[70%] overflow-auto px-12">
            {filteredApprovers.map((approver, index) => (
              <div className="flex flex-row" key={index}>
                <ApproverCard
                  name={approver.firstName + " " + approver.lastName}
                  email={approver.email}
                />
                <button
                  className="font-lexend-deca my-2 bg-new-blue hover:bg-new-blue-light transition-all hover:drop-shadow-md text-white ml-4 font-bold py-2 px-4 rounded-full"
                  onClick={() => handleDeleteApprover(approver._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
