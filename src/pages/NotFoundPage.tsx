import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BrandSeal } from '../components/BrandSeal';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 bg-[#F5F0E6] text-[#39271D] min-h-[75vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="flex justify-center">
          <BrandSeal size={64} />
        </div>
        <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#7B2427] font-bold block">
          404 · PAGE NOT LOCATED
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#12251B]">
          The Hearth Has Moved.
        </h1>
        <p className="text-sm text-[#39271D]/75 font-light leading-relaxed">
          The destination you requested does not exist or has been relocated to another section of the Adamu Suya storefront.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1e3d2d] transition-colors shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
