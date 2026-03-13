/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import ServicesPage from './components/ServicesPage';
import GuidePage from './components/GuidePage';
import BookingPage from './components/BookingPage';

type Page = 'home' | 'services' | 'guide' | 'booking';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('services');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      case 'services':
        return <ServicesPage key="services" onNavigate={setCurrentPage} />;
      case 'guide':
        return <GuidePage key="guide" />;
      case 'booking':
        return <BookingPage key="booking" onBack={() => setCurrentPage('services')} />;
      default:
        return <ServicesPage key="services" onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== 'booking' && (
        <Navbar currentPath={currentPage} onNavigate={setCurrentPage} />
      )}
      
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>

      {/* Footer (Optional, based on design feel) */}
      {currentPage !== 'booking' && (
        <footer className="py-12 px-8 border-t border-surface mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-text-main">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-text-main text-xl font-extrabold tracking-tight">FLOW</h2>
            </div>
            <p className="text-text-muted text-sm font-medium">
              © 2024 FLOW Audio & Licenciamiento. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-text-muted hover:text-primary transition-colors text-sm font-bold">Privacidad</a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors text-sm font-bold">Términos</a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

