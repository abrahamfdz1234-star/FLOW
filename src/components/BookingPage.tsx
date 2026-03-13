import React from 'react';
import { motion } from 'motion/react';

interface BookingPageProps {
  onBack: () => void;
  key?: React.Key;
}

export default function BookingPage({ onBack }: BookingPageProps) {
  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full px-4 pb-20 flex flex-col items-center"
    >
      <header className="w-full px-6 py-8 max-w-[1200px] mx-auto flex items-center justify-between">
        <button 
          onClick={onBack}
          className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300"
        >
          <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors">arrow_back</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"></path>
            </svg>
          </div>
          <span className="font-bold tracking-tight text-lg">FLOW</span>
        </div>
        <div className="w-12 h-12"></div>
      </header>

      <div className="w-full max-w-[800px] bg-white rounded-[40px] shadow-diffuse p-8 sm:p-12 relative overflow-hidden border border-white/50">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-peach/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-mint/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="text-center mb-12 relative z-10">
          <span className="badge-pop bg-accent-lavender text-primary mb-4">Auditoría Gratuita</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-text-main font-heading">
            Eleva tu Estatus
          </h1>
          <p className="text-text-muted text-lg max-w-lg mx-auto font-medium">
            Descubre cómo asegurar y optimizar el ambiente musical de tu institución contra riesgos legales.
          </p>
        </div>

        <form className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-black text-text-main px-4 uppercase tracking-widest">Nombre Completo</label>
              <input 
                className="h-16 w-full bg-background-light text-text-main rounded-2xl px-6 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all placeholder:text-text-muted font-bold" 
                placeholder="Ej. Juan Pérez" 
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-black text-text-main px-4 uppercase tracking-widest">Correo Institucional</label>
              <input 
                className="h-16 w-full bg-background-light text-text-main rounded-2xl px-6 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all placeholder:text-text-muted font-bold" 
                placeholder="juan@institucion.edu" 
                type="email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-black text-text-main px-4 uppercase tracking-widest">Teléfono de Contacto</label>
            <input 
              className="h-16 w-full bg-background-light text-text-main rounded-2xl px-6 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all placeholder:text-text-muted font-bold" 
              placeholder="(81) 0000 0000" 
              type="tel"
            />
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <label className="text-sm font-black text-text-main px-4 uppercase tracking-widest">Tipo de Institución</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { id: 'escuela', icon: 'school', label: 'Escuela', color: 'peer-checked:bg-accent-mint/20 peer-checked:border-accent-mint' },
                { id: 'universidad', icon: 'account_balance', label: 'Universidad', color: 'peer-checked:bg-accent-lavender/20 peer-checked:border-accent-lavender' },
                { id: 'corporativo', icon: 'business', label: 'Corporativo', color: 'peer-checked:bg-accent-peach/20 peer-checked:border-accent-peach' },
                { id: 'otro', icon: 'more_horiz', label: 'Otro', color: 'peer-checked:bg-accent-yellow/20 peer-checked:border-accent-yellow' },
              ].map((item) => (
                <label key={item.id} className="cursor-pointer group">
                  <input className="peer sr-only" name="business_type" type="radio" value={item.id} />
                  <div className={`flex flex-col items-center justify-center gap-2 p-6 bg-background-light rounded-3xl border-2 border-transparent transition-all duration-300 ${item.color}`}>
                    <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors text-3xl">{item.icon}</span>
                    <span className="text-xs font-black text-text-main uppercase tracking-tighter">{item.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-8">
            <button 
              className="w-full h-20 bg-primary text-white rounded-[30px] font-black text-xl uppercase tracking-widest hover:bg-primary-dark transition-all duration-500 shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-2 flex items-center justify-center gap-3 group" 
              type="button"
            >
              <span>Agendar Auditoría</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">bolt</span>
            </button>
            <p className="text-center text-xs text-text-muted mt-6 flex items-center justify-center gap-2 font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Certificación de Seguridad FLOW
            </p>
          </div>
        </form>
      </div>
    </motion.main>
  );
}
