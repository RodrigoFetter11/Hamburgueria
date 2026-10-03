import React from "react";
import {
  Package,
  Hamburger,
  Utensils,
  CupSoda,
  Pizza,
  Salad,
  IceCreamBowl,
  Coffee,
} from "lucide-react";


interface Category {
  id: number;
  name: string;
  icon: React.ElementType;
}

export const categories: Category[] = [
  { id: 1, name: "Combos", icon: Package },
  { id: 2, name: "Clássicos", icon: Hamburger },
  { id: 3, name: "Artesanais", icon: Utensils },
  { id: 4, name: "Bebidas", icon: CupSoda },
  { id: 5, name: "Porções", icon: Pizza },
  { id: 6, name: "Saladas", icon: Salad },
  { id: 7, name: "Sobremesas", icon: IceCreamBowl },
  { id: 8, name: "Cafés", icon: Coffee },
];