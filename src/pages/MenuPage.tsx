import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../data/menu';
import { Category } from '../types';
import { Clock, Flame, ArrowRight, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { addToCart } = useCart();
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);

  const allCategoryDefinitions: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Curations' },
    { id: 'signature', label: 'Signature Skewers' },
    { id: 'boxes', label: 'Kraft Tasting Boxes' },
    { id: 'sides', label: 'Artisanal Sides' },
    { id: 'refreshments', label: 'Botanical Tonics' },
  ];

  const categories = allCategoryDefinitions.filter(
    (cat) => cat.id === 'all' || MENU_ITEMS.some((item) => item.category === cat.id)
  );

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleQuickAdd = (item: typeof MENU_ITEMS[0], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      cartItemId: `${item.id}-${Date.now()}`,
      menuItem: item,
      selectedWeight: item.weights ? item.weights[0] : undefined,
      spiceLevel: item.spiceDefault,
      extraGarnishes: ['Extra Sliced Red Onions', 'Fresh Cut Lime'],
      packaging: 'Signature Kraft Newspaper Box',
      unitPrice: item.basePrice,
      quantity: 1,
    });
    setQuickAddedId(item.id);
    setTimeout(() => setQuickAddedId(null), 2500);
  };

  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase text-[#7B2427] font-semibold">
            <span>THE COMPLETE CATALOGUE</span>
            <span aria-hidden="true">·</span>
            <span>CHARRED TO ORDER</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#12251B] tracking-tight">
            The Adamu Suya Collection
          </h1>

          <p className="text-sm sm:text-base text-[#39271D]/75 font-light leading-relaxed">
            Every skewer is seasoned with hand-milled Sahel aromatics, flame-kissed over wild mangrove 
            embers, and packed in our patented greaseproof kraft newsprint boxes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12 border-b border-[#39271D]/15 pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#12251B] text-[#F5F0E6]'
                    : 'text-[#39271D]/70 hover:text-[#12251B] hover:bg-[#39271D]/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-[#FAF7F0] border border-[#39271D]/15 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Link to={`/menu/${item.id}`} className="block">
                {/* Product Image Slot */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#12251B]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Clean unboxed category kicker on image overlay */}
                  <div className="absolute top-3 left-3 bg-[#12251B]/85 text-[#F5F0E6] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-medium backdrop-blur-xs">
                    {item.category === 'boxes' ? 'Kraft Box Exclusive' : item.category}
                  </div>

                  {item.hausaName && (
                    <div className="absolute bottom-3 left-3 bg-[#FAF7F0]/90 text-[#12251B] px-2.5 py-0.5 text-[11px] font-serif italic backdrop-blur-xs">
                      {item.hausaName}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h2 className="font-serif text-xl font-medium text-[#12251B] group-hover:text-[#7B2427] transition-colors">
                      {item.name}
                    </h2>
                    <div className="font-mono text-sm font-semibold tabular-nums text-[#12251B] shrink-0">
                      {item.priceDisplay}
                    </div>
                  </div>

                  <p className="text-xs text-[#39271D]/80 leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>

                  {/* Unboxed Metadata */}
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

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <Link
                  to={`/menu/${item.id}`}
                  className="flex-1 py-2.5 px-4 bg-[#F5F0E6] hover:bg-[#12251B] text-[#12251B] hover:text-[#F5F0E6] border border-[#12251B] text-xs uppercase tracking-[0.16em] font-medium transition-colors text-center"
                >
                  View Details & Customize
                </Link>
                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(item, e)}
                  className="p-2.5 bg-[#12251B] text-[#F5F0E6] hover:bg-[#1f3f2f] transition-colors cursor-pointer shrink-0"
                  title="Quick add 1 portion to bag"
                  aria-label={`Quick add ${item.name} to order bag`}
                >
                  <Plus className="w-4 h-4 text-[#C9AD7A]" />
                </button>
              </div>

              {quickAddedId === item.id && (
                <div className="px-6 pb-4 text-[11px] text-[#12251B] font-medium bg-[#C9AD7A]/20 py-1.5 text-center animate-in fade-in">
                  ✓ Added 1 portion to your bag!
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
