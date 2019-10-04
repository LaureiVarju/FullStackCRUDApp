import { Category } from "./categories";
import { Supplier } from "./suppliers";

export class Product {
  id: number;
  name: string;
  category: Category;
  fullprice: number;
  saleprice: number;
  discountPercentage: number;
  availability: boolean;
  supplier: Supplier;
}
