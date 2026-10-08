import React, { useState, useEffect } from 'react';
import type { Product } from '../../data/products';

interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const ModalProduct = ({ isOpen, onClose, product }: ModalProductProps) => {
  // 1. HOOKS NO TOPO ABSOLUTO: Criamos o estado da quantidade iniciando em 1
  const [quantidade, setQuantidade] = useState<number>(1);

  // O useEffect vigia a abertura e o produto para resetar o contador para 1 automaticamente
  useEffect(() => {
    if (isOpen) {
      setQuantidade(1);
    }
  }, [product, isOpen]);

  // 2. FUNÇÕES DE CLIQUE ISOLADAS (HANDLERS)
  const lidarComAumento = () => {
    setQuantidade((prev) => prev + 1);
  };

  const lidarComDiminuicao = () => {
    setQuantidade((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const lidarComConfirmacao = () => {
    if (product) {
      alert(`Pedido confirmado: ${quantidade}x ${product.name}`);
    }
    onClose();
  };

  // Função que detecta se o clique aconteceu na cortina escura (fora da caixa branca)
  const lidarComCliqueFora = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'backdrop') {
      onClose();
    }
  };

  // 3. IF DE SEGURANÇA: Intercepta o fluxo aqui se o modal estiver fechado ou sem produto
  if (!isOpen || !product) return null;

  // 4. CÁLCULO DINÂMICO: Preço total multiplicado pela quantidade do estado
  const precoTotal = product.price * quantidade;

  return (
    // Backdrop: Fundo escurecido que cobre a tela toda com evento de clique fora
    <div 
      id="backdrop"
      onClick={lidarComCliqueFora}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 cursor-pointer"
    >
      
      {/* Caixa Branca do Modal */}
      <div className="bg-white rounded-2xl max-w-[500px] w-full overflow-hidden shadow-2xl flex flex-col relative cursor-default">
        
        {/* Botão de Fechar (X) flutuante */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold hover:bg-black/70 cursor-pointer border-none z-10"
        >
          ✕
        </button>

        {/* Imagem do Lanche (Topo) */}
        <div className="w-full h-52 relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Informações textuais */}
        <div className="p-6 flex flex-col text-left">
          <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">{product.description}</p>
          
          <span className="text-lg font-semibold text-gray-800 mt-4">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>

          {/* Rodapé: Contador e Botão Adicionar */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100 gap-4">
            
            {/* O SELETOR DE QUANTIDADE (- 1 +) */}
            <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50">
              <button 
                onClick={lidarComDiminuicao} 
                disabled={quantidade === 1} // Bloqueia o botão se a quantidade for 1
                className="w-9 h-9 text-red-600 font-bold text-lg rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer border-none bg-transparent"
              >
                -
              </button>
              
              <span className="w-10 text-center font-semibold text-gray-800 text-sm">
                {quantidade}
              </span>
              
              <button 
                onClick={lidarComAumento} 
                className="w-9 h-9 text-red-600 font-bold text-lg rounded-lg hover:bg-gray-100 cursor-pointer border-none bg-transparent"
              >
                +
              </button>
            </div>

            {/* BOTÃO PRINCIPAL COM CÁLCULO DINÂMICO EM REAL */}
            <button 
              onClick={lidarComConfirmacao} 
              className="flex-1 bg-red-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-red-700 shadow-sm flex justify-between items-center cursor-pointer border-none"
            >
              <span className="text-sm">Adicionar</span>
              <span className="text-sm">
                {precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};
