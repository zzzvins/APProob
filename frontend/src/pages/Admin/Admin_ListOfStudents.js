import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../../components/DrawerComponents/Drawer";
import Card_HorizontalText from "../../components/Card_HorizontalText";
import SquareButton from "../../components/SquareButton";
import StudentWithAdviserCard from "../../components/StudentWithAdviserCard";
import axios from "axios";

const ListOfStudents = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const buttons = [
    { icon: "dashboard.png", title: "Dashboard", route: "/admin-dashboard" },
    { icon: "appli.png", title: "Application" },
    { icon: "student.png", title: "Student", route: "/view-all-students" },
    { icon: "approver.png", title: "Approver", route: "/view-all-approver" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, [searchTerm]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/list-student?name=${searchTerm}`
      );
      setAllStudents(response.data);
    } catch (error) {
      console.error(error);
      // Handle error while fetching students
    }
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const updateAdviser = (studentId, adviser) => {
    setAllStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student._id === studentId) {
          return {
            ...student,
            adviser: adviser,
          };
        }
        return student;
      })
    );
  };

  return (
    <div className="flex flex-row h-screen">
      <Drawer buttons={buttons} onButtonClick={handleButtonClick} />
      <div className="flex flex-col b border-solid rounded-lg flex-grow my-3 ml-3 p-6">
        <div className="font-lexend-deca text-slate-800 text-4xl">
          All Students
        </div>
        <div className="mx-20 py-14 overflow-hidden">
          <div className="flex flex-row justify-around">
            <Card_HorizontalText
              className="ml-3"
              leading="All students"
              trailing={allStudents.length}
            />
            <div className="ml-3"></div>
            <Card_HorizontalText
              leading="Students with no adviser"
              trailing={
                allStudents.filter((student) => !student.adviser).length
              }
            />
          </div>
          <hr />
          <div className="flex flex-col">
            <div className="flex flex-row my-5 flex-grow items-center">
              <input
                className=" drop-shadow-lg w-full h-full px-4 py-2 text-lg border-2font-light text-slate-800 border border-gray-300 rounded-lg focus:outline-none font-lexend-deca font-light focus:ring-2 ml-2 "
                type="text"
                placeholder="Search student"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SquareButton icon={"🔍"} />
            </div>
          </div>
          

          <div className="h-[425px] overflow-auto px-12">
            {allStudents
            .filter((student) =>
              `${student.firstName} ${student.lastName}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((student) => (
              <StudentWithAdviserCard
                key={student._id}
                studentId={student._id}
                name={`${student.firstName} ${student.lastName}`}
                studentNumber={student.studentNumber}
                adviser={student.adviser || "None"}
                updateAdviser={updateAdviser}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfStudents;
