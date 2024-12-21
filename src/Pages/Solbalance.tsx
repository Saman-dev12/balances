import React, { useState, useEffect } from 'react';
import {Connection, PublicKey} from "@solana/web3.js"
const SolBalance: React.FC = () => {
  const [balance, setBalance] = useState<string | null>(null);
  const [address, setAddress] = useState<string>('');
  const handleCheckBalance = async () => {
    try {
      const connection = new Connection("https://api.devnet.solana.com");
      const balance = await connection.getBalance(new PublicKey(address));
      setBalance(balance.toString());
    } catch (error) {
      console.error('Error fetching balance:', error);
  }
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Solana Balance Checker</h1>
      <input
        type="text"
        placeholder="Enter Solana address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-80"
      />
      <button
        onClick={handleCheckBalance}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Check Balance
      </button>
      {balance !== null && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p className="text-xl">Balance: {balance} ETH</p>
        </div>
      )}
    </div>
  );
};

export default SolBalance;