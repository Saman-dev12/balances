import React, { useState } from 'react';

const SolBalance: React.FC = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    setLoading(true);
    try {
      // Replace with actual API call to fetch balance
      const response = await fetch(`https://api.solana.com/getBalance?address=${address}`);
      const data = await response.json();
      setBalance(data.balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-12 max-w-sm">
      <h1 className="text-4xl font-bold mb-4">Solana Balance Checker</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter Solana address"
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={fetchBalance}
          disabled={loading}
        >
          {loading ? <div className="loader" /> : 'Get Balance'}
        </button>
      </div>
      {balance !== null && (
        <h2 className="text-2xl">Balance: {balance} SOL</h2>
      )}
    </div>
  );
};

export default SolBalance;
