import React from 'react';
import { motion } from 'framer-motion';

export default function CourseCard({ course }) {
  const { title, desc, duration, modules, level, category } = course;
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden"
    >
      {/* media */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-50">
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-5xl">📘</span>
        </div>
      </div>
      {/* body */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs text-blue-700 font-semibold">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 border border-blue-100">{category}</span>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 border border-gray-200">{level}</span>
        </div>
        <h3 className="mt-3 text-lg font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 4.75a.75.75 0 00-1.5 0v3.5c0 .2.08.39.22.53l2.5 2.5a.75.75 0 101.06-1.06l-2.28-2.28V6.75z"/></svg>{duration} min</span>
          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6a2 2 0 012-2h6a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-2H4a2 2 0 01-2-2V8a2 2 0 012-2h2V6z"/></svg>{modules} modules</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button className="rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700">Preview</button>
          <button className="text-blue-700 font-semibold hover:underline">Details →</button>
        </div>
      </div>
    </motion.article>
  );
}
