import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import NavLink from '../atoms/NavLink';
import NavIcon from '../atoms/NavIcon';

const navLinkItems = ["SS", "FW", "PANTS", "T-Shirt", "SALE", "COLLECTION", "COMMUNITY"];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white z-20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link to="/home" className="text-2xl font-bold text-yellow-400 tracking-widest">
                        LANDAS
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinkItems.map(link => <NavLink key={link}>{link}</NavLink>)}
                    </div>
                    <div className="hidden md:flex items-center space-x-5">
                        <NavIcon><Search size={20} /></NavIcon>
                        <NavIcon><ShoppingCart size={20} /></NavIcon>
                        <NavIcon><User size={20} /></NavIcon>
                        <Link to="/" className="text-xs hover:text-yellow-400">로그아웃</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-black bg-opacity-80 pb-4">
                    <div className="flex flex-col items-center space-y-4">
                        {navLinkItems.map(link => <NavLink key={link}>{link}</NavLink>)}
                        <div className="flex items-center space-x-6 pt-4">
                            <NavIcon><Search size={22} /></NavIcon>
                            <NavIcon><ShoppingCart size={22} /></NavIcon>
                            <NavIcon><User size={22} /></NavIcon>
                        </div>
                        <Link to="/" className="text-sm pt-2 hover:text-yellow-400">로그아웃</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;