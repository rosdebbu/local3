import React from 'react';
import { FACILITIES } from '../constants';
import type { Facility } from '../types';
import { HousingIcon } from './icons';

const FacilityCard: React.FC<{ facility: Facility }> = ({ facility }) => {
    const { name, description, image, color, details } = facility;

    const statusColorClasses: { [key: string]: string } = {
        blue: 'bg-blue-100 text-blue-800',
        green: 'bg-green-100 text-green-800',
        orange: 'bg-orange-100 text-orange-800',
        red: 'bg-red-100 text-red-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        purple: 'bg-purple-100 text-purple-800',
    };

    const statusButtonColorClasses: { [key: string]: string } = {
        red: 'bg-red-100 text-red-800 hover:bg-red-200',
    };

    const gradientColorClasses: { [key: string]: string } = {
        blue: 'from-blue-500',
        green: 'from-green-500',
        orange: 'from-orange-500',
        red: 'from-red-500',
        yellow: 'from-yellow-500',
        purple: 'from-purple-500',
    }

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="relative h-40">
                <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${gradientColorClasses[color]} via-black/30 to-black/60 opacity-80`}></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-bold text-xl drop-shadow-md">{name}</h3>
                    <p className="text-sm opacity-90 drop-shadow-sm">{description}</p>
                </div>
            </div>
            <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h4 className="font-bold text-gray-800">{details.mainAction.title}</h4>
                        <p className="text-sm text-gray-500">{details.mainAction.subtitle}</p>
                    </div>
                    {details.status.isButton ? (
                        <button className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${statusButtonColorClasses[details.status.color] || ''}`}>
                            {details.status.text}
                        </button>
                    ) : (
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${statusColorClasses[details.status.color] || ''}`}>
                            {details.status.text}
                        </span>
                    )}
                </div>
                <div className="mt-auto border-t border-gray-100 pt-3 space-y-2">
                    {details.infoPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <point.icon className="w-4 h-4 text-gray-400" />
                            <span>{point.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Facilities: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center justify-center gap-3">
                        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                           <HousingIcon className="w-8 h-8"/>
                        </span>
                        Campus Facilities
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                        Discover key facilities. Click a card to find them on the interactive map!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FACILITIES.map(facility => (
                        <FacilityCard key={facility.id} facility={facility} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Facilities;