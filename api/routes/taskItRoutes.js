const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskItControllers');

// Get all tasks
router.get('/tasks', taskController.getTasks);

// Get a single task
router.get('/tasks/:id', taskController.getTask);

// Create a new task
router.post('/tasks', taskController.createTask);

// Update an existing task
router.put('/tasks/:id', taskController.updateTask);

// Delete a task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
