// myapp-backend/src/server.js

const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
