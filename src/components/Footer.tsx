import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandSeal } from './BrandSeal';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0B1710] text-[#F5F0E6] border-t border-[#C9AD7A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F5F0E6]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <BrandSeal size={50} />
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] uppercase text-[#F5F0E6] block group-hover:text-[#C9AD7A] transition-colors">
                  ADAMU SUYA
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9AD7A] font-medium block">
                  ESTABLISHED 1968 · LAGOS
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#F5F0E6]/70 leading-relaxed font-light max-w-sm">
              Refined Nigerian suya dining, slow-charred over cured mangrove charcoal, 
              seasoned with 18 heritage Sahel botanicals, and delivered in our signature 
              patented vintage newspaper kraft packaging.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C9AD7A] font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-[#C9AD7A]" />
              <span>100% Halal Certified · Single-Source Grass-Fed</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9AD7A]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#F5F0E6]/75">
              <li>
                <Link to="/menu" className="hover:text-[#F5F0E6] transition-colors">
                  The Collection
                </Link>
              </li>
              <li>
                <Link to="/packaging" className="hover:text-[#F5F0E6] transition-colors">
                  Kraft Box Architecture
                </Link>
              </li>
              <li>
                <Link to="/heritage" className="hover:text-[#F5F0E6] transition-colors">
                  Grill Hearth Mastery
                </Link>
              </li>
              <li>
                <Link to="/yaji-spice" className="hover:text-[#F5F0E6] transition-colors">
                  Yaji Spice Alchemy
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#F5F0E6] transition-colors">
                  Boutique Hearths
                </Link>
              </li>
              <li>
                <Link to="/concierge" className="hover:text-[#F5F0E6] transition-colors">
                  Private Grill Concierge
                </Link>
              </li>
              <li>
                <Link to="/bag" className="hover:text-[#F5F0E6] transition-colors">
                  Your Order Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Boutiques Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9AD7A]">
              Hearth Hours
            </div>
            <div className="space-y-2.5 text-xs text-[#F5F0E6]/75">
              <div>
                <span className="font-medium text-[#F5F0E6] block">Victoria Island Flagship</span>
                <span>Tue – Sun: 3:00 PM – Midnight</span>
              </div>
              <div>
                <span className="font-medium text-[#F5F0E6] block">Ikoyi Private Pickup Lounge</span>
                <span>Daily: 4:00 PM – 11:30 PM</span>
              </div>
              <div>
                <span className="font-medium text-[#F5F0E6] block">Maitama Abuja Pavilion</span>
                <span>Wed – Sun: 3:00 PM – Midnight</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Tasting Circle */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9AD7A]">
              The Connoisseur’s Circle
            </div>
            <p className="text-xs text-[#F5F0E6]/70 leading-relaxed font-light">
              Receive private invitations to seasonal wild game suya tastings and weekend pop-ups.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#12251B] border border-[#C9AD7A]/40 text-xs text-[#C9AD7A]">
                Thank you for joining our private circle.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex border border-[#F5F0E6]/20 bg-[#12251B]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 text-xs text-[#F5F0E6] placeholder-[#F5F0E6]/40 focus:outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    className="px-3 bg-[#B58A45] text-[#12251B] hover:bg-[#C9AD7A] transition-colors cursor-pointer shrink-0"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-[10px] text-[#F5F0E6]/50">
                  Strictly culinary updates. No spam ever.
                </div>
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#F5F0E6]/60 border-t border-[#F5F0E6]/10">
              <span className="font-semibold text-[#C9AD7A]">Allergen Notice: </span>
              Authentic yaji spice contains roasted peanuts (kuli-kuli).
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E6]/50 font-light">
          <div>
            © {new Date().getFullYear()} Adamu Suya Craft Ltd. All rights reserved. Registered in Nigeria & UK.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/locations" className="hover:text-[#F5F0E6] transition-colors">Lagos</Link>
            <span aria-hidden="true">·</span>
            <Link to="/locations" className="hover:text-[#F5F0E6] transition-colors">Abuja</Link>
            <span aria-hidden="true">·</span>
            <Link to="/concierge" className="hover:text-[#F5F0E6] transition-colors">London Pop-Up</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
