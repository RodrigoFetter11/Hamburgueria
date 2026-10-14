import { useContext } from "react";
import { X, Trash2 } from "lucide-react";
import { CartContext } from "../../context/CartContext";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSideBar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { itens, removerDoCarrinho } = useContext(CartContext);

  if (!isOpen) return null;

  const valorTotalDoCarrinho = itens.reduce(
    (acumulador, item) => acumulador + item.product.price * item.quantidade,
    0
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
      
      <div 
        onClick={onClose} 
        className="flex-1 cursor-pointer"
      />

      <div className="bg-white h-screen w-full max-w-[450px] shadow-2xl flex flex-col relative animate-slide-in">
        
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            Sacola de Pedidos <span>🛒</span>
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer border-none bg-transparent outline-none p-1"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {itens.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 gap-2">
              <span className="text-4xl">🤷‍♂️</span>
              <p className="text-sm font-medium">Sua sacola está vazia</p>
              <p className="text-xs max-w-[200px]">Adicione alguns hambúrgueres do cardápio para começar!</p>
            </div>
          ) : (
            itens.map((item) => (
              <div 
                key={item.product.id}
                className="flex items-center justify-between gap-4 p-3 border border-gray-100 rounded-xl bg-gray-50/50"
              >
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />

                <div className="flex-1 flex flex-col text-left">
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-1">{item.product.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Qtd: {item.quantidade}</p>
                  <span className="text-sm font-semibold text-gray-700 mt-1">
                    {item.product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </span>
                </div>

                <button 
                  onClick={() => removerDoCarrinho(item.product)}
                  className="text-gray-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-all cursor-pointer border-none bg-transparent outline-none"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {itens.length > 0 && (
          <div className="p-6 border-t border-gray-100 flex flex-col gap-4 bg-gray-50">
            <div className="flex justify-between items-center font-bold text-gray-800 text-lg">
              <span>Total do pedido:</span>
              <span>
                {valorTotalDoCarrinho.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
            </div>

            <button 
              onClick={() => alert("Indo para a finalização do pedido!")}
              className="w-full bg-red-600 text-white font-semibold py-3.5 rounded-xl hover:bg-red-700 transition-colors shadow-md text-center cursor-pointer border-none outline-none text-sm"
            >
              Finalizar Pedido
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
