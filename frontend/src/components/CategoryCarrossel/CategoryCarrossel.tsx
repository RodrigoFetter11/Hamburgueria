import { categories } from "../../data/categories";
import { CategoryItem } from "../CategoryItem/CategoryItem";

export const CategoryCarrosel = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 overflow-x-auto scrollbar-none">
      <div className="mx-auto max-w-[800px] w-full flex gap-6 items-center justify-start py-5 px-4">
      {categories.map((category) => {
  const Icon = category.icon;

  return (
    <CategoryItem
      key={category.id}
      name={category.name}
    >
      <Icon />
    </CategoryItem>
  );
})}
      </div>
    </nav>
  );
};
