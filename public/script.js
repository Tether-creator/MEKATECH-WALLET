document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://mekatech-wallet.onrender.com/balance", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) throw new Error("Failed to fetch balance");

        const data = await response.json();
        document.getElementById("balance").innerText = Balance: ${data.Balance};
    } catch (error) {
        console.error("Error fetching balance:", error);
        document.getElementById("balance").innerText = "Error fetching balance";
    }
});
