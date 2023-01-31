const mongoose = require("mongoose");



// import AttachmentSchema from "./Attachment";
// import StaffSchema from "./Staff";
// import StudentSchema from "./Student";
// import TagSchema from "./Tag";



// const MessageSchema = new mongoose.Schema({
//   id: String,
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     refPath: "authorType"
//   },
//   authorType: {
//     type: String,
//     enum: ["Student", "Staff"]
//   },
//   text: String,
//   attachments: [AttachmentSchema],
//   createdAt: String
// });

// const AssignedTaskSchema = new mongoose.Schema({
//   id: String,
//   refId: String,
//   task: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Task"
//   },
//   studentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Student"
//   },
//   messages: [MessageSchema]
// });

const BlogSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String
});

const StaffSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  image: String
});

const StudentSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  image: String
});

// const StudentSchema = new mongoose.Schema({
//   id: String,
//   firstName: String,
//   lastName: String,
//   email: String,
//   dob: String,
//   gender: String,
//   nationality: String,
//   image: String,
//   tags: [TagSchema],
//   assignedTasks: [AssignedTaskSchema],
//   tasksCompletion: Number
// });

const TagSchema = new mongoose.Schema({
  id: String,
  label: String,
  description: String
});

const TaskSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  tags: [TagSchema],
  dueDate: String,
  urgent: Boolean,
  isNew: Boolean
});

const AttachmentSchema = new mongoose.Schema({
  id: String, 
  name: String, 
  path: String, 
});

// export const AssignedTask = mongoose.model("AssignedTask", AssignedTaskSchema);
// export const Attachment = mongoose.model("Attachment", AttachmentSchema);
// export const Blog = mongoose.model("Blog", BlogSchema);
// export const Message = mongoose.model("Message", MessageSchema);
// export const Staff = mongoose.model("Staff", StaffSchema);
// export const Student = mongoose.model("Student", StudentSchema);
// export const Tag = mongoose.model("Tag", TagSchema);
// export const Task = mongoose.model("Task", TaskSchema);

module.exports = {

  Blog: mongoose.model("Blog", BlogSchema),
  Student: mongoose.model("Student", StudentSchema),
  Tag: mongoose.model("Tag", TagSchema),
  Staff: mongoose.model("Staff", StaffSchema),
  Task: mongoose.model("Task", TaskSchema),
  Attachment: mongoose.model("Attachment", AttachmentSchema),
};