import React from 'react';
import { CATEGORIES } from '../constants';
import CategoryIcon from './CategoryIcon';

const CategoryNav: React.FC = () => {
    return (
        <section className="container mx-auto px-4 -mt-16 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-y-4 gap-x-2">
                    {CATEGORIES.map((category) => (
                        <CategoryIcon key={category.name} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryNav;