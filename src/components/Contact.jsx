import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.12),_transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something great</h2>
          <p className="mt-3 text-slate-600">
            Tell us about your project and goals. We’ll get back within 24 hours.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-slate-600">hello@techsense.studio</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-slate-600">+1 (415) 555‑0198</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-slate-600">Remote • Worldwide</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold">Expertise</p>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>Web & Mobile</li>
                <li>Cloud & DevOps</li>
                <li>UX Research</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Industries</p>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>Fintech</li>
                <li>SaaS</li>
                <li>eCommerce</li>
              </ul>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form));
            alert(`Thanks, ${data.name}. We will reach out to ${data.email}!`);
            form.reset();
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Budget</label>
                <select name="budget" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>$5k–$15k</option>
                  <option>$15k–$40k</option>
                  <option>$40k–$100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600">Timeline</label>
                <select name="timeline" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                  <option>ASAP</option>
                  <option>1–2 months</option>
                  <option>3–6 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Project Type</label>
              <select name="type" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Cloud Solution</option>
                <option>UI/UX Design</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your timeline, budget, and goals" />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white px-5 py-3 text-sm font-medium shadow hover:from-blue-500 hover:to-violet-500 transition">
            Request Proposal
          </button>
        </motion.form>
      </div>
    </section>
  );
}
