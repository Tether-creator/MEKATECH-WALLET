import { ethers } from "ethers";
import Web3Modal from "web3modal";

let provider;
let signer;
let userAddress = "";

async function connectWallet() {
    const web3Modal = new Web3Modal({
        cacheProvider: false,
    });

    try {
        const instance = await web3Modal.connect();
        provider = new ethers.BrowserProvider(instance);
        signer = await provider.getSigner();
        userAddress = await signer.getAddress();

        document.getElementById("walletAddress").innerText = Connected: ${userAddress};
    } catch (error) {
        console.error("Wallet connection failed:", error);
    }
}

async function sendTransaction() {
    if (!signer) {
        alert("Connect wallet first!");
        return;
    }

    try {
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

document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("sendTransaction").addEventListener("click", sendTransaction);
