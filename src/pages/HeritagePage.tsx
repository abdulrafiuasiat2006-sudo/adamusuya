import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Compass, Award, Clock, ArrowRight } from 'lucide-react';

export const HeritagePage: React.FC = () => {
  const milestones = [
    {
      year: '1968',
      title: 'The First Hearth on Broad Street',
      desc: 'Alhaji Adamu sets up his maiden open charcoal brazier in old Lagos, using ancestral spice recipes carried from the ancient walls of Kano.',
    },
    {
      year: '1984',
      title: 'The 18-Spice Formulation Codified',
      desc: 'After decades of refinement, the ratio of defatted kuli-kuli, wild negro pepper (uda), and dried ginger is set into the permanent Adamu standard.',
    },
    {
      year: '2005',
      title: 'Victoria Island Flagship Opens',
      desc: 'Adamu Suya establishes its flagship grill garden in Akin Leigh Street, serving heads of state, diplomats, and culinary lovers across West Africa.',
    },
    {
      year: '2024',
      title: 'The Patented Kraft Box Architecture',
      desc: 'Modern thermodynamic engineering meets traditional newsprint wrap, introducing micro-vented 350gsm kraft boxes with embossed gold wax seals.',
    },
  ];

  return (
    <div className="py-16 bg-[#12251B] text-[#F5F0E6] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#C9AD7A] font-semibold">
            <span>PROVENANCE & CRAFT</span>
            <span aria-hidden="true">·</span>
            <span>ESTABLISHED 1968</span>
            <span aria-hidden="true">·</span>
            <span>FIFTY-EIGHT YEARS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F0E6] tracking-tight">
            The Fire Masters of Adamu
          </h1>

          <p className="text-base sm:text-lg text-[#F5F0E6]/80 font-light leading-relaxed">
            Suya is not fast food. It is an ancient Northern Nigerian ceremonial art of fire, 
            botanical spice chemistry, and unhurried patience.
          </p>
        </div>

        {/* Master Artisan Documentary Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden border border-[#C9AD7A]/40 shadow-2xl bg-[#0B1710]">
              <img
                src="/src/assets/images/craft_charcoal_grill_master_1792433596024.jpg"
                alt="Adamu master suya grill artisan seasoning skewers over glowing mangrove charcoal embers"
                className="w-full h-[450px] sm:h-[520px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0B1710] via-[#0B1710]/85 to-transparent flex items-center justify-between text-xs text-[#F5F0E6]/90 border-t border-[#C9AD7A]/20">
                <span className="font-serif text-sm italic">Mallam Garba · Chief Grill Master (32 Years at Adamu)</span>
                <span className="font-mono text-xs text-[#C9AD7A]">850°C Charcoal Bed</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9AD7A]">
              The Mangrove Hearth Principle
            </div>

            <h2 className="font-serif text-3xl font-medium text-[#C9AD7A] leading-tight">
              Why Modern Grills <br />
              <span className="text-[#F5F0E6]">Cannot Replicate Our Suya.</span>
            </h2>

            <p className="text-sm text-[#F5F0E6]/80 leading-relaxed font-light">
              Gas flames and electric heaters produce wet radiant heat with zero phenolic aromatic smoke. 
              Our kitchen burns only cured mangrove timber coals from the brackish Niger Delta waterways. 
              The intense dry thermal radiation caramelizes the groundnut crust in seconds while sealing inside 
              every drop of natural savory marrow.
            </p>

            <div className="space-y-4 pt-2">
              <div className="border-t border-[#F5F0E6]/15 pt-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F0E6]">
                  <Flame className="w-3.5 h-3.5 text-[#B58A45]" />
                  <span>850°C Pure Hardwood Embers</span>
                </div>
                <p className="text-xs text-[#F5F0E6]/70 leading-relaxed mt-1">
                  Zero chemical accelerants. Ignited with cedar wood shavings for clean, aromatic smoke.
                </p>
              </div>

              <div className="border-t border-[#F5F0E6]/15 pt-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F0E6]">
                  <Compass className="w-3.5 h-3.5 text-[#B58A45]" />
                  <span>Northern Sahel Herds</span>
                </div>
                <p className="text-xs text-[#F5F0E6]/70 leading-relaxed mt-1">
                  We partner exclusively with northern pastoralists whose cattle graze wild prairie grasses.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#B58A45] text-[#12251B] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C9AD7A] transition-colors"
              >
                <span>Taste The Heritage Cuts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Historical Timeline */}
        <div className="bg-[#0B1710] border border-[#C9AD7A]/25 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9AD7A]">
              Chronicle of Excellence
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#F5F0E6]">
              58 Years of Culinary Distinction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="space-y-2 border-t border-[#C9AD7A]/30 pt-4">
                <span className="font-mono text-xl text-[#C9AD7A] font-bold block">{m.year}</span>
                <h4 className="font-serif text-base font-medium text-[#F5F0E6]">{m.title}</h4>
                <p className="text-xs text-[#F5F0E6]/70 leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
