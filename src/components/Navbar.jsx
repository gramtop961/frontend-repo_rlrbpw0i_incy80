import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navCls = `fixed top-0 inset-x-0 z-50 transition backdrop-blur ${
    scrolled ? 'bg-white/60 dark:bg-[#0b1020]/60 shadow-sm' : 'bg-transparent'
  }`;

  return (
    <header className={navCls}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold">
            <Rocket className="h-5 w-5 text-blue-500" />
            <span>Flames Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-blue-500 transition">Services</a>
            <a href="#work" className="hover:text-blue-500 transition">Work</a>
            <a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full border border-slate-200/20 px-3 py-1 text-xs hover:bg-slate-100 dark:hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
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
          className="md:hidden border-t border-slate-200/10"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-sm">
            <a href="#services" className="hover:text-blue-500" onClick={() => setOpen(false)}>Services</a>
            <a href="#work" className="hover:text-blue-500" onClick={() => setOpen(false)}>Work</a>
            <a href="#testimonials" className="hover:text-blue-500" onClick={() => setOpen(false)}>Testimonials</a>
            <a href="#contact" className="hover:text-blue-500" onClick={() => setOpen(false)}>Contact</a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="mt-2 rounded-full border border-slate-200/20 px-3 py-1 text-xs w-fit"
            >
              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
