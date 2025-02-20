import { ethers } from "ethers";
import Web3Modal from "web3modal";

const tokenContractAddress = "0xA719249CcAFa164B9A98D3BBC7E57C5FFDF6f5B8"; // Your token contract
const priceFeedAddress = "0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e"; // Chainlink ETH/USD price feed
const abi = [ "function balanceOf(address owner) view returns (uint256)" ]; // ABI for balance check
const priceFeedAbi = [ "function latestAnswer() view returns (int256)" ]; // ABI for price feed

let provider, signer, userAddress = "";

async function connectWallet() {
    console.log("Connecting wallet...");
    const web3Modal = new Web3Modal();
    try {
        const instance = await web3Modal.connect();
        provider = new ethers.BrowserProvider(instance);
        signer = await provider.getSigner();
        userAddress = await signer.getAddress();

        console.log("Wallet connected:", userAddress);
        document.getElementById("walletAddress").innerText = Connected: ${userAddress};

        await fetchBalance();
        await fetchTokenPrice();
    } catch (error) {
        console.error("Wallet connection failed:", error);
    }
}

async function fetchBalance() {
    if (!signer) {
        console.error("Signer not found.");
        return;
    }
    
    try {
        console.log("Fetching balance...");
        const contract = new ethers.Contract(tokenContractAddress, abi, provider);
        const balance = await contract.balanceOf(userAddress);
        console.log("Balance fetched:", ethers.formatUnits(balance, 18));
        document.getElementById("balance").innerText = Your Balance: ${ethers.formatUnits(balance, 18)} USDT;
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

async function fetchTokenPrice() {
    try {
        console.log("Fetching token price...");
        const priceFeed = new ethers.Contract(priceFeedAddress, priceFeedAbi, provider);
        const price = await priceFeed.latestAnswer();
        console.log("Price fetched:", price.toString());
        document.getElementById("tokenPrice").innerText = Token Price: $${(price / 1e8).toFixed(2)};
    } catch (error) {
        console.error("Error fetching token price:", error);
    }
}

async function sendTransaction() {
    if (!signer) {
        alert("Connect wallet first!");
        return;
    }

    try {
        console.log("Sending transaction...");
        const tx = await signer.sendTransaction({
            to: "0xRecipientWalletAddressHere",
            value: ethers.parseEther("0.01"),
        });

        await tx.wait();
        console.log("Transaction successful!");
        alert("Transaction successful!");
    } catch (error) {
        console.error("Transaction failed:", error);
    }
}

document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("sendTransaction").addEventListener("click", sendTransaction);
