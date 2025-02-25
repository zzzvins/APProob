import React, { useState } from "react";

const ApplicationPage = () => {
  const [application, setApplication] = useState({
    studentSubmission: "",
    remarkLink: "",
    remarkDate: null,
    stepGiven: 1,
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Application Status</h2>

      <div className="border rounded-lg shadow-sm p-4">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Student Submission</h3>
          <input
            type="text"
            name="studentSubmission"
            value={application.studentSubmission}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            placeholder="Enter GitHub Link"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium">Remark/Link</h3>
          <input
            type="text"
            name="remarkLink"
            value={application.remarkLink}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            placeholder="Enter Remark Link"
          />
          <input
            type="date"
            name="remarkDate"
            value={application.remarkDate}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
          />
          <input
            type="number"
            name="stepGiven"
            value={application.stepGiven}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mt-2"
            placeholder="Enter Step Given"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
