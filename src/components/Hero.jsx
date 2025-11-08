import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-[#0b1020]/60 dark:via-[#0b1020]/40 dark:to-[#0b1020]/95 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/30 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-slate-300 backdrop-blur">
            We Build Scalable Software for the Future
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-blue-500 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
            Empowering businesses through design, technology, and automation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From startups to enterprises, we design and deliver web, mobile, and cloud solutions with delightful user experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-500 transition">
              Get a Quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow border border-slate-200 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-white/15 transition">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
