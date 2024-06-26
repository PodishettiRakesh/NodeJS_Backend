// myapp-backend/src/app.js

const express = require('express');
const cors = require('cors');
const greetingRoutes = require('./routes/greetingRoutes');

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/greeting', greetingRoutes);

module.exports = app;
