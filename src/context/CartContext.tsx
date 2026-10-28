import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem } from '../types';

export interface OrderConfirmationData {
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customerName: string;
  phone: string;
  address: string;
  fulfillmentType: 'delivery' | 'pickup';
  paymentMethod: string;
  createdAt: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  cartTotalItems: number;
  cartSubtotal: number;
  lastOrder: OrderConfirmationData | null;
  setLastOrder: (order: OrderConfirmationData | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('adamu_suya_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lastOrder, setLastOrder] = useState<OrderConfirmationData | null>(() => {
    try {
      const saved = sessionStorage.getItem('adamu_suya_last_order');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('adamu_suya_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  useEffect(() => {
    try {
      if (lastOrder) {
        sessionStorage.setItem('adamu_suya_last_order', JSON.stringify(lastOrder));
      } else {
        sessionStorage.removeItem('adamu_suya_last_order');
      }
    } catch {
      // storage unavailable
    }
  }, [lastOrder]);

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (ci) =>
          ci.menuItem.id === newItem.menuItem.id &&
          ci.selectedWeight?.label === newItem.selectedWeight?.label &&
          ci.spiceLevel === newItem.spiceLevel &&
          ci.packaging === newItem.packaging &&
          JSON.stringify(ci.extraGarnishes) === JSON.stringify(newItem.extraGarnishes)
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + newItem.quantity,
        };
        return updated;
      }
      return [...prevCart, newItem];
    });
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        cartTotalItems,
        cartSubtotal,
        lastOrder,
        setLastOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
