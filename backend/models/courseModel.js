const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
  name: String,
  CRN: Number,
  enrolledUsers: Array,
  pendingRequests: Array,
});

const Course = mongoose.model("courses", courseschema);
module.exports = Course;
