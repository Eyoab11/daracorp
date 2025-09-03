import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function imageQueryById(id) {
  const map = {
    1: 'ethics,compliance,business,team',
    2: 'learning,skills,hr,career',
    3: 'risk,compliance,analytics,assessment',
    4: 'confidential,reporting,office,communication',
    5: 'decision,balance,conflict,business',
    6: 'cybersecurity,data,privacy,technology',
    7: 'banking,finance,security,kyc',
    8: 'stock,market,trading,finance'
  };
  return map[id] || 'business,training,education';
}

export default function Card({ course, id, lang }) {
  const navigate = useNavigate();
  const keywords = imageQueryById(id);
  const encodedKeywords = encodeURIComponent(keywords);
  const unsplashUrl = `https://source.unsplash.com/800x600/?${encodedKeywords}&sig=${encodeURIComponent(id)}`;
  const fallbackUrl = `https://source.unsplash.com/800x600/?${encodeURIComponent(course?.title || 'training')}&sig=${encodeURIComponent(id)}`;
  const picsumUrl = `https://picsum.photos/seed/${encodeURIComponent(id)}/800/600`;
  const svgPlaceholder = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-size="20">Image unavailable</text></svg>`
  );

  // Prefer long description for preview, trimmed for the card
  const fullDesc = String(course?.desc || course?.blurb || '');
  const previewDesc = (() => {
    const max = 180; // tweak preview length here
    if (fullDesc.length <= max) return fullDesc;
    const slice = fullDesc.slice(0, max);
    const cut = slice.lastIndexOf(' ');
    return ((cut > max * 0.6 ? slice.slice(0, cut) : slice).trim() + '…');
  })();

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="snap-start shrink-0 w-80 sm:w-96 rounded-3xl border border-gray-200 bg-white shadow-lg flex flex-col overflow-hidden"
    >
      {/* Media header with image */}
      <div className="relative h-40">
        <img
          src={unsplashUrl}
          alt={`${course.title} cover`}
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
              img.src = picsumUrl;
            } else {
              img.onerror = null;
              img.src = svgPlaceholder;
            }
          }}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-xl font-extrabold drop-shadow-sm">{course.title}</h3>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-base text-gray-600 flex-grow">{previewDesc}</p>
        <div className="mt-6 flex items-center justify-between">
          <button onClick={() => { navigate('/demo'); }} className="text-base font-semibold text-blue-600 hover:underline">{lang === 'en' ? 'Get pricing' : 'ዋጋ ይጠይቁ'}</button>
          <Link to={`/courses/${id}`} className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-200 transition-colors">{lang === 'en' ? 'Learn more' : 'ተጨማሪ ይመልከቱ'}</Link>
        </div>
      </div>
    </motion.article>
  );
}
