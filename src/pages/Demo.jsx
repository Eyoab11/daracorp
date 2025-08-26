import React, { useState } from 'react';

export default function Demo() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 900);
  };

  return (
    <main className="bg-white">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">Get a demo</h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          See DaraCorp and AfroLMS in action. Tell us a bit about your team and goals, and we’ll reach out to schedule.
        </p>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick highlights */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">What you’ll get</h2>
              <ul className="mt-4 space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-600">•</span> 30–45 min live walkthrough</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">•</span> Mapping to your roles/policies</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">•</span> Pilot plan and pricing</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">•</span> Q&A with our team</li>
              </ul>
              <div className="mt-6 rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
                Prefer email? Write to <a className="underline" href="mailto:hello@daracorp.com">hello@daracorp.com</a>
              </div>
            </div>
          </aside>

          {/* Form card */}
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input required name="firstName" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input required name="lastName" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work email</label>
                  <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Organization</label>
                  <input required name="org" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input name="role" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Team size</label>
                  <select name="size" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="1-50">1–50</option>
                    <option value="51-200">51–200</option>
                    <option value="201-1000">201–1000</option>
                    <option value=">1000">1000+</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Areas of interest</label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  {[
                    'AML/KYC & Anti‑corruption',
                    'Data protection & privacy',
                    'AfroLMS platform',
                    'Reporting & analytics',
                  ].map((l) => (
                    <label key={l} className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                      <input type="checkbox" name="topics" value={l} className="accent-blue-600" />
                      <span>{l}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred time</label>
                  <select name="time" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>No preference</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone (optional)</label>
                  <input name="phone" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="msg" rows={5} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your use case, timelines, and any requirements" />
              </div>

              <label className="mt-4 inline-flex items-start gap-2 text-sm text-gray-700">
                <input required type="checkbox" className="mt-1 accent-blue-600" />
                <span>
                  I agree to be contacted about DaraCorp products and services. See our{' '}
                  <a className="underline" href="#">Privacy Policy</a>.
                </span>
              </label>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow-sm text-white ${status==='idle' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 cursor-not-allowed'}`}
                >
                  {status === 'idle' && 'Request demo'}
                  {status === 'submitting' && 'Submitting…'}
                  {status === 'success' && 'Thanks! We’ll be in touch'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
