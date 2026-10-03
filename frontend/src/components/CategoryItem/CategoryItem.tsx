import React from 'react';

interface CategoryItemProps {
  name: string;
  children: React.ReactNode;
}

export const CategoryItem = ({
  name,
  children,
}: CategoryItemProps) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer shrink-0">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 shadow-sm">
        {children}
      </div>

      <span>{name}</span>
    </div>
  );
};