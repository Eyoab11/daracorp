import React from 'react';
import { motion } from 'framer-motion';

export default function BottomCTA({ t, onPrimary, onSecondary }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
  className="bottom-cta py-16 lg:py-20 bg-gradient-to-br from-blue-700 to-indigo-700 dark:from-gray-900 dark:to-gray-800 dark:bg-gray-900 text-white"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">{t('cta.title')}</h2>
  <p className="mt-4 text-lg text-white/90 dark:text-gray-300">{t('cta.body')}</p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={onPrimary}
            className="primary-btn inline-flex items-center justify-center rounded-xl bg-white text-blue-700 hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 text-base font-semibold shadow-sm"
          >
            {t('cta.primary')}
          </button>
          <button
            onClick={onSecondary}
            className="secondary-btn inline-flex items-center justify-center rounded-xl bg-transparent text-white border border-white/70 hover:bg-white/10 dark:text-blue-300 dark:border-blue-500 dark:hover:bg-blue-900/30 px-6 md:px-8 py-3 md:py-4 text-base font-semibold"
          >
            {t('cta.secondary')}
          </button>
        </div>
      </div>
    </motion.section>
  );
}
