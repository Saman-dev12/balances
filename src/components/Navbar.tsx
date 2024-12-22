import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    Balance Checker
                </div>
                <div className="flex space-x-4">
                    <NavLink to="/" className="text-gray-300 hover:text-white">
                        Home
                    </NavLink>
                    <NavLink to="/solbalance" className="text-gray-300 hover:text-white">
                        SOL Balance
                    </NavLink>
                    <NavLink to="/ethbalance" className="text-gray-300 hover:text-white">
                        ETH Balance
                    </NavLink>
                    <NavLink to="/connecteth" className="text-gray-300 hover:text-white">
                        ETH Connect
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;