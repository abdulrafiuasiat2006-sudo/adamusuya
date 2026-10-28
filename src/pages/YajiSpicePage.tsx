import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SPICE_LEVELS_INFO } from '../data/menu';
import { Flame, Sparkles, ArrowRight } from 'lucide-react';

export const YajiSpicePage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('Traditional');

  const botanicals = [
    {
      name: 'Kuli-Kuli Cake',
      hausa: 'Kuli-Kuli',
      role: 'Roasted Groundnut Foundation',
      desc: 'Pressed and stone-ground to provide the savory, umami-rich crust that clings to the seared meat.',
    },
    {
      name: 'Sun-Dried Ginger',
      hausa: 'Citta Mai Zafi',
      role: 'Warm Digestive Fire',
      desc: 'Peppery northern ginger root that awakens the palate and cuts through the richness of the cuts.',
    },
    {
      name: 'Negro Pepper (Uda)',
      hausa: 'Uda Mai Kamshi',
      role: 'Smoky Resinous Spice',
      desc: 'Wild pod harvested along the Sahel belt, imparting an ancient herbal fragrance reminiscent of dark nutmeg.',
    },
    {
      name: 'Calabash Nutmeg',
      hausa: 'Ehuru',
      role: 'Aromatic Sweetness',
      desc: 'Roasted whole on embers before hand-grinding to unlock fragrant essential oils.',
    },
    {
      name: 'Sahel Bird’s Eye Chili',
      hausa: 'Barkono',
      role: 'Clean Capsaicin Heat',
      desc: 'Slow-dried in open-air Kano sunshine for a heat that blooms gradually rather than stinging the tongue.',
    },
    {
      name: 'Rock Salt & Garlic Flower',
      hausa: 'Gishirin Dutse',
      role: 'Mineral Balance',
      desc: 'Naturally evaporated salt crystals that amplify natural meat flavors without overwhelming.',
    },
  ];

  const activeLevel =
    SPICE_LEVELS_INFO.find((item) => item.level === selectedLevel) || SPICE_LEVELS_INFO[1];

  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7B2427] font-semibold">
            <span>BOTANICAL CHEMISTRY</span>
            <span aria-hidden="true">·</span>
            <span>STONE-GROUND KANO YAJI</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#12251B] tracking-tight">
            The Alchemy of Yaji
          </h1>

          <p className="text-base sm:text-lg text-[#39271D]/80 font-light leading-relaxed">
            Our dry rub is hand-hammered weekly in Kano using ancestral stone mortars. 
            Eighteen raw botanical elements balanced to elevate the savoriness of flame-kissed cuts.
          </p>
        </div>

        {/* Heat Compass Module */}
        <div className="bg-[#FAF7F0] border border-[#39271D]/15 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#39271D]/15 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2427] block">
                Interactive Heat Compass
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#12251B] mt-0.5">
                Calibrate Your Heat Preference
              </h2>
            </div>

            {/* Level Selector Tabs */}
            <div className="flex items-center gap-2">
              {SPICE_LEVELS_INFO.map((item) => {
                const isSelected = selectedLevel === item.level;
                return (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => setSelectedLevel(item.level)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#12251B] text-[#F5F0E6]'
                        : 'bg-[#F5F0E6] text-[#39271D]/70 hover:text-[#12251B] border border-[#39271D]/15'
                    }`}
                  >
                    {item.level}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Level Detail Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#7B2427] font-semibold">
                Profile Title
              </div>
              <div className="font-serif text-2xl text-[#12251B] font-medium mt-1">
                {activeLevel.title}
              </div>
              <div className="text-xs font-mono text-[#B58A45] mt-1 font-semibold">
                Heat Rating: {activeLevel.heatRating}
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-[#39271D]/80 leading-relaxed font-light">
                {activeLevel.notes}
              </p>
              <div className="text-xs text-[#12251B] font-medium pt-1">
                <span className="text-[#7B2427] font-semibold">Recommended For: </span>
                {activeLevel.recommendedFor}
              </div>
            </div>
          </div>
        </div>

        {/* Botanicals Showcase */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7B2427]">
              The Core Botanicals
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#12251B]">
              Hand-Harvested Across the Sahel Belt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {botanicals.map((botanical) => (
              <div
                key={botanical.name}
                className="p-6 bg-[#FAF7F0] border border-[#39271D]/12 space-y-2 shadow-sm"
              >
                <div className="flex items-center justify-between text-[11px] text-[#7B2427] uppercase tracking-[0.18em] font-medium">
                  <span>{botanical.hausa}</span>
                  <span className="text-[#B58A45]">Botanical Origin</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#12251B]">
                  {botanical.name}
                </h3>
                <div className="text-xs font-semibold text-[#12251B]/70 pb-1">
                  {botanical.role}
                </div>
                <p className="text-xs text-[#39271D]/75 leading-relaxed font-light">
                  {botanical.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-[#39271D]/15">
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1e3d2d] transition-colors shadow"
          >
            <span>Experience The Yaji On Our Cuts</span>
            <ArrowRight className="w-4 h-4 text-[#C9AD7A]" />
          </Link>
        </div>

      </div>
    </div>
  );
};
