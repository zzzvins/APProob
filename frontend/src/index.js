import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { redirect } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage_NoAdviser from "./pages/Student/NoAdviser_Landing";
import StudentApplicationHome from "./pages/Student/Student_ApplicationHome";
import StudentDashboardPage from "./pages/Student/Student_DashboardPage";
import StudentViewRemarks from "./pages/Student/Student_ViewRemarks";

import StudentViewPreviousApplication from "./pages/Student/Student_ViewPreviousApplication";
import ApproverAppList from "./pages/Approver/Approver_AppList";
import AppoverDashboard from "./pages/Approver/Approver_Dashboard";
import ApproverViewApp from "./pages/Approver/Approver_ViewApp";
import AddApproverPage from "./pages/Admin/Admin_AddApproverPage";
import DeleteApproverPage from "./pages/Admin/functions/Admin_DeleteApprover";
import AdminDashboard from "./pages/Admin/Admin_Dashboard";
import ProfilePage from "./pages/ProfilePage";
import ListOfStudents from "./pages/Admin/Admin_ListOfStudents";
import Drawer from "./components/DrawerComponents/Drawer";
import ApplicationPage from "./pages/ApplicationPage";
import EditApproverPage from "./pages/Admin/functions/Admin_EditApprover";
import SearchApproverPage from "./pages/Admin/functions/Admin_SearchApprover";
import ViewAllApprovers from "./pages/Admin/functions/Admin_ViewAllApprover";


import ListOfApprovers from "./pages/Admin/Admin_ListOfApprovers";

// Send a POST request to API to check if the user is logged in. Redirect the user to /dashboard if already logged in
const checkIfLoggedIn = async () => {
  const res = await fetch("http://localhost:3001/checkifloggedin", {
    method: "POST",
    credentials: "include",
  });

  const payload = await res.json();

  if (payload.isLoggedIn) {
    return redirect("/dashboard");
  } else {
    return null;
  }
};

// Send a POST request to API to check if the user is logged in. Redirect the user back to / if not logged in
const checkIfLoggedInOnDash = async () => {
  const res = await fetch("http://localhost:3001/checkifloggedin", {
    method: "POST",
    credentials: "include",
  });

  const payload = await res.json();
  if (payload.isLoggedIn) {
    return true;
  } else {
    return redirect("/");
  }
};

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, loader: checkIfLoggedIn },
  {
    path: "/dashboard",
    element: <StudentDashboardPage />,
    loader: checkIfLoggedInOnDash,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/application",
    element: <StudentApplicationHome />,
  },

  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },

  {
    path: "/approver-dashboard",
    element: <AppoverDashboard />,
  },
  {
    path: "/view-all-students",
    element: <ListOfStudents />,
  },
  {
    path: "/add-approver",
    element: <AddApproverPage />,
  },
  {
    path: "/delete-approver",
    element: <DeleteApproverPage />,
  },
  {
    path: "/edit-approver",
    element: <EditApproverPage />,
  },
  {
    path: "/search-approver",
    element: <SearchApproverPage />,
  },
  {
    path: "/view-all-approver",
    element: <ListOfApprovers/>,
  },
  {
    path: "/approver-dashboard",
    element: <AppoverDashboard/>,
  },

  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
