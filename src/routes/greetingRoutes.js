// myapp-backend/src/routes/greetingRoutes.js

const express = require('express');
const router = express.Router();

// GET request to /greeting
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to my application!' });
});

module.exports = router;
