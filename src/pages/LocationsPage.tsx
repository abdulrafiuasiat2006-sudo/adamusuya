import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS_DATA } from '../data/menu';
import { MapPin, Clock, Phone, Check, ExternalLink, ArrowRight } from 'lucide-react';

export const LocationsPage: React.FC = () => {
  const [activeLocationId, setActiveLocationId] = useState<string>(LOCATIONS_DATA[0].id);

  const selectedLoc =
    LOCATIONS_DATA.find((l) => l.id === activeLocationId) || LOCATIONS_DATA[0];

  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7B2427] font-semibold">
            <span>BOUTIQUES & TASTING HEARTHS</span>
            <span aria-hidden="true">·</span>
            <span>LAGOS & ABUJA</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#12251B] tracking-tight">
            Our Hearth Locations
          </h1>

          <p className="text-base sm:text-lg text-[#39271D]/80 font-light leading-relaxed">
            Experience Adamu Suya fresh from the glowing charcoal hearth. Dine in our open-air courtyards, 
            or collect your insulated kraft box through priority curbside dispatch.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {LOCATIONS_DATA.map((loc) => {
            const isSelected = activeLocationId === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLocationId(loc.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#12251B] text-[#F5F0E6] shadow-sm'
                    : 'bg-[#FAF7F0] text-[#39271D]/70 hover:text-[#12251B] border border-[#39271D]/15'
                }`}
              >
                {loc.name.split(' ')[0]} ({loc.city})
              </button>
            );
          })}
        </div>

        {/* Selected Location Card */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F0] border border-[#39271D]/20 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {/* Left: Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2427] block">
                  {selectedLoc.city} Flagship Destination
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#12251B] mt-1">
                  {selectedLoc.name}
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#39271D]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B58A45] shrink-0 mt-0.5" />
                  <span>{selectedLoc.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B58A45] shrink-0 mt-0.5" />
                  <span>{selectedLoc.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B58A45] shrink-0" />
                  <a
                    href={`tel:${selectedLoc.phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#7B2427] font-mono transition-colors font-semibold"
                  >
                    {selectedLoc.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${selectedLoc.name}, ${selectedLoc.address}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#12251B] hover:text-[#7B2427] border-b border-[#12251B] pb-1 transition-colors"
                >
                  <span>Open in Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#7B2427] hover:underline"
                >
                  <span>Order Pickup Here</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Amenities & Curbside Services */}
            <div className="bg-[#F5F0E6] p-6 sm:p-8 border border-[#39271D]/15 space-y-4">
              <h3 className="font-serif text-lg font-medium text-[#12251B]">
                Boutique Services & Protocol
              </h3>

              <div className="space-y-3">
                {selectedLoc.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-[#39271D]/80">
                    <div className="w-4 h-4 bg-[#12251B] text-[#C9AD7A] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#39271D]/10 text-xs text-[#39271D]/70 leading-relaxed italic">
                All takeaway boxes are stored in temperature-regulated cedar cabinets until customer arrival, 
                preserving core heat and crust crispness.
              </div>
            </div>

          </div>
        </div>

        {/* All Boutiques Overview Grid */}
        <div className="space-y-6 pt-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-center text-[#12251B]">
            All Boutique Hearths
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`p-6 border cursor-pointer transition-all ${
                  activeLocationId === loc.id
                    ? 'border-[#12251B] bg-[#FAF7F0] shadow-md'
                    : 'border-[#39271D]/15 bg-[#FAF7F0]/60 hover:border-[#12251B]/40'
                }`}
              >
                <div className="text-[11px] uppercase font-bold tracking-wider text-[#7B2427]">
                  {loc.city}
                </div>
                <h3 className="font-serif text-lg font-medium text-[#12251B] mt-1">
                  {loc.name.split(' ')[0]}
                </h3>
                <p className="text-xs text-[#39271D]/75 line-clamp-2 mt-2 leading-relaxed">
                  {loc.address}
                </p>
                <div className="text-xs text-[#12251B] font-mono mt-3 font-semibold">
                  {loc.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
