import React from 'react';

const items = [
  { id: 1, title: 'AI Analytics Dashboard', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSSUyMEFuYWx5dGljcyUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYyNjMxNTM4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Fintech Mobile App', src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'SaaS Marketing Site', src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'IoT Device UI', src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop' },
  { id: 5, title: 'E-commerce Redesign', src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop' },
  { id: 6, title: 'DevOps Monitoring', src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop' },
  { id: 7, title: 'AR Showcase', src: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop' },
  { id: 8, title: 'Healthcare Portal', src: 'https://images.unsplash.com/photo-1630673681115-ffc31ca0f58e?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI2MzE1Mzl8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-20">
      {/* Decorative animated grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <svg viewBox="0 0 1200 600" width="100%" height="100%">
          <defs>
            <linearGradient id="grid" x1="0" x2="1">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="100%" stopColor="#c7d2fe" />
            </linearGradient>
          </defs>
          <g stroke="url(#grid)" strokeWidth="1">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 40} y1={0} x2={i * 40} y2={600} opacity="0.35">
                <animate attributeName="y1" values="0;-10;0" dur="6s" repeatCount="indefinite" />
                <animate attributeName="y2" values="600;610;600" dur="6s" repeatCount="indefinite" />
              </line>
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`h-${i}`} x1={0} y1={i * 40} x2={1200} y2={i * 40} opacity="0.25">
                <animate attributeName="x1" values="0;-10;0" dur="8s" repeatCount="indefinite" />
                <animate attributeName="x2" values="1200;1210;1200" dur="8s" repeatCount="indefinite" />
              </line>
            ))}
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <p className="mt-3 text-gray-600">A mix of apps, dashboards, and product sites crafted for performance and polish.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <figure key={item.id} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <img src={item.src} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white via-white/70 to-transparent">
                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-600">UI • Frontend • Motion</div>
              </figcaption>
              <div className="pointer-events-none absolute inset-0 bg-indigo-50/0 group-hover:bg-indigo-50/20 transition" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
