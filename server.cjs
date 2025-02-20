const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Set security headers
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'");
    res.setHeader("Origin-Agent-Cluster", "?1");  // Fix for Origin-Agent-Cluster issue
    next();
});

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// API endpoint for health check
app.get("/api/status", (req, res) => {
    res.json({ status: "Wallet Backend Running" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
