import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantidade: number;
}

interface CartContextData {
  itens: CartItem[];
  adicionarAoCarrinho: (product: Product, quantidade: number) => void;
  removerDoCarrinho: (product: Product) => void;
}

export const CartContext = createContext<CartContextData>({
  itens: [],
  adicionarAoCarrinho: () => {},
  removerDoCarrinho: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [itens, setItens] = useState<CartItem[]>(() => {
    const sacolaSalva = localStorage.getItem("@BHBurger:carrinho");
    return sacolaSalva ? JSON.parse(sacolaSalva) : [];
  });

  useEffect(() => {
    localStorage.setItem("@BHBurger:carrinho", JSON.stringify(itens));
  }, [itens]);

  const adicionarAoCarrinho = (product: Product, quantidade: number) => {
    setItens((itensAtuais) => {
      const itemExistente = itensAtuais.find(
        (item) => item.product.id === product.id
      );

      if (itemExistente) {
        return itensAtuais.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantidade: item.quantidade + quantidade,
            };
          }
          return item;
        });
      }

      return [...itensAtuais, { product, quantidade }];
    });
  };

  const removerDoCarrinho = (product: Product) => {
    setItens((itensAtuais) => {
      return itensAtuais.filter((item) => item.product.id !== product.id);
    });
  };

  return (
    <CartContext.Provider value={{ itens, adicionarAoCarrinho, removerDoCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};
