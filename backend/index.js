const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config/config');
const expenseRoutes = require('./routes/expenseRoutes');
const logger = require('./utils/logger');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', expenseRoutes);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error(`Error connecting to MongoDB: ${error.message}`);
  });
