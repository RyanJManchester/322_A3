const db = require('../db');

// CREATE
function createProject(req, res) { /* ... */ }

// GET ALL
function getAllProjects(req, res) { /* ... */ }

// GET BY ID
function getProjectById(req, res) { /* ... */ }

// GET BY NAME
function getProjectByName(req, res) { /* ... */ }

// UPDATE
function updateProjectById(req, res) { /* ... */ }

// DELETE BY ID
function deleteProjectById(req, res) { /* ... */ }

// DELETE ALL
function deleteAllProjects(req, res) { /* ... */ }


module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  getProjectByName,
  updateProjectById,
  deleteProjectById,
  deleteAllProjects
};
