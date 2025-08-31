

import React, { useState } from 'react';
import { FEATURED_EVENTS, UPCOMING_EVENTS } from '../constants';
import type { UpcomingEvent } from '../types';
import { CalendarIcon, GraduationCapIcon, RocketIcon } from './icons';
import Modal from './Modal';

const FeaturedEventCard: React.FC<{ event: typeof FEATURED_EVENTS[0] }> = ({ event }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="relative h-56">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-80`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                    <event.icon className="w-16 h-16 mx-auto mb-2 opacity-80" />
                    <h3 className="text-4xl font-extrabold tracking-wider uppercase">{event.title}</h3>
                </div>
            </div>
        </div>
        <div className="p-6">
            <h4 className="text-xl font-bold text-gray-800">{event.subtitle}</h4>
            <div className="my-4 space-y-2 text-gray-600">
                <p className="flex items-center gap-2"><CalendarIcon className="w-5 h-5 text-gray-400"/> {event.date}</p>
                {event.details.map((detail, index) => (
                    <p key={index} className="flex items-center gap-2">
                        <span className="text-blue-500 font-bold">●</span> {detail}
                    </p>
                ))}
            </div>
            <button className={`w-full py-3 mt-4 font-bold text-white rounded-lg bg-gradient-to-r ${event.gradient} hover:opacity-90 transition-opacity`}>
                {event.cta}
            </button>
        </div>
    </div>
);

const UpcomingEventItem: React.FC<{ event: UpcomingEvent, onViewDetails: (event: UpcomingEvent) => void }> = ({ event, onViewDetails }) => (
    <li className="flex items-center gap-4 py-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${event.iconBg}`}>
            <event.icon className="w-6 h-6"/>
        </div>
        <div className="flex-grow">
            <h5 className="font-bold text-gray-800">{event.title}</h5>
            <p className="text-sm text-gray-500">{event.subtitle}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                <span>🕒 {event.time}</span>
                <span>📍 {event.location}</span>
            </div>
        </div>
        <button 
          onClick={() => onViewDetails(event)}
          className={`font-semibold ${event.actionColor} hover:underline`}
        >
          {event.actionText}
        </button>
    </li>
);

const Events: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);

    const handleViewDetails = (event: UpcomingEvent) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                        <RocketIcon className="inline-block w-10 h-10 mr-2 text-purple-600" />
                        Campus Life & Events
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                        Join amazing events, festivals, and activities that make SRMIST campus life memorable
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {FEATURED_EVENTS.map(event => (
                        <FeaturedEventCard key={event.id} event={event} />
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-3">
                            <CalendarIcon className="w-7 h-7" /> Upcoming Campus Events
                        </h3>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-4">
                        <ul className="divide-y divide-gray-200">
                            {UPCOMING_EVENTS.map(event => (
                                <UpcomingEventItem key={event.id} event={event} onViewDetails={handleViewDetails} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {selectedEvent && (
                <Modal isOpen={!!selectedEvent} onClose={handleCloseModal}>
                    <div className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${selectedEvent.iconBg}`}>
                                <selectedEvent.icon className="w-8 h-8"/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h3>
                                <p className="text-md text-gray-600">{selectedEvent.subtitle}</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700">
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-semibold mb-2 text-gray-500 uppercase text-sm tracking-wider">Description</h4>
                                <p>{selectedEvent.description}</p>
                            </div>
                            <div className="border-t border-gray-200 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold mb-2 text-gray-500 uppercase text-sm tracking-wider">Details</h4>
                                    <p><strong>Time:</strong> {selectedEvent.time}</p>
                                    <p><strong>Location:</strong> {selectedEvent.location}</p>
                                    <p><strong>Organizer:</strong> {selectedEvent.organizer}</p>
                                </div>
                            </div>
                        </div>

                         <div className="mt-8 border-t border-gray-200 pt-6 flex justify-end">
                            <button 
                                onClick={handleCloseModal}
                                className="px-6 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Events;