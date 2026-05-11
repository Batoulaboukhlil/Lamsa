import {Category} from './category.model';

export interface Service {
  options: string[];
  _id?: string;
  name: string;
  logo: string;
  subDescription: string;
  description: string;
  priceRange?: string;
  category: Category;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
