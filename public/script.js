async function fetchBalance() {
    try {
        let response = await fetch("/balance"); // Fetch from backend
        if (!response.ok) throw new Error("Network response was not ok");

        let data = await response.json(); // Convert response to JSON
        document.getElementById("balance").innerText = Your Balance: ${data.balance} USDT;
        document.getElementById("price").innerText = Token Price: $${data.price};
    } catch (error) {
        console.error("Error fetching balance:", error);
        document.getElementById("balance").innerText = "Error loading balance";
        document.getElementById("price").innerText = "Error fetching price";
    }
}

// Call the function when the page loads
fetchBalance();
