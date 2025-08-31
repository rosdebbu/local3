import React from 'react';
import type { Category, GalleryImage, Event, UpcomingEvent, Facility, MapMarker, NewsArticle } from './types';
import { 
    TransportIcon, FoodIcon, ShopIcon, GymIcon, HealthIcon, HousingIcon, LibraryIcon, CalendarIcon, 
    RocketIcon, MusicIcon, TrophyIcon, GraduationCapIcon, PaintBrushIcon, MicIcon, BusIcon, TrainIcon, 
    AutoIcon, RestaurantIcon, ShopBagIcon, ClockIcon, PhoneIcon, HospitalIcon, DoctorIcon, BuildingIcon, 
    LocationPinIcon, CutleryIcon, CoffeeIcon, ShirtIcon, BookIcon
} from './components/icons';

export const CATEGORIES: Category[] = [
  { name: 'Transport', icon: TransportIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'Food', icon: FoodIcon, iconColor: 'text-white', bgColor: 'bg-green-500' },
  { name: 'Shops', icon: ShopIcon, iconColor: 'text-white', bgColor: 'bg-orange-500' },
  { name: 'Gym', icon: GymIcon, iconColor: 'text-white', bgColor: 'bg-yellow-500' },
  { name: 'Health', icon: HealthIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Housing', icon: HousingIcon, iconColor: 'text-white', bgColor: 'bg-purple-500' },
  { name: 'Library', icon: LibraryIcon, iconColor: 'text-white', bgColor: 'bg-indigo-500' },
  { name: 'Events', icon: CalendarIcon, iconColor: 'text-white', bgColor: 'bg-teal-500' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/800/600?image=1074', title: 'Main Campus Building', subtitle: 'Administrative Block' },
  { id: 2, src: 'https://picsum.photos/800/600?image=20', title: 'Central Library', subtitle: '24/7 Study Space' },
  { id: 3, src: 'https://picsum.photos/800/600?image=2', title: 'SRM Tech Park', subtitle: 'Innovation Hub' },
  { id: 4, src: 'https://picsum.photos/800/600?image=1062', title: 'Sports Complex', subtitle: 'Fitness & Recreation' },
  { id: 5, src: 'https://picsum.photos/800/600?image=1075', title: 'Student Hostels', subtitle: 'Comfortable Living' },
  { id: 6, src: 'https://picsum.photos/800/600?image=1015', title: 'TP Ganesan Auditorium', subtitle: 'Events & Conferences' },
];

export const FEATURED_EVENTS: Event[] = [
  { id: 1, title: 'AARUUSH', subtitle: 'Annual Tech Fest', date: 'February 2025', details: ['50,000+ Participants', '₹10 Lakhs Prize Money'], image: 'https://picsum.photos/seed/aaruush/800/400', icon: RocketIcon, cta: 'Learn More', gradient: 'from-blue-500 to-indigo-600' },
  { id: 2, title: 'MILAN', subtitle: 'Cultural Extravaganza', date: 'October 2024', details: ['Celebrity Performances', '25+ Events'], image: 'https://picsum.photos/seed/milan/800/400', icon: MusicIcon, cta: 'Explore Events', gradient: 'from-pink-500 to-purple-600' },
  { id: 3, title: 'SPORTS FIESTA', subtitle: 'Athletic Championships', date: 'March 2025', details: ['Inter-College Competitions', '20+ Sports Events'], image: 'https://picsum.photos/seed/sports/800/400', icon: TrophyIcon, cta: 'Register Now', gradient: 'from-green-400 to-teal-500' },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  { id: 1, icon: GraduationCapIcon, iconBg: 'bg-blue-100 text-blue-600', title: 'Tech Symposium', subtitle: 'AI & Machine Learning Conference', time: 'Today, 5:00 PM', location: 'TP Ganesan Auditorium', actionText: 'Join Event', actionColor: 'text-blue-600', organizer: 'Dept. of Computer Science', description: 'A deep dive into the latest advancements in Artificial Intelligence and Machine Learning. Featuring keynote speakers from top tech companies and research institutions. All students are welcome.' },
  { id: 2, icon: PaintBrushIcon, iconBg: 'bg-purple-100 text-purple-600', title: 'Art Exhibition', subtitle: 'Student Creative Showcase', time: 'Tomorrow, 10:00 AM', location: 'Library Gallery', actionText: 'View Details', actionColor: 'text-purple-600', organizer: 'Fine Arts Club', description: 'Explore a stunning collection of paintings, sculptures, and digital art from our talented students. A perfect opportunity to support campus artists.' },
  { id: 3, icon: MicIcon, iconBg: 'bg-green-100 text-green-600', title: 'Guest Lecture Series', subtitle: 'Industry Leaders Talk', time: 'Friday, 2:00 PM', location: 'SJT Building', actionText: 'Register', actionColor: 'text-green-600', organizer: 'Corporate Relations Office', description: 'Gain valuable insights from a leading CEO in the tech industry. The session will cover future trends, career advice, and include a Q&A session. Limited seats available.' },
];

export const FACILITIES: Facility[] = [
    {
        id: 1,
        name: 'Transportation',
        description: 'Buses, Trains & Autos',
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color: 'blue',
        details: {
            mainAction: { title: 'Bus 500', subtitle: 'To Tambaram' },
            status: { text: 'Arriving in 5 min', color: 'blue' },
            infoPoints: [
                { icon: TrainIcon, text: 'Next train: 4:15 PM' },
                { icon: AutoIcon, text: 'Autos available' },
            ],
        },
    },
    {
        id: 2,
        name: 'Food & Dining',
        description: 'Mess, Canteens & More',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color: 'green',
        details: {
            mainAction: { title: 'Main Mess', subtitle: 'Breakfast: 7:30-9:30 AM' },
            status: { text: 'Open Now', color: 'green' },
            infoPoints: [
                { icon: CoffeeIcon, text: 'CCD: Open' },
                { icon: CutleryIcon, text: 'Food Court: Open' },
            ],
        },
    },
    {
        id: 3,
        name: 'Shops & Services',
        description: 'Xerox, Stationery & More',
        image: 'https://images.unsplash.com/photo-1528698827598-2b62098d3d3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color: 'orange',
        details: {
            mainAction: { title: 'Xerox Shops', subtitle: 'Near Admin Block' },
            status: { text: 'Open till 9 PM', color: 'orange' },
            infoPoints: [
                { icon: BookIcon, text: 'Stationery: Open' },
                { icon: ShirtIcon, text: 'Laundry: Open' },
            ],
        },
    },
    {
        id: 4,
        name: 'Health & Safety',
        description: 'Hospital, Pharmacy & SOS',
        image: 'https://images.unsplash.com/photo-1538945244979-1102553b429d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color: 'red',
        details: {
            mainAction: { title: 'Emergency Contact', subtitle: '24/7 Available' },
            status: { text: '+91 98402 12345', color: 'red', isButton: true },
            infoPoints: [
                { icon: HospitalIcon, text: 'SRM Hospital: Open' },
                { icon: DoctorIcon, text: 'Doctors: Available' },
            ],
        },
    },
    {
        id: 5,
        name: 'Gym & Fitness',
        description: 'On-campus & Nearby Gyms',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color: 'yellow',
        details: {
            mainAction: { title: 'SRM Fitness Center', subtitle: 'On-campus facility' },
            status: { text: 'Open Now', color: 'yellow' },
            infoPoints: [
                { icon: ClockIcon, text: 'Timings: 6AM-10PM' },
                { icon: PhoneIcon, text: 'Contact: 9876543210' },
            ],
        },
    },
    {
        id: 6,
        name: 'Housing',
        description: 'Hostels, PGs & Flats',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color: 'purple',
        details: {
            mainAction: { title: 'Hostel Applications', subtitle: '2024-25 Academic Year' },
            status: { text: 'Open', color: 'purple' },
            infoPoints: [
                { icon: BuildingIcon, text: 'PGs Available: 12' },
                { icon: LocationPinIcon, text: 'Near Campus' },
            ],
        },
    },
];

export const MAP_MARKERS: MapMarker[] = [
  // Transportation
  { position: [12.820, 80.040], category: 'Transportation', name: 'SRM Bus Terminus', description: 'Main bus stop for college buses.' },
  { position: [12.825, 80.038], category: 'Transportation', name: 'Potheri Railway Station', description: 'Suburban train station.' },
  
  // Food & Dining
  { position: [12.823, 80.045], category: 'Food & Dining', name: 'Java Green', description: 'Popular cafe spot.' },
  { position: [12.824, 80.046], category: 'Food & Dining', name: 'University Food Court (UFC)', description: 'Multi-cuisine food court.' },
  { position: [12.819, 80.043], category: 'Food & Dining', name: 'Spoonbill Restaurant', description: 'Fine dining.' },

  // Shops & Services
  { position: [12.822, 80.044], category: 'Shops & Services', name: 'University Bookstore', description: 'Stationery and textbooks.' },
  { position: [12.821, 80.042], category: 'Shops & Services', name: 'Campus Xerox Center', description: 'Printing and copying services.' },
  
  // Gyms & Fitness
  { position: [12.826, 80.047], category: 'Gyms & Fitness', name: 'SRM Gym', description: 'Fully equipped fitness center.' },

  // Health & Safety
  { position: [12.823, 80.048], category: 'Health & Safety', name: 'SRM Medical College Hospital', description: '24/7 emergency services.' },
  
  // Housing
  { position: [12.827, 80.042], category: 'Housing', name: 'Boys Hostel Block A', description: 'Student accommodation.' },
  { position: [12.828, 80.045], category: 'Housing', name: 'Girls Hostel Block C', description: 'Student accommodation.' },
];

export const CAMPUS_NEWS: NewsArticle[] = [
  {
    id: 1,
    category: { name: 'Academics', color: 'blue' },
    title: 'SRMIST Unveils New AI & Data Science Research Center',
    author: 'SRM Communications',
    date: 'October 26, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
  },
  {
    id: 2,
    category: { name: 'Campus Life', color: 'green' },
    title: 'Annual Cultural Fest "Milan" Dates Announced for October',
    author: 'Student Council',
    date: 'October 24, 2024',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    category: { name: 'Sports', color: 'red' },
    title: 'Inter-University Cricket Tournament Heats Up',
    author: 'Sports Committee',
    date: 'October 22, 2024',
    image: 'https://images.unsplash.com/photo-1562088237-142c4b81c2f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
    {
    id: 4,
    category: { name: 'Achievements', color: 'yellow' },
    title: 'SRM Rover Team Wins International Competition',
    author: 'Dept. of Engineering',
    date: 'October 20, 2024',
    image: 'https://images.unsplash.com/photo-1614726365349-36a272535733?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];