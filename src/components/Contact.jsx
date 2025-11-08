import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something great</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Tell us about your project and goals. We’ll get back within 24 hours.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold">Expertise</p>
              <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                <li>Web & Mobile</li>
                <li>Cloud & DevOps</li>
                <li>UX Research</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Industries</p>
              <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
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
          className="rounded-2xl border border-slate-200/20 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow"
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
              <label className="text-sm text-slate-600 dark:text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-slate-200/20 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-200/20 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600 dark:text-slate-300">Project Type</label>
              <select name="type" className="mt-1 w-full rounded-lg border border-slate-200/20 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Cloud Solution</option>
                <option>UI/UX Design</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border border-slate-200/20 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your timeline, budget, and goals" />
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
