import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchApproverPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedApprover, setSelectedApprover] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/search-approver?name=${searchQuery}`
      );
      setSearchResults(response.data);
      setSelectedApprover(null); // Clear the selected approver when performing a new search
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
    setSelectedApprover(null); // Clear the selected approver when clearing the search
  };

  const handleViewApprover = (approver) => {
    setSelectedApprover(approver);
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-4">Search Approver</h1>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Clear
        </button>
      </div>
      <div>
        {searchResults.map((approver) => (
          <div
            key={approver._id}
            className="mb-4 p-4 border border-gray-300 rounded-md"
          >
            <p className="font-bold text-white">
              {approver.firstName} {approver.lastName}
            </p>
            <button
              onClick={() => handleViewApprover(approver)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
            >
              View Approver
            </button>
          </div>
        ))}
      </div>
      {selectedApprover && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-bold mb-2 text-white">
            Selected Approver: {selectedApprover.firstName}{" "}
            {selectedApprover.lastName}
          </h2>
          <p className="text-white">First Name: {selectedApprover.firstName}</p>
          <p className="text-white">Last Name: {selectedApprover.lastName}</p>
          <p className="text-white">Username: {selectedApprover.username}</p>
        </div>
      )}
      <button
        onClick={handleGoBack}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default SearchApproverPage;
