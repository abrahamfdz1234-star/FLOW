import React from 'react';
import { motion } from 'motion/react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  key?: React.Key;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex-grow pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto w-full"
    >
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
        <span className="badge-pop bg-accent-lavender text-primary mb-6">Consultoría de Audio Branding B2B</span>
        <h1 className="text-5xl md:text-7xl font-black text-text-main mb-8 leading-[0.9] tracking-tighter font-heading">
          La Revelación Acústica:<br />
          <span className="text-primary">Del Ruido al Prestigio.</span>
        </h1>
        <p className="text-text-muted text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
          Transformamos el caos operativo y la negligencia acústica en una identidad sonora que eleva el estatus de tu institución.
        </p>
      </div>

      {/* Philosophy Section - The Code F.L.O.W. */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
        {[
          { title: 'Fuego', desc: 'La chispa creativa que inicia el cambio.', icon: 'local_fire_department', color: 'bg-accent-peach' },
          { title: 'Latido', desc: 'El ritmo vital que conecta con la emoción.', icon: 'favorite', color: 'bg-accent-lavender' },
          { title: 'Origen', desc: 'La identidad auténtica de cada institución.', icon: 'fingerprint', color: 'bg-accent-mint' },
          { title: 'Wander', desc: 'La capacidad de explorar nuevos paisajes.', icon: 'explore', color: 'bg-accent-yellow' },
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="pastel-card flex flex-col items-center text-center group"
          >
            <div className={`size-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
            </div>
            <h3 className="font-black text-lg mb-2 font-heading">{item.title}</h3>
            <p className="text-sm text-text-muted leading-tight">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Service 1: Audio Branding Strategy */}
      <section className="mb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
          <div className="absolute -inset-4 bg-accent-mint/30 rounded-[40px] blur-2xl"></div>
          <div className="relative pastel-card aspect-video flex flex-col items-center justify-center overflow-hidden bg-accent-mint/10">
            <img 
              src="https://picsum.photos/seed/campus-audio/800/600" 
              alt="Campus Audio" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-center p-8">
              <div className="size-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>brand_awareness</span>
              </div>
              <p className="text-primary font-black text-xl">Arquitectura Sonora Integral</p>
              <p className="text-text-muted text-sm mt-2">Diseño basado en Neurociencia y Ritmos Circadianos</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
          <div>
            <span className="badge-pop bg-accent-mint text-primary-dark mb-4">Estrategia</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter font-heading">Branding: El Sonido del Prestigio</h2>
            <p className="text-text-muted text-lg leading-relaxed mt-6">
              El 88% de los estudiantes asocia un ambiente sonoro profesional con una institución de alto nivel. No es un adorno; es un vehículo fundamental para el funcionamiento cognitivo.
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="size-6 rounded-full bg-accent-mint flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-xs">check</span>
              </div>
              <span className="text-text-main font-bold">Identidad sonora propia (Audio Logo)</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="size-6 rounded-full bg-accent-mint flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-xs">check</span>
              </div>
              <span className="text-text-main font-bold">Gestión del estado de ánimo (Ritmo Circadiano)</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="size-6 rounded-full bg-accent-mint flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary text-xs">check</span>
              </div>
              <span className="text-text-main font-bold">Mitigación de riesgos legales por música comercial</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Service 2: F.L.O.W. Stick */}
      <section className="mb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <span className="badge-pop bg-accent-peach text-primary-dark mb-4">Innovación Hardware</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter font-heading">Tangibilizando lo Intangible: El F.L.O.W. Stick</h2>
            <p className="text-text-muted text-lg leading-relaxed mt-6">
              Hardware inteligente reprogramado y personalizado. Convierte cualquier pantalla en un punto de emisión de identidad sonora con tecnología 'Plug & Play'.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-accent-peach/10 rounded-3xl border border-accent-peach/30">
              <h4 className="font-black text-primary mb-2">Automatización</h4>
              <p className="text-sm text-text-muted">Playlists inteligentes y alertas sonoras que eliminan timbres industriales.</p>
            </div>
            <div className="p-6 bg-accent-lavender/10 rounded-3xl border border-accent-lavender/30">
              <h4 className="font-black text-primary mb-2">Gestión Cloud</h4>
              <p className="text-sm text-text-muted">Control total de la atmósfera desde la nube, sin obras físicas costosas.</p>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
          >
            Solicitar Demo F.L.O.W. Stick
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-accent-peach/30 rounded-[40px] blur-2xl"></div>
          <div className="relative pastel-card p-12 flex flex-col items-center justify-center min-h-[450px] bg-accent-peach/5">
            <div className="relative w-full max-w-[350px] bg-white rounded-[40px] p-8 shadow-2xl border border-accent-peach/20">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-1">
                  <div className="size-2 rounded-full bg-accent-peach"></div>
                  <div className="size-2 rounded-full bg-accent-mint"></div>
                  <div className="size-2 rounded-full bg-accent-lavender"></div>
                </div>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">F.L.O.W. OS</span>
              </div>
              <div className="aspect-video bg-background-light rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-accent-peach/10">
                <div className="flex items-end gap-1 h-12">
                  {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.6].map((h, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [`${h*100}%`, `${(1-h)*100}%`, `${h*100}%`] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                      className="w-2 bg-primary rounded-full"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-3 w-3/4 bg-accent-peach/20 rounded-full"></div>
                <div className="h-3 w-1/2 bg-accent-peach/10 rounded-full"></div>
                <div className="flex justify-center pt-4">
                  <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-accent-peach/20 flex items-center gap-3">
              <div className="size-10 bg-accent-mint rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">bolt</span>
              </div>
              <p className="text-xs font-black text-text-main">Plug & Play Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Strategic Curation */}
      <section className="mb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 order-2 relative">
          <div className="absolute -inset-4 bg-accent-lavender/30 rounded-[40px] blur-2xl"></div>
          <div className="relative pastel-card aspect-square flex flex-col items-center justify-center overflow-hidden bg-accent-lavender/10">
            <img 
              src="https://picsum.photos/seed/music-curation/800/800" 
              alt="Music Curation" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 text-center p-8">
              <div className="size-32 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-3">
                <span className="material-symbols-outlined text-primary text-6xl">library_music</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-32 bg-primary/20 rounded-full mx-auto"></div>
                <div className="h-2 w-24 bg-primary/10 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 space-y-8">
          <div>
            <span className="badge-pop bg-accent-lavender text-primary-dark mb-4">Curaduría</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter font-heading">Curaduría Estratégica: El Ritmo del Aprendizaje</h2>
            <p className="text-text-muted text-lg leading-relaxed mt-6">
              No es solo música; es una herramienta pedagógica. Diseñamos atmósferas que fomentan la concentración en horas de estudio y la energía en momentos de recreo.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-accent-lavender/20">
              <div className="size-12 rounded-xl bg-accent-lavender flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">wb_sunny</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main">Mañanas de Enfoque</h4>
                <p className="text-sm text-text-muted">Frecuencias que estimulan la alerta cognitiva sin generar ansiedad.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-accent-lavender/20">
              <div className="size-12 rounded-xl bg-accent-peach flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">celebration</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main">Recreos Vibrantes</h4>
                <p className="text-sm text-text-muted">Ritmos que promueven la socialización y el movimiento positivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="bg-primary rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden mb-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 size-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 size-64 bg-accent-peach rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading">"Empatía Generacional"</h2>
          <p className="text-xl md:text-2xl opacity-80 leading-relaxed mb-12">
            Somos estudiantes diseñando para estudiantes. Nuestra ventaja es la comprensión visceral de los hábitos de la Gen Z.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-bold">82% Gen Z</div>
            <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-bold">92% Demanda Innovación</div>
            <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-sm font-bold">76% Mejora Rendimiento</div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <span className="badge-pop bg-accent-mint text-primary mb-4">Casos de Éxito</span>
          <h2 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter font-heading">Lo que dicen las instituciones</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              quote: "FLOW transformó nuestra preparatoria. El ambiente es ahora mucho más profesional y los alumnos se sienten más identificados.",
              author: "Dir. Ricardo Méndez",
              role: "Colegio San Patricio",
              color: "bg-accent-mint/10"
            },
            { 
              quote: "El F.L.O.W. Stick es una maravilla técnica. Instalación en minutos y control total de la atmósfera desde mi oficina.",
              author: "Ing. Sofía Garza",
              role: "IT Tech Campus",
              color: "bg-accent-peach/10"
            },
            { 
              quote: "La curaduría basada en ritmos circadianos ha mejorado notablemente el enfoque de los niños en las primeras horas.",
              author: "Lic. Elena Torres",
              role: "Kinder World",
              color: "bg-accent-lavender/10"
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[40px] ${t.color} border border-white flex flex-col justify-between`}
            >
              <p className="text-lg italic text-text-main mb-8">"{t.quote}"</p>
              <div>
                <p className="font-black text-primary">{t.author}</p>
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black text-text-main mb-8 leading-tight font-heading">¿Listo para elevar el estatus de tu institución?</h2>
        <button 
          onClick={() => onNavigate('booking')}
          className="bg-primary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all hover:bg-primary-dark"
        >
          Iniciar Auditoría Sonora
        </button>
      </section>
    </motion.main>
  );
}
