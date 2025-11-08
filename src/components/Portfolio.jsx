import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwQW5hbHl0aWNzJTIwUGxhdGZvcm18ZW58MHwwfHx8MTc2MjYzMTMyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'SaaS Analytics Platform',
    tag: 'Web App',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwQW5hbHl0aWNzJTIwUGxhdGZvcm18ZW58MHwwfHx8MTc2MjYzMTMyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Developer Tools Suite',
    tag: 'DevTools',
  },
  {
    src: 'https://images.unsplash.com/photo-1604536264507-020ce894daf1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXZlbG9wZXIlMjBUb29scyUyMFN1aXRlfGVufDB8MHx8fDE3NjI2MzEzMjF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Fintech Mobile Banking',
    tag: 'Mobile App',
  },
  {
    src: 'https://images.unsplash.com/photo-1758524944006-ba8116008496?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwTW9iaWxlJTIwQmFua2luZ3xlbnwwfDB8fHwxNzYyNjMxMzIxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'AI-Powered Commerce',
    tag: 'eCommerce',
  },
  {
    src: 'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSS1Qb3dlcmVkJTIwQ29tbWVyY2V8ZW58MHwwfHx8MTc2MjYzMTMyMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Healthcare Patient Portal',
    tag: 'Healthcare',
  },
  {
    src: 'https://images.unsplash.com/photo-1739185069005-8cb46fef2702?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZWFsdGhjYXJlJTIwUGF0aWVudCUyMFBvcnRhbHxlbnwwfDB8fHwxNzYyNjMxMzIyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Education LMS Platform',
    tag: 'EdTech',
  },
  {
    src: 'https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFZHVjYXRpb24lMjBMTVMlMjBQbGF0Zm9ybXxlbnwwfDB8fHwxNzYyNjMxMzIzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Enterprise Reporting',
    tag: 'Dashboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1737702766740-1619b99f4b5d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbnRlcnByaXNlJTIwUmVwb3J0aW5nfGVufDB8MHx8fDE3NjI2MzEzMjN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Marketing Automation',
    tag: 'MarTech',
  },
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="work" className="relative py-24">
      {/* Decorative SVG background */}
      <div className="pointer-events-none absolute inset-0 flex justify-center opacity-40">
        <svg width="900" height="900" viewBox="0 0 900 900">
          <defs>
            <linearGradient id="grid" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#grid)" strokeWidth="0.6">
            {Array.from({ length: 40 }).map((_, r) => (
              <line key={`r-${r}`} x1={50} y1={r * 20 + 50} x2={850} y2={r * 20 + 50}>
                <animate attributeName="x1" values="50;45;50" dur="12s" repeatCount="indefinite" />
                <animate attributeName="x2" values="850;855;850" dur="12s" repeatCount="indefinite" />
              </line>
            ))}
            {Array.from({ length: 40 }).map((_, c) => (
              <line key={`c-${c}`} x1={c * 20 + 50} y1={50} x2={c * 20 + 50} y2={850}>
                <animate attributeName="y1" values="50;45;50" dur="14s" repeatCount="indefinite" />
                <animate attributeName="y2" values="850;855;850" dur="14s" repeatCount="indefinite" />
              </line>
            ))}
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A selection of products, platforms, and experiences we crafted across industries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Carousel */}
          <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden group shadow border border-slate-200 bg-white">
            <AnimatePresence initial={false}>
              <motion.img
                key={images[index].src}
                src={images[index].src}
                alt={images[index].title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <p className="text-xs uppercase tracking-wider opacity-80">{images[index].tag}</p>
              <h3 className="text-lg sm:text-xl font-semibold">{images[index].title}</h3>
            </div>
            <div className="absolute right-3 top-3 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((item) => (
              <motion.a
                key={item.src}
                href="#"
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <img src={item.src} alt={item.title} className="h-40 md:h-36 lg:h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">{item.tag}</p>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
