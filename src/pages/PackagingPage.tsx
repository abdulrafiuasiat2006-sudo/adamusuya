import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Shield, Sparkles, PackageCheck, ArrowRight, Check } from 'lucide-react';
import { BrandSeal } from '../components/BrandSeal';

export const PackagingPage: React.FC = () => {
  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7B2427] font-semibold">
            <span>PACKAGING ARCHITECTURE</span>
            <span aria-hidden="true">·</span>
            <span>UNBOXING RITUAL</span>
            <span aria-hidden="true">·</span>
            <span>EST. 1968</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#12251B] tracking-tight">
            The Patented Kraft Box
          </h1>

          <p className="text-base sm:text-lg text-[#39271D]/80 font-light leading-relaxed">
            Elevating the nostalgic Lagos street suya folded in yesterday's newsprint into a 
            refined, insulated unboxing experience engineered to preserve charcoal hearth heat.
          </p>
        </div>

        {/* Hero Packaging Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Imagery */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden border border-[#C9AD7A]/40 shadow-2xl bg-[#12251B]">
              <img
                src="/src/assets/images/packaging_kraft_box_1792433593355.jpg"
                alt="Adamu Suya luxury kraft paper takeaway box with vintage newspaper print and embossed gold and burgundy wax seal"
                className="w-full h-[450px] sm:h-[540px] object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="absolute top-4 right-4 bg-[#F5F0E6]/95 border border-[#39271D]/20 p-3 shadow-md text-center">
                <span className="block text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-[#12251B]">
                  PATENTED DESIGN
                </span>
                <span className="block font-mono text-xs text-[#7B2427] font-bold">
                  CRUST-LOCK™ SYSTEM
                </span>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#12251B]/40 pointer-events-none" />
          </div>

          {/* Core Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2427]">
              The Problem We Solved
            </div>
            <h2 className="font-serif text-3xl font-medium text-[#12251B] leading-tight">
              Hot Suya In Lagos Traffic <br />
              <span className="italic text-[#7B2427]">Without The Sogginess.</span>
            </h2>

            <p className="text-sm text-[#39271D]/80 leading-relaxed font-light">
              Traditional plastic bags and unvented foil traps condensation, turning crisp, 
              fire-charred suya limp within 15 minutes. Our double-walled kraft box features micro-vented 
              chimneys that exhaust moisture while retaining radiant charcoal temperature.
            </p>

            <div className="p-4 bg-[#FAF7F0] border border-[#39271D]/15 space-y-2">
              <span className="font-serif text-base font-semibold text-[#12251B] block">
                Thermal Testing Benchmark
              </span>
              <p className="text-xs text-[#39271D]/75 leading-relaxed">
                Retains over 68°C core temperature for up to 55 minutes of dispatch across Victoria Island, 
                Ikoyi, Lekki, and Ikeja GRA.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1e3d2d] transition-colors shadow"
              >
                <span>Order a Kraft Tasting Box</span>
                <ArrowRight className="w-4 h-4 text-[#C9AD7A]" />
              </Link>
            </div>
          </div>

        </div>

        {/* 3 Material Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          
          <div className="p-8 bg-[#FAF7F0] border border-[#39271D]/15 space-y-4">
            <div className="w-10 h-10 bg-[#12251B] text-[#C9AD7A] flex items-center justify-center">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#12251B]">
              Micro-Vented Architecture
            </h3>
            <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
              Calculated laser apertures release excess steam without letting heat escape. The spiced peanut 
              crust arrives as intensely crisp as the second it left the glowing mangrove embers.
            </p>
          </div>

          <div className="p-8 bg-[#FAF7F0] border border-[#39271D]/15 space-y-4">
            <div className="w-10 h-10 bg-[#12251B] text-[#C9AD7A] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#12251B]">
              Food-Safe Broadsheet Liner
            </h3>
            <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
              Certified non-toxic greaseproof paper printed with natural vegetable soy inks. Chronicles 
              the lore of Northern Nigerian spice caravans and early Lagos street food heritage.
            </p>
          </div>

          <div className="p-8 bg-[#FAF7F0] border border-[#39271D]/15 space-y-4">
            <div className="w-10 h-10 bg-[#12251B] text-[#C9AD7A] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#12251B]">
              Embossed Wax Seal
            </h3>
            <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
              Every parcel is sealed by hand with the Adamu Suya gold and burgundy wax stamp. 
              Serves as both a tamper-evident seal and an emblem of culinary distinction.
            </p>
          </div>

        </div>

        {/* Step-by-Step Unboxing Ritual */}
        <div className="bg-[#FAF7F0] border border-[#39271D]/15 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2427]">
              Ceremony of the Senses
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#12251B]">
              The Three-Step Unboxing Ritual
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-t border-[#39271D]/15 pt-4">
              <span className="font-mono text-sm text-[#7B2427] font-bold">01. THE CRACK</span>
              <h4 className="font-serif text-lg font-medium text-[#12251B]">Break the Wax Seal</h4>
              <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
                Snap the embossed wax crest to release the first fragrant cloud of aromatic clove, 
                ginger, and charred hardwood smoke.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#39271D]/15 pt-4">
              <span className="font-mono text-sm text-[#7B2427] font-bold">02. THE UNFOLD</span>
              <h4 className="font-serif text-lg font-medium text-[#12251B]">Unfurl the Broadsheet</h4>
              <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
                Peel back the greaseproof vintage newsprint liner to reveal the golden-charred skewers 
                nestled neatly against fresh purple onions and lime wedges.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#39271D]/15 pt-4">
              <span className="font-mono text-sm text-[#7B2427] font-bold">03. THE SEASON</span>
              <h4 className="font-serif text-lg font-medium text-[#12251B]">Squeeze & Scatter</h4>
              <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
                Squeeze the fresh key lime over the sizzling edges to activate the yaji's acidity, 
                then pinch extra stone-ground spice over each cut.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
