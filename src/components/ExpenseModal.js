










import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ExpenseModal = ({ show, handleClose, handleSubmit, editExpenseData, handleUpdate }) => {
  const [expenseData, setExpenseData] = useState({
    date: '',
    category: '',
    total: '',
    notes: '',
  });

  useEffect(() => {
    // Populate the form fields with the existing data when editing an expense
    if (editExpenseData) {
      setExpenseData(editExpenseData);
    }
  }, [editExpenseData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Determine if it's a new expense or an existing expense being updated
    if (editExpenseData) {
      // If editExpenseData exists, it means we are updating an existing expense
      handleUpdate(expenseData); // Call the handleUpdate function with the updated data
    } else {
      // If editExpenseData doesn't exist, it means we are adding a new expense
      handleSubmit(expenseData);
    }

    // Reset the form data and close the modal
    setExpenseData({
      date: '',
      category: '',
      total: '',
      notes: '',
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editExpenseData ? 'Edit Expense' : 'Add Expense'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" value={expenseData.date} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={expenseData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing">Housing</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTotal">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="number"
              name="total"
              value={expenseData.total}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              name="notes"
              value={expenseData.notes}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ExpenseModal;
