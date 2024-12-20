import React, { useState, useEffect } from 'react';

const EthBalance: React.FC = () => {
  const [balance, setBalance] = useState<string | null>(null);
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch(`https://api.etherscan.io/getBalance?address=${address}`);
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    if (address) {
      fetchBalance();
    }
  }, [address]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Ethereum Balance Checker</h1>
      <input
        type="text"
        placeholder="Enter Ethereum address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-80"
      />
      <button
        onClick={() => setAddress(address)}
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

export default EthBalance;