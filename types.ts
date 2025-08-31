import React from 'react';

export interface Category {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  bgColor: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  subtitle: string;
}

export interface Event {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  cta: string;
  gradient: string;
}

export interface UpcomingEvent {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  actionText: string;
  actionColor: string;
  organizer: string;
  description: string;
}

export interface FacilityInfoPoint {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  details: {
    mainAction: {
      title: string;
      subtitle: string;
    };
    status: {
      text: string;
      color: string;
      isButton?: boolean;
    };
    infoPoints: FacilityInfoPoint[];
  };
}

export interface MapMarker {
  position: [number, number]; // [lat, lng]
  category: string;
  name: string;
  description?: string;
}

export interface NewsArticle {
  id: number;
  category: {
    name: string;
    color: string;
  };
  title: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
}

export interface SearchResult {
  type: 'Facility' | 'Event';
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}