const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Content Security Policy (CSP) to allow scripts
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline';");
    next();
});

// Mock balance and price data (Replace this with real blockchain data later)
app.get("/balance", (req, res) => {
    res.json({ balance: "100.00", price: "1.00" });
});

// Start the server
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});
