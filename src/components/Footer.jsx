import React from 'react';
import Logo from './Logo';

export default function Footer({ t }) {
  const scrollTo = (id) => {
    if (typeof document === 'undefined') return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 footer-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
      <div className="flex items-center gap-3">
              <Logo small />
              <div>
        <div className="font-extrabold tracking-tight text-white text-xl dark:text-[inherit] dark:text-lg">{t('brand') || 'DaraCorp'}</div>
        <div className="text-sm/6 text-white/80 dark:text-[inherit]">{t('subtitle')}</div>
              </div>
            </div>
      <p className="mt-4 text-white/90 dark:text-[inherit] leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="uppercase tracking-wide text-white text-lg font-bold dark:text-slate-600 dark:text-sm dark:font-semibold dark:tracking-wider">{t('footer.explore') || 'Explore'}</h4>
            <ul className="mt-4 space-y-3 text-base">
              <li><button onClick={() => scrollTo('courses')} className="text-white/90 hover:text-white dark:text-[inherit] dark:hover:text-blue-700 transition-colors">{t('nav.courses') || 'Courses'}</button></li>
              <li><button onClick={() => scrollTo('platform')} className="text-white/90 hover:text-white dark:text-[inherit] dark:hover:text-blue-700 transition-colors">{t('nav.platform') || 'AfroLMS'}</button></li>
              <li><button onClick={() => scrollTo('why')} className="text-white/90 hover:text-white dark:text-[inherit] dark:hover:text-blue-700 transition-colors">{t('nav.why') || 'Why DaraCorp'}</button></li>
              <li><button onClick={() => scrollTo('contact')} className="text-white/90 hover:text-white dark:text-[inherit] dark:hover:text-blue-700 transition-colors">{t('nav.contact') || 'Contact'}</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="uppercase tracking-wide text-white text-lg font-bold dark:text-slate-600 dark:text-sm dark:font-semibold dark:tracking-wider">{t('footer.legal') || 'Legal'}</h4>
            <ul className="mt-4 space-y-3 text-base">
              <li><a href="/privacy" className="text-white/90 hover:text-white dark:text-[inherit] dark:hover:text-blue-700 transition-colors">{t('footerLinks.0')}</a></li>
              <li><a href="/terms" className="text-white/90 hover:text-white dark:text-[inherit] dark:hover:text-blue-700 transition-colors">{t('footerLinks.1')}</a></li>
              <li><a href="/security" className="text-white/90 hover:text-white dark:text-[inherit] dark:hover:text-blue-700 transition-colors">{t('footerLinks.2')}</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
      <h4 className="uppercase tracking-wide text-white text-lg font-bold dark:text-slate-600 dark:text-sm dark:font-semibold dark:tracking-wider">{t('footer.getStarted') || 'Get started'}</h4>
      <p className="mt-4 text-white/90 dark:text-[inherit]">{t('footer.getStartedBody')}</p>
      <button onClick={() => scrollTo('contact')} className="mt-4 inline-flex items-center justify-center rounded-full bg-white text-blue-700 px-6 py-3 font-semibold shadow-sm hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">
              {t('cta.primary') || 'Get a demo'}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t footer-divider">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80 dark:text-slate-600">
          <span>© {new Date().getFullYear()} {t('brand') || 'DaraCorp'}. {t('footer.copyright') || 'All rights reserved.'}</span>
          <span>
            {t('footer.powered')}
          </span>
        </div>
      </div>
    </footer>
  );
}
