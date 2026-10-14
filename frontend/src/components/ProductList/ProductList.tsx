import { useState } from "react";
import type { Product } from "../../data/products";
import { products } from "../../data/products";
import { categories } from "../../data/categories"; // Importação das categorias dinâmicas
import { CardProduct } from "../CardProduct/CardProduct";
import { ModalProduct } from "../ModalProduct/ModalProduct";

interface ProductListProps {
  activeCategory: number | null;
}

export const ProductList = ({ activeCategory }: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // 1. FILTRO DINÂMICO: Filtra os produtos com base na categoria ativa
  const filteredProducts = activeCategory
    ? products.filter((produto) => produto.categoriaId === activeCategory)
    : products;

  // 2. TÍTULO DINÂMICO: Procura na lista de categorias qual item bate com o ID ativo
  const categoriaAtiva = categories.find((cat) => cat.id === activeCategory);
  const tituloCardapio = categoriaAtiva ? categoriaAtiva.name : "Cardápio Geral";

  return (
    <main className="mx-auto max-w-[800px] w-full px-4 mt-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col min-h-[250px]">
        
        {/* Título totalmente limpo e automatizado */}
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-left border-b border-gray-100 pb-3">
          {tituloCardapio}
        </h2>

        {/* VALOR DEFAULT PARA FILTROS VAZIOS */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400 gap-2 animate-fade-in">
            <span className="text-4xl">👨‍🍳</span>
            <p className="text-base font-semibold text-gray-700">Novidades chegando!</p>
            <p className="text-xs max-w-[280px]">Nossos chefs estão preparando receitas incríveis para esta seção. Volte logo!</p>
          </div>
        ) : (
          // Renderização normal da lista de cards filtrados
          <div className="flex flex-col">
            {filteredProducts.map((produto) => (
              <CardProduct
                key={produto.id}
                name={produto.name}
                description={produto.description}
                image={produto.image}
                onAdd={() => setSelectedProduct(produto)}
              >
                <div className="flex flex-col gap-1">
                  {produto.tag && (
                    <div className="flex text-left mb-1.5">
                      <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide uppercase border border-red-100">
                        {produto.tag}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-semibold text-gray-800">
                      {produto.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    {produto.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {produto.originalPrice.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    )}
                  </div>
                </div>
              </CardProduct>
            ))}
          </div>
        )}
        
      </div>
      
      <ModalProduct
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </main>
  );
};
