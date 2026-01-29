
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Tagine' | 'Couscous' | 'Salad' | 'Soup' | 'Dessert';
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
