import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewAllApprovers = () => {
  const [approvers, setApprovers] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">View All Approvers</h1>
        <button
          onClick={sortApprovers}
          className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2"
        >
          Sort Approvers by Name ({sortOrder})
        </button>
        <ul className="mt-4">
          {approvers.map((approver) => (
            <li key={approver._id} className="mb-2">
              <span className="font-bold">
                {approver.firstName} {approver.lastName}
              </span>{" "}
              | Email: {approver.email}
            </li>
          ))}
        </ul>
        <button
          onClick={goBack}
          className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 mt-4"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ViewAllApprovers;
