import type { ReactNode } from "react";

// 1. Definimos a interface adicionando a propriedade opcional 'isActive'
interface CategoryItemProps {
  name: string;
  children: ReactNode;
  isActive?: boolean; 
}

export const CategoryItem = ({ name, children, isActive = false }: CategoryItemProps) => {
  return (
    // 2. MÁGICA VISUAL: Usamos o template literal (crases) para injetar cores dinâmicas
    // Se isActive for true: ganha fundo vermelho, texto branco e borda vermelha.
    // Se for false: mantém o fundo cinza/branco padrão com texto escuro.
    <div className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-200 select-none w-24 ${
      isActive 
        ? "bg-red-600 border-red-600 text-white shadow-sm scale-105" 
        : "bg-gray-50/50 border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50"
    }`}>
      
      {/* Container do Ícone (Componente do Lucide) */}
      {/* Mudamos o tamanho do texto para herdar (inherit) a cor do container pai acima */}
      <div className={`text-2xl transition-colors ${isActive ? "text-white" : "text-red-500"}`}>
        {children}
      </div>

      {/* Nome da Categoria */}
      <span className="text-xs font-bold tracking-wide text-center truncate w-full">
        {name}
      </span>

    </div>
  );
};
