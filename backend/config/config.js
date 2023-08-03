require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/expenses';

module.exports = {
  MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET || "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFraGxhcSBBbHRhZiIsImlhdCI6MTUxNjIzOTAyMn0.2P3MgkPHYXwLQZTmM_vINHjZWbQyZfydsU8K5g3bTBw",
};
