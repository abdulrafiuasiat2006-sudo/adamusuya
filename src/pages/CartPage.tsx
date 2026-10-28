import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Trash2, ArrowRight, PackageCheck, ShoppingBag, ShieldCheck, ArrowLeft } from 'lucide-react';

export const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeItem, clearCart, cartSubtotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="py-24 bg-[#F5F0E6] text-[#39271D] min-h-[75vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#12251B]/5 border border-[#12251B]/15 flex items-center justify-center mx-auto text-[#12251B]">
            <ShoppingBag className="w-10 h-10 text-[#C9AD7A]" />
          </div>
          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-medium text-[#12251B]">
              Your Order Bag is Empty
            </h1>
            <p className="text-sm text-[#39271D]/70 font-light leading-relaxed">
              Explore our selection of prime Sahel beef suya, heritage northern ram, and curated feast boxes 
              to begin your charcoal-grilled order.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1f3f2f] transition-colors"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4 text-[#C9AD7A]" />
          </Link>
        </div>
      </div>
    );
  }

  const deliveryThreshold = 30000;
  const isFreeDelivery = cartSubtotal >= deliveryThreshold;

  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#39271D]/15 pb-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#7B2427] font-semibold">
              YOUR REVIEW & ORDER
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#12251B] mt-1">
              The Order Bag
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/menu"
              className="text-xs uppercase tracking-wider text-[#12251B] hover:text-[#7B2427] inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Add More Cuts</span>
            </Link>
            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-[#7B2427] hover:underline cursor-pointer"
            >
              Clear Bag
            </button>
          </div>
        </div>

        {/* 2-Column Split: Items List vs Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Items Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="divide-y divide-[#39271D]/15 bg-[#FAF7F0] border border-[#39271D]/15 shadow-sm">
              {cart.map((item) => (
                <div key={item.cartItemId} className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <Link
                        to={`/menu/${item.menuItem.id}`}
                        className="font-serif text-xl font-medium text-[#12251B] hover:text-[#7B2427] transition-colors"
                      >
                        {item.menuItem.name}
                      </Link>
                      <div className="text-xs text-[#39271D]/75">
                        {item.selectedWeight?.label || 'Signature Cut'} ·{' '}
                        <span className="text-[#7B2427] font-semibold">{item.spiceLevel} Heat</span>
                      </div>
                      <div className="text-xs text-[#B58A45] flex items-center gap-1 mt-0.5">
                        <PackageCheck className="w-3.5 h-3.5" />
                        <span>{item.packaging}</span>
                      </div>
                      {item.extraGarnishes.length > 0 && (
                        <div className="text-[11px] text-[#39271D]/60 pt-0.5">
                          Garnishes: {item.extraGarnishes.join(', ')}
                        </div>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-mono text-base font-bold text-[#12251B]">
                        ₦{(item.unitPrice * item.quantity).toLocaleString()}
                      </div>
                      <div className="text-[11px] text-[#39271D]/60 font-mono">
                        (₦{item.unitPrice.toLocaleString()} each)
                      </div>
                    </div>
                  </div>

                  {item.specialInstructions && (
                    <div className="text-xs bg-[#F5F0E6] p-2.5 border border-[#39271D]/10 text-[#39271D]/80 italic">
                      Note to Grill Master: "{item.specialInstructions}"
                    </div>
                  )}

                  {/* Quantity and Remove */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#39271D]/25 bg-[#F5F0E6]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-2 hover:bg-[#39271D]/10 text-[#39271D] cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center font-mono text-xs font-semibold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-2 hover:bg-[#39271D]/10 text-[#39271D] cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.cartItemId)}
                      className="text-xs text-[#7B2427] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove Item</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Packaging Assurance Card */}
            <div className="p-4 bg-[#C9AD7A]/15 border border-[#C9AD7A]/40 flex items-start gap-3 text-xs text-[#39271D]">
              <PackageCheck className="w-5 h-5 text-[#12251B] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#12251B] block">
                  Complimentary Vented Kraft Packaging
                </span>
                <span>
                  All orders are packed in our patented 350gsm virgin kraft paper boxes with greaseproof 
                  vintage broadsheet liner and embossed wax seal to preserve temperature and crispness.
                </span>
              </div>
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="lg:col-span-5 bg-[#FAF7F0] p-8 border border-[#39271D]/15 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-medium text-[#12251B] border-b border-[#39271D]/15 pb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-[#39271D]/80">
                <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-mono tabular-nums font-semibold text-sm">
                  ₦{cartSubtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-[#39271D]/80">
                <span>Kraft Packaging & Liners</span>
                <span className="text-[#12251B] font-semibold uppercase text-[10px]">Complimentary</span>
              </div>

              <div className="flex justify-between text-[#39271D]/80">
                <span>Estimated Heated Dispatch</span>
                <span className="font-mono tabular-nums">
                  {isFreeDelivery ? 'Complimentary' : 'Calculated at checkout'}
                </span>
              </div>

              {isFreeDelivery ? (
                <div className="p-2.5 bg-[#12251B]/5 border border-[#12251B]/20 text-[11px] text-[#12251B]">
                  ✓ Qualified for complimentary heated dispatch in Lagos & Abuja.
                </div>
              ) : (
                <div className="text-[11px] text-[#7B2427]">
                  Add ₦{(deliveryThreshold - cartSubtotal).toLocaleString()} more for free priority dispatch.
                </div>
              )}
            </div>

            <div className="border-t border-[#39271D]/15 pt-4 flex justify-between items-baseline">
              <span className="font-serif text-lg font-semibold text-[#12251B]">Estimated Total</span>
              <span className="font-mono text-2xl font-bold text-[#7B2427]">
                ₦{cartSubtotal.toLocaleString()}
              </span>
            </div>

            {/* Proceed to Checkout Link */}
            <Link
              to="/checkout"
              className="w-full py-4 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1f3f2f] transition-all flex items-center justify-center gap-2 shadow"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C9AD7A]" />
            </Link>

            <div className="text-center pt-2">
              <Link
                to="/menu"
                className="text-xs text-[#39271D]/70 hover:text-[#12251B] underline"
              >
                Continue browsing the grill menu
              </Link>
            </div>

            <div className="border-t border-[#39271D]/10 pt-4 flex items-center gap-2 text-[11px] text-[#39271D]/60">
              <ShieldCheck className="w-4 h-4 text-[#B58A45]" />
              <span>Direct charcoal kitchen preparation upon order receipt</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
