import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 pointer-events-none">
      <header className="glass-nav rounded-full mx-auto max-w-5xl flex items-center justify-between px-6 py-3 pointer-events-auto">
        <div 
          className="flex items-center gap-3 text-text-main cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="size-5">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-text-main text-xl font-extrabold tracking-tight font-heading">F.L.O.W.</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-sm font-black uppercase tracking-widest transition-all relative group ${currentPath === 'home' ? 'text-primary' : 'text-text-muted hover:text-primary'}`}
          >
            Inicio
            {currentPath === 'home' && (
              <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </button>
          <button 
            onClick={() => onNavigate('services')}
            className={`text-sm font-black uppercase tracking-widest transition-all relative group ${currentPath === 'services' ? 'text-primary' : 'text-text-muted hover:text-primary'}`}
          >
            Propuesta
            {currentPath === 'services' && (
              <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </button>
          <button 
            onClick={() => onNavigate('guide')}
            className={`text-sm font-black uppercase tracking-widest transition-all relative group ${currentPath === 'guide' ? 'text-primary' : 'text-text-muted hover:text-primary'}`}
          >
            Diagnóstico
            {currentPath === 'guide' && (
              <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        </nav>

        <button 
          onClick={() => onNavigate('booking')}
          className="flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-lg text-white text-xs font-black uppercase tracking-widest"
        >
          <span>Auditoría</span>
        </button>
      </header>
    </div>
  );
}
