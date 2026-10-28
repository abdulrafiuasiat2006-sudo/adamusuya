import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Dedicated Route Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { PackagingPage } from './pages/PackagingPage';
import { HeritagePage } from './pages/HeritagePage';
import { YajiSpicePage } from './pages/YajiSpicePage';
import { LocationsPage } from './pages/LocationsPage';
import { ConciergePage } from './pages/ConciergePage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F5F0E6] text-[#39271D]">
          {/* Header on all routes */}
          <Header />

          {/* Dedicated Page Routes */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/:id" element={<ProductDetailPage />} />
              <Route path="/packaging" element={<PackagingPage />} />
              <Route path="/heritage" element={<HeritagePage />} />
              <Route path="/yaji-spice" element={<YajiSpicePage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/concierge" element={<ConciergePage />} />
              <Route path="/bag" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer on all routes */}
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
