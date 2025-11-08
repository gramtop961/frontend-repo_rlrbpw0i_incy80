import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Techsense delivered our MVP in record time with exceptional attention to usability and performance. Our conversion rate jumped 38% after launch.',
    name: 'Ava Thompson',
    role: 'VP Product, FinEdge',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    quote:
      'Their cloud team modernized our infrastructure with zero downtime. Costs are down 27% and deployments are fully automated.',
    name: 'Daniel Lee',
    role: 'CTO, Helix Commerce',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    quote:
      'From research to prototypes to production UI, Techsense nailed our design system and raised our product quality across the board.',
    name: 'Priya Sharma',
    role: 'Head of Design, Nimbus AI',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">What clients say</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Real results from teams who partnered with Techsense.
        </p>

        <div className="mt-10 relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow"
            >
              <div className="flex justify-center gap-1 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-lg leading-relaxed">“{testimonials[index].quote}”</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <img src={testimonials[index].avatar} alt={testimonials[index].name} className="h-10 w-10 rounded-full object-cover" />
                <div className="text-left">
                  <p className="font-medium">{testimonials[index].name}</p>
                  <p className="text-sm text-slate-600">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-slate-900' : 'bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
