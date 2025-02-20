document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectWallet");
    const sendButton = document.getElementById("sendTransaction");
    const balanceElement = document.getElementById("balance");
    const priceElement = document.getElementById("tokenPrice");

    async function connectWallet() {
        try {
            if (!window.ethereum) {
                alert("MetaMask or another Web3 wallet is required.");
                return;
            }
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            document.getElementById("walletAddress").innerText = Connected: ${address};

            fetchBalance(address, provider);
            fetchTokenPrice(provider);
        } catch (error) {
            console.error("Wallet connection failed:", error);
        }
    }

    async function fetchBalance(userAddress, provider) {
        try {
            const contractAddress = "0xA719249CcAFa164B9A98D3BBC7E57C5FFDF6f5B8";
            const abi = ["function balanceOf(address) view returns (uint256)"];
            const contract = new ethers.Contract(contractAddress, abi, provider);
            const balance = await contract.balanceOf(userAddress);
            balanceElement.innerText = Your Balance: ${ethers.formatUnits(balance, 18)} USDT;
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    }

    async function fetchTokenPrice(provider) {
        try {
            const priceFeedAddress = "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e";
            const priceFeedAbi = ["function latestAnswer() view returns (int256)"];
            const priceFeed = new ethers.Contract(priceFeedAddress, priceFeedAbi, provider);
            const price = await priceFeed.latestAnswer();
            priceElement.innerText = Token Price: $${(price / 1e8).toFixed(2)};
        } catch (error) {
            console.error("Error fetching token price:", error);
        }
    }

    async function sendTransaction() {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const tx = await signer.sendTransaction({
                to: "0xRecipientWalletAddressHere",
                value: ethers.parseEther("0.01"),
            });
            await tx.wait();
            alert("Transaction successful!");
        } catch (error) {
            console.error("Transaction failed:", error);
        }
    }

    connectButton.addEventListener("click", connectWallet);
    sendButton.addEventListener("click", sendTransaction);
});
