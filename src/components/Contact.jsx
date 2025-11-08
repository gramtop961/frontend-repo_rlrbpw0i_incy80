import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      {/* Radial gradient accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200 blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-semibold tracking-tight">Let’s build something great</h3>
            <p className="mt-3 text-gray-600">Share a bit about your project and we’ll get back within one business day.</p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-indigo-600" /><a href="mailto:hello@techsense.dev" className="hover:underline">hello@techsense.dev</a></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-indigo-600" /><a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-indigo-600" /><span>Remote • Worldwide</span></div>
            </div>
          </div>

          <form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="jane@company.com" />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Budget</label>
              <select className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="5-10k">$5k – $10k</option>
                <option value="10-25k">$10k – $25k</option>
                <option value="25-50k">$25k – $50k</option>
                <option value=">50k">$50k+</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Timeline</label>
              <select className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="2-4w">2–4 weeks</option>
                <option value="1-2m">1–2 months</option>
                <option value="3-4m">3–4 months</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Project Type</label>
              <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Web app, marketing site, dashboard…" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell us about your goals and requirements"></textarea>
            </div>

            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-gray-500">We’ll never share your info. Expect a reply within one business day.</p>
              <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 transition">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
