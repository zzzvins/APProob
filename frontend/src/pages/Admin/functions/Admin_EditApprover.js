import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../../../components/DrawerComponents/Drawer";
import axios from "axios";

const EditApproverPage = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/admin-dashboard" },
    { icon: "appli.png", title: "Application" },
    { icon: "student.png", title: "Student", route: "/view-all-students" },
    { icon: "approver.png", title: "Approver", route: "/view-all-approver" },
  ];

  const navigate = useNavigate();
  const [approvers, setApprovers] = useState([]);
  const [selectedApprover, setSelectedApprover] = useState(null);
  const [approverDetails, setApproverDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    password: "",
  });

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

  const handleApproverSelection = (approver) => {
    setSelectedApprover(approver);
    setApproverDetails({
      firstName: approver.firstName,
      middleName: approver.middleName,
      lastName: approver.lastName,
      password: approver.password,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApproverDetails((prevApproverDetails) => ({
      ...prevApproverDetails,
      [name]: value,
    }));
  };

  const resetFields = () => {
    setApproverDetails({
      firstName: "",
      middleName: "",
      lastName: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/edit-approver/${selectedApprover._id}`,
        approverDetails
      );

      if (response.status === 200) {
        // Successful update of the approver
        alert("Approver details updated successfully");
        resetFields(); // Reset the form fields
        navigate("/add-approver"); // Navigate back to the list of approvers
      } else {
        // Error updating the approver
        alert("Failed to update approver");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update approver");
    }
  };

  const handleClear = () => {
    resetFields();
  };

  return (
    <div className="flex flex-row h-screen">
  <Drawer buttons={buttons} onButtonClick={handleButtonClick} />

  <div className="flex items-center justify-center w-full">
    <div className="relative">
      <div className="bg-white rounded-lg border-solid border-gray-200 border-[1px] relative flex drop-shadow-xl flex-col gap-4 items-center p-8">
        <h4 className="font-lexend-deca font-bold text-new-blue text-xl rounded-md p-1">
          Edit Approver
        </h4>
        <hr className="h-px my-1 bg-baby-powder border-0" />

        <div className="flex flex-col text-slate-800 items-center justify-center mx-2">
          <label htmlFor="approverName" className="text-xl">
            Select Approver:
          </label>

          <select
            name="approverName"
            id="approverName"
            className="w-full border-solid border-2 bg-white border-new-blue-dark text-m font-bold my-2 px-4 py-2 rounded-xl text-new-blue-dark"
            value={selectedApprover ? selectedApprover._id : ""}
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedApprover = approvers.find(
                (approver) => approver._id === selectedId
              );
              handleApproverSelection(selectedApprover);
            }}
          >
            <option value="" disabled>
              Select an Approver
            </option>

            {approvers.map((approver) => (
              <option key={approver._id} value={approver._id}>
                {approver.username}
              </option>
            ))}
          </select>
        </div>

        {selectedApprover && (
          <form className="flex flex-col font-lexend-deca" onSubmit={handleSubmit}>
            <div className="flex flex-col text-slate-800 items-center justify-center mx-2 my-2">
              <label htmlFor="firstName" className="text-l">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                value={approverDetails.firstName}
                onChange={handleChange}
                required
                className="bg-white border-new-blue-dark text-slate-800 border border-solid rounded-xl px-2 py-1 w-full"
              />
            </div>

            <div className="flex flex-col text-soate-800 items-center justify-center mx-2 my-2">
              <label htmlFor="middleName" className="text-l">
                Middle Name:
              </label>
              <input
                type="text"
                name="middleName"
                value={approverDetails.middleName}
                onChange={handleChange}
                className="bg-white border-new-blue-dark text-slate-800 border border-solid rounded-xl px-2 py-1 w-full"
              />
            </div>

            <div className="flex flex-col text-slate-800 items-center justify-center mx-2">
              <label htmlFor="lastName" className="text-l">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                value={approverDetails.lastName}
                onChange={handleChange}
                required
                className="bg-white border-new-blue-dark text-slate-800 border border-solid rounded-xl px-2 py-1 w-full"
              />
            </div>

            <div className="flex flex-col text-slate-800 items-center justify-center mx-2 my-2">
              <label htmlFor="password" className="text-l">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={approverDetails.password}
                onChange={handleChange}
                required
                className="bg-white border-new-blue-dark text-slate-800 border border-solid rounded-xl px-2 py-1 w-full"
              />
            </div>

            <hr className="h-px my-1 bg-baby-powder border-0" />

            <div className="flex flex-col text-baby-powder items-center justify-center mx-2">
              <button
                type="submit"
                className="w-full transition-all bg-new-blue hover:bg-new-blue-light hover:drop-shadow-md text-m font-bold m-2 px-3 py-1 rounded-xl cursor-pointer "
              >
                Update Approver
              </button>
              <button
                type="button"
                className="w-full transition-all bg-new-blue hover:bg-new-blue-light hover:drop-shadow-md text-m font-bold m-2 px-3 py-1 rounded-xl cursor-pointer"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </form>
        )}

        <button
          className="font-lexend-deca bg-white border-gray-200 border-solid border-2 hover:drop-shadow-lg focus:bg-gray-400 transition-all text-black font-bold py-2 px-14 rounded-full"
          onClick={() => navigate("/view-all-approver")}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default EditApproverPage;
