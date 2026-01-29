
import { MenuItem, Review } from './types';

export const BUSINESS_INFO = {
  name: 'Darcom Food',
  phone: '+32 469 66 64 62',
  address: 'Weg naar Zwartberg 102, 3530 Houthalen-Helchteren, Belgium',
  email: 'hello@darcomfood.be',
  mapLink: 'https://maps.app.goo.gl/MdoHjmJc7j6TCLss5?g_st=aw',
  openingHours: [
    { day: 'Monday - Sunday', hours: 'Open until 10:00 PM' },
  ],
  socials: {
    instagram: 'https://www.instagram.com/darcomfood?igsh=OWJ2N3hjdmZ1aGY=',
    facebook: '',
  },
};

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: 1,
    name: 'Lamb Tagine with Prunes',
    description: 'Slow-cooked tender lamb with caramelized prunes, toasted almonds, and sesame seeds.',
    price: '€18.50',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=800',
    category: 'Tagine',
  },
  {
    id: 2,
    name: 'Couscous Royal',
    description: 'Traditional seven-vegetable couscous served with lamb, chicken, and spicy merguez sausages.',
    price: '€21.00',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800',
    category: 'Couscous',
  },
  {
    id: 3,
    name: 'Moroccan Salad Plate',
    description: 'An assortment of Zaalouk (eggplant), Taktouka (bell peppers), and marinated carrots.',
    price: '€12.50',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: 'Salad',
  },
  {
    id: 4,
    name: 'Harira Soup',
    description: 'Traditional hearty tomato-based soup with lentils, chickpeas, and fresh herbs.',
    price: '€7.50',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    category: 'Soup',
  },
  {
    id: 5,
    name: 'Baklava & Mint Tea',
    description: 'Honey-drenched pastries filled with nuts, served with fresh aromatic Moroccan mint tea.',
    price: '€9.00',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    category: 'Dessert',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Chaimae El Haddouchi',
    rating: 5,
    comment:
      'Had a delicious breakfast! The staff were super friendly, the place was very clean, and everything was fresh.',
    date: '6 months ago',
  },
  {
    id: 2,
    name: 'Mark Jansen',
    rating: 5,
    comment:
      'Ordering through WhatsApp was incredibly easy. The Couscous Royal is a feast for the eyes and the stomach!',
    date: '1 week ago',
  },
  {
    id: 3,
    name: 'Layla El Amrani',
    rating: 5,
    comment:
      'Authentic flavors that remind me of home. The Harira is rich and full of flavor. Definitely our new favorite spot.',
    date: '3 weeks ago',
  },
];
