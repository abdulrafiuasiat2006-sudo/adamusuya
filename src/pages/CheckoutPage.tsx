import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, OrderConfirmationData } from '../context/CartContext';
import { Truck, Store, ShieldCheck, ArrowRight, ArrowLeft, PackageCheck } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, setLastOrder, clearCart } = useCart();
  const navigate = useNavigate();

  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lagos');
  const [address, setAddress] = useState('');
  const [pickupLocation, setPickupLocation] = useState('Victoria Island Flagship (14B Akin Leigh St.)');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer' | 'cod'>('card');
  const [orderNotes, setOrderNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="py-24 bg-[#F5F0E6] text-[#39271D] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <h1 className="font-serif text-3xl font-medium text-[#12251B]">No Items in Bag</h1>
          <p className="text-sm text-[#39271D]/70">
            Please select your suya cuts before proceeding to checkout.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-wider font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Menu</span>
          </Link>
        </div>
      </div>
    );
  }

  const deliveryFee = fulfillmentType === 'delivery' ? (cartSubtotal >= 30000 ? 0 : 2500) : 0;
  const grandTotal = cartSubtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim()) {
      alert('Please enter your full name and phone number.');
      return;
    }
    if (fulfillmentType === 'delivery' && !address.trim()) {
      alert('Please enter your delivery street address and landmark.');
      return;
    }

    setIsSubmitting(true);

    const orderNumber = `#AS-${Math.floor(1000 + Math.random() * 9000)}`;
    const finalAddress = fulfillmentType === 'delivery' ? `${address}, ${city}` : pickupLocation;

    const orderData: OrderConfirmationData = {
      orderNumber,
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryFee,
      total: grandTotal,
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: finalAddress,
      fulfillmentType,
      paymentMethod:
        paymentMethod === 'card'
          ? 'Card / USSD Online'
          : paymentMethod === 'transfer'
          ? 'Direct Bank Transfer'
          : 'POS / Cash on Handover',
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setLastOrder(orderData);
      clearCart();
      setIsSubmitting(false);
      navigate('/order-confirmation');
    }, 500);
  };

  return (
    <div className="py-16 bg-[#F5F0E6] text-[#39271D] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#39271D]/60 mb-8">
          <Link to="/" className="hover:text-[#12251B]">Home</Link>
          <span>/</span>
          <Link to="/bag" className="hover:text-[#12251B]">Order Bag</Link>
          <span>/</span>
          <span className="text-[#7B2427] font-semibold">Checkout</span>
        </div>

        <div className="border-b border-[#39271D]/15 pb-6 mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#12251B]">
            Order Checkout & Dispatch
          </h1>
          <p className="text-sm text-[#39271D]/75 font-light mt-1">
            Specify your destination details and delivery preferences for our hearth team.
          </p>
        </div>

        {/* 2-Column Checkout Form Layout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Inputs Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Fulfillment Type Selection */}
            <div className="bg-[#FAF7F0] p-6 sm:p-8 border border-[#39271D]/15 space-y-4 shadow-sm">
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                1. Select Dispatch / Collection Method
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFulfillmentType('delivery')}
                  className={`p-4 text-left border cursor-pointer transition-all ${
                    fulfillmentType === 'delivery'
                      ? 'border-[#12251B] bg-[#12251B] text-[#F5F0E6]'
                      : 'border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Truck className="w-4 h-4 text-[#C9AD7A]" />
                    <span>Priority Heated Courier</span>
                  </div>
                  <div className="text-[11px] mt-1 opacity-80">
                    {cartSubtotal >= 30000 ? 'Complimentary Delivery' : '₦2,500 in Lagos & Abuja'}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFulfillmentType('pickup')}
                  className={`p-4 text-left border cursor-pointer transition-all ${
                    fulfillmentType === 'pickup'
                      ? 'border-[#12251B] bg-[#12251B] text-[#F5F0E6]'
                      : 'border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <Store className="w-4 h-4 text-[#C9AD7A]" />
                    <span>Curbside Flagship Pickup</span>
                  </div>
                  <div className="text-[11px] mt-1 opacity-80">
                    Zero Dispatch Fee · Immediate Collection
                  </div>
                </button>
              </div>
            </div>

            {/* Guest Details */}
            <div className="bg-[#FAF7F0] p-6 sm:p-8 border border-[#39271D]/15 space-y-4 shadow-sm">
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                2. Guest & Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#12251B]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Chief Adebayo Alabi"
                    className="w-full px-3 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#12251B]">
                    Phone Number (WhatsApp / Call) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 802 000 0000"
                    className="w-full px-3 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                  />
                </div>
              </div>

              {fulfillmentType === 'delivery' ? (
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#12251B]">
                      City *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    >
                      <option value="Lagos">Lagos State (Island & Mainland)</option>
                      <option value="Abuja">Abuja FCT (Maitama, Asokoro, Wuse, Garki)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#12251B]">
                      Street Address & Estate / Landmark *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 15 Queen’s Drive, Ikoyi, Lagos"
                      className="w-full px-3 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-1 pt-2">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#12251B]">
                    Select Curbside Pickup Boutique *
                  </label>
                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                  >
                    <option value="Victoria Island Flagship (14B Akin Leigh St.)">
                      Victoria Island Flagship (14B Akin Leigh St., Off Adeola Odeku)
                    </option>
                    <option value="Ikoyi Private Pickup Lounge (22 Bourdillon Rd.)">
                      Ikoyi Private Pickup Lounge (22 Bourdillon Rd.)
                    </option>
                    <option value="Ikeja GRA Smokehouse (8 Isaac John St.)">
                      Ikeja GRA Smokehouse (8 Isaac John St.)
                    </option>
                    <option value="Abuja Maitama Pavilion (4 Euphrates St.)">
                      Abuja Maitama Pavilion (4 Euphrates St.)
                    </option>
                  </select>
                </div>
              )}

              <div className="space-y-1 pt-2">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#12251B]">
                  Special Delivery / Handover Instructions
                </label>
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g. Ring buzzer at black gate, call upon arrival..."
                  className="w-full px-3 py-2 text-xs border border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D] focus:outline-none focus:border-[#12251B]"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-[#FAF7F0] p-6 sm:p-8 border border-[#39271D]/15 space-y-4 shadow-sm">
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-[#12251B]">
                3. Payment Settlement Preference
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 text-left border cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-[#7B2427] bg-[#7B2427] text-white font-medium'
                      : 'border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D]'
                  }`}
                >
                  <div className="font-semibold">Online Card / USSD</div>
                  <div className="text-[10px] mt-0.5 opacity-80">Instant Paystack Gateway</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('transfer')}
                  className={`p-3 text-left border cursor-pointer ${
                    paymentMethod === 'transfer'
                      ? 'border-[#7B2427] bg-[#7B2427] text-white font-medium'
                      : 'border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D]'
                  }`}
                >
                  <div className="font-semibold">Bank Transfer</div>
                  <div className="text-[10px] mt-0.5 opacity-80">Corporate Account Details</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 text-left border cursor-pointer ${
                    paymentMethod === 'cod'
                      ? 'border-[#7B2427] bg-[#7B2427] text-white font-medium'
                      : 'border-[#39271D]/20 bg-[#F5F0E6] text-[#39271D]'
                  }`}
                >
                  <div className="font-semibold">POS on Handover</div>
                  <div className="text-[10px] mt-0.5 opacity-80">Card swipe upon arrival</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary & Confirmation Button */}
          <div className="lg:col-span-5 bg-[#FAF7F0] p-8 border border-[#39271D]/15 shadow-sm space-y-6 sticky top-28">
            <h2 className="font-serif text-2xl font-medium text-[#12251B] border-b border-[#39271D]/15 pb-4">
              Your Order Review
            </h2>

            {/* Mini Items List */}
            <div className="divide-y divide-[#39271D]/10 max-h-60 overflow-y-auto text-xs pr-1">
              {cart.map((item) => (
                <div key={item.cartItemId} className="py-2.5 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-medium text-[#12251B]">
                      {item.quantity}x {item.menuItem.name}
                    </div>
                    <div className="text-[11px] text-[#39271D]/70">
                      {item.selectedWeight?.label || 'Signature Cut'} · {item.spiceLevel} Heat
                    </div>
                  </div>
                  <div className="font-mono tabular-nums font-semibold text-[#12251B]">
                    ₦{(item.unitPrice * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="border-t border-[#39271D]/15 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-[#39271D]/80">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums">₦{cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#39271D]/80">
                <span>Patented Kraft Newspaper Box</span>
                <span className="text-[#12251B] font-semibold uppercase text-[10px]">Complimentary</span>
              </div>
              <div className="flex justify-between text-[#39271D]/80">
                <span>Heated Dispatch Delivery</span>
                <span className="font-mono tabular-nums">
                  {deliveryFee === 0 ? 'Complimentary' : `₦${deliveryFee.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#12251B] pt-3 border-t border-[#39271D]/15">
                <span>Total Due</span>
                <span className="font-mono text-xl text-[#7B2427]">₦{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#12251B] text-[#F5F0E6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1f3f2f] transition-all flex items-center justify-center gap-2 shadow cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Confirming Order...</span>
              ) : (
                <>
                  <span>Place Adamu Order (₦{grandTotal.toLocaleString()})</span>
                  <ArrowRight className="w-4 h-4 text-[#C9AD7A]" />
                </>
              )}
            </button>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#39271D]/60 justify-center">
              <ShieldCheck className="w-4 h-4 text-[#B58A45]" />
              <span>Authentic Adamu Suya Official Hearth Dispatch</span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
