export type Place = {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
};

export type Params = {
  location?: string;
  sort?: string;
  title?: string;
};
