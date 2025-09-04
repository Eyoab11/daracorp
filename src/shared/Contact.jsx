import React, { useState } from 'react';
import { createContact } from '../lib/api';

export default function Contact({ t }) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');
  const isAm = typeof document !== 'undefined' && document.documentElement.getAttribute('lang') === 'am';

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setError('');
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const fullName = (form.get('fullName') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const subject = (form.get('subject') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();
    try {
  await createContact({ first_name: fullName, email, subject, message });
      setStatus('success');
  formEl.reset();
    } catch (err) {
      setError(err?.message || 'Failed to send');
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 2000);
    }
  };
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">{t('contactTitle')}</h2>
        <p className="mt-4 text-lg text-gray-600">{t('contactBody')}</p>
        <form className="mt-10 grid gap-6 sm:grid-cols-2 text-left" onSubmit={onSubmit}>
          <input name="fullName" className="w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" placeholder={t('form.name')} />
          <input required type="email" name="email" className="w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" placeholder={t('form.email')} />
          <input name="subject" className="sm:col-span-2 w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" placeholder={isAm ? 'ርዕስ' : 'Subject'} />
          <textarea name="message" className="sm:col-span-2 w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" rows={4} placeholder={t('form.msg')} />
          {error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={status==='submitting'} className={`sm:col-span-2 w-full rounded-full text-white px-8 py-4 text-lg font-semibold shadow-lg transition-colors ${status==='submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {status==='submitting' ? (isAm ? 'በመላክ ላይ…' : 'Sending…') : status==='success' ? (isAm ? 'ተልኳል ✓' : 'Sent ✓') : (isAm ? 'ኢሜይል ላክ' : 'Send email')}
          </button>
        </form>
        <p className="mt-5 text-sm text-gray-500">{t('form.disclaimer')}</p>
      </div>
    </section>
  );
}
