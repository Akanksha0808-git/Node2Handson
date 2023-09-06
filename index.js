// Import the required modules
const express = require('express');

// Import CORS middleware
const cors=require("cors")

// Create an Express application
const app = express();
// Use CORS middleware
app.use(cors({
  origin:"*"
}))
// Define a route for '/api/main'
app.get('/api/main', (req, res) => {
  // Send a response explaining what Express.js is
  
  res.send('Express.js is a web application framework for Node.js. It simplifies the process of building robust and scalable web applications.');
});

// Start the server
const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running fine on http://localhost:${port}`);
});
