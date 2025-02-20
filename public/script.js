document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("https://mekatech-wallet.onrender.com/balance");
        const data = await response.json();
        document.getElementById("balance").innerText = data.balance || "Error fetching balance";
    } catch (error) {
        console.error("Error fetching balance:", error);
        document.getElementById("balance").innerText = "Failed to load balance";
    }
});
