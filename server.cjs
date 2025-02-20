const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

// Enable CORS
app.use(cors());

// Set Content Security Policy (CSP) headers to prevent blocking scripts
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline'");
    next();
});

// Sample balance API
app.get("/balance", (req, res) => {
    res.json({ balance: "100 USDT" });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Wallet Backend Running on port ${PORT}`);
});
