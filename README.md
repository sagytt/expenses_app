

Install dependencies for both frontend and backend:


# Expenses Tracker

## Introduction

This is a basic Expenses Tracker application built using Node.js, Express, React, and MongoDB. It allows users to track their expenses by adding, editing, and deleting expenses. The frontend is built using React with React Bootstrap for responsive design, and the backend uses Node.js with Express and MongoDB as the database.

## Installation

1. Clone the repository:

2. Install dependencies for both frontend and backend:

3. Set up MongoDB:
- Install MongoDB on your system (https://docs.mongodb.com/manual/installation/).
- Create a MongoDB database and configure the connection string in `backend/config/config.js`.

4. Create a .env file in the backend folder and add your JWT secret:

5. Run the backend server:

6. Run the frontend:

7. Access the application in your browser at http://localhost:3000.

## Backend API Endpoints

- `POST /api/v1/create-expense`: Create a new expense. Request body should include: date, category, total, and notes. The response will return the ID of the created expense.
- `DELETE /api/v1/delete-expense/:expense-id`: Delete an existing expense.
- `PUT /api/v1/edit-expense/:expense-id`: Edit an existing expense. Request body should include: date, category, total, and notes.
- `GET /api/v1/expense`: Fetch all expenses between two dates. This should take two query parameters: start_date and end_date.

## Frontend Features

The Expenses Tracker frontend application provides the following features:

- A form to create a new expense, opened with a button click in a new popup modal.
- A table listing all expenses, showing date, category, total, and notes for each expense.
- A range date picker to filter expenses by date above the table.
- A trash icon to delete an expense with a confirmation popup.
- A pencil icon to edit an existing expense, editing is similar to creating with the same modal popup.

## Evaluation

The project is evaluated based on the following criteria:

- Code quality and organization.
- Implementation of requested features.
- Adherence to the requested technologies.

## Note

Please make sure to create a .env file in the backend folder with your own JWT secret.


