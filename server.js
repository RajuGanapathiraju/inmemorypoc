const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to handle JSON requests
app.use(bodyParser.json());

// Serve static HTML and JS files
app.use(express.static('public'));

// Endpoint to simulate data theft
app.post('/steal-data', (req, res) => {
    console.log('Stolen data received:', req.body);
    // Log the stolen data to the server console (mock attacker server)
    res.send('Data stolen successfully!');
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

