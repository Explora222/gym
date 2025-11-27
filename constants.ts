import { Gym, MembershipPlan, ClassSession, Product } from './types';

export const GYMS: Gym[] = [
  {
    id: '1',
    name: 'PulseForge Sandton',
    city: 'Johannesburg',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    amenities: ['Pool', 'Sauna', 'Free Weights', 'Cycle Studio', 'WiFi'],
    description: 'Our flagship club in the heart of Sandton, featuring 4 floors of premium fitness.',
  },
  {
    id: '2',
    name: 'PulseForge V&A Waterfront',
    city: 'Cape Town',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop',
    amenities: ['Ocean View', 'Yoga Deck', 'Juice Bar', 'Personal Training'],
    description: 'Train with a view of Table Mountain and the harbor.',
  },
  {
    id: '3',
    name: 'PulseForge Umhlanga',
    city: 'Durban',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop',
    amenities: ['Outdoor Pool', 'Boxing Ring', 'CrossFit Area', 'Steam Room'],
    description: 'Experience the ultimate fitness lifestyle on the east coast.',
  },
  {
    id: '4',
    name: 'PulseForge Menlyn',
    city: 'Pretoria',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1000&auto=format&fit=crop',
    amenities: ['24/7 Access', 'Functional Floor', 'Squash Courts'],
    description: 'High energy, massive functional training zones, and cutting-edge equipment.',
  }
];

export const PLANS: MembershipPlan[] = [
  {
    id: 'off-peak',
    name: 'Off-Peak',
    price: 699,
    description: 'Access during quieter times. Perfect for flexible schedules.',
    features: ['Access 8am - 4pm', 'Single Club Access', 'Basic Classes'],
  },
  {
    id: 'premier',
    name: 'Premier',
    price: 1299,
    popular: true,
    description: 'Unlimited access to your home club and all amenities.',
    features: ['Unlimited Access', 'Single Club Access', 'All Classes', 'Guest Passes (2/mo)'],
  },
  {
    id: 'collection',
    name: 'Collection',
    price: 1899,
    description: 'The ultimate passport to fitness. Train anywhere, anytime.',
    features: ['National Access', 'All Club Types', 'Priority Booking', 'Free Towel Service', 'Guest Passes (Unlimited)'],
  },
];

export const CLASSES: ClassSession[] = [
  { id: 'c1', name: 'Sunrise Yoga', instructor: 'Sarah J.', time: '06:00', duration: '60 min', category: 'Yoga', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=600' },
  
  { id: 'c3', name: 'RPM Cycle', instructor: 'David L.', time: '17:30', duration: '45 min', category: 'Cycle', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600' },
  { id: 'c4', name: 'BodyPump', instructor: 'Jessica M.', time: '18:30', duration: '60 min', category: 'Strength', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600' },
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'PulseForge Performance Tee', price: 499, category: 'Apparel', description: 'Breathable, sweat-wicking fabric.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600' },
  { id: 'p2', name: 'Whey Protein Isolate', price: 899, category: 'Nutrition', description: 'Chocolate flavour, 2kg tub.', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=600' },
  { id: 'p3', name: 'Gym Duffel Bag', price: 799, category: 'Accessories', description: 'Water-resistant with shoe compartment.', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600' },
  { id: 'p4', name: 'Yoga Mat Premium', price: 350, category: 'Equipment', description: 'Non-slip, 6mm thickness.', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=600' },
];

export const formatZAR = (amount: number) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
