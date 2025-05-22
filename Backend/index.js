const express = require('express');
const app = express();
const port = 3000;

// Enable CORS (for frontend-backend communication)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});