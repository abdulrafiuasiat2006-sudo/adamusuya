import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandSeal } from '../components/BrandSeal';
import { Flame, Shield, Check, Phone, Mail, Calendar, Users, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export const ConciergePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Private Residence Dinner',
    guestCount: '25 - 50 Guests',
    eventDate: '',
    city: 'Lagos (Ikoyi / VI / Lekki)',
    cutsOfInterest: ['Prime Royal Beef Suya', 'Heritage Ram Suya (Tsire)'],
    notes: '',
  });

  const toggleCut = (cut: string) => {
    if (formData.cutsOfInterest.includes(cut)) {
      setFormData({
        ...formData,
        cutsOfInterest: formData.cutsOfInterest.filter((c) => c !== cut),
      });
    } else {
      setFormData({
        ...formData,
        cutsOfInterest: [...formData.cutsOfInterest, cut],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7B2427] font-semibold">
            <span>PRIVATE DINING & HEARTH EXPERIENCE</span>
            <span aria-hidden="true">·</span>
            <span>VIP EVENT CONCIERGE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#12251B] tracking-tight">
            Live Suya Grill Master Concierge
          </h1>

          <p className="text-base sm:text-lg text-[#39271D]/80 font-light leading-relaxed">
            Bring our master grill artisans, glowing mangrove coal braziers, and custom wax-sealed 
            kraft boxes directly to your private estate, yacht, wedding reception, or diplomatic gala.
          </p>
        </div>

        {/* 3 Tiered Formats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#FAF7F0] border border-[#39271D]/15 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#7B2427]">
              OPTION 01
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#12251B]">
              The Intimate Residency
            </h3>
            <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
              Dedicated master grill artisan and custom ceramic brazier stationed at your private residence 
              for 10 to 30 distinguished guests. Fresh skewers carved to order.
            </p>
          </div>

          <div className="p-8 bg-[#FAF7F0] border border-[#39271D]/15 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#7B2427]">
              OPTION 02
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#12251B]">
              The Wedding Hearth Station
            </h3>
            <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
              Dual full-hearth station delivering continuous service of Prime Beef, Northern Ram, and Smoked Asun 
              served in personal vintage newspaper broadsheet envelopes.
            </p>
          </div>

          <div className="p-8 bg-[#FAF7F0] border border-[#39271D]/15 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#7B2427]">
              OPTION 03
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#12251B]">
              Executive Gifting Dispatch
            </h3>
            <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
              Curated corporate gifting batches (25 to 500+ boxes) stamped with custom corporate wax seals 
              and delivered simultaneously via heated escort couriers.
            </p>
          </div>
        </div>

        {/* The Inquiry Form Container */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F0] border border-[#39271D]/20 p-8 sm:p-12 shadow-lg">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="flex justify-center">
                <BrandSeal size={72} />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12251B] text-[#C9AD7A] text-xs font-mono tracking-widest uppercase">
                Concierge Dossier Confirmed
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#12251B]">
                Your Inquiry Has Been Logged.
              </h2>
              <p className="text-sm text-[#39271D]/80 max-w-lg mx-auto leading-relaxed">
                Thank you, Chief {formData.name}. Our Head of Private Dining Concierge will reach 
                out to you within two hours via phone and WhatsApp to review your guest requirements, 
                charcoal hearth logistics, and custom tasting menu.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-[#12251B] text-[#12251B] text-xs uppercase tracking-wider font-semibold hover:bg-[#12251B]/5 transition-colors cursor-pointer"
                >
                  Edit Inquiry
                </button>
                <Link
                  to="/menu"
                  className="px-6 py-3 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-wider font-semibold hover:bg-[#1e3d2d] transition-colors"
                >
                  Browse Regular Menu
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="border-b border-[#39271D]/15 pb-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#12251B]">
                  Request Private Grill Service
                </h2>
                <p className="text-xs sm:text-sm text-[#39271D]/75 font-light mt-1">
                  Fill in your event details below to receive a bespoke proposal from our master grill artisans.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                      Full Name & Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Chief Emeka Alabi"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                      Phone Number (WhatsApp Priority) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 802 000 0000"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                      Corporate / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.alabi@enterprise.ng"
                      className="w-full px-3.5 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                      Event Destination / City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    >
                      <option>Lagos (Ikoyi / VI / Lekki)</option>
                      <option>Lagos Mainland (Ikeja GRA / Magodo)</option>
                      <option>Abuja (Maitama / Asokoro)</option>
                      <option>London (Mayfair / Belgravia Pop-Up)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                      Event Nature
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    >
                      <option>Private Residence Dinner</option>
                      <option>Wedding Evening Grill Bar</option>
                      <option>Executive Corporate Tasting</option>
                      <option>Diplomatic Reception</option>
                      <option>Curated Kraft Gift Delivery (50+ Boxes)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                      Estimated Guest Count
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    >
                      <option>10 - 25 Guests (Intimate Table)</option>
                      <option>25 - 50 Guests</option>
                      <option>50 - 150 Guests</option>
                      <option>150+ Guests (Full Live Hearth Station)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Cuts */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                    Cuts & Presentation Elements of Interest
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Prime Royal Beef Suya',
                      'Heritage Ram Suya (Tsire)',
                      'Slow-Smoked Asun Bites',
                      'Custom Gold Wax Seal Gifting Boxes',
                      'Artisanal Yaji Spice Favor Jars',
                      'Live Open-Flame Charcoal Brazier On Site',
                    ].map((cut) => {
                      const isSelected = formData.cutsOfInterest.includes(cut);
                      return (
                        <button
                          key={cut}
                          type="button"
                          onClick={() => toggleCut(cut)}
                          className={`p-3 text-left border transition-colors cursor-pointer flex items-center gap-2.5 ${
                            isSelected
                              ? 'border-[#12251B] bg-[#12251B] text-[#F5F0E6]'
                              : 'border-[#39271D]/15 bg-[#F5F0E6] text-[#39271D]/80'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#C9AD7A] border-[#C9AD7A] text-[#12251B]' : 'border-[#39271D]/30'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{cut}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#12251B]">
                    Event Details & Special Hearth Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Outdoor terrace setup, specific timing, requested heat balance..."
                    className="w-full px-3.5 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1e3d2d] transition-colors cursor-pointer shadow"
                >
                  Submit Private Dining Dossier
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
