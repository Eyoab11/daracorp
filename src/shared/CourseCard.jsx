import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CourseCard({ course, t, onPreview }) {
  const { title, desc, duration, modules, level, category, id, card_desc, image_url } = course;
  const seed = encodeURIComponent(String(id || title || Math.random().toString(36).slice(2)));
  const titleQ = encodeURIComponent(String(title || 'training'));
  const catQ = encodeURIComponent(String(category || 'education'));
  const unsplashPrimary = `https://source.unsplash.com/640x480/?${titleQ},${catQ}&sig=${seed}`;
  const fallbackUrl = `https://source.unsplash.com/640x480/?${catQ}&sig=${seed}`;
  const placeholder = `https://picsum.photos/seed/${seed}/640/480`;
  const svgPlaceholder = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="480"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="16">Image unavailable</text></svg>`
  );
  const baseDesc = (card_desc || desc || '').toString();
  const shortDesc = baseDesc.length > 140 ? baseDesc.slice(0, 137) + '…' : baseDesc;
  const imageUrl = image_url || unsplashPrimary;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all overflow-hidden h-full flex flex-col"
    >
      {/* media */}
      <div className="relative aspect-[4/3] bg-gray-100">
        <img
          src={imageUrl}
          alt={`${title} course`}
          loading="lazy"
          referrerPolicy="no-referrer"
          data-attempt="0"
          onError={(e) => {
            const img = e.currentTarget;
            const attempt = Number(img.dataset.attempt || '0');
            if (attempt === 0) {
              img.dataset.attempt = '1';
              img.src = fallbackUrl;
            } else if (attempt === 1) {
              img.dataset.attempt = '2';
              img.src = placeholder;
            } else {
              img.onerror = null;
              img.src = svgPlaceholder;
            }
          }}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
      {/* body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-blue-700 font-semibold">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 border border-blue-100">{t?.(`courses.categories.${category}`) || category}</span>
          <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 border border-gray-200">{t?.(`courses.levels.${level}`) || level}</span>
        </div>
        <h3 className="mt-3 text-lg font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{shortDesc}</p>
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 4.75a.75.75 0 00-1.5 0v3.5c0 .2.08.39.22.53l2.5 2.5a.75.75 0 101.06-1.06l-2.28-2.28V6.75z"/></svg>{duration} {t?.('courses.units.min') || 'min'}</span>
          <span className="inline-flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6a2 2 0 012-2h6a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-2H4a2 2 0 01-2-2V8a2 2 0 012-2h2V6z"/></svg>{modules} {t?.('courses.units.modules') || 'modules'}</span>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <button
            className="rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700"
            onClick={(e) => { e.preventDefault(); onPreview?.(course); }}
          >
            {t?.('courses.buttons.preview') || 'Preview'}
          </button>
          <Link
            to={`/courses/${encodeURIComponent(id)}`}
            state={{ course }}
            className="text-blue-700 font-semibold hover:underline"
          >
            {t?.('courses.buttons.details') || 'Details →'}
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
