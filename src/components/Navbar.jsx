import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold tracking-tight">Techsense</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
