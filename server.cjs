const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Ensure this route exists
app.get("/balance", (req, res) => {
    res.json({ "Balance": "100 USDT" });
});

// Serve frontend files
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});
