const Project = require("../models/projects.model");

// pretty self explanatory

exports.getAll = (req, res) => {
  Project.getAll(req, res);
};

exports.getID = (req, res) => {
  Project.getID(req, res);
};

exports.getName = (req, res) => {
  Project.getName(req, res);
};

exports.createProject = (req, res) => {
  Project.createProject(req, res);
};

exports.updateProject = (req, res) => {
  Project.updateProject(req, res);
};

exports.deleteProject = (req, res) => {
  Project.deleteProject(req, res);
};

exports.deleteAll = (req, res) => {
  Project.deleteAll(req, res);
};
