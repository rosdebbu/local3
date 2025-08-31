import React from 'react';
import { CAMPUS_NEWS } from '../constants';
import type { NewsArticle } from '../types';
import { NewspaperIcon } from './icons';

const NewsCategoryTag: React.FC<{ category: NewsArticle['category'] }> = ({ category }) => {
    const colorClasses: { [key: string]: string } = {
        blue: 'bg-blue-100 text-blue-800',
        green: 'bg-green-100 text-green-800',
        red: 'bg-red-100 text-red-800',
        yellow: 'bg-yellow-100 text-yellow-800',
    };
    return (
        <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${colorClasses[category.color] || 'bg-gray-100 text-gray-800'}`}>
            {category.name}
        </span>
    );
};

const FeaturedNewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer">
        <div className="relative h-80">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <NewsCategoryTag category={article.category} />
                <h3 className="mt-2 text-2xl font-bold text-white drop-shadow-md">{article.title}</h3>
            </div>
        </div>
        <div className="p-6">
            <div className="flex items-center text-sm text-gray-500">
                <span>By {article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
            </div>
            <a href="#" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">Read More &rarr;</a>
        </div>
    </div>
);

const NewsListItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <li className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
        <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
        <div className="flex-grow">
            <NewsCategoryTag category={article.category} />
            <h4 className="mt-1 font-bold text-gray-800 leading-tight group-hover:text-blue-600">{article.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{article.date}</p>
        </div>
    </li>
);

const News: React.FC = () => {
    const featuredArticle = CAMPUS_NEWS.find(a => a.featured) || CAMPUS_NEWS[0];
    const otherArticles = CAMPUS_NEWS.filter(a => a.id !== featuredArticle.id);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center justify-center gap-3">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                            <NewspaperIcon className="w-8 h-8"/>
                        </span>
                        Campus News & Updates
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Stay informed about the latest happenings and announcements.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <FeaturedNewsCard article={featuredArticle} />
                    <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-4">
                        <h3 className="text-xl font-bold px-4 mb-2">Recent Stories</h3>
                        <ul className="space-y-2">
                            {otherArticles.map(article => (
                                <NewsListItem key={article.id} article={article} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;