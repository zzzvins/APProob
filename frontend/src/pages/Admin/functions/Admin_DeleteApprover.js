import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../../../components/DrawerComponents/Drawer";
import axios from "axios";

const DeleteApproverPage = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/admin-dashboard" },
    { icon: "appli.png", title: "Application" },
    { icon: "student.png", title: "Student", route: "/view-all-students" },
    { icon: "approver.png", title: "Approver", route: "/add-approver" },
  ];

  const navigate = useNavigate();
  const [approvers, setApprovers] = useState([]);

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

  return (
    <div className="flex flex-row h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex items-center justify-center w-full">
        <div className="relative">
          <div className="bg-[#1a1c19] rounded-[11px] border-solid border-[#343832] border-2 relative flex flex-col gap-4 items-center">
            <div className="flex flex-col border-racing-green border-solid border-2 relative rounded-lg my-3 p-3">
              <h4 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md p-1">
                Delete an Approver?
              </h4>
              <hr className="h-px my-1 bg-baby-powder border-0" />

              {approvers.map((approver) => (
                <div
                  key={approver._id}
                  className="flex flex-col text-baby-powder items-center justify-center mx-2"
                >
                  <h2 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md p-1">
                    Name
                  </h2>
                  <p>{approver.username}</p>
                  <button
                    className="w-full border-solid border-2 bg-red-flag border-red-700 text-m font-bold m-2 px-2 rounded-xl cursor-pointer hover:bg-red-700"
                    onClick={() => handleDeleteApprover(approver._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}

              <hr className="h-px my-1 bg-baby-powder border-0" />
              <div className="flex flex-col text-baby-powder items-center justify-center mx-2">
                <button
                  className="w-full border-solid border-2 bg-eerie-black border-racing-green text-m font-bold m-2 px-2 rounded-xl cursor-pointer hover:bg-[#344338]"
                  onClick={() => navigate("/add-approver")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteApproverPage;
