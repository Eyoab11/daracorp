import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CourseDetails({ lang, t }) {
  const { id } = useParams();
  const { state } = useLocation();
  const course = state?.course || state || {};

  // Fallbacks if course data wasn't provided via navigation state
  const title = course.title || (t?.('courses.details.defaultTitle') || 'Course Details');
  const desc = course.desc || (t?.('courses.details.defaultDesc') || 'Explore the objectives, curriculum, and outcomes for this course.');
  const category = course.category || 'Compliance';
  const duration = course.duration || 60;
  const modules = course.modules || 6;
  const level = course.level || 'Beginner';

  const facts = [
    { k: 'duration', label: t?.('courses.units.min') || 'min', value: duration },
    { k: 'modules', label: t?.('courses.units.modules') || 'modules', value: modules },
    { k: 'level', label: t?.(`courses.levels.${level}`) || level, value: '' },
    { k: 'category', label: t?.(`courses.categories.${category}`) || category, value: '' },
  ];

  const outcomes = [
    t?.('courses.details.outcome1') || 'Understand core concepts and regulatory context.',
    t?.('courses.details.outcome2') || 'Apply learning to realistic, Ethiopian scenarios.',
    t?.('courses.details.outcome3') || 'Demonstrate competence via interactive assessments.',
  ];

  const curriculum = [
    t?.('courses.details.module1') || 'Module 1 — Foundations and definitions',
    t?.('courses.details.module2') || 'Module 2 — Risks and red flags',
    t?.('courses.details.module3') || 'Module 3 — Controls and reporting',
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Text */}
            <div>
              <motion.h1 initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.35}} className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                {title}
              </motion.h1>
              <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.05,duration:0.35}} className="mt-3 text-gray-600">
                {desc}
              </motion.p>

              {/* Facts */}
              <div className="mt-5 flex flex-wrap gap-2">
                {facts.map((f) => (
                  <span key={f.k} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-800">
                    {f.k === 'duration' && (
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 4.75a.75.75 0 00-1.5 0v3.5c0 .2.08.39.22.53l2.5 2.5a.75.75 0 101.06-1.06l-2.28-2.28V6.75z"/></svg>
                    )}
                    {f.k === 'modules' && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6a2 2 0 012-2h6a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-2H4a2 2 0 01-2-2V8a2 2 0 012-2h2V6z"/></svg>
                    )}
                    <span className="font-semibold">
                      {f.value ? `${f.value} ${f.label}` : f.label}
                    </span>
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/demo" className="rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-700">{t?.('nav.demo') || 'Get a demo'}</Link>
                <Link to="/courses" className="rounded-full border border-gray-300 text-gray-900 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50">{t?.('courses.backToList') || 'Browse more courses'}</Link>
              </div>
            </div>

            {/* Video */}
            <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.35}} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-black">
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
          </div>
        </div>
      </section>

      {/* Details sections */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-10">
          {/* Overview */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900">{t?.('courses.details.overview') || 'Overview'}</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              {t?.('courses.details.overviewBody') || 'This course blends short expert videos, role-plays, and scenario-based assessments. Content is localized for Ethiopia and mapped to relevant directives and best practices.'}
            </p>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">{t?.('courses.details.curriculum') || 'Curriculum'}</h3>
            <ol className="mt-2 space-y-2 text-gray-700 list-decimal pl-5">
              {curriculum.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">{t?.('courses.details.outcomes') || 'Key outcomes'}</h3>
            <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
              {outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="text-sm font-semibold text-gray-900">{t?.('courses.details.includes') || 'Includes'}</h4>
              <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
                <li>{t?.('courses.details.cert') || 'Digital certificate'}</li>
                <li>{t?.('courses.details.quiz') || 'Quizzes and assessments'}</li>
                <li>{t?.('courses.details.mobile') || 'Mobile friendly'}</li>
                <li>{t?.('courses.details.langs') || 'English and Amharic'}</li>
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <Link to="/demo" className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700">{t?.('nav.demo') || 'Get a demo'}</Link>
                <Link to="/contact" className="rounded-xl border border-gray-300 text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-100">{t?.('nav.contact') || 'Contact'}</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
