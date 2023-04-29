// Import required modules
const express = require('express');
const cors = require('cors');
const data = require('./data.json');  // Import data from JSON file
// Initialize express app
const app = express();

// Enable CORS middleware
app.use(cors());

// Define endpoint for getting data
app.get('/data', (req, res) => {
  res.json(data); // Send the data as JSON response
});

// Set the port to either the environment variable or 5000
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
