import User from "../models/User.js";

// Fetch all approvers
export const getApprovers = async (req, res) => {
  try {
    const approvers = await User.find({ userType: "approver" });
    res.status(200).json(approvers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch approvers" });
  }
};

// Search for approvers by first name or last name
export const searchApprover = async (req, res) => {
  const { name } = req.query;
  const searchRegex = new RegExp(name, "i");

  try {
    const searchResults = await User.find({
      $or: [
        { firstName: { $regex: searchRegex } },
        { middleName: { $regex: searchRegex } },
        { lastName: { $regex: searchRegex } },
      ],
      userType: "approver",
    });

    res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to search approvers" });
  }
};

// Delete an approver
export const deleteApprover = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the approver by ID and remove it from the database
    const deletedApprover = await User.findByIdAndRemove(id);

    if (!deletedApprover) {
      // If no approver was found with the given ID
      return res.status(404).json({ message: "Approver not found" });
    }

    res.json({ message: "Approver deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete approver" });
  }
};

// Update an approver
export const updateApprover = async (req, res) => {
  const { id } = req.params;
  const { firstName, middleName, lastName, password } = req.body;

  try {
    // Find the approver by ID and update their details
    const updatedApprover = await User.findByIdAndUpdate(
      id,
      { firstName, middleName, lastName, password },
      { new: true }
    );

    if (!updatedApprover) {
      // If no approver was found with the given ID
      return res.status(404).json({ message: "Approver not found" });
    }

    res.json(updatedApprover);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update approver" });
  }
};

// Fetch all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ userType: "student", verified: true });

    const data = [];

    for (const {
      firstName,
      middleName,
      adviser: adviserId,
      studentNumber,
      lastName,
      email,
      verified,
      userType,
      _id,
    } of students) {
      const stud = {
        firstName,
        middleName,
        studentNumber,
        lastName,
        email,
        verified,
        userType,
        _id,
      };
      // continue;

      let adviser;

      if (adviserId)
        adviser = await User.findOne({ userType: "approver", _id: adviserId });

      if (adviser) {
        stud.adviser = {
          firstName: adviser.firstName,
          middleName: adviser.middleName,
          lastName: adviser.lastName,
          email: adviser.email,
          username: adviser.username,
          _id: adviserId,
        };
      }

      data.push(stud);
    }

    res.status(200).json([...data]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch students" });
  }
};

// Edit the adviser of a student
export const editAdviser = async (req, res) => {
  const { studentId } = req.params;
  const { adviser } = req.body;

  try {
    const student = await User.findByIdAndUpdate(
      studentId,
      { adviser },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to edit student's adviser" });
  }
};

// Search for approvers by first name or last name
export const searchStudent = async (req, res) => {
  const { name } = req.query;
  const searchRegex = new RegExp(name, "i");

  try {
    const searchResults = await User.find({
      $or: [
        { firstName: { $regex: searchRegex } },
        { middleName: { $regex: searchRegex } },
        { lastName: { $regex: searchRegex } },
      ],
      userType: "student",
    });

    res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to search approvers" });
  }
};

// View pending student accounts
export const viewAllPendingAccounts = async (req, res) => {
  try {
    const pendingAccounts = await User.find({
      userType: "student",
      verified: false,
    });
    res.status(200).json(pendingAccounts);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

// Approve a student account
export const approveAccount = async (req, res) => {
  const { accountId } = req.params;

  try {
    const account = await User.findByIdAndUpdate(
      accountId,
      { verified: true },
      { new: true }
    );

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json({ message: "Account approved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to approve account" });
  }
};

// Reject and delete a student account
export const rejectAccount = async (req, res) => {
  const { accountId } = req.params;

  try {
    const deletedAccount = await User.findByIdAndRemove(accountId);

    if (!deletedAccount) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json({ message: "Account rejected and deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to reject and delete account" });
  }
};
