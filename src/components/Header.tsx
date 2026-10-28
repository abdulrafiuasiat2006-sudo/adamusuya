import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BrandSeal } from './BrandSeal';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartTotalItems } = useCart();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/menu', label: 'The Collection' },
    { to: '/packaging', label: 'Kraft Packaging' },
    { to: '/heritage', label: 'Our Heritage' },
    { to: '/yaji-spice', label: 'Yaji Alchemy' },
    { to: '/locations', label: 'Boutiques' },
    { to: '/concierge', label: 'Private Concierge' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#39271D]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly 3-Zone One-Row Top Bar Contract */}
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Zone 1: Brand Wordmark & Seal */}
          <Link
            to="/"
            className="flex items-center gap-3 group shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A45]"
          >
            <BrandSeal size={40} />
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.22em] uppercase text-[#12251B] transition-colors group-hover:text-[#7B2427]">
              ADAMU SUYA
            </span>
          </Link>

          {/* Zone 2: Clean Semantic Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide text-[#39271D]/80">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors whitespace-nowrap shrink-0 border-b pb-0.5 ${
                    isActive
                      ? 'text-[#12251B] font-semibold border-[#12251B]'
                      : 'hover:text-[#12251B] border-transparent hover:border-[#12251B]/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Bag Page Link) */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/bag"
              className="relative inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#12251B] text-[#F5F0E6] text-xs font-semibold tracking-wider uppercase border border-[#12251B] hover:bg-[#1e3d2d] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A45]"
              aria-label={`View order bag, ${cartTotalItems} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#C9AD7A]" />
              <span className="whitespace-nowrap">Order Bag</span>
              <span className="ml-1 px-1.5 py-0.2 text-[11px] font-mono tabular-nums bg-[#7B2427] text-[#F5F0E6]">
                {cartTotalItems}
              </span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#12251B] hover:text-[#7B2427] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#39271D]/10 bg-[#F5F0E6] px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-serif font-medium text-[#12251B] hover:text-[#7B2427] py-1 border-b border-[#39271D]/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/bag"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-base font-serif font-medium text-[#7B2427] py-2"
          >
            <span>Your Order Bag</span>
            <span className="font-mono text-xs px-2 py-0.5 bg-[#7B2427] text-[#F5F0E6]">
              {cartTotalItems} items
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};
