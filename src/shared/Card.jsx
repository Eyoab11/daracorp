import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Card({ course, id, lang }) {
  const navigate = useNavigate();
  return (
    <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="snap-start shrink-0 w-80 sm:w-96 rounded-3xl border border-gray-200 bg-white shadow-lg flex flex-col">
      <div className="h-40 rounded-t-3xl bg-gradient-to-tr from-gray-900 to-gray-700 text-white p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold">{course.title}</h3>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-base text-gray-600 flex-grow">{course.blurb}</p>
        <div className="mt-6 flex items-center justify-between">
          <button onClick={() => { navigate('/dashboard'); }} className="text-base font-semibold text-blue-600 hover:underline">{lang === 'en' ? 'Get pricing' : 'ዋጋ ይጠይቁ'}</button>
          <Link to={`/training/${id}`} className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-200 transition-colors">{lang === 'en' ? 'Learn more' : 'ተጨማሪ ይመልከቱ'}</Link>
        </div>
      </div>
  </motion.article>
  );
}
