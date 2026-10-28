import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { MENU_ITEMS } from '../data/menu';
import { ArrowRight, Clock, Flame, Wind, Shield, Sparkles, MapPin } from 'lucide-react';
import { BrandSeal } from '../components/BrandSeal';

export const HomePage: React.FC = () => {
  const featuredItems = MENU_ITEMS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero />

      {/* Featured Collection Preview Section */}
      <section className="py-20 bg-[#F5F0E6] text-[#39271D] border-b border-[#39271D]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#39271D]/15 pb-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#7B2427] font-semibold mb-2">
                FROM THE CHARCOAL HEARTH
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#12251B] tracking-tight">
                Signature Curations
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#12251B] hover:text-[#7B2427] transition-colors border-b border-[#12251B] pb-1"
            >
              <span>Explore The Full Collection ({MENU_ITEMS.length} Offerings)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-[#FAF7F0] border border-[#39271D]/15 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link to={`/menu/${item.id}`} className="block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#12251B]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    <div className="absolute top-3 left-3 bg-[#12251B]/85 text-[#F5F0E6] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-medium backdrop-blur-xs">
                      {item.category === 'boxes' ? 'Kraft Box Exclusive' : item.category}
                    </div>

                    {item.hausaName && (
                      <div className="absolute bottom-3 left-3 bg-[#FAF7F0]/90 text-[#12251B] px-2.5 py-0.5 text-[11px] font-serif italic backdrop-blur-xs">
                        {item.hausaName}
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl font-medium text-[#12251B] group-hover:text-[#7B2427] transition-colors">
                        {item.name}
                      </h3>
                      <div className="font-mono text-sm font-semibold tabular-nums text-[#12251B] shrink-0">
                        {item.priceDisplay}
                      </div>
                    </div>

                    <p className="text-xs text-[#39271D]/80 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-[#39271D]/65 pt-2 border-t border-[#39271D]/10">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#B58A45]" />
                        <span>{item.prepTimeMinutes} mins grill</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#7B2427]" />
                        <span>{item.spiceDefault} Yaji</span>
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-6 pt-0">
                  <Link
                    to={`/menu/${item.id}`}
                    className="w-full py-2.5 px-4 bg-[#F5F0E6] hover:bg-[#12251B] text-[#12251B] hover:text-[#F5F0E6] border border-[#12251B] text-xs uppercase tracking-[0.16em] font-medium transition-colors text-center block"
                  >
                    View Details & Customize
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Packaging Section Preview */}
      <section className="py-20 bg-[#FAF7F0] border-b border-[#39271D]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden border border-[#C9AD7A]/40 shadow-xl bg-[#12251B]">
                <img
                  src="/src/assets/images/packaging_kraft_box_1792433593355.jpg"
                  alt="Adamu Suya luxury kraft paper takeaway box"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#7B2427] font-semibold">
                THE UNBOXING RITUAL
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#12251B] tracking-tight leading-tight">
                Designed to Preserve the <br />
                <span className="italic text-[#7B2427]">Charcoal Hearth</span> in Transit.
              </h2>
              <p className="text-sm text-[#39271D]/80 leading-relaxed font-light">
                Traditional street suya was folded in yesterday's newsprint. We elevated that nostalgic 
                ritual into a refined thermodynamic experience: unbleached 350gsm kraft paperboard, 
                micro-vented steam escapes, and our iconic wax seal.
              </p>

              <div className="pt-2">
                <Link
                  to="/packaging"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#12251B] hover:text-[#7B2427] border-b border-[#12251B] pb-1 transition-colors"
                >
                  <span>Explore The Packaging Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Heritage & Grill Craft Preview */}
      <section className="py-20 bg-[#12251B] text-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C9AD7A] font-semibold">
                ESTABLISHED 1968 · LAGOS
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F0E6] tracking-tight">
                Fire, Groundnut Oil, & Patience.
              </h2>
              <p className="text-sm text-[#F5F0E6]/80 leading-relaxed font-light">
                True Nigerian suya cannot be rushed on gas or electric grills. Our hearth burns only cured 
                mangrove timber coals from the Niger Delta, imparting an unmistakable smoky sweetness.
              </p>

              <div className="pt-2">
                <Link
                  to="/heritage"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#C9AD7A] hover:text-[#F5F0E6] border-b border-[#C9AD7A] pb-1 transition-colors"
                >
                  <span>Read The Adamu Heritage Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#C9AD7A]/30 shadow-2xl bg-[#0B1710]">
                <img
                  src="/src/assets/images/craft_charcoal_grill_master_1792433596024.jpg"
                  alt="Adamu master grill artisan"
                  className="w-full h-[380px] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Boutiques & Concierge Dual Banner */}
      <section className="py-20 bg-[#F5F0E6] text-[#39271D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Boutiques Card */}
            <div className="p-8 sm:p-10 bg-[#FAF7F0] border border-[#39271D]/15 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2427]">
                  VISIT OUR HEARTHS
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#12251B]">
                  Lagos & Abuja Boutiques
                </h3>
                <p className="text-xs sm:text-sm text-[#39271D]/75 leading-relaxed font-light">
                  Enjoy dining in our open-air courtyard in Victoria Island, or pick up your heated kraft box 
                  at Ikoyi, Ikeja GRA, or Maitama Abuja.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#12251B] hover:text-[#7B2427] border-b border-[#12251B] pb-1 transition-colors"
                >
                  <span>View All Locations & Hours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Private Concierge Card */}
            <div className="p-8 sm:p-10 bg-[#FAF7F0] border border-[#39271D]/15 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2427]">
                  EXCLUSIVE ENTERTAINING
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#12251B]">
                  Private Grill Concierge
                </h3>
                <p className="text-xs sm:text-sm text-[#39271D]/75 leading-relaxed font-light">
                  Host an unforgettable evening with our live charcoal hearth station, master grill chefs, 
                  and bespoke wax-sealed feast boxes at your residence or wedding.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/concierge"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#12251B] hover:text-[#7B2427] border-b border-[#12251B] pb-1 transition-colors"
                >
                  <span>Request Private Concierge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
