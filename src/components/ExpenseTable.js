import React from 'react';
import { Table } from 'react-bootstrap';
import { IoMdTrash, IoMdCreate } from 'react-icons/io';

const ExpenseTable = ({ expenses, handleDelete, handleEdit }) => {
  // Calculate the total expense amount
  const totalExpense = expenses.reduce((total, expense) => total + Number(expense.total), 0);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Total</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.total}</td>
              <td>{expense.notes}</td>
              <td>
                <span className="btn btn-danger" onClick={() => handleDelete(expense._id)}>
                  <IoMdTrash />
                  Delete
                </span>
                <span className="btn btn-primary mx-2" onClick={() => handleEdit(expense)}>
                  <IoMdCreate />
                  Edit
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Display the total expense amount */}
      <div className="text-end">
        <strong>Total Expense:</strong> ${totalExpense.toFixed(2)}
      </div>
    </>
  );
};

export default ExpenseTable;
