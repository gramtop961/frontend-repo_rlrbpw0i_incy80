import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navCls = `fixed top-0 inset-x-0 z-50 transition backdrop-blur ${
    scrolled ? 'bg-white/70 shadow-sm' : 'bg-transparent'
  }`;

  return (
    <header className={navCls}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold">
            <Rocket className="h-5 w-5 text-blue-600" />
            <span>Techsense</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="relative hover:text-blue-600 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Services</a>
            <a href="#work" className="relative hover:text-blue-600 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Work</a>
            <a href="#testimonials" className="relative hover:text-blue-600 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Testimonials</a>
            <a href="#contact" className="relative hover:text-blue-600 transition after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Contact</a>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden border-t"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-sm">
            <a href="#services" className="hover:text-blue-600" onClick={() => setOpen(false)}>Services</a>
            <a href="#work" className="hover:text-blue-600" onClick={() => setOpen(false)}>Work</a>
            <a href="#testimonials" className="hover:text-blue-600" onClick={() => setOpen(false)}>Testimonials</a>
            <a href="#contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
