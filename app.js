const express = require('express');
const cors = require('cors');
const path = require('path');

const {
  createProject,
  getAllProjects,
  getProjectById,
  getProjectByName,
  updateProjectById,
  deleteProjectById,
  deleteAllProjects
} = require('./resources/projects');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/projects', createProject);
app.get('/projects', getAllProjects);
app.get('/projects/id/:id', getProjectById);
app.get('/projects/name/:name', getProjectByName);
app.put('/projects/:id', updateProjectById);
app.delete('/projects/:id', deleteProjectById);
app.delete('/projects', deleteAllProjects);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
