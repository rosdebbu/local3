
import React from 'react';
import { GraduationCapIcon, TransportIcon, FoodIcon, CampusMapIcon, PhoneIcon, MailIcon, HeartIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCapIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold">LocalAlert Pro</h2>
            </div>
            <p className="text-gray-400 max-w-md">
              Empowering SRMIST Potheri students with AI-powered campus navigation, real-time updates, and seamless connectivity for a smarter campus experience.
            </p>
          </div>

          {/* Column 2: Quick Access */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase text-gray-300">Quick Access</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><TransportIcon className="w-5 h-5"/> Transportation</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><FoodIcon className="w-5 h-5"/> Food & Dining</li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"><CampusMapIcon className="w-5 h-5"/> Campus Map</li>
            </ul>
          </div>
          
          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase text-gray-300">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded">SOS</span>
                <span className="font-semibold">Emergency: 112</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <PhoneIcon className="w-5 h-5"/>
                <span>Emergency: 112</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <MailIcon className="w-5 h-5"/>
                <span>support@localalert.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LocalAlert Pro - SRMIST Potheri. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1.5">
            Made with <HeartIcon className="w-5 h-5 text-red-500"/> for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
