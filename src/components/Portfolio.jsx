import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    title: 'SaaS Analytics Platform',
    tag: 'Web App',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    title: 'Developer Tools Suite',
    tag: 'DevTools',
  },
  {
    src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    title: 'Fintech Mobile Banking',
    tag: 'Mobile App',
  },
  {
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop',
    title: 'AI-Powered Commerce',
    tag: 'eCommerce',
  },
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A few highlights from recent web, mobile, and cloud projects.
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
          <div className="grid grid-cols-2 gap-6">
            {images.map((item) => (
              <motion.a
                key={item.src}
                href="#"
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <img src={item.src} alt={item.title} className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
