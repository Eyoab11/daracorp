import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar({ lang, t, onScrollTo, setLang }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className="sticky top-0 z-50 bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm shadow-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Logo />
          <div className="leading-tight">
            <div className="font-bold text-2xl text-gray-900">{t('brand')}</div>
            <div className="text-sm tracking-wider text-gray-600 uppercase">{t('subtitle')}</div>
          </div>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm md:text-base font-medium text-gray-700">
          <Link to="/courses" className="hover:text-blue-600 transition-colors">{t('nav.courses') || 'Courses'}</Link>
          <Link to="/afrolms" className="hover:text-blue-600 transition-colors">AfroLMS</Link>
          <button onClick={() => onScrollTo('why')} className="hover:text-blue-600 transition-colors">{t('nav.why') || 'Why DaraCorp'}</button>
          <button onClick={() => onScrollTo('contact')} className="hover:text-blue-600 transition-colors">{t('nav.contact') || 'Contact'}</button>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Language dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              {lang === 'am' ? 'አማርኛ' : 'English'}
              <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4.22 3.815a.75.75 0 01-1.02 0L5.25 8.33a.75.75 0 01-.02-1.12z" clipRule="evenodd" />
              </svg>
            </button>
            {open && (
              <ul className="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg" role="listbox">
                <li>
                  <button className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${lang==='en'?'text-blue-600 font-semibold':''}`} onClick={() => { setLang?.('en'); setOpen(false); }}>
                    English
                  </button>
                </li>
                <li>
                  <button className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${lang==='am'?'text-blue-600 font-semibold':''}`} onClick={() => { setLang?.('am'); setOpen(false); }}>
                    አማርኛ
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={() => onScrollTo('contact')}
            className="rounded-full bg-blue-600 text-white px-4 sm:px-5 py-2 text-sm font-semibold shadow-md hover:bg-blue-700 transition-colors"
          >
            Get a demo
          </button>
        </div>
      </div>
    </motion.header>
  );
}
