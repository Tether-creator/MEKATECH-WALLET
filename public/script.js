document.addEventListener("DOMContentLoaded", async function () {
    try {
        let balanceResponse = await fetch('/balance'); // Fetch balance API
        if (!balanceResponse.ok) throw new Error("Balance API not found");
        let balanceData = await balanceResponse.json();

        let priceResponse = await fetch('/price'); // Fetch price API
        if (!priceResponse.ok) throw new Error("Price API not found");
        let priceData = await priceResponse.json();

        document.getElementById("balance").innerText = Your Balance: ${balanceData.balance} USDT;
        document.getElementById("tokenPrice").innerText = Token Price: $${priceData.price};
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
