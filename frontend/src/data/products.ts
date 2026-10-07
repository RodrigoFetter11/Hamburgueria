export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  tag?: string;
  image: string;
  categoriaId: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Combo Clássico",
    description: "Hambúrguer clássico da casa acompanhado de batata frita crocante e refrigerante lata de 350ml gelado.",
    price: 39.90,
    originalPrice: 49.90,
    tag: "20% OFF",
    categoriaId: 1,
    image: "https://unsplash.com"
  },
  {
    id: 2,
    name: "Burger Clássico",
    description: "Pão de brioche selado na manteiga, blend artesanal de 160g, queijo cheddar derretido, alface americana e tomate fresco.",
    price: 26.90,
    tag: "Mais pedido",
    categoriaId: 2,
    image: "https://unsplash.com"
  }
];
