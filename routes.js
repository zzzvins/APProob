import {
  signUp,
  login,
  checkIfLoggedIn,
  createAdmin,
  createApprover,
} from "./controllers/auth-controller.js";
import {
  getApprovers,
  deleteApprover,
  updateApprover,
  searchApprover,
  getAllStudents,
  editAdviser,
  viewAllPendingAccounts,
  approveAccount,
} from "./controllers/admin-controller.js";
import {
  getAdviserById,
  getStudentByStudentId,
} from "./controllers/student-controller.js";
import {
  approveApplication,
  createApplication,
  // findApplicationsByStudentId,
  getOpenApplications,
  returnApplication,
} from "./controllers/application-controller.js";

const setUpRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("API Home");
  });
  app.post("/signup", signUp);
  app.post("/login", login);
  app.post("/checkifloggedin", checkIfLoggedIn);
  app.get("/createAdmin", createAdmin);
  app.post("/createApprover", createApprover);
  app.get("/list-approver", getApprovers);
  app.get("/deleteApprover/:id", deleteApprover);
  app.put("/edit-approver/:id", updateApprover);
  app.get("/search-approver", searchApprover);
  app.get("/list-student", getAllStudents);
  app.put("/edit-adviser/:studentId", editAdviser);
  app.get("/list-pending-account", viewAllPendingAccounts);
  app.put("/approve-account/:accountId", approveAccount);
  app.get("/reject-account/:id", deleteApprover);
  app.get("/get-adviser-by-id/:id", getAdviserById);
  app.get("/get-student-by-studentId/:id", getStudentByStudentId);

  // application
  app.post("/submit-application", createApplication);
  app.get("/get-open-applications", getOpenApplications);
  app.put("/approve-application/:applicationId", approveApplication);
  app.put("/return-application/:applicationId", returnApplication);
  // app.get("/find-application-by-id/:id", findApplicationsByStudentId);
};

export default setUpRoutes;
