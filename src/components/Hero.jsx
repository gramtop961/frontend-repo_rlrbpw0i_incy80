import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/95 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 backdrop-blur">
            Techsense — We Build Scalable Software for the Future
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
            Empowering businesses through design, technology, and automation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From startups to enterprises, we design and deliver web, mobile, and cloud solutions with delightful user experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-500 transition">
              Get a Quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow border border-slate-200 hover:bg-slate-50 transition">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
