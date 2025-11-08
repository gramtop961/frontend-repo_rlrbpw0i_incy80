import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Animated aura overlay - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" className="opacity-60">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#c7d2fe" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g>
            <circle cx="600" cy="300" r="180" fill="url(#g)">
              <animate attributeName="r" values="160;200;160" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="300" r="260" fill="none" stroke="#a5b4fc" strokeOpacity="0.25">
              <animate attributeName="r" values="240;280;240" dur="8s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
          Modern Tech Portfolios, Crafted with Care
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          We build interactive experiences that blend 3D, motion, and clean design to showcase your work.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#portfolio" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 transition">View Portfolio</a>
          <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
