import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Carousel from '../shared/Carousel';
import Feature from '../shared/Feature';
import Contact from '../shared/Contact';
import BottomCTA from '../shared/BottomCTA';
import HeroImage from '../assets/heroimage.png';

export default function Home({ lang, ui, trainings, t, setLang }) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative hero-gradient min-h-[calc(100vh-5rem)]"
      >
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Hero copy */}
          <div className="text-left transform-gpu -translate-y-3 md:-translate-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
              {t('badge')}
            </span>
            <h1 className="mt-3 text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {lang === 'am' ? 'DaraCorp የኢንዱስትሪ ዝግጁ ስልጠና' : 'DaraCorp industry-ready training'}
            </h1>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl">
              {lang === 'am'
        ? 'አጭር እና በሁኔታ የተመረጡ ትምህርቶች ከተግባራዊ ልምምድ ጋር። ፈጣን እና መለካት የሚቻል ውጤት ይግኙ እና አፈጻጸም ያሻሽሉ።'
        : 'Short, scenario-based lessons with hands-on practice. Track progress and improve performance faster.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/demo"
                className="rounded-full bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold shadow-lg hover:bg-blue-700 transition-colors"
              >
                {lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Get demo'}
              </Link>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold shadow-md border border-gray-200 hover:bg-gray-50"
              >
                {lang === 'am' ? 'እኛን ያነጋግሩ' : 'Contact us'}
              </button>
            </div>
          </div>
          {/* Right image only */}
          <div className="relative z-20 lg:pl-8">
            <div className="transform-gpu md:scale-105 lg:scale-110">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(31,41,55,0.25)] transition-shadow"
            >
              <img src={HeroImage} alt="DaraCorp training hero" className="h-full w-full object-cover" />
            </motion.div>
            </div>
          </div>
        </div>
        {/* Zigzag/wave divider at bottom */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden z-0" aria-hidden="true">
          <svg
            className="block w-[200%] -translate-x-1/4 h-[28vh] md:h-[34vh] lg:h-[38vh]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              className="hero-divider-fill"
              d="M0,18
                 C120,2 240,42 360,18
                 C480,6 600,80 720,20
                 C840,0 960,72 1080,16
                 C1200,8 1320,68 1440,22
                 L1440,120 L0,120 Z"
            ></path>
          </svg>
        </div>
      </motion.section>
      

      <motion.section id="courses" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.4 }} className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">{t('libraryTitle') || 'Core training library'}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('libraryHint') || 'Swipe or use arrows'}</p>
          </div>
          <Carousel items={trainings} lang={lang} />
        </div>
      </motion.section>

      <motion.section id="platform" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.4 }} className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">{t('platformTitle')}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t('platformDesc')}</p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {(t('platformFeatures') || []).map?.((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white shadow-lg px-6 py-6 md:px-8 md:py-8 border border-gray-100 hover:shadow-2xl hover:ring-1 hover:ring-blue-200"
              >
                <h3 className="text-2xl font-extrabold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sectors we serve */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.4 }} className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">{t('sectorsTitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('sectorsSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(t('sectors') || []).map?.((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white shadow-lg px-6 py-6 md:px-8 md:py-8 border border-gray-100 hover:shadow-2xl hover:ring-1 hover:ring-blue-200"
              >
                <h3 className="text-2xl font-extrabold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <BottomCTA
        t={t}
        onPrimary={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondary={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Contact t={t} />
    </>
  );
}
