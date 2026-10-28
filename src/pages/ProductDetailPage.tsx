import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MENU_ITEMS } from '../data/menu';
import { SpiceLevel, CartItem } from '../types';
import { useCart } from '../context/CartContext';
import { Flame, Clock, ShieldCheck, Check, Plus, Minus, PackageCheck, ArrowLeft, ShoppingBag } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const item = MENU_ITEMS.find((m) => m.id === id);

  const [selectedWeightIndex, setSelectedWeightIndex] = useState(
    item?.weights && item.weights.length > 1 ? 1 : 0
  );
  const [spiceLevel, setSpiceLevel] = useState<SpiceLevel>(item ? item.spiceDefault : 'Traditional');
  const [extraGarnishes, setExtraGarnishes] = useState<string[]>([
    'Extra Sliced Red Onions',
    'Fresh Cut Lime',
  ]);
  const [packaging, setPackaging] = useState<'Signature Kraft Newspaper Box' | 'Vintage Newspaper Parcel'>(
    'Signature Kraft Newspaper Box'
  );
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl text-[#12251B]">Curated Cut Not Found</h1>
        <p className="text-sm text-[#39271D]/70">
          The requested suya cut is not currently in our active seasonal menu.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to The Collection</span>
        </Link>
      </div>
    );
  }

  const multiplier = item.weights ? item.weights[selectedWeightIndex]?.priceMultiplier || 1 : 1;
  const unitPrice = Math.round(item.basePrice * multiplier);
  const totalPrice = unitPrice * quantity;

  const toggleGarnish = (garnish: string) => {
    if (extraGarnishes.includes(garnish)) {
      setExtraGarnishes(extraGarnishes.filter((g) => g !== garnish));
    } else {
      setExtraGarnishes([...extraGarnishes, garnish]);
    }
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      menuItem: item,
      selectedWeight: item.weights ? item.weights[selectedWeightIndex] : undefined,
      spiceLevel,
      extraGarnishes,
      packaging,
      unitPrice,
      quantity,
      specialInstructions: specialInstructions.trim() || undefined,
    };
    addToCart(cartItem);
    setAddedSuccess(true);
  };

  return (
    <div className="py-10 bg-[#F5F0E6] text-[#39271D] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#39271D]/60 mb-8">
          <Link to="/" className="hover:text-[#12251B]">Home</Link>
          <span>/</span>
          <Link to="/menu" className="hover:text-[#12251B]">The Collection</Link>
          <span>/</span>
          <span className="text-[#7B2427] font-semibold">{item.name}</span>
        </nav>

        {/* Product Page Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: High-Res Imagery & Chef's Notes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative overflow-hidden border border-[#39271D]/15 bg-[#12251B] shadow-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />

              {item.hausaName && (
                <div className="absolute bottom-4 left-4 bg-[#FAF7F0]/95 text-[#12251B] px-3 py-1 text-xs font-serif italic backdrop-blur-xs">
                  {item.hausaName} · Authentic Northern Hearth
                </div>
              )}
            </div>

            {/* Preparation Attributes */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-[#FAF7F0] border border-[#39271D]/10 text-xs">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B58A45]" />
                <div>
                  <span className="block font-semibold text-[#12251B]">Grill Hearth Time</span>
                  <span className="text-[#39271D]/70">{item.prepTimeMinutes} Minutes Over Mangrove Coals</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#7B2427]" />
                <div>
                  <span className="block font-semibold text-[#12251B]">Provenance Standard</span>
                  <span className="text-[#39271D]/70">100% Halal Sahel Grass-Fed</span>
                </div>
              </div>
            </div>

            {item.notes && (
              <div className="p-4 bg-[#C9AD7A]/15 border border-[#C9AD7A]/40 text-xs text-[#39271D]/90 leading-relaxed">
                <span className="font-semibold text-[#12251B] uppercase tracking-wider block mb-1">
                  Chef's Serving Tradition:
                </span>
                {item.notes}
              </div>
            )}
          </div>

          {/* Right Column: Customization & Purchase Module */}
          <div className="lg:col-span-6 space-y-8 bg-[#FAF7F0] p-8 sm:p-10 border border-[#39271D]/15 shadow-sm">
            
            {/* Header Lockup */}
            <div className="border-b border-[#39271D]/15 pb-6 space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7B2427]">
                {item.category === 'boxes' ? 'Kraft Box Exclusive' : 'Signature Cut'}
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#12251B] leading-tight">
                {item.name}
              </h1>
              <div className="font-mono text-2xl font-bold text-[#12251B] pt-1">
                ₦{unitPrice.toLocaleString()}
              </div>
              <p className="text-sm text-[#39271D]/80 leading-relaxed font-light pt-2">
                {item.description}
              </p>
            </div>

            {/* Inline Added Confirmation */}
            {addedSuccess && (
              <div className="p-4 bg-[#12251B] text-[#F5F0E6] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C9AD7A] animate-in fade-in">
                <div className="flex items-center gap-2 text-xs">
                  <Check className="w-4 h-4 text-[#C9AD7A]" />
                  <span>Added to your order bag!</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to="/bag"
                    className="px-4 py-2 bg-[#B58A45] text-[#12251B] text-xs uppercase tracking-wider font-semibold hover:bg-[#C9AD7A]"
                  >
                    View Bag
                  </Link>
                  <Link
                    to="/menu"
                    className="px-3 py-2 border border-[#F5F0E6]/40 text-[#F5F0E6] text-xs uppercase tracking-wider hover:bg-[#F5F0E6]/10"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            )}

            {/* Weight / Portion Selector */}
            {item.weights && item.weights.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                  Select Portion & Weight
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {item.weights.map((w, idx) => {
                    const isSelected = selectedWeightIndex === idx;
                    const calculatedPrice = Math.round(item.basePrice * w.priceMultiplier);
                    return (
                      <button
                        key={w.label}
                        type="button"
                        onClick={() => setSelectedWeightIndex(idx)}
                        className={`p-3 text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#12251B] bg-[#12251B] text-[#F5F0E6]'
                            : 'border-[#39271D]/20 bg-[#F5F0E6] hover:border-[#12251B] text-[#39271D]'
                        }`}
                      >
                        <div className="text-xs font-semibold">{w.label}</div>
                        <div
                          className={`text-xs font-mono mt-1 ${
                            isSelected ? 'text-[#C9AD7A]' : 'text-[#7B2427]'
                          }`}
                        >
                          ₦{calculatedPrice.toLocaleString()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sahel Spice Heat Calibration */}
            {item.spiceCustomizable !== false && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                    Stone-Ground Yaji Heat Level
                  </label>
                  <Link
                    to="/yaji-spice"
                    className="text-xs text-[#7B2427] hover:underline flex items-center gap-1"
                  >
                    <span>Spice Guide</span>
                    <Flame className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['Mild', 'Traditional', 'Extra Fiery'] as SpiceLevel[]).map((level) => {
                    const isSelected = spiceLevel === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setSpiceLevel(level)}
                        className={`p-3 text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#7B2427] bg-[#7B2427] text-[#F5F0E6]'
                            : 'border-[#39271D]/20 bg-[#F5F0E6] hover:border-[#7B2427] text-[#39271D]'
                        }`}
                      >
                        <div className="text-xs font-semibold">{level}</div>
                        <div
                          className={`text-[10px] uppercase tracking-wider mt-1 ${
                            isSelected ? 'text-[#C9AD7A]' : 'text-[#39271D]/60'
                          }`}
                        >
                          {level === 'Mild' ? 'Gentle' : level === 'Traditional' ? 'Authentic' : 'High Heat'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Garnishes */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                Fresh Garnishes & Relish
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  'Extra Sliced Red Onions',
                  'Fresh Cut Lime',
                  'Crushed Roasted Groundnuts',
                  'Side Pot of Dry Yaji',
                ].map((garnish) => {
                  const checked = extraGarnishes.includes(garnish);
                  return (
                    <button
                      key={garnish}
                      type="button"
                      onClick={() => toggleGarnish(garnish)}
                      className={`flex items-center gap-2 p-2.5 text-left border transition-colors cursor-pointer ${
                        checked
                          ? 'border-[#12251B] bg-[#12251B]/5 text-[#12251B] font-medium'
                          : 'border-[#39271D]/15 bg-[#F5F0E6] text-[#39271D]/70'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                          checked ? 'bg-[#12251B] border-[#12251B] text-[#F5F0E6]' : 'border-[#39271D]/40'
                        }`}
                      >
                        {checked && <Check className="w-3 h-3" />}
                      </div>
                      <span>{garnish}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Packaging Option */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                Packaging Presentation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPackaging('Signature Kraft Newspaper Box')}
                  className={`p-3 text-left border cursor-pointer transition-all ${
                    packaging === 'Signature Kraft Newspaper Box'
                      ? 'border-[#B58A45] bg-[#C9AD7A]/20 text-[#12251B] font-medium'
                      : 'border-[#39271D]/15 bg-[#F5F0E6] text-[#39271D]/70'
                  }`}
                >
                  <div className="font-semibold text-xs flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5 text-[#B58A45]" />
                    <span>Signature Kraft Box</span>
                  </div>
                  <div className="text-[11px] text-[#39271D]/80 mt-1">
                    Vented steam box, greaseproof newsprint liner & wax seal.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPackaging('Vintage Newspaper Parcel')}
                  className={`p-3 text-left border cursor-pointer transition-all ${
                    packaging === 'Vintage Newspaper Parcel'
                      ? 'border-[#B58A45] bg-[#C9AD7A]/20 text-[#12251B] font-medium'
                      : 'border-[#39271D]/15 bg-[#F5F0E6] text-[#39271D]/70'
                  }`}
                >
                  <div className="font-semibold text-xs flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5 text-[#B58A45]" />
                    <span>Vintage Parcel</span>
                  </div>
                  <div className="text-[11px] text-[#39271D]/80 mt-1">
                    Traditional folded broadsheet parcel with twine tie.
                  </div>
                </button>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-1.5">
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                Grill Master Notes (Optional)
              </label>
              <input
                type="text"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="e.g. Extra well-charred edges, keep yaji separate on the side..."
                className="w-full px-3 py-2 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] placeholder-[#39271D]/40 focus:outline-none focus:border-[#12251B]"
              />
            </div>

            {/* Quantity & Add Action */}
            <div className="pt-4 border-t border-[#39271D]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center border border-[#39271D]/30 bg-[#F5F0E6]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#39271D]/10 text-[#39271D] cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-mono text-sm font-semibold tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#39271D]/10 text-[#39271D] cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1f3f2f] transition-all cursor-pointer shadow"
              >
                <span>Add to Order Bag</span>
                <span className="font-mono tabular-nums text-[#C9AD7A]">
                  ₦{totalPrice.toLocaleString()}
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
