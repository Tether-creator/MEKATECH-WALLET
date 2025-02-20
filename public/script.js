document.getElementById("connectWallet").addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            alert("Wallet connected!");
        } catch (error) {
            alert("Connection failed: " + error.message);
        }
    } else {
        alert("MetaMask not found! Please install it.");
    }
});

async function fetchBalance() {
    try {
        let response = await fetch("/balance");
        if (!response.ok) throw new Error("Network response was not ok");

        let data = await response.json();
        document.getElementById("balance").innerText = Your Balance: ${data.balance} USDT;
        document.getElementById("price").innerText = Token Price: $${data.price};
    } catch (error) {
        console.error("Error fetching balance:", error);
        document.getElementById("balance").innerText = "Error loading balance";
        document.getElementById("price").innerText = "Error fetching price";
    }
}

fetchBalance();
