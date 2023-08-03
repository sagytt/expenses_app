import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useExpenseContext } from '../contexts/ExpenseContext';
import ExpenseModal from '../components/ExpenseModal';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseService from '../services/ExpenseService';

const ExpensesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editExpenseData, setEditExpenseData] = useState(null);
  const [startDate, setStartDate] = useState(''); // Add state for start date
  const [endDate, setEndDate] = useState(''); // Add state for end date
  const { expenses, setExpenses } = useExpenseContext();
  const [filteredExpenses, setFilteredExpenses] = useState([]); // Add state for filtered expenses

  useEffect(() => {
    // Fetch expenses from the API using the service
    ExpenseService.getAllExpenses()
      .then((data) => {
        setExpenses(data);
        setFilteredExpenses(data); // Set initial filtered expenses to all expenses
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddExpense = (expenseData) => {
    // Add new expense to the API using the service
    ExpenseService.createExpense(expenseData)
      .then((data) => {
        setExpenses((prevExpenses) => [...prevExpenses, data]);
        // After adding the new expense, update the filtered expenses with the new data
        setFilteredExpenses((prevExpenses) => [...prevExpenses, data]);
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteExpense = (expenseId) => {
    // Delete expense from the API using the service
    ExpenseService.deleteExpense(expenseId)
      .then(() => {
        setExpenses((prevExpenses) => prevExpenses.filter((exp) => exp._id !== expenseId));
        // After deleting the expense, update the filtered expenses by excluding the deleted one
        setFilteredExpenses((prevExpenses) => prevExpenses.filter((exp) => exp._id !== expenseId));
      })
      .catch((error) => console.error(error));
  };

  const handleEditExpense = (expense) => {
    // Open the modal with the expense data to be edited
    setEditExpenseData(expense);
    setShowModal(true);
  };

  const handleUpdateExpense = (expenseData) => {
    // Update the expense on the API using the service
    ExpenseService.editExpense(expenseData)
      .then((updatedExpense) =>
        setExpenses((prevExpenses) =>
          prevExpenses.map((exp) => (exp._id === updatedExpense._id ? updatedExpense : exp))
        )
      )
      .catch((error) => console.error(error));
  };

  const handleFilterExpenses = () => {
    // Filter expenses based on the selected date range
    const filteredData = expenses.filter((exp) => {
      const expenseDate = new Date(exp.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return expenseDate >= start && expenseDate <= end;
    });
    setFilteredExpenses(filteredData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Expenses Tracker</h1>
        </Col>
        <Col className="text-end">
          <Button onClick={() => setShowModal(true)}>Add Expense</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Date range picker */}
          <Row className="my-3">
            <Col>
              <label>Start Date:</label>
              <input
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
              />
            </Col>
            <Col>
              <label>End Date:</label>
              <input
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                value={endDate}
              />
            </Col>
            <Col>
              <Button
                onClick={handleFilterExpenses}
                className="mt-4"
              >
                Filter
              </Button>
            </Col>
          </Row>
          <ExpenseTable
            expenses={filteredExpenses} // Use the filtered expenses for the table
            handleDelete={handleDeleteExpense}
            handleEdit={handleEditExpense}
          />
        </Col>
      </Row>
      <ExpenseModal
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditExpenseData(null);
        }}
        handleSubmit={handleAddExpense}
        editExpenseData={editExpenseData}
        handleUpdate={handleUpdateExpense}
      />
    </Container>
  );
};

export default ExpensesPage;
