import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function Carousel({ items, lang }) {
  return (
    <div className="relative">
      <div className="group flex items-stretch gap-8 overflow-x-auto snap-x snap-mandatory pb-6" style={{ scrollBehavior: 'smooth' }}>
        {items.map((c) => (
          <Card key={c.id} course={c[lang]} id={c.id} lang={lang} />
        ))}

        {/* Browse more tile */}
        <Link to="/courses" className="snap-start shrink-0 w-80 sm:w-96" aria-label={lang === 'am' ? 'ተጨማሪ ኮርሶች ይመልከቱ' : 'Browse more courses'}>
          <div className="h-full rounded-3xl border border-blue-600/20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all flex flex-col overflow-hidden">
            <div className="flex-1 flex items-center justify-center p-8 text-center">
              <div>
                <h3 className="text-2xl font-extrabold">
                  {lang === 'am' ? 'ተጨማሪ ይመልከቱ' : 'Browse more'}
                </h3>
                <p className="mt-2 text-white/90">
                  {lang === 'am' ? 'ሁሉንም ኮርሶች በዝርዝር ይመልከቱ' : 'See all courses in the library'}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 bg-white/10 backdrop-blur flex items-center justify-end gap-2 text-sm">
              <span className="font-semibold">{lang === 'am' ? 'ወደ ኮርሶች' : 'Go to courses'}</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
