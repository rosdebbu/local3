import React from 'react';
import type { Category } from '../types';

interface CategoryIconProps {
  category: Category;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
  const { name, icon: Icon, iconColor, bgColor } = category;
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group text-center">
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
};

export default CategoryIcon;