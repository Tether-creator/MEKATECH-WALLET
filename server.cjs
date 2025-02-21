const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get("/balance", (req, res) => {
    res.json({ balance: "100" }); // Ensure the key matches what the frontend expects
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
