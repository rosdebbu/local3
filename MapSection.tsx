import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { MAP_MARKERS } from '../constants';
import type { MapMarker } from '../types';

import { 
    LocationIcon, TransportIcon, FoodIcon, ShopIcon,
    HealthIcon, HousingIcon, GymIcon 
} from './icons'; 

const mapFilters = [
    { name: 'Transportation', desc: 'Buses & Autos', icon: TransportIcon, color: 'blue' },
    { name: 'Food & Dining', desc: 'Mess & Cafés', icon: FoodIcon, color: 'orange' },
    { name: 'Shops & Services', desc: 'Xerox & Stationery', icon: ShopIcon, color: 'green' },
    { name: 'Gyms & Fitness', desc: 'On & Off Campus', icon: GymIcon, color: 'yellow' },
    { name: 'Health & Safety', desc: 'Hospital & Emergency', icon: HealthIcon, color: 'red' },
    { name: 'Housing', desc: 'Hostels & PGs', icon: HousingIcon, color: 'purple' },
];

const colorMap: { [key: string]: string } = {
    blue: '#3b82f6',
    green: '#22c55e',
    orange: '#f97316',
    yellow: '#eab308',
    red: '#ef4444',
    purple: '#a855f7',
};
const bgColorMap: { [key: string]: string } = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
};

// Function to create custom marker icons as colored dots
const getMarkerIcon = (categoryColor: string) => {
    const color = colorMap[categoryColor] || '#9ca3af'; // gray-400 for fallback
    const markerHtml = `
      <div style="
        background-color: ${color}; 
        width: 24px; 
        height: 24px; 
        border-radius: 50%; 
        border: 3px solid white; 
        box-shadow: 0 2px 5px rgba(0,0,0,0.5);
      "></div>`;

    return divIcon({
        html: markerHtml,
        className: 'custom-map-icon', // This class is for removing default leaflet styles
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
    });
};

const MapSection: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };
  
  const filteredMarkers = useMemo(() => {
      if (selectedCategories.length === 0) {
          return MAP_MARKERS;
      }
      return MAP_MARKERS.filter(marker => selectedCategories.includes(marker.category));
  }, [selectedCategories]);

  const categoryColorLookup = useMemo(() => {
      return mapFilters.reduce((acc, filter) => {
          acc[filter.name] = filter.color;
          return acc;
      }, {} as {[key: string]: string});
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                <LocationIcon className="inline-block w-10 h-10 mr-2 text-blue-600"/>
                Interactive SRMIST Potheri Map
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Click category buttons to filter locations. Click markers for details.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-2 gap-4">
                {mapFilters.map(filter => {
                    const isActive = selectedCategories.includes(filter.name);
                    return (
                        <button 
                            key={filter.name} 
                            onClick={() => toggleCategory(filter.name)}
                            className={`p-4 rounded-2xl text-white cursor-pointer transform hover:scale-105 hover:shadow-xl transition-all duration-300 ${bgColorMap[filter.color]} ${isActive ? 'ring-4 ring-offset-2 ring-offset-gray-100 ring-yellow-400' : 'shadow-lg'}`}
                        >
                            <filter.icon className="w-8 h-8 mb-2 opacity-80"/>
                            <h4 className="font-bold text-left">{filter.name}</h4>
                            <p className="text-xs opacity-90 text-left">{filter.desc}</p>
                        </button>
                    )
                })}
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-2 relative h-[500px]">
                <MapContainer center={[12.8231, 80.0444]} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {filteredMarkers.map(marker => (
                        <Marker 
                            key={marker.name} 
                            position={marker.position} 
                            icon={getMarkerIcon(categoryColorLookup[marker.category])}
                        >
                            <Popup>
                                <div className="font-bold">{marker.name}</div>
                                {marker.description && <p>{marker.description}</p>}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;