const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    enum: ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Other'],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
