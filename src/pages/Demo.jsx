import React, { useState } from 'react';
import { createLead } from '../lib/api';

export default function Demo({ lang, t }) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const first_name = (form.get('firstName') || '').toString().trim();
    const last_name = (form.get('lastName') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const org = (form.get('org') || '').toString().trim();
    const role = (form.get('role') || '').toString().trim();
    const size = (form.get('size') || '').toString().trim();
    const topics = form.getAll('topics').map(v => v.toString());
    const time = (form.get('time') || '').toString().trim();
    const phone = (form.get('phone') || '').toString().trim();
    const msg = (form.get('msg') || '').toString().trim();

    try {
  const payload = { first_name, last_name, email, org, role, size, topics, time, phone, msg, status: 'got' };
  await createLead(payload);
      setStatus('success');
      formEl.reset();
    } catch (err) {
      console.warn('Failed to submit demo request', err);
      setStatus('idle');
      alert('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <main className="bg-white">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">{t('demo.title')}</h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{t('demo.body')}</p>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick highlights */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">{t('demo.sidebarTitle')}</h2>
              <ul className="mt-4 space-y-3 text-gray-700 text-sm">
                {t('demo.sidebarItems')?.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
                {t('demo.sidebarEmailPrefix')} <a className="underline" href="mailto:hello@daracorp.com">hello@daracorp.com</a>
              </div>
            </div>
          </aside>

          {/* Form card */}
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.firstName')}</label>
                  <input required name="firstName" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.lastName')}</label>
                  <input required name="lastName" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.email')}</label>
                  <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.org')}</label>
                  <input required name="org" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.role')}</label>
                  <input name="role" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.size')}</label>
                  <select name="size" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {t('demo.form.sizeOptions')?.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">{t('demo.form.interestsTitle')}</label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  {t('demo.form.interestsOptions')?.map((l) => (
                    <label key={l} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                      <input type="checkbox" name="topics" value={l} className="accent-blue-600" />
                      <span>{l}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.timeTitle')}</label>
                  <select name="time" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {t('demo.form.timeOptions')?.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.phone')}</label>
                  <input name="phone" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">{t('demo.form.message')}</label>
                <textarea name="msg" rows={5} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t('demo.form.messagePh')} />
              </div>

              <label className="mt-4 inline-flex items-start gap-2 text-sm text-gray-700">
                <input required type="checkbox" className="mt-1 accent-blue-600" />
                <span>
                  {t('demo.form.consentPrefix')} <a className="underline" href="#">{t('demo.form.privacy')}</a>.
                </span>
              </label>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow-sm text-white ${status==='idle' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 cursor-not-allowed'}`}
                >
                  {status === 'idle' && t('demo.form.btnIdle')}
                  {status === 'submitting' && t('demo.form.btnSubmitting')}
                  {status === 'success' && t('demo.form.btnSuccess')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
