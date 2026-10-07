interface CardProductProps {
  name: string;
  description: string;
  image: string;
  onAdd: () => void;
  children: React.ReactNode;
}

export const CardProduct = ({
  name,
  description,
  image,
  onAdd,
  children,
}: CardProductProps) => {
  return (
    <div className="flex justify-between items-center py-5 border-b border-gray-100 bg-white w-full">
      <div className="flex flex-col text-left pr-6 flex-1">
        <h3 className="text-base font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="mt-3">{children}</div>
      </div>
      <div className="relative w-24 h-24 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
        <button
          onClick={onAdd}
          className="absolute -bottom-2.5 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition-all cursor-pointer border-none outline-none"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};
