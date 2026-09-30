interface CategoryItemProps {
  name: string;
  children: React.ReactNode;
}

export const CategoryItem = ({
  name,
  children,
}: CategoryItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full">
        {children}
      </div>

      <span>{name}</span>
    </div>
  );
}