import { products } from "../../data/products";
import { CardProduct } from "../CardProduct/CardProduct";

export const ProductList = () => {
  return (
    <main className="mx-auto max-w-[800px] w-full px-4 mt-8">
      <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-left border-b border-gray-100 pb-3">
          Cardápio de Hambúrgueres
        </h2>
        {products.map((produto) => (
          <CardProduct
            key={produto.id}
            name={produto.name}
            description={produto.description}
            image={produto.image}
            onAdd={() => alert(`Abrindo o lanche ${produto.name}`)}
          >
            <div className="flex flex-col gap-1">
              {produto.tag && (
                <div className="flex text-left mb-1.5">
                  <span className="bg-red-5 base-0 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide uppercase border border-red-100">
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
    </main>
  );
};
