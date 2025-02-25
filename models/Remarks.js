import { Schema, model } from "mongoose";

const remarkSchema = new Schema({
  remarkBy: {
    email: String,
    username: String,
    lastName: String,
    middleName: String,
    firstName: String,
  },
  stepSubmitted: {
    type: Number,
    enum: [1, 2, 3],
  },
  remark: String,
  date: Date,
});

const applicationSubmissionSchema = new Schema({
  date: Date,
  link: String,
  stepSubmitted: {
    type: Number,
    enum: [1, 2, 3],
  },
  remarks: [remarkSchema],
});

const applicationSchema = new Schema({
  status: {
    type: String,
    enum: ["open", "completed", "closed"],
  },
  step: {
    type: Number,
    enum: [1, 2, 3],
  },
  submission: applicationSubmissionSchema,
  previousSubmissions: [applicationSubmissionSchema],
  adviser: {
    email: String,
    username: String,
    lastName: String,
    middleName: String,
    firstName: String,
  },
  createdBy: {
    email: String,
    studentNumber: String,
    lastName: String,
    middleName: String,
    firstName: String,
  },
  clearedBy: {
    email: String,
    studentNumber: String,
    lastName: String,
    middleName: String,
    firstName: String,
  },
});

export default model("application", applicationSchema);
