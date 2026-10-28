import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#12251B] text-[#F5F0E6] border-b border-[#39271D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Headline */}
          <div className="lg:col-span-6 space-y-8">

            {/* Primary Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#F5F0E6] max-w-xl text-balance">
              The Art of <br />
              <span className="italic font-light text-[#C9AD7A]">Slow-Charred</span> Luxury.
            </h1>

            {/* Editorial Body Text */}
            <p className="text-base sm:text-lg text-[#F5F0E6]/80 font-light leading-relaxed max-w-lg">
              Prime grass-fed beef and savannah ram cuts, hand-marinated in stone-ground 
              Kano yaji spice, blistered over hardwood charcoal embers, and sealed in our 
              signature vintage newspaper kraft box.
            </p>

            {/* Hallmarks / Adjacency Proof Points */}
            <div className="pt-2 border-t border-[#F5F0E6]/15 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#C9AD7A] font-medium">100%</span>
                <span className="block text-xs uppercase tracking-wider text-[#F5F0E6]/70 mt-1">Sahel Grass-Fed</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#C9AD7A] font-medium">18-Spice</span>
                <span className="block text-xs uppercase tracking-wider text-[#F5F0E6]/70 mt-1">Heritage Yaji</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl text-[#C9AD7A] font-medium">58 Years</span>
                <span className="block text-xs uppercase tracking-wider text-[#F5F0E6]/70 mt-1">Artisanal Mastery</span>
              </div>
            </div>

            {/* Call to Actions - Semantic Router Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B58A45] text-[#12251B] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#C9AD7A] transition-all duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F0E6]"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/packaging"
                className="inline-flex items-center justify-center px-6 py-4 border border-[#F5F0E6]/30 text-[#F5F0E6] font-medium text-xs tracking-[0.18em] uppercase hover:bg-[#F5F0E6]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9AD7A]"
              >
                The Kraft Box Ritual
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Culinary Presentation Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden border border-[#C9AD7A]/30 shadow-2xl bg-[#0B1710]">
              <img
                src="/src/assets/images/hero_suya_presentation_1792433593101.jpg"
                alt="Adamu Suya signature beef skewers served on authentic vintage newspaper kraft paper with sliced onions and artisanal yaji"
                className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Refined editorial caption badge overlay */}
              <Link
                to="/menu/adamu-prime-beef-suya"
                className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#12251B] via-[#12251B]/85 to-transparent flex items-center justify-between text-xs text-[#F5F0E6]/90 border-t border-[#C9AD7A]/20 hover:text-[#C9AD7A] transition-colors"
              >
                <div className="space-y-0.5 text-left">
                  <div className="font-serif text-sm tracking-wide text-[#F5F0E6]">The Royal Beef Suya Skewer</div>
                  <div className="text-[11px] text-[#C9AD7A] uppercase tracking-wider">Charred on wild mangrove coals · View Details →</div>
                </div>
                <div className="font-mono text-sm tracking-tight text-[#F5F0E6] font-medium">
                  ₦12,500 / 500g
                </div>
              </Link>
            </div>

            {/* Subtle vintage newspaper paper corner accent */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#C9AD7A]/40 pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#C9AD7A]/40 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
