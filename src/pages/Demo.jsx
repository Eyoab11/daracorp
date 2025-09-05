import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createLead } from '../lib/api';

export default function Demo({ lang, t }) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  // Broad areas list (sectors) for interest selection
  const AREAS = useMemo(() => ([
    'Banking & Finance',
    'Capital Markets & Stock Market',
    'Government & Public Sector',
    'NGOs & Nonprofits',
    'Healthcare',
    'Education',
    'Construction & Engineering',
    'Manufacturing',
    'Technology & Startups',
    'Retail & E-commerce',
    'Hospitality & Tourism',
    'Insurance',
    'Energy & Utilities',
    'Agriculture & Agribusiness',
    'Transportation & Logistics',
    'Media & Communications',
    'Real Estate',
    'Telecommunications',
    'Mining & Natural Resources',
  ]), []);

  // Multi-select dropdown state
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const filteredAreas = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return AREAS;
    return AREAS.filter(a => a.toLowerCase().includes(q));
  }, [AREAS, query]);

  const toggleSelect = (val) => {
    setSelectedTopics((prev) => prev.includes(val)
      ? prev.filter(v => v !== val)
      : [...prev, val]
    );
  };

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
  const topics = selectedTopics.map(v => v.toString());
    const otherInterestRaw = (form.get('otherInterest') || '').toString().trim();
    if (otherInterestRaw) {
      const other = otherInterestRaw.slice(0, 60); // backend limit per item
      if (!topics.includes(other)) topics.push(other);
    }
    const time = (form.get('time') || '').toString().trim();
    const phone = (form.get('phone') || '').toString().trim();
    const msg = (form.get('msg') || '').toString().trim();

    try {
  const payload = { first_name, last_name, email, org, role, size, topics, time, phone, msg, status: 'got' };
  await createLead(payload);
      setStatus('success');
      formEl.reset();
      setSelectedTopics([]);
      setQuery('');
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
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm demo-whatyouget">
              <h2 className="text-lg font-bold text-gray-900">{t('demo.sidebarTitle')}</h2>
              <ul className="mt-4 space-y-3 text-gray-700 text-sm">
                {t('demo.sidebarItems')?.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-900 prefer-email">
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

              <div className="mt-4" ref={dropdownRef}>
                <label className="block text-sm font-medium text-gray-700">{t('demo.form.interestsTitle')}</label>
                {/* Searchable multi-select */}
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(v => !v)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-haspopup="listbox"
                    aria-expanded={open}
                  >
                    {selectedTopics.length === 0 && (
                      <span className="text-gray-500">Select one or more areas</span>
                    )}
                    {selectedTopics.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selectedTopics.map(v => (
                          <span key={v} className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-800 px-2.5 py-1 text-xs">
                            {v}
                            <button type="button" onClick={(e) => { e.stopPropagation(); toggleSelect(v); }} aria-label={`Remove ${v}`}>×</button>
                          </span>
                        ))}
                      </div>
                    )}
                  </button>

                  {open && (
                    <div className="relative z-10">
                      <div className="absolute mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                        <div className="p-2 border-b border-gray-100">
                          <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search areas..."
                            className="w-full rounded-md border border-gray-200 px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <ul className="max-h-56 overflow-auto py-1 text-sm" role="listbox">
                          {filteredAreas.map((opt) => {
                            const active = selectedTopics.includes(opt);
                            return (
                              <li key={opt}>
                                <button
                                  type="button"
                                  onClick={() => toggleSelect(opt)}
                                  className={`w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2 ${active ? 'bg-blue-50' : ''}`}
                                  role="option"
                                  aria-selected={active}
                                >
                                  <input type="checkbox" readOnly checked={active} className="accent-blue-600" />
                                  <span>{opt}</span>
                                </button>
                              </li>
                            );
                          })}
                          {filteredAreas.length === 0 && (
                            <li className="px-3 py-2 text-gray-500">No matches</li>
                          )}
                        </ul>
                        <div className="p-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                          <span>{selectedTopics.length} selected</span>
                          <button type="button" className="text-blue-700 hover:underline" onClick={() => setSelectedTopics([])}>Clear</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700">{t('demo.form.otherInterest') || 'Other area of interest'}</label>
                  <input name="otherInterest" maxLength={60} placeholder={t('demo.form.otherInterestPh') || 'Type your own topic'} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <p className="mt-1 text-xs text-gray-500">{t('demo.form.otherInterestHint') || 'Optional — up to 60 characters.'}</p>
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
