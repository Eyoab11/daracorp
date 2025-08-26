import React from 'react';
import { motion } from 'framer-motion';
import BottomCTA from '../shared/BottomCTA';
import AfrolmsHero from '../assets/afrolms.png';
import WorldMap from '../assets/world-map.svg';

export default function AfroLMS() {
  const Section = ({ id, title, subtitle, children, bg = 'bg-white' }) => (
    <section id={id} className={`${bg} py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {title && <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">{title}</h2>}
          {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={AfrolmsHero}
            alt="AfroLMS hero"
            className="h-full w-full object-cover object-center grayscale"
          />
          {/* Dark overlay for contrast + slight bottom fade like the reference */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        {/* Spacer to show only the image at the top */}
        <div className="relative h-[60vh] md:h-[75vh]" />
      </section>

      {/* Title/content block below the image */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 md:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            <span>Afro</span>
            <span className="mx-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">LMS</span>
            <span> — the platform behind DaraCorp</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mt-6 text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A modern learning management system built for African enterprises. Support blended learning,
            SCORM/xAPI, quizzes, certificates, multilingual delivery, SSO, and detailed analytics.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="rounded-full bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base font-semibold shadow-sm hover:bg-blue-700">Request demo</a>
            <a href="https://afrolms.com/" target="_blank" rel="noreferrer" className="rounded-full bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 text-base font-semibold shadow-md border border-gray-200 hover:bg-gray-50">Visit afrolms.com</a>
          </div>
        </div>
      </section>

      {/* Core features – mix cards with media and a stats row to avoid monotony */}
      <Section title="Everything you need for training at scale" subtitle="Built‑in authoring, powerful delivery, and deep visibility — all in a sleek, simple interface.">
        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3 items-stretch">
          {/* Big media preview */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="lg:col-span-1 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 relative">
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-2xl bg-white/80 backdrop-blur px-6 py-4 shadow-sm border border-white/70">
                  <p className="text-sm text-gray-600">Dashboard preview</p>
                  <p className="text-lg font-semibold text-gray-900">Reports & Insights</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Visualize completions, exceptions, and trends. Export evidence for audits in one click.</p>
            </div>
          </motion.div>

          {/* Feature list */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: 'SCORM & xAPI', d: 'Upload standards‑compliant packages and track attempts, scores, and completion.' },
              { t: 'Assessments', d: 'Question banks, randomized quizzes, retake limits, pass scores, and analytics.' },
              { t: 'Certificates', d: 'Auto‑issued certificates with expiries, renewal windows, and reminders.' },
              { t: 'User management', d: 'Bulk enrollments, groups, RBAC, and full audit logs.' },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-3xl bg-white shadow-lg px-6 py-6 md:px-8 md:py-8 border border-gray-100">
                <h3 className="text-2xl font-extrabold text-gray-900">{f.t}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['99.9%', 'uptime'],
            ['1M+', 'learners delivered'],
            ['200+', 'organizations'],
            ['24/7', 'support'],
          ].map(([n, l], i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-6 text-center border border-indigo-100">
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-700">{n}</div>
              <div className="text-sm uppercase tracking-wide text-indigo-900/70">{l}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section bg="bg-gray-50" title="A simple experience users love" subtitle="Fast search, clean course pages, mobile‑friendly, and localized delivery.">
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2">
          <div className="rounded-3xl bg-white shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-extrabold text-gray-900">Mobile & offline ready</h3>
            <p className="mt-3 text-gray-600">Responsive UI with support for low‑bandwidth environments and resumable sessions.</p>
          </div>
          <div className="rounded-3xl bg-white shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-extrabold text-gray-900">Localization & accessibility</h3>
            <p className="mt-3 text-gray-600">Deliver content in multiple languages with accessible components and captions.</p>
          </div>
        </div>
      </Section>

      {/* Solutions – staggered timeline with smooth progressive line */}
      <Section title="Solutions for every sector" subtitle="Government • University • NGO • Private">
        <div className="relative mx-auto max-w-5xl">
          {/* Base center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-blue-200 to-transparent" />
          {/* Progress line grows when in view */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-indigo-600 to-blue-500"
            style={{ transformOrigin: 'top' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />

          {(() => {
            const items = [
              { t: 'Government', d: 'Public procurement integrity, information security, and training at population scale.' },
              { t: 'University', d: 'Semester delivery, assessments, and analytics for faculty and students.' },
              { t: 'NGO', d: 'Safeguarding, donor compliance, and distributed field team enablement.' },
              { t: 'Private', d: 'Role‑based learning for banks, insurers, healthcare, construction, and more.' },
            ];
            const itemV = {
              hidden: { opacity: 0, y: 24, scale: 0.98 },
              show: (i) => ({
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: i * 0.18,
                  type: 'spring',
                  stiffness: 80,
                  damping: 14,
                  mass: 0.7,
                },
              }),
            };
            return items.map((f, i) => (
              <motion.div
                key={i}
                variants={itemV}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className={`relative py-6 md:py-8 ${i % 2 ? 'pl-8 md:pl-16' : 'pr-8 md:pr-16'}`}
              >
                <div className={`md:w-1/2 ${i % 2 ? 'md:ml-auto' : ''}`}>
                  <div className="rounded-3xl bg-white/95 backdrop-blur px-6 py-6 md:px-8 md:py-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-extrabold text-gray-900">{f.t}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{f.d}</p>
                  </div>
                </div>
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ delay: 0.1 + i * 0.18, type: 'spring', stiffness: 120 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-600 shadow ring-4 ring-indigo-100"
                />
              </motion.div>
            ));
          })()}
        </div>
      </Section>

      {/* Security – compact feature row with icons-like badges to vary rhythm */}
      <Section bg="bg-gray-50" title="Enterprise‑grade security" subtitle="Role‑based access control, encrypted transport, frequent backups, and audit logs.">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {[
            { t: 'RBAC', d: 'Fine‑grained permissions for admins, instructors, managers, and learners.' },
            { t: 'Data protection', d: 'TLS in transit, encrypted backups, and data retention controls.' },
            { t: 'Audit & compliance', d: 'Comprehensive logs, exception reporting, and exportable evidence.' },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">{i+1}</span>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">{f.t}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
