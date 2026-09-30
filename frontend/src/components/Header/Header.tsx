export const Header = () => {
  return (
    <header className="bg-red-600 text-white w-full h-44 flex items-center px-4">
      <div className="mx-auto max-w-[800px] w-full flex flex-col gap-4">

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