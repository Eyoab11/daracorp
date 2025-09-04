import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../shared/CourseCard';
import CourseImage from '../assets/daracorp_courses.png'
import { getCourses, getCachedCourses, prefetchCourses } from '../lib/api';
import { trainings as baseTrainings } from '../data/trainings';

export default function Courses({ lang, t }) {
  // Combine backend courses (first) with base trainings (appended at the end)

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    const run = async () => {
  // Try instant render from cache
      const cached = getCachedCourses();
      if (cached && mounted) {
        try {
          const backend = (cached || [])
            .filter(c => c.is_published === true)
            .map(c => ({
              id: c.id,
              title: c.title,
              desc: c.description ?? c.desc,
              category: c.category || 'General',
              level: c.level || 'Beginner',
              duration: c.duration || 0,
              modules: c.modules || 0,
              image_url: c.image_url,
              video_url: c.video_url,
              outcomes: c.outcomes,
              curriculum: c.curriculum,
              createdAt: c.createdAt || c.created_at || null,
            }));
          const sortedBackend = backend.sort((a, b) => {
            const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return db - da;
          });
          const base = (baseTrainings || []).map((bt) => {
            const loc = bt?.[lang] || bt?.en || {};
            return {
              id: bt.id,
              title: loc.title,
              desc: loc.desc || loc.blurb,
              category: 'Compliance',
              level: 'Beginner',
              duration: loc.duration || 0,
              modules: Array.isArray(loc.modules) ? loc.modules.length : (loc.modules || 0),
              image_url: undefined,
              video_url: loc.video_url,
              outcomes: loc.objectives,
              curriculum: loc.curriculum,
            };
          });
          setCourses([...sortedBackend, ...base]);
          setLoading(false);
        } catch {}
      } else {
        // No cache: show base trainings instantly while fetching backend
        const base = (baseTrainings || []).map((bt) => {
          const loc = bt?.[lang] || bt?.en || {};
          return {
            id: bt.id,
            title: loc.title,
            desc: loc.desc || loc.blurb,
            category: 'Compliance',
            level: 'Beginner',
            duration: loc.duration || 0,
            modules: Array.isArray(loc.modules) ? loc.modules.length : (loc.modules || 0),
            image_url: undefined,
            video_url: loc.video_url,
            outcomes: loc.objectives,
            curriculum: loc.curriculum,
          };
        });
        setCourses(base);
        setLoading(false);
      }
      setError('');
  try {
  const data = await getCourses({ preferCache: true })
        
        if (!mounted) return;
        
        // Map and filter backend data (newest first if createdAt present)
        const backend = (data || [])
          .filter(c => c.is_published === true) // Only show published courses
          .map(c => ({
            id: c.id,
            title: c.title,
            desc: c.description ?? c.desc,
            category: c.category || 'General',
            level: c.level || 'Beginner',
            duration: c.duration || 0,
            modules: c.modules || 0,
            image_url: c.image_url,
            video_url: c.video_url,
            outcomes: c.outcomes,
            curriculum: c.curriculum,
            createdAt: c.createdAt || c.created_at || null,
          }));

        const sortedBackend = backend.sort((a, b) => {
          const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return db - da; // newest first
        });

        // Map base trainings to the same shape and append after backend
        const base = (baseTrainings || []).map((bt) => {
          const loc = bt?.[lang] || bt?.en || {};
          return {
            id: bt.id,
            title: loc.title,
            desc: loc.desc || loc.blurb,
            category: 'Compliance',
            level: 'Beginner',
            duration: loc.duration || 0,
            modules: Array.isArray(loc.modules) ? loc.modules.length : (loc.modules || 0),
            image_url: undefined,
            video_url: loc.video_url,
            outcomes: loc.objectives,
            curriculum: loc.curriculum,
          };
        });

        setCourses([...sortedBackend, ...base]);
      } catch (e) {
        setError(e.message || 'Failed to load courses');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    run();
  // Prefetch in background in case cache was empty
  prefetchCourses();
    return () => { mounted = false };
  }, []);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  // Preview modal state uses the selected course's video_url
  const [previewCourse, setPreviewCourse] = useState(null);
  const openPreview = (course) => setPreviewCourse(course);
  const closePreview = () => setPreviewCourse(null);

  // Convert various YouTube URL formats to an embeddable URL
  const toYouTubeEmbed = (url) => {
    if (!url) return null;
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) {
        return `https://www.youtube.com/embed/${u.pathname.slice(1)}?rel=0`;
      }
      if (u.hostname.includes('youtube.com')) {
        const id = u.searchParams.get('v');
        if (id) return `https://www.youtube.com/embed/${id}?rel=0`;
        if (u.pathname.startsWith('/embed/')) return url;
      }
    } catch {}
    return null;
  };

  const filtered = (courses || []).filter((c) => {
    const q = query.trim().toLowerCase();
    const matchesQ = !q || (c.title?.toLowerCase().includes(q) || c.desc?.toLowerCase().includes(q));
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
            {loading && (
              <div className="col-span-full text-center text-gray-500">Loading courses…</div>
            )}
            {!loading && error && (
              <div className="col-span-full text-center text-red-600">{error}</div>
            )}
            {!loading && !error && filtered.length === 0 && (
              <div className="col-span-full text-center text-gray-500">{t?.('courses.empty') || 'No courses found.'}</div>
            )}
            {!loading && !error && filtered.map((c) => (
              <CourseCard key={c.id} course={c} t={t} onPreview={() => openPreview(c)} />
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewCourse && (
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
                src={toYouTubeEmbed(previewCourse?.video_url) || 'https://www.youtube.com/embed/RsRI0QRjdQc?rel=0'}
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
