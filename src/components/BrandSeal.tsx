import React from 'react';

interface BrandSealProps {
  size?: number;
  className?: string;
  variant?: 'seal' | 'horizontal';
}

export const BrandSeal: React.FC<BrandSealProps> = ({ size = 64, className = '', variant = 'seal' }) => {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <BrandSeal size={Math.min(size, 44)} />
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg tracking-[0.2em] font-bold uppercase text-[#12251B] leading-none">
            ADAMU SUYA
          </span>
          <span className="text-[10px] tracking-[0.28em] font-sans font-medium uppercase text-[#7B2427] mt-1">
            EST. 1968 · LAGOS
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full transition-transform duration-300 hover:scale-105 select-none ${className}`}
      style={{ width: size, height: size }}
      title="Adamu Suya — Established 1968"
    >
      <img
        src="/src/assets/images/adamu_seal_logo_1793175028944.jpg"
        alt="Adamu Suya Gold & Burgundy Wax Seal Emblem"
        width={size}
        height={size}
        className="w-full h-full rounded-full object-cover drop-shadow-[0_4px_12px_rgba(57,39,29,0.22)]"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};
