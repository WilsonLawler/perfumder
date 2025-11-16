export interface Perfume {
  id: string;
  brand: string;
  name: string;
  capacity: string;
  fragranceNotes: string[];
  price: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export type FragranceCategory =
  | 'Floral'
  | 'Oriental'
  | 'Woody'
  | 'Fresh'
  | 'Fruity'
  | 'Spicy'
  | 'Citrus';

