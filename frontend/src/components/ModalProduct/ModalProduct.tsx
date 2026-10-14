import React, { useState, useContext } from 'react'; // Removido o useEffect das importações
import type { Product } from '../../data/products';
import { CartContext } from '../../context/CartContext';

interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const ModalProduct = ({ isOpen, onClose, product }: ModalProductProps) => {
  // 1. Criamos o estado da quantidade iniciando em 1
  const [quantidade, setQuantidade] = useState<number>(1);
  const { adicionarAoCarrinho } = useContext(CartContext);

  // 2. FUNÇÃO CENTRALIZADA PARA FECHAR: Ela fecha o modal E reseta o contador para 1 ao mesmo tempo!
  const lidarComFechamento = () => {
    setQuantidade(1); // Limpa o contador para o próximo lanche
    onClose();        // Avisa o pai para fechar o modal
  };

  const lidarComAumento = () => {
    setQuantidade((prev) => prev + 1);
  };

  const lidarComDiminuicao = () => {
    setQuantidade((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const lidarComConfirmacao = () => {
    if (product) {
      adicionarAoCarrinho(product, quantidade);
    }
    lidarComFechamento(); // Usa a nova função para fechar e resetar com segurança
  };

  const lidarComCliqueFora = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'backdrop') {
      lidarComFechamento(); // Usa a nova função aqui também
    }
  };

  if (!isOpen || !product) return null;

  const precoTotal = product.price * quantidade;

  return (
    <div 
      id="backdrop"
      onClick={lidarComCliqueFora}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 cursor-pointer"
    >
      <div className="bg-white rounded-2xl max-w-[500px] w-full overflow-hidden shadow-2xl flex flex-col relative cursor-default">
        
        {/* Atualizado o onClick para usar o lidarComFechamento */}
        <button 
          onClick={lidarComFechamento} 
          className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold hover:bg-black/70 cursor-pointer border-none z-10"
        >
          ✕
        </button>

        <div className="w-full h-52 relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 flex flex-col text-left">
          <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">{product.description}</p>
          
          <span className="text-lg font-semibold text-gray-800 mt-4">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>

          <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100 gap-4">
            
            <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50">
              <button 
                onClick={lidarComDiminuicao} 
                disabled={quantidade === 1} 
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
