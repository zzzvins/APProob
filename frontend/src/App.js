import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import StudentDashboardPage from "./pages/Student/Student_DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ListOfStudents from "./pages/Admin/ListOfStudents";
import StudentApplicationHome from "./pages/Student/Student_ApplicationHome";
import ProfilePage from "./pages/ProfilePage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/application" element={<StudentApplicationHome />} />
        <Route path="/view-all-students" element={<ListOfStudents />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
