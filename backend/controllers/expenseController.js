const Expense = require('../models/Expense');
const logger = require('../utils/logger');

exports.getAllExpenses = async (req, res) => {
    console.log("I am enter for fetching all expenses ")
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.createExpense = async (req, res) => {
    console.log("I am reached for Creating ....")
  try {
    const { date, category, total, notes } = req.body;
    const expense = await Expense.create({ date, category, total, notes });
    res.status(201).json(expense);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.deleteExpense = async (req, res) => {
    console.log(" I am Enter For Deleting....")
  try {
    const { expenseId } = req.params;
    await Expense.findByIdAndDelete(expenseId);
    res.status(204).json();
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};


exports.editExpense = async (req, res) => {

    console.log("Enter For Edit Expeses..............")
    try {
      const { id } = req.params;
      console.log("Id is Here  : ",id)
      const { _id,date, category, total, notes } = req.body;
      
     console.log("Date is " , date  ,"Id : ", _id )
      // Find the existing expense by ID
      const existingExpense = await Expense.findById(_id);
  
      // If the expense doesn't exist, return 404 Not Found
      if (!existingExpense) {
        return res.status(404).json({ message: 'Expense not found.' });
      }
  
      // Update the expense fields
      existingExpense.date = date;
      existingExpense.category = category;
      existingExpense.total = total;
      existingExpense.notes = notes;
  
      // Save the updated expense
      const updatedExpense = await existingExpense.save();
  
      res.status(200).json(updatedExpense);
    } catch (error) {
      logger.error(error.message);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };

  
  
  
  

