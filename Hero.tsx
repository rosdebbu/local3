import React, { useState, useEffect, useMemo } from 'react';
import { SearchIcon, HousingIcon } from './icons';
import { FACILITIES, FEATURED_EVENTS, UPCOMING_EVENTS, CATEGORIES } from '../constants';
import type { SearchResult } from '../types';

// Helper to find a matching icon for a facility from the categories list
const getFacilityIcon = (facilityName: string) => {
    const category = CATEGORIES.find(cat => cat.name.includes(facilityName.split(' ')[0]));
    return category ? category.icon : HousingIcon; // Use HousingIcon as a fallback
};

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create a unified, memoized search index from all relevant data sources
  const searchIndex = useMemo(() => {
    const facilities = FACILITIES.map(f => ({
      type: 'Facility' as const,
      name: f.name,
      subtitle: f.description,
      icon: getFacilityIcon(f.name),
    }));

    const featuredEvents = FEATURED_EVENTS.map(e => ({
      type: 'Event' as const,
      name: e.title,
      subtitle: e.subtitle,
      icon: e.icon,
    }));

    const upcomingEvents = UPCOMING_EVENTS.map(e => ({
      type: 'Event' as const,
      name: e.title,
      subtitle: e.subtitle,
      icon: e.icon,
    }));

    return [...facilities, ...featuredEvents, ...upcomingEvents];
  }, []);

  // Debounced search effect to filter results as the user types
  useEffect(() => {
    setSearchResults([]);
    if (searchTerm.trim().length > 1) {
      const timer = setTimeout(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const results = searchIndex.filter(item =>
          item.name.toLowerCase().includes(lowercasedTerm) ||
          item.subtitle.toLowerCase().includes(lowercasedTerm)
        );
        setSearchResults(results);
      }, 300); // 300ms debounce delay
      return () => clearTimeout(timer);
    }
  }, [searchTerm, searchIndex]);

  return (
    <div className="relative pt-8 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 z-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 z-10" />
            <input
              type="text"
              placeholder="Search facilities, events, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow clicks on results
              autoComplete="off"
              className="w-full pl-16 pr-20 py-4 text-lg text-gray-700 bg-white/30 backdrop-blur-sm rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 placeholder:text-gray-200"
            />
            <button className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full shadow-md hover:bg-white/80 transition-colors">
              <SearchIcon className="w-6 h-6 text-purple-700" />
            </button>
          </div>

          {isFocused && searchTerm.length > 1 && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg max-h-96 overflow-y-auto z-20 animate-fade-in-down">
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((result, index) => (
                    <li key={index} className="flex items-center gap-4 p-3 m-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                      <div className="flex-shrink-0 bg-gray-100 rounded-lg p-2">
                        <result.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-bold text-gray-800">{result.name}</p>
                        <p className="text-sm text-gray-500">{result.subtitle}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${result.type === 'Facility' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                          {result.type}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-4 text-center text-gray-500">No results found for "{searchTerm}"</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;