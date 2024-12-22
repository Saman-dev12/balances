import React, { useState } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

const ConnectETH: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");

  const connectWallet = async (): Promise<void> => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0] as string;
        setWalletAddress(account);
        await getBalance(account);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  const getBalance = async (address: string): Promise<void> => {
    if (window.ethereum) {
      const provider = new Web3Provider(window.ethereum);
      const balance = await provider.getBalance(address);
      setBalance(ethers.formatEther(balance.toString()));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Wallet Balance Viewer
        </h1>
        {!walletAddress ? (
          <button
            onClick={connectWallet}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Connect MetaMask
          </button>
        ) : (
          <div className="space-y-4">
            <div className="text-gray-700">
              <span className="font-semibold">Wallet Address:</span>
              <p className="break-words">{walletAddress}</p>
            </div>
            <div className="text-gray-700">
              <span className="font-semibold">Balance:</span>
              <p>{balance} ETH</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectETH;
