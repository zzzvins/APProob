import React, { useState } from "react";
import SimpleTextBox from "../../components/SimpleTextBox";
import PasswordTextBox from "../../components/PasswordTextBox";
import Drawer from "../../components/DrawerComponents/Drawer";
import { useNavigate } from "react-router-dom";

const AssignAdviser = () => {
  let buttons = [
    { icon: "dashboard.png", title: "Dashboard" },
    { icon: "appli.png", title: "Application" },
    { icon: "student.png", title: "Student", route: "/view-all-students"},
    { icon: "approver.png", title: "Approver", route:  "/view-all-approver" },
  ];

  const [showComponent, setShowComponent] = useState(false); // State variable to track component visibility

  const handleAssignClick = () => {
    setShowComponent(true); // Show the component when clicked
  };

  const navigate = useNavigate();
  
  const handleButtonClick = (route) => {
    console.log(route);
    navigate(route);
  };

  return (
    <div className="flex h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex-1 border-racing-green border-solid border-2 relative rounded-lg my-3 ml-4 mr-5 p-5">
        <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md">
          Student {'>'} Assign Adviser
        </h1>

        <div className="flex flex-col border-racing-green border-solid border-2 relative rounded-lg my-3 p-3">
          <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-xl rounded-md p-1"> Assign an Adviser </h1>
          <div className="flex flex-col items-center justify-center mx-2">
            <div className="flex flex-col border-racing-green border-solid border-2 relative rounded-lg my-3 p-3 w-auto">
              <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-s rounded-md p-1">Name</h1>
              <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-s rounded-md p-1">Juan, Pablo bobo</h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FCFDF9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="40"
              height="50"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            <div className="flex flex-col border-racing-green border-solid border-2 relative rounded-lg my-3 p-3 w-auto">
              <h1 className="font-lexend-deca font-bold text-baby-powder text-left text-s rounded-md p-1">Adviser</h1>
              <SimpleTextBox placeholder={'Enter Adviser Email'} />
            </div>
          </div>

          {!showComponent ? (
            <div className="flex items-center justify-center">
              <button
                className="bg-[#215130] rounded-[38.5px] border-solid border-[#1b4228] border w-[137px] h-[26px] mt-4"
                onClick={handleAssignClick}
              >
                <div
                  className="text-[#fcfdf9] text-center flex items-center justify-center h-full"
                  style={{ font: "700 15px 'Lexend', sans-serif" }}
                >
                  Assign
                </div>
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-2 mt-12">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-celadon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-[#fcfdf9] font-semibold text-base text-center">Adviser Assigned to student.</h1>
        </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignAdviser;






