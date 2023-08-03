const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const authenticate = (req, res, next) => {
  console.log("i am enter for Auth")
  const authHeader = req.header('Authorization');
  console.log(authHeader)

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log("I am In Auth Header")
    return res.status(401).json({ message: 'Authorization token not provided.' });
  }

  const token = authHeader.replace('Bearer ', '');
  console.log(token)

  try {
    console.log("I am In Checking Token")
    // const decodedToken = jwt.verify(token, JWT_SECRET);
    // req.userId = decodedToken.sub; // Assuming the user ID is in the 'sub' claim
    next();
  } catch (error) {
    console.error("Invalid Token:", error.message);
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticate;
