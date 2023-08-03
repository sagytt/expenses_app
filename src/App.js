import React from 'react';
import './App.css';
import { ExpenseProvider } from './contexts/ExpenseContext';
import ExpensesPage from './pages/ExpensePage';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <ExpenseProvider>
      <div className="App">
        
        <ExpensesPage />
      </div>
    </ExpenseProvider>
  );
}

export default App;
