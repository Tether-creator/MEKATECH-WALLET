const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/balance', (req, res) => {
    res.json({ balance: "100.00 USDT", price: "$1.00" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
