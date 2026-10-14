import { useContext, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { CartSideBar } from '../CartSideBar/CardSideBar';

export const Header = () => {
  // 2. Criamos o estado booleano para controlar se a barra lateral está aberta ou fechada
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const { itens } = useContext(CartContext);

  const totalDeItens = itens.reduce((acumulador, item) => acumulador + item.quantidade, 0);
  const textoQuantidade = totalDeItens > 9 ? "+9" : totalDeItens;

  return (
    <header className="bg-red-600 text-white w-full h-44 flex items-center px-4">
      <div className="mx-auto max-w-[800px] w-full flex flex-col gap-4">

        <div className="flex items-center justify-between w-full">
          
          {/* Informações da Hamburgueria */}
          <div className="flex items-center gap-5">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500 text-3xl font-bold flex-shrink-0">
              BH
            </span>

            <div className="flex flex-col text-left">
              <h1 className="text-xl font-bold leading-tight">Burger House</h1>
              <p className="text-sm opacity-90">Hamburgueria Artesanal</p>
              <div className="flex gap-3 mt-1 text-sm">
                <span>⭐ 4,8</span>
                <span>◷ 30–40 min</span>
                <span>♧ Grátis</span>
              </div>
            </div>
          </div>

          {/* 3. ATUALIZADO: Ao clicar no carrinho circular, muda o estado para true e abre a sidebar */}
          <div 
            onClick={() => setIsCartOpen(true)}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-500 shadow-sm cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
          >
            <ShoppingCart size={26} strokeWidth={2.5} className="text-white" />

            {totalDeItens > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-white text-red-600 text-[10px] font-extrabold rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center shadow-md animate-fade-in border border-red-100 z-10">
                {textoQuantidade}
              </span>
            )}
          </div>

        </div>

        {/* Barra de Busca */}
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600 text-base">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar no cardápio" 
            className="w-full py-2 pl-11 pr-4 border-none rounded-xl text-sm bg-white text-gray-800 outline-none shadow-sm"
          />
        </div>

      </div>

      {/* 4. ADICIONADO: Injetamos o componente da barra lateral aqui no final */}
      <CartSideBar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} // Função passada por prop que fecha a barra limpando o estado para false
      />

    </header>
  );
};
