
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { FolderIcon } from './icons';

const GalleryCard: React.FC<{ item: typeof GALLERY_IMAGES[0] }> = ({ item }) => (
  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300">
    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-3 text-white w-full">
      <h3 className="text-sm font-bold truncate">{item.title}</h3>
      <p className="text-xs opacity-90 truncate">{item.subtitle}</p>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center justify-center gap-3">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                    <FolderIcon className="w-8 h-8"/>
                </span>
                Campus Gallery
            </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Explore SRMIST Potheri through stunning visuals
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {GALLERY_IMAGES.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;