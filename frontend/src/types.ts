export type PlaceData = {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating: number;
  price_per_night: number;
  availability: boolean;
  
};
export type Place = {
  id: number;
  image_url: string;
  amenities: string[];
} & PlaceData;

export type Params = {
  location?: string;
  sort?: string;
  title?: string;
};
