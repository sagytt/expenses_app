const express = require('express');
const expenseController = require('../controllers/expenseController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.get('/expense', authenticate, expenseController.getAllExpenses);
router.post('/create-expense', authenticate, expenseController.createExpense);
router.delete('/delete-expense/:expenseId', authenticate, expenseController.deleteExpense);
router.put('/edit-expense/:expenseId', authenticate, expenseController.editExpense);
// Implement the editExpense route to handle updating an existing expense

module.exports = router;
