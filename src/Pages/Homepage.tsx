import React from "react";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to <span className="text-yellow-300">Web3 Balances</span>
      </h1>
      <p className="text-xl text-gray-200 mb-10 max-w-2xl text-center">
        Effortlessly check your balances with security and convenience. Your gateway to managing Web3 assets.
      </p>
      <h2 className="text-2xl font-bold mb-4">Select a network:</h2>
      <div className="flex space-x-4 mb-10">
      <Link to={"/solbalance"} className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
        Solana Balance
      </Link>
      <Link to={"/ethbalance"} className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
        ETH Balance
      </Link>
      </div>
    </div>
  );
};

export default Homepage;
