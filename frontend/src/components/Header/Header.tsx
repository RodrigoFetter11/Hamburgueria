import { useContext } from 'react';
import { ShoppingCart } from 'lucide-react'; // Importa o ícone vetorizado da Lucide
import { CartContext } from '../../context/CartContext'; // Ajuste o caminho da pasta conforme seu projeto

export const Header = () => {
  // 1. Puxamos a lista de itens de dentro do contexto global
  const { itens } = useContext(CartContext);

  // 2. Calculamos o total de itens somando a quantidade de cada um na sacola
  const totalDeItens = itens.reduce((acumulador, item) => acumulador + item.quantidade, 0);

  // 3. Lógica para limitar a exibição: se passar de 9, vira o texto "+9"
  const textoQuantidade = totalDeItens > 9 ? "+9" : totalDeItens;

  return (
    <header className="bg-red-600 text-white w-full h-44 flex items-center px-4">
      {/* Linha invisível de 800px que centraliza e alinha todo o cabeçalho */}
      <div className="mx-auto max-w-[800px] w-full flex flex-col gap-4">

        {/* Bloco Superior: Alinha a logo/infos na esquerda e o carrinho circular na direita */}
        <div className="flex items-center justify-between w-full">
          
          {/* Lado Esquerdo: Informações da Hamburgueria */}
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

          {/* Lado Direito: BOTÃO DO CARRINHO 100% CIRCULAR */}
          {/* - rounded-full: Garante que a caixa se transforme em uma esfera perfeita */}
          {/* - relative: Serve como âncora para a bolinha branca de contagem flutuar */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-500 shadow-sm cursor-pointer hover:scale-105 transition-transform flex-shrink-0">
            
            {/* Ícone moderno do Lucide React */}
            <ShoppingCart size={26} strokeWidth={2.5} className="text-white" />

            {/* A bolinha da quantidade sobreposta na curvatura do círculo */}
            {totalDeItens > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-white text-red-600 text-[10px] font-extrabold rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center shadow-md animate-fade-in border border-red-100 z-10">
                {textoQuantidade}
              </span>
            )}
          </div>

        </div>

        {/* Bloco Inferior: Barra de Busca */}
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600 text-base">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar no cardápio" 
            className="w-full py-2 pl-11 pr-4 border-none rounded-xl text-sm bg-white text-gray-800 outline-none shadow-sm"
          />
        </div>

      </div>
    </header>
  );
};
