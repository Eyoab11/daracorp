import React from 'react';

export default function Contact({ t }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">{t('contactTitle')}</h2>
        <p className="mt-4 text-lg text-gray-600">{t('contactBody')}</p>
        <form className="mt-10 grid gap-6 sm:grid-cols-2 text-left" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); }}>
          <input className="w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" placeholder={t('form.name')} />
          <input className="w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" placeholder={t('form.email')} />
          <input className="sm:col-span-2 w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" placeholder={t('form.org')} />
          <textarea className="sm:col-span-2 w-full rounded-xl border-gray-300 px-5 py-4 text-base shadow-sm focus:ring-blue-500 focus:border-blue-500 transition" rows={4} placeholder={t('form.msg')} />
          <button className="sm:col-span-2 w-full rounded-full bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors">{t('form.btn')}</button>
        </form>
        <p className="mt-5 text-sm text-gray-500">{t('form.disclaimer')}</p>
      </div>
    </section>
  );
}
