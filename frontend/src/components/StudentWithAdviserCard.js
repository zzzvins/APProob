import React, { useState, useEffect } from "react";
import axios from "axios";
import SquareButton from "./SquareButton";

export default function StudentWithAdviserCard(props) {
  const [selectedApprover, setSelectedApprover] = useState("");
  const [approvers, setApprovers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [adviserName, setAdviserName] = useState("None");

  useEffect(() => {
    fetchApprovers();

    if (props.adviser !== "None")
      setAdviserName(`${props.adviser.firstName} ${props.adviser.lastName}`);
  }, []);

  const fetchApprovers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/list-approver");
      setApprovers(response.data);
    } catch (error) {
      console.error(error);
      // Handle error while fetching approvers
    }
  };

  const handleApproverSelect = async (approver, approverName) => {
    setSelectedApprover(approverName);

    try {
      const response = await axios.put(
        `http://localhost:3001/edit-adviser/${props.studentId}`,
        {
          adviser: approver,
        }
      );

      if (response.status === 200) {
        console.log(
          `Adviser ${approver} assigned to student ${props.studentId}`
        );
        props.updateAdviser(props.studentId, approverName); // Update the student's adviser in the parent component

        setAdviserName(approverName);
      } else {
        console.log("Failed to assign adviser");
      }
    } catch (error) {
      console.error(error);
      // Handle error while assigning the adviser
    }

    // Close the dropdown after assigning the adviser
    setShowDropdown(false);
  };

  const handleCancel = () => {
    setSelectedApprover("");
    setShowDropdown(false);
  };

  const handleReset = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/edit-adviser/${props.studentId}`,
        {
          adviser: null,
        }
      );

      if (response.status === 200) {
        console.log(`Adviser cleared for student ${props.studentId}`);
        props.updateAdviser(props.studentId, ""); // Update the student's adviser in the parent component
      } else {
        console.log("Failed to clear adviser");
      }

      setAdviserName("None");
    } catch (error) {
      console.error(error);
      // Handle error while clearing the adviser
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col my-3">
      <div className="flex flex-row  bg-baby-powder border-gray-300 border-solid border-2 rounded-lg flex-grow justify-start">
        <div className="flex flex-row bg-new-blue rounded-lg items-center px-5 py-2 w-[50%]">
          <div className="mr-5">👨🏻‍🎓</div>
          <div className="flex flex-col font-lexend-deca justify-center">
            <div className="text-baby-powder font-bold text-cxl">
              {props.name}
            </div>
            <div className="text-slate-800 font-light text-lg">
              {props.studentNumber}
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-grow font-lexend-deca justify-between px-4 items-center">
          <div className="flex flex-col text-new-blue-dark justify-center">
            <div className="text-l font-bold">Adviser</div>
            <div className="font-light relative">
              <div className="inline-block pr-2">
                <span className="text-slate-800">{adviserName}</span>
                {/* {props.adviser === "None" ? (
                  <span className="text-white">None</span>
                ) : (
                  <span className="text-white">
                    {props.adviser.firstName} {props.adviser.lastName}
                  </span>
                )} */}
              </div>
              {showDropdown && (
                <div className="absolute top-full right-0 w-64 bg-white border-2 border-gray-border rounded-lg mt-2 z-50">
                  <div className="p-4">
                    <div className="text-xl font-bold mb-2">
                      Select an Approver
                    </div>
                    <ul>
                      {approvers.map((approver) => (
                        <li
                          key={approver._id}
                          onClick={() =>
                            handleApproverSelect(
                              approver._id,
                              `${approver.firstName} ${approver.lastName}`
                            )
                          }
                          className="cursor-pointer py-2 hover:bg-gray-100 px-2 rounded-md"
                        >
                          {approver.firstName + " " + approver.lastName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex">
            {showDropdown && (
              <>
                <SquareButton
                  icon="✓"
                  onClick={toggleDropdown}
                  isActive={true}
                />
                <SquareButton icon="❌" onClick={handleCancel} />
              </>
            )}
            {!showDropdown && (
              <SquareButton
                icon=">"
                onClick={toggleDropdown}
                isActive={false}
              />
            )}
            {props.adviser !== "" && (
              <SquareButton icon="Clear" onClick={handleReset} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
