export type PropertyStatus = 'available' | 'occupied' | 'maintenance';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  currency?: string;
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  livingRooms: number;
  status: PropertyStatus;
}

export interface PropertyCardProps {
  property: Property;
  onClick?: (id: string) => void;
  className?: string;
}