import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar({ lang, t, onScrollTo, setLang }) {
  // theme (global effect via <html> class & localStorage)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('dc_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    try {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try { localStorage.setItem('dc_theme', theme); } catch {}
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      document.documentElement.classList.add('dark');
    } else {
      body.classList.remove('dark-theme');
      document.documentElement.classList.remove('dark');
    }
    // Optionally expose on document for other parts to read quickly
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // language dropdown (desktop)
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef(null);

  // mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobilePanelRef = useRef(null);

  // close language menu on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (!langMenuRef.current) return;
      if (!langMenuRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  // close mobile on Escape when open
  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm shadow-md header-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Logo />
          <div className="leading-tight">
            <div className="brand-title text-2xl">{t('brand')}</div>
            <div className="brand-subtitle text-[13px]">{t('subtitle')}</div>
          </div>
        </div>

        {/* Center nav (lg+) */}
        <nav className="hidden lg:flex items-center gap-10 text-sm md:text-base font-medium">
          <NavLink to="/" className={({ isActive }) => `nav-link transition-colors ${isActive ? 'nav-link-active font-semibold' : ''}`}>{t('nav.home') || 'Home'}</NavLink>
          <NavLink to="/courses" className={({ isActive }) => `nav-link transition-colors ${isActive ? 'nav-link-active font-semibold' : ''}`}>{t('nav.courses') || 'Courses'}</NavLink>
          <NavLink to="/afrolms" className={({ isActive }) => `nav-link transition-colors ${isActive ? 'nav-link-active font-semibold' : ''}`}>AfroLMS</NavLink>
          <NavLink to="/why" className={({ isActive }) => `nav-link transition-colors ${isActive ? 'nav-link-active font-semibold' : ''}`}>{t('nav.why') || 'Why DaraCorp'}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link transition-colors ${isActive ? 'nav-link-active font-semibold' : ''}`}>{t('nav.contact') || 'Contact'}</NavLink>
        </nav>

        {/* Right controls (lg+) */}
        <div className="hidden lg:flex items-center gap-3 md:gap-4">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            title="Toggle theme"
            className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-800"
          >
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? (
              // Sun (outline) shown in dark mode: make it white
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 md:h-7 md:w-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m15.364 6.364-1.59-1.59M7.227 7.227 5.636 5.636m12.728 0-1.59 1.59M7.227 16.773l-1.59 1.59M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
              </svg>
            ) : (
              // Moon (outline) shown in light mode: make it black
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 md:h-7 md:w-7 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M21.752 15.002A9.718 9.718 0 0 1 12.74 22.5 9.75 9.75 0 1 1 11.25 2.25c.153 0 .305.004.455.012A9.714 9.714 0 0 0 21.752 15z" />
              </svg>
            )}
          </button>

          {/* Language dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="lang-button inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              {lang === 'am' ? 'አማርኛ' : 'English'}
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4.22 3.815a.75.75 0 01-1.02 0L5.25 8.33a.75.75 0 01-.02-1.12z" clipRule="evenodd" />
              </svg>
            </button>
            {langOpen && (
              <ul className="lang-menu absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700" role="listbox">
                <li>
                  <button className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${lang==='en'?'text-blue-600 dark:text-blue-400 font-semibold':''}`} onClick={() => { setLang?.('en'); setLangOpen(false); }}>
                    English
                  </button>
                </li>
                <li>
                  <button className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 ${lang==='am'?'text-blue-600 dark:text-blue-400 font-semibold':''}`} onClick={() => { setLang?.('am'); setLangOpen(false); }}>
                    አማርኛ
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/demo"
            className="rounded-full bg-blue-600 text-white px-4 sm:px-5 py-2 text-sm font-semibold shadow-md hover:bg-blue-700 transition-colors"
          >
            {t('nav.demo') || 'Get a demo'}
          </Link>
        </div>

        {/* Mobile controls (<lg) */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Theme toggle (left of hamburger) */}
          <button
            type="button"
            onClick={toggleTheme}
            title="Toggle theme"
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-800"
          >
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m15.364 6.364-1.59-1.59M7.227 7.227 5.636 5.636m12.728 0-1.59 1.59M7.227 16.773l-1.59 1.59M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M21.752 15.002A9.718 9.718 0 0 1 12.74 22.5 9.75 9.75 0 1 1 11.25 2.25c.153 0 .305.004.455.012A9.714 9.714 0 0 0 21.752 15z" />
              </svg>
            )}
          </button>
          {/* Hamburger */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setMobileOpen(true); }}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.15 }}
        className="lg:hidden fixed inset-0 z-[60]"
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
        {/* Panel */}
        <motion.div
          id="mobile-menu"
          ref={mobilePanelRef}
          onClick={(e) => e.stopPropagation()}
          initial={{ y: '-12%', opacity: 0 }}
          animate={{ y: mobileOpen ? 0 : '-12%', opacity: mobileOpen ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mt-3 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden dark:bg-gray-900">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Logo small />
                <span className="font-semibold text-gray-900 dark:text-gray-100">{t('brand')}</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <span className="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 py-2">
              <div className="grid gap-1 py-2 text-gray-800 dark:text-gray-100">
                <NavLink to="/" onClick={() => setMobileOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}>{t('nav.home') || 'Home'}</NavLink>
                <NavLink to="/courses" onClick={() => setMobileOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}>{t('nav.courses') || 'Courses'}</NavLink>
                <NavLink to="/afrolms" onClick={() => setMobileOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}>AfroLMS</NavLink>
                <NavLink to="/why" onClick={() => setMobileOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}>{t('nav.why') || 'Why DaraCorp'}</NavLink>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}>{t('nav.contact') || 'Contact'}</NavLink>
              </div>

              <div className="my-2 h-px bg-gray-100" />

              {/* Mobile language picker */}
              <div className="flex items-center justify-between gap-3 px-1 py-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Language</span>
                <div className="inline-flex rounded-full border border-gray-300 bg-white p-1 dark:bg-gray-800 dark:border-gray-700">
                  <button
                    className={`px-3 py-1.5 text-sm rounded-full ${lang==='en' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700'}`}
                    onClick={() => { setLang?.('en'); }}
                  >
                    EN
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm rounded-full ${lang==='am' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700'}`}
                    onClick={() => { setLang?.('am'); }}
                  >
                    አማ
                  </button>
                </div>
              </div>

              <div className="py-3">
                <Link
                  to="/demo"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  {t('nav.demo') || 'Get a demo'}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
