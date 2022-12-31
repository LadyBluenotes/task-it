const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { // title of task
    type: String,
    required: true
  },
  description: { // description of task
    type: String,
    required: true
  },
  status: { // status of task
    type: String,
    enum: ['to-do', 'in-progress', 'done'],
    default: 'to-do'
  },
  dueDate: Date, // when task is due
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  assignedTo: { // who is task assigned to
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  createdAt: { // stores date and time task was created
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', taskSchema);
