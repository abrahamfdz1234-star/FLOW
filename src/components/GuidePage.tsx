import React from 'react';
import { motion } from 'motion/react';

export default function GuidePage({ key }: { key?: React.Key }) {
  return (
    <motion.main 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 relative"
    >
      {/* Sticky Sidebar (TOC) */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-32 flex flex-col gap-6">
          <div className="bg-surface rounded-md p-6 shadow-diffuse">
            <h3 className="font-heading text-lg font-bold text-text-main mb-4">Contenido</h3>
            <nav className="flex flex-col gap-2">
              <a className="text-text-main hover:text-primary text-[15px] py-2 px-3 border-l-2 border-transparent transition-colors" href="#que-es">¿Qué es SACM?</a>
              <a className="text-primary font-medium text-[15px] py-2 px-3 border-l-2 border-primary bg-primary/5 rounded-r-md transition-colors" href="#multas">Estructura de Multas</a>
              <a className="text-text-main hover:text-primary text-[15px] py-2 px-3 border-l-2 border-transparent transition-colors" href="#solucion">La Solución FLOW</a>
              <a className="text-text-main hover:text-primary text-[15px] py-2 px-3 border-l-2 border-transparent transition-colors" href="#faq">Preguntas Frecuentes</a>
            </nav>
          </div>
          <div className="bg-accent-peach/30 rounded-md p-6 border border-accent-peach/50 text-center">
            <span className="material-symbols-outlined text-primary mb-2 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <h4 className="font-heading font-semibold text-text-main mb-2">¿Dudas legales?</h4>
            <p className="text-sm text-muted mb-4">Habla con nuestros expertos en derechos de autor.</p>
            <button className="w-full py-2.5 rounded-full bg-primary text-white text-sm font-heading font-semibold uppercase tracking-wider hover:bg-primary-dark transition-colors">Consultar</button>
          </div>
        </div>
      </aside>

      {/* Main Content (Editorial) */}
      <article className="flex-grow max-w-3xl">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-mint/30 text-primary text-sm font-bold mb-6">
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
            Guía Legal & Estratégica
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-black text-text-main leading-[1.1] mb-6 tracking-tighter">
            La Guía Definitiva de <span className="text-primary relative inline-block">SACM
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-mint opacity-60 z-[-1]" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="4"></path></svg>
            </span>
          </h1>
          <p className="text-xl text-text-muted font-body leading-relaxed max-w-2xl font-medium">
            Entiende la ley de derechos de autor en México y protege tu institución con música legal y atmósferas curadas.
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-16 text-[18px] text-text-main font-body leading-[1.7]">
          <section id="que-es">
            <h2 className="font-heading text-[32px] font-black mb-6 tracking-tight">¿Qué es la SACM y por qué importa?</h2>
            <div className="prose prose-lg text-text-muted">
              <p className="mb-6">
                La Sociedad de Autores y Compositores de México (SACM) es la entidad oficial encargada de recaudar y distribuir los derechos de autor generados por la comunicación pública de obras musicales en territorio nacional.
              </p>
              <p className="mb-6">
                En términos simples: Si reproduces música en tu negocio (ya sea a través de Spotify personal, YouTube, CD's o radio) para crear un ambiente para tus clientes o empleados, la ley mexicana exige que cuentes con una licencia que pague regalías a los creadores de esa música.
              </p>
            </div>
            <div className="relative mt-12 mb-16">
              <div className="absolute -inset-4 bg-accent-mint/20 rounded-[40px] blur-2xl"></div>
              <img 
                alt="Interior moderno de institución" 
                className="relative w-full h-auto rounded-[40px] object-cover shadow-diffuse aspect-[16/9]" 
                src="https://picsum.photos/seed/modern-campus/1200/675"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          <section id="multas" className="relative">
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-accent-peach rounded-full"></div>
            <h2 className="font-heading text-[32px] font-black mb-6 tracking-tight">Estructura de Multas y Riesgos Reales</h2>
            <p className="mb-8 text-text-muted">
              Muchos dueños de negocios asumen erróneamente que pagar una suscripción premium a servicios de streaming de consumo es suficiente. Las licencias personales prohíben explícitamente el uso comercial.
            </p>
            
            <div className="bg-accent-peach/10 p-8 rounded-[40px] my-8 border border-accent-peach/30 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent-peach/20 rounded-full blur-2xl"></div>
              <h3 className="font-heading text-2xl font-black text-text-main mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                Sanciones SACM
              </h3>
              <ul className="space-y-6">
                {[
                  { icon: 'gavel', title: 'Multas Elevadas', desc: 'Desde 1,000 hasta 5,000 UMA ($100k - $500k MXN).' },
                  { icon: 'block', title: 'Clausura Temporal', desc: 'Suspensión de actividades hasta regularización.' },
                  { icon: 'history', title: 'Cobro Retroactivo', desc: 'Hasta 5 años de atraso más recargos.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="size-10 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <strong className="block text-text-main font-black">{item.title}</strong>
                      <span className="text-text-muted text-base">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="solucion">
            <div className="text-center mb-12">
              <span className="badge-pop bg-accent-lavender text-primary mb-4">Nuestra Propuesta</span>
              <h2 className="font-heading text-[32px] font-black tracking-tight">La Solución y Protección FLOW</h2>
            </div>
            <p className="mb-12 text-text-muted text-center max-w-2xl mx-auto">
              Transformamos la complejidad legal en una experiencia curada y sin estrés. Somos arquitectos de tu identidad sonora.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="pastel-card group">
                <div className="size-16 rounded-2xl bg-accent-mint flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">library_music</span>
                </div>
                <h4 className="font-heading text-xl font-black mb-3">Licenciamiento Directo</h4>
                <p className="text-base text-text-muted leading-relaxed">Proveemos catálogos de música pre-autorizada o gestionamos el pago exacto a las sociedades de gestión.</p>
              </div>
              <div className="pastel-card group">
                <div className="size-16 rounded-2xl bg-accent-lavender flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h4 className="font-heading text-xl font-black mb-3">Respaldo Jurídico</h4>
                <p className="text-base text-text-muted leading-relaxed">Emitimos certificados de cumplimiento legal válidos ante inspecciones del IMPI y SACM.</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </motion.main>
  );
}
