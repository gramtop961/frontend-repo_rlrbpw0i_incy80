import { motion } from 'framer-motion';
import { Code2, Smartphone, Cloud, Palette } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'High-performance web apps with modern stacks, accessibility, and SEO baked in.',
    points: ['React/Next.js', 'APIs & Integrations', 'Performance & SEO'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native-quality experiences for iOS and Android using React Native and Flutter.',
    points: ['iOS & Android', 'App Store Readiness', 'Analytics & A/B'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Secure, scalable infrastructure with Kubernetes, serverless, and CI/CD automation.',
    points: ['AWS / GCP / Azure', 'DevOps & SRE', 'Observability'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Human-centered design with research, prototyping, and pixel-perfect systems.',
    points: ['Research & UX', 'Design Systems', 'Prototyping'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-transparent to-slate-50 dark:to-[#0a122b]">
      <div className="absolute -z-[0] inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-violet-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Crafting reliable, scalable, and beautiful digital products end-to-end.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-200/20 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:-translate-y-1 hover:shadow-xl transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-indigo-500/10 pointer-events-none" />
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
