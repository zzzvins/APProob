import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SimpleTextBox from "../../components/SimpleTextBox";
import PasswordTextBox from "../../components/PasswordTextBox";
import Drawer from "../../components/DrawerComponents/Drawer";
import axios from "axios";

const AddApproverPage = () => {
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/admin-dashboard" },
    { icon: "appli.png", title: "Application" },
    { icon: "student.png", title: "Student", route: "/view-all-students" },
    { icon: "approver.png", title: "Approver", route: "/view-all-approver" },
  ];

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entranceOfficer, setEntranceOfficer] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation
    if (!firstName || !lastName || !username || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/createApprover",
        {
          firstName,
          middleName,
          lastName,
          username,
          email,
          password,
          userType: "approver",
          clearanceOfficer: entranceOfficer,
        }
      );

      if (response.status === 204) {
        // Successful creation of the approver
        alert("Approver created successfully");
        // Reset the form
        setFirstName("");
        setMiddleName("");
        setLastName("");
        setUsername("");
        setEmail("");
        setPassword("");
        setEntranceOfficer(false);
      } else {
        // Error creating the approver
        alert("Failed to create approver");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to create approver");
    }
  };

  const handleButtonClick = (route) => {
    console.log(route);
    navigate(route);
  };

  return (
    <div className="flex flex-row h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex items-center justify-center w-full">
        <div className="relative font-lexend-deca">
          <div className="rounded-lg border-[1px] bg-white drop-shadow-xl border-gray-200 p-8 flex flex-col items-center">
            <h1 className="text-new-blue text-2xl mb-8">Add Approver</h1>
            <Link
              to="/view-all-approver"
              className="bg-new-blue hover:bg-new-blue-light transition-all hover:drop-shadow-md text-white rounded-full border font-bold px-4 py-2 absolute top-0 left-0 ml-4 mt-4"
            >
              &lt; Back
            </Link>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <SimpleTextBox
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <SimpleTextBox
                placeholder="Middle Name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <SimpleTextBox
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <SimpleTextBox
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <SimpleTextBox
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordTextBox
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex items-center text-slate-800">
                <input
                  type="checkbox"
                  className="form-checkbox rounded"
                  checked={entranceOfficer}
                  onChange={(e) => setEntranceOfficer(e.target.checked)}
                />
                <label className="ml-2">Entrance Officer</label>
              </div>

              <button
                type="submit"
                className="bg-new-blue hover:bg-new-blue-light transition-all hover:drop-shadow-md text-white rounded-lg border px-4 py-2 mt-4"
              >
                Create Approver
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddApproverPage;
