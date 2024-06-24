const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  type: String,
  title: String,
  description: String,
  frontlink: String,
  backlink: String,
  tags: Array,
  image: String,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
