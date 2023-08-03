import React, { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext([]);

export const useExpenseContext = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  return <ExpenseContext.Provider value={{ expenses, setExpenses }}>{children}</ExpenseContext.Provider>;
};
