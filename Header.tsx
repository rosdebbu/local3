import React from 'react';
import { GraduationCapIcon, SunIcon, BellIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-full">
            <GraduationCapIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">LocalAlert Pro</h1>
            <p className="text-sm text-gray-500">SRMIST Potheri • Smart Campus</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
            <SunIcon className="w-6 h-6 text-yellow-500" />
            <div className="text-sm">
                <span className="font-bold">28°C</span>
                <span className="text-gray-500"> Sunny</span>
            </div>
          </div>
          <div className="relative cursor-pointer">
            <BellIcon className="w-7 h-7 text-gray-500" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white border-2 border-white">3</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold border-2 border-white shadow-md cursor-pointer">
            DD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;