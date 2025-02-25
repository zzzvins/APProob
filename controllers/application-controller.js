import mongoose from "mongoose";

// Get user model registered in Mongoose
const User = mongoose.model("user");

// Get user model registered in Mongoose
const App = mongoose.model("application");

export const createApplication = async (req, res) => {
  const { studentNumber, link } = req.body;

  const student = await User.findOne({ studentNumber }).select(
    "studentNumber firstName lastName email middleName adviser"
  );

  const adviser = await User.findOne({ _id: student.adviser }).select(
    "firstName middleName lastName email username"
  );

  const application = new App({
    previousSubmissions: [],
    step: 1,
    createdBy: {
      firstName: student.firstName,
      lastName: student.lastName,
      middleName: student.middleName,
      email: student.email,
      studentNumber: student.studentNumber,
    },
    adviser: adviser,
    submission: { link, date: new Date(), remarks: [], stepSubmitted: 1 },
    status: "open",
  });

  await application.save();
  student.application = application._id;

  await student.save({ validateModifiedOnly: true });

  // return res.setStatus(204);
};

export const getOpenApplications = async (req, res) => {
  try {
    const openApplications = await App.find({
      status: "open",
      step: 1,
    });
    return res.json(openApplications);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to fetch open applications." });
  }
};

export const approveApplication = async (req, res) => {
  const { applicationId } = req.params;
  const { status } = req.body;
  try {
    const application = await App.findByIdAndUpdate(
      applicationId,
      { step: 3, status: "cleared" },
      { new: true }
    );
    return res.json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to approve application." });
  }
};

export const returnApplication = async (req, res) => {
  const { applicationId } = req.params;
  const { remarks, status } = req.body;
  try {
    const application = await App.findByIdAndUpdate(
      applicationId,
      { step: 2, remarks, status: "pending" },
      { new: true }
    );
    return res.json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to return application." });
  }
};

// export const findApplicationsByStudentId = async () => {
//   //const { studentId } = req.params;
//   try {
//     const applications = await App.find({ studentNumber: studentId });
//     res.json(applications);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
