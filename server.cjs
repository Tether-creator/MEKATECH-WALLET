const express = require("express");
const helmet = require("helmet");

const app = express();

// Set CSP policy to allow 'unsafe-eval'
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
      },
    },
  })
);

app.listen(3000, () => console.log("Server running on port 3000"));
