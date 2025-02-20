const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

// Set Content Security Policy (CSP) headers
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:"],
                connectSrc: ["'self'"]
            }
        }
    })
);

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
