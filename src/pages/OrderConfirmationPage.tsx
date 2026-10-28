import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BrandSeal } from '../components/BrandSeal';
import { Check, Printer, ArrowLeft, ArrowRight, Clock, ShieldCheck, Package } from 'lucide-react';

export const OrderConfirmationPage: React.FC = () => {
  const { lastOrder } = useCart();

  if (!lastOrder) {
    return (
      <div className="py-24 bg-[#F5F0E6] text-[#39271D] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <h1 className="font-serif text-3xl font-medium text-[#12251B]">
            No Recent Order Located
          </h1>
          <p className="text-sm text-[#39271D]/70">
            You do not have an active order session. Please explore our collection to place a new order.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-wider font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore The Collection</span>
          </Link>
        </div>
      </div>
    );
  }

  const {
    orderNumber,
    items,
    subtotal,
    deliveryFee,
    total,
    customerName,
    phone,
    address,
    fulfillmentType,
    paymentMethod,
    createdAt,
  } = lastOrder;

  const dateFormatted = new Date(createdAt).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const timeFormatted = new Date(createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[85vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Ticket Container */}
        <div className="bg-[#FAF7F0] border-2 border-[#12251B] p-8 sm:p-12 shadow-2xl space-y-8">
          
          {/* Ticket Header */}
          <div className="text-center space-y-3 border-b-2 border-dashed border-[#39271D]/20 pb-8">
            <div className="flex justify-center mb-2">
              <BrandSeal size={64} />
            </div>
            <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-[#7B2427] font-bold block">
              OFFICIAL KRAFT DISPATCH TICKET
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12251B] tracking-tight">
              Order Confirmed: {orderNumber}
            </h1>
            <div className="text-xs text-[#39271D]/70 font-mono">
              {dateFormatted} · {timeFormatted}
            </div>
          </div>

          {/* Status Alert */}
          <div className="p-4 bg-[#12251B] text-[#F5F0E6] flex items-center gap-3">
            <div className="w-7 h-7 bg-[#C9AD7A] text-[#12251B] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="text-xs leading-relaxed">
              <span className="font-semibold text-[#C9AD7A]">Skewers on the Mangrove Coals. </span>
              <span>Your selection is currently being hand-charred, dusted with fresh yaji, and packed into our insulated vintage newspaper kraft box.</span>
            </div>
          </div>

          {/* Customer & Fulfillment Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-b border-[#39271D]/15 pb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B2427] block">
                Guest Name
              </span>
              <span className="font-medium text-[#12251B] text-sm block mt-0.5">{customerName}</span>
              <div className="text-[#39271D]/70 font-mono mt-0.5">{phone}</div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B2427] block">
                Fulfillment & Destination
              </span>
              <span className="font-medium text-[#12251B] text-sm block mt-0.5 capitalize">
                {fulfillmentType === 'delivery' ? 'Heated Courier Delivery' : 'Flagship Curbside Pickup'}
              </span>
              <div className="text-[#39271D]/70 mt-0.5">{address}</div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B2427] block">
                Payment Method
              </span>
              <span className="font-medium text-[#12251B] text-xs block mt-0.5">{paymentMethod}</span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B2427] block">
                Packaging Standard
              </span>
              <span className="font-medium text-[#12251B] text-xs block mt-0.5">
                Vented Vintage Kraft Box + Wax Seal
              </span>
            </div>
          </div>

          {/* Itemized Order Breakdown */}
          <div className="space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#12251B] block">
              Curated Items
            </span>
            <div className="divide-y divide-[#39271D]/10 text-xs">
              {items.map((item) => (
                <div key={item.cartItemId} className="py-3 flex items-start justify-between gap-4">
                  <div className="space-y-0.5">
                    <div className="font-medium text-[#12251B] text-sm">
                      {item.quantity}x {item.menuItem.name}
                    </div>
                    <div className="text-[11px] text-[#39271D]/70">
                      {item.selectedWeight?.label || 'Signature Cut'} · {item.spiceLevel} Heat
                    </div>
                    <div className="text-[10px] text-[#7B2427] italic">
                      {item.packaging}
                    </div>
                    {item.specialInstructions && (
                      <div className="text-[10px] text-[#39271D]/60 italic">
                        "{item.specialInstructions}"
                      </div>
                    )}
                  </div>
                  <div className="font-mono text-sm tabular-nums text-[#12251B] font-semibold shrink-0">
                    ₦{(item.unitPrice * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Totals */}
          <div className="border-t-2 border-dashed border-[#39271D]/20 pt-4 space-y-1.5 text-xs">
            <div className="flex justify-between text-[#39271D]/75">
              <span>Subtotal</span>
              <span className="font-mono tabular-nums">₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#39271D]/75">
              <span>Signature Kraft Packaging & Liners</span>
              <span className="text-[#12251B] font-medium uppercase text-[10px]">Complimentary</span>
            </div>
            <div className="flex justify-between text-[#39271D]/75">
              <span>Fulfillment Dispatch</span>
              <span className="font-mono tabular-nums">
                {deliveryFee === 0 ? 'Complimentary' : `₦${deliveryFee.toLocaleString()}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#12251B] pt-2 border-t border-[#39271D]/15">
              <span>Total Paid / Payable</span>
              <span className="font-mono text-xl text-[#7B2427]">₦{total.toLocaleString()}</span>
            </div>
          </div>

          {/* Unboxing Instructions */}
          <div className="p-4 bg-[#F5F0E6] border border-[#39271D]/15 text-xs text-[#39271D]/85 space-y-1.5">
            <span className="font-semibold text-[#12251B] uppercase tracking-wider block">
              Adamu Suya Unboxing Protocol:
            </span>
            <p className="leading-relaxed">
              1. Break the embossed gold and burgundy wax seal.<br />
              2. Unfold the greaseproof vintage broadsheet liner.<br />
              3. Squeeze fresh lime over skewers and scatter purple onions immediately before savoring.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full sm:w-auto flex-1 py-3.5 border border-[#12251B] text-[#12251B] text-xs uppercase tracking-wider font-semibold hover:bg-[#12251B]/5 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Receipt</span>
            </button>
            <Link
              to="/menu"
              className="w-full sm:w-auto flex-1 py-3.5 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-wider font-semibold hover:bg-[#1f3f2f] transition-colors text-center"
            >
              Order Additional Cuts
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
