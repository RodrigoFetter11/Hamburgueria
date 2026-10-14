import { ChevronLeft, ChevronRight } from 'lucide-react'; // 1. Importa as setas do Lucide
import { categories } from "../../data/categories";
import { CategoryItem } from "../CategoryItem/CategoryItem";

interface CategoryCarroselProps {
  activeCategory: number | null;
  onSelectCategory: (id: number | null) => void;
}

export const CategoryCarrosel = ({ activeCategory, onSelectCategory }: CategoryCarroselProps) => {
  const isTodosActive = activeCategory === null;

  // 2. FUNÇÕES DE NAVEGAÇÃO: Fazem a barra rolar 200px para os lados de forma suave
  const rolarParaEsquerda = () => {
    const container = document.getElementById('container-categorias');
    if (container) container.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const rolarParaDireita = () => {
    const container = document.getElementById('container-categorias');
    if (container) container.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    // Adicionado 'relative' e 'group' no pai para ancorar e controlar a exibição das setas
    <nav className="w-full bg-white border-b border-gray-200 relative group">
      <div className="mx-auto max-w-[800px] w-full relative flex items-center">
        
        {/* SETA DA ESQUERDA (Só surge quando passa o mouse por cima no notebook) */}
        <button
          onClick={rolarParaEsquerda}
          className="absolute left-2 z-10 bg-white/90 hover:bg-white text-gray-700 p-1.5 rounded-full shadow-md border border-gray-100 hover:scale-110 transition-all cursor-pointer hidden group-hover:flex items-center justify-center outline-none select-none"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>

        {/* CONTAINER DE SCROLL (Adicionado o id="container-categorias" para a função ler) */}
        <div 
          id="container-categorias"
          className="w-full flex gap-6 items-center justify-start py-5 px-4 overflow-x-auto scrollbar-none scroll-smooth"
        >
          
          {/* Botão "Todos" */}
          <div onClick={() => onSelectCategory(null)} className="cursor-pointer">
            <CategoryItem name="Todos" isActive={isTodosActive}>
              🍽️
            </CategoryItem>
          </div>

          {/* Loop das Categorias */}
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = activeCategory === category.id;

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(isSelected ? null : category.id)}
                className="cursor-pointer"
              >
                <CategoryItem name={category.name} isActive={isSelected}>
                  <Icon />
                </CategoryItem>
              </div>
            );
          })}
          
        </div>

        {/* SETA DA DIREITA (Só surge quando passa o mouse por cima no notebook) */}
        <button
          onClick={rolarParaDireita}
          className="absolute right-2 z-10 bg-white/90 hover:bg-white text-gray-700 p-1.5 rounded-full shadow-md border border-gray-100 hover:scale-110 transition-all cursor-pointer hidden group-hover:flex items-center justify-center outline-none select-none"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>

      </div>
    </nav>
  );
};
