const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security & CORS Fixes
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        connectSrc: ["'self'", "https://your-frontend-url.com"]
      }
    }
  })
);
app.use(
  cors({
    origin: "*", // Change to specific frontend URL for security
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);

app.get("/", (req, res) => {
  res.json({ message: "MEKA-TECH Wallet Backend is running!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
