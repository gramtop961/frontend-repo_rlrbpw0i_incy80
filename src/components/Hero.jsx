import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/95 pointer-events-none" />

      {/* Subtle SVG aura animation (non-blocking) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="700" height="700" viewBox="0 0 700 700" className="opacity-60">
          <defs>
            <radialGradient id="aura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
              <stop offset="45%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Soft glow */}
          <circle cx="350" cy="350" r="300" fill="url(#aura)">
            <animateTransform attributeName="transform" attributeType="XML" type="scale" values="1;1.03;1" dur="10s" repeatCount="indefinite" />
          </circle>
          {/* Rotating rings */}
          <g fill="none" stroke="#7C3AED" strokeOpacity="0.18" strokeWidth="1.5">
            <circle cx="350" cy="350" r="220">
              <animateTransform attributeName="transform" type="rotate" from="0 350 350" to="360 350 350" dur="30s" repeatCount="indefinite" />
            </circle>
            <circle cx="350" cy="350" r="270" stroke="#3B82F6" strokeOpacity="0.18">
              <animateTransform attributeName="transform" type="rotate" from="360 350 350" to="0 350 350" dur="40s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      {/* Content */}
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
