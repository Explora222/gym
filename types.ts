export interface Gym {
  id: string;
  name: string;
  city: string;
  image: string;
  amenities: string[];
  description: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
  popular?: boolean;
}

export interface ClassSession {
  id: string;
  name: string;
  instructor: string;
  time: string; // "08:00 AM"
  duration: string; // "45 min"
  category: 'Cardio' | 'Strength' | 'Yoga' | 'Cycle' | 'Mind & Body';
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
  type: 'product' | 'membership';
}

export interface CartState {
  items: CartItem[];
  addItem: (item: Product | MembershipPlan, type: 'product' | 'membership') => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  total: number;
}
