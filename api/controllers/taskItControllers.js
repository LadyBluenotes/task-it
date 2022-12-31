const Task = require('../models/taskItModels');

// Get all tasks
exports.getTasks = (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json({ err }));
};

// Get a single task
exports.getTask = (req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json({ err }));
};

// Create a new task
exports.createTask = (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  });

  task
    .save()
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json({ err }));
};

// Update an existing task
exports.updateTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json({ err }));
};

// Delete a task
exports.deleteTask = (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Task deleted successfully' }))
    .catch((err) => res.status(400).json({ err }));
};
