import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';
const JWT_TOKEN = "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFraGxhcSBBbHRhZiIsImlhdCI6MTUxNjIzOTAyMn0.2P3MgkPHYXwLQZTmM_vINHjZWbQyZfydsU8K5g3bTBw";

const ExpenseService = {
  getAllExpenses: async () => {
    try {
      console.log("Getting Data")
      const response = await axios.get(`${API_URL}/expense`, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching expenses:', error);
      throw error;
    }
  },

  createExpense: async (expenseData) => {
    try {
      const response = await axios.post(`${API_URL}/create-expense`, expenseData, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating expense:', error);
      throw error;
    }
  },

  deleteExpense: async (expenseId) => {
    try {
      await axios.delete(`${API_URL}/delete-expense/${expenseId}`, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
    } catch (error) {
      console.error('Error deleting expense:', error);
      throw error;
    }
  },
  editExpense: async (updatedExpenseData) => {


   const id = updatedExpenseData._id;
   console.log("I am Enter For Editing ..........", id , "   Data   :" , updatedExpenseData)
    try {
      const response = await axios.put(`${API_URL}/edit-expense/${id}`, updatedExpenseData, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating expense:', error);
      throw error;
    }
  },
};

export default ExpenseService;
