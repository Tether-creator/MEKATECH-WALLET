document.addEventListener("DOMContentLoaded", async () => {
    try {
        let balanceResponse = await fetch('/balance');
        let balanceData = await balanceResponse.json();
        document.getElementById("balance").textContent = balanceData.balance.toFixed(2);

        let priceResponse = await fetch('/price');
        let priceData = await priceResponse.json();
        document.getElementById("price").textContent = $${priceData.price.toFixed(2)};
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
