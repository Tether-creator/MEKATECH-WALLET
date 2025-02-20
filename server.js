const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to return fake balance
app.get('/balance', (req, res) => {
    res.json({ balance: 100.00 });
});

// API to return fake price
app.get('/price', (req, res) => {
    res.json({ price: 1.00 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
