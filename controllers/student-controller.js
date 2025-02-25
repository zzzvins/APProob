import mongoose from "mongoose";

// Get user model registered in Mongoose
const User = mongoose.model("user");

// Get the full name of the adviser of a student
export const getAdviserById = async (req, res) => {
  const { id } = req.params;

  try {
    const adviser = await User.findOne({ _id: id, userType: "approver" });

    if (!adviser) {
      return res.status(404).json({ message: "adviser not found" });
    }

    res.status(200).json(adviser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch adviser" });
  }
};

// Fetch student by ID
export const getStudentByStudentId = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await User.findOne({
      studentNumber: id,
      userType: "student",
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch student" });
  }
};
