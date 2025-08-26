import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../shared/CourseCard';
import CourseImage from '../assets/daracorp_courses.png'

export default function Courses({ lang, t }) {
  // Sample UI-only data
  const allCourses = useMemo(() => ([
    { id: 'aml-found', title: 'AML/KYC Foundations', desc: 'Core obligations, customer due diligence, and risk-based approach for staff.', category: 'Compliance', duration: 75, modules: 8, level: 'Beginner' },
    { id: 'ethics', title: 'Ethics & Conduct', desc: 'Conflicts, integrity in decision-making, and speaking up.', category: 'Conduct', duration: 60, modules: 6, level: 'Beginner' },
    { id: 'privacy', title: 'Data Privacy for Staff', desc: 'Personal data handling under Ethiopian directives and global best practice.', category: 'Privacy', duration: 70, modules: 7, level: 'Intermediate' },
    { id: 'cyber', title: 'Cybersecurity Awareness', desc: 'Threats, phishing, password hygiene, and device safety.', category: 'Security', duration: 55, modules: 5, level: 'Beginner' },
    { id: 'hse', title: 'HSE Essentials', desc: 'Site safety, incident reporting, and contractor induction.', category: 'HSE', duration: 65, modules: 6, level: 'Intermediate' },
    { id: 'abac', title: 'Anti‑Bribery & Corruption', desc: 'Gifts, facilitation payments, and third‑party risk.', category: 'Compliance', duration: 80, modules: 8, level: 'Intermediate' },
    { id: 'fincrime', title: 'Financial Crime for Front Office', desc: 'Screening, red flags, and reporting suspicious activity.', category: 'Compliance', duration: 70, modules: 7, level: 'Advanced' },
    { id: 'harassment', title: 'Workplace Harassment Prevention', desc: 'Respectful culture, boundaries, and incident handling.', category: 'People', duration: 50, modules: 5, level: 'Beginner' },
  ]), []);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  // Preview modal state (same video for all courses)
  const [showPreview, setShowPreview] = useState(false);
  const openPreview = () => setShowPreview(true);
  const closePreview = () => setShowPreview(false);

  const filtered = allCourses.filter((c) => {
    const q = query.trim().toLowerCase();
    const matchesQ = !q || c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    const matchesCat = category === 'All' || c.category === category;
    const matchesLevel = level === 'All' || c.level === level;
    return matchesQ && matchesCat && matchesLevel;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative courses-hero"
        style={{
          backgroundImage: `url(${CourseImage})`,
        }}
      >
        <div className="absolute inset-0 courses-hero-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <motion.h1 initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">{t?.('courses.heroTitle') || 'Explore DaraCorp Courses'}</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1,duration:0.4}} className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t?.('courses.heroBody') || 'Directive‑mapped learning built for Ethiopian organizations—short videos, role‑plays, and assessments.'}</motion.p>
        </div>
      </section>

      {/* Search / Filters */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-[1fr_auto_auto_auto] gap-3">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder={t?.('courses.searchPlaceholder') || 'Search courses'} className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            <select value={category} onChange={(e)=>setCategory(e.target.value)} className="rounded-xl border border-gray-300 px-3 py-3 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              {['All','Compliance','Conduct','Privacy','Security','HSE','People'].map(op => (
                <option key={op} value={op}>{op === 'All' ? (t?.('courses.all') || 'All') : (t?.(`courses.categories.${op}`) || op)}</option>
              ))}
            </select>
            <select value={level} onChange={(e)=>setLevel(e.target.value)} className="rounded-xl border border-gray-300 px-3 py-3 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              {['All','Beginner','Intermediate','Advanced'].map(op => (
                <option key={op} value={op}>{op === 'All' ? (t?.('courses.all') || 'All') : (t?.(`courses.levels.${op}`) || op)}</option>
              ))}
            </select>
            <button className="rounded-xl bg-blue-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-blue-700">{t?.('courses.searchBtn') || 'Search'}</button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.slice(0,8).map((c) => (
              <CourseCard key={c.id} course={c} t={t} onPreview={openPreview} />
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={closePreview} />
          {/* Card */}
          <motion.div
            initial={{ scale: 0.98, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative z-10 w-[92vw] max-w-5xl rounded-2xl bg-white shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{t?.('courses.previewTitle') || 'Course Preview'}</h3>
              <button
                onClick={closePreview}
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={t?.('common.close') || 'Close'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* 16:9 video */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/RsRI0QRjdQc?rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
