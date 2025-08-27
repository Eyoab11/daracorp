import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Contact() {
  // Read language from persisted setting (set by App)
  let lang = 'en';
  try { lang = localStorage.getItem('dc_lang') || 'en'; } catch {}
  const tr = (en, am) => (lang === 'am' ? am : en);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setError('');
    setStatus('submitting');
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const first_name = (form.get('firstName') || '').toString().trim();
    const last_name = (form.get('lastName') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const subject = (form.get('subject') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();

    try {
      const { error: err } = await supabase
        .from('contact_messages')
        .insert([{ first_name, last_name, email, subject, message }]);
      if (err) throw err;
      setStatus('success');
      formEl.reset();
    } catch (err) {
      setError(err.message || 'Failed to send message');
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 1800);
    }
  };
  return (
    <main className="bg-white">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 text-center">{tr('Contact Us', 'አግኙን')}</h1>
      </section>

      {/* Map + Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map (Google Maps embed as provided) */}
          <div className="h-[360px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Alemenesh Plaza Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.710743383428!2d38.7868942!3d8.998741599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e9d21532d1%3A0xaa03ce0d1a2ec63d!2sAlemenesh%20Plaza%20%7C%20Bole%20Medhanialem%20%7C!5e0!3m2!1sen!2set!4v1756163655509!5m2!1sen!2set"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full"
              style={{ border: 0 }}
            />
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{tr('First name', 'ስም')}</label>
                  <input type="text" name="firstName" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{tr('Last name', 'የአባት ስም')}</label>
                  <input type="text" name="lastName" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{tr('Email', 'ኢሜይል')}</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{tr('Subject', 'ርዕስ')}</label>
                <input type="text" name="subject" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{tr('Message', 'መልዕክት')}</label>
                <textarea name="message" rows={5} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              <div>
                <button type="submit" disabled={status==='submitting'} className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow-sm text-white ${status==='submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                  {status==='submitting' ? tr('Sending…','በመላክ ላይ…') : status==='success' ? tr('Sent ✓','ተልኳል ✓') : tr('Send message','መልዕክት ላክ')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact info + icons row below all */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5 md:gap-8">
            <a href="tel:+251900000000" className="inline-flex items-center gap-2.5 text-gray-800 hover:text-blue-700" aria-label="Telephone">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.51 22 2 13.49 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
              </span>
              <span className="text-sm md:text-base font-medium">+251 90 000 0000</span>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-gray-800 hover:text-blue-700" aria-label="LinkedIn">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.33 5.98 7.66V24h-5v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.96V24h-5V8z"/></svg>
              </span>
              <span className="text-sm md:text-base font-medium">LinkedIn</span>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-gray-800 hover:text-blue-700" aria-label="Twitter">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9"><path d="M23.44 4.83c-.8.36-1.66.6-2.56.71a4.48 4.48 0 001.97-2.48 8.94 8.94 0 01-2.83 1.08A4.47 4.47 0 0016.29 3c-2.48 0-4.49 2-4.49 4.48 0 .35.04.7.12 1.03A12.7 12.7 0 013 4.18a4.48 4.48 0 001.39 5.98 4.44 4.44 0 01-2.03-.56v.06c0 2.17 1.55 3.98 3.6 4.38-.38.1-.78.15-1.19.15-.29 0-.58-.03-.86-.08a4.48 4.48 0 004.18 3.11 8.96 8.96 0 01-5.56 1.92c-.36 0-.71-.02-1.06-.06A12.64 12.64 0 008.16 21c8.2 0 12.68-6.79 12.68-12.68l-.01-.58a9.05 9.05 0 002.21-2.31z"/></svg>
              </span>
              <span className="text-sm md:text-base font-medium">Twitter</span>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-gray-800 hover:text-blue-700" aria-label="Facebook">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.349C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.796.143v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </span>
              <span className="text-sm md:text-base font-medium">Facebook</span>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-gray-800 hover:text-blue-700" aria-label="Instagram">
              <span className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2.5A3.25 3.25 0 004.5 7.75v8.5A3.25 3.25 0 007.75 19.5h8.5a3.25 3.25 0 003.25-3.25v-8.5A3.25 3.25 0 0016.25 4.5h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm6-1a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
              </span>
              <span className="text-sm md:text-base font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
