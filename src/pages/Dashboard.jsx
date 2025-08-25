import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function Dashboard({ trainings, lang }) {
  return (
  <motion.main initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-gray-900">Training Dashboard</h1>
        <div className="text-sm text-gray-600">{trainings.length} courses available</div>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainings.map((c) => (
          <article key={c.id} className="rounded-xl border p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{c[lang].title}</h2>
            <p className="text-gray-600 mt-2">{c[lang].blurb}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">{c[lang].duration}</span>
              <Link to={`/training/${c.id}`} className="text-sm font-semibold text-blue-600">View</Link>
            </div>
          </article>
        ))}
      </section>
  </motion.main>
  );
}
