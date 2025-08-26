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
        <div className="text-lg font-extrabold tracking-tight">DaraCorp</div>
        <div className="text-sm/6 text-slate-600">{t('subtitle')}</div>
              </div>
            </div>
      <p className="mt-4 text-slate-600 leading-relaxed">
              Modern compliance training tailored for Ethiopian organizations.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Explore</h4>
            <ul className="mt-4 space-y-3">
              <li><button onClick={() => scrollTo('courses')} className="hover:text-blue-700 transition-colors">{t('nav.courses') || 'Courses'}</button></li>
              <li><button onClick={() => scrollTo('platform')} className="hover:text-blue-700 transition-colors">AfroLMS</button></li>
              <li><button onClick={() => scrollTo('why')} className="hover:text-blue-700 transition-colors">{t('nav.why') || 'Why DaraCorp'}</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-blue-700 transition-colors">{t('nav.contact') || 'Contact'}</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Legal</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-blue-700 transition-colors">{t('footerLinks.0')}</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">{t('footerLinks.1')}</a></li>
              <li><a href="#" className="hover:text-blue-700 transition-colors">{t('footerLinks.2')}</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Get started</h4>
            <p className="mt-4 text-slate-600">See DaraCorp in action for your team.</p>
            <button onClick={() => scrollTo('contact')} className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-blue-700">
              Get a demo
            </button>
          </div>
        </div>
      </div>

      <div className="border-t footer-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <span>© {new Date().getFullYear()} DaraCorp. All rights reserved.</span>
          <span>
            Training delivery is <b className="font-semibold">powered by AfroLMS</b> — enrollment, tracking, and certification.
          </span>
        </div>
      </div>
    </footer>
  );
}
