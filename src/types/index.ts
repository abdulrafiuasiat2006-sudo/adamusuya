export type SpiceLevel = 'Mild' | 'Traditional' | 'Extra Fiery';

export type Category = 'all' | 'signature' | 'boxes' | 'sides' | 'refreshments';

export interface MenuItem {
  id: string;
  name: string;
  hausaName?: string;
  category: 'signature' | 'boxes' | 'sides' | 'refreshments';
  basePrice: number; // in NGN
  priceDisplay: string;
  description: string;
  image: string;
  weights?: { label: string; weightGrams: number; priceMultiplier: number }[];
  spiceDefault: SpiceLevel;
  spiceCustomizable?: boolean;
  notes?: string;
  prepTimeMinutes: number;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  selectedWeight?: { label: string; weightGrams: number };
  spiceLevel: SpiceLevel;
  extraGarnishes: string[];
  packaging: 'Signature Kraft Newspaper Box' | 'Vintage Newspaper Parcel';
  unitPrice: number;
  quantity: number;
  specialInstructions?: string;
}

export interface CateringInquiry {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  guestCount: number;
  eventDate: string;
  location: string;
  preferredCuts: string[];
  notes: string;
}
