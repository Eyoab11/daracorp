import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function Carousel({ items, lang }) {
  const trackRef = useRef(null);
  const lastInteractRef = useRef(Date.now() - 3000);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (!items || items.length === 0) return;

    // Only enable auto-advance on small screens (<= 640px)
    const mq = window.matchMedia('(max-width: 639px)');
    let isMobile = mq.matches;
    const onMQ = (e) => { isMobile = e.matches; };
    mq.addEventListener?.('change', onMQ);

    let disposed = false;
    const markInteraction = () => { lastInteractRef.current = Date.now(); };
    el.addEventListener('touchstart', markInteraction, { passive: true });
    el.addEventListener('pointerdown', markInteraction);
    el.addEventListener('wheel', markInteraction, { passive: true });
    el.addEventListener('scroll', markInteraction, { passive: true });

    const AUTO_MS = 3000;
    const tick = () => {
      if (disposed) return;
      if (!isMobile) return;
      if (document.hidden) return;
      // Skip if container not visible (rare here but safe)
      if (el.offsetParent === null || el.offsetWidth === 0) return;
      const idle = Date.now() - lastInteractRef.current;
      if (idle < AUTO_MS) return;

      const children = Array.from(el.children).filter((n) => n.nodeType === 1);
      if (!children.length) return;
      const targets = children.map((ch) => /** @type {HTMLElement} */ (ch).offsetLeft);
      const currLeft = el.scrollLeft;
      const tolerance = 40;

      // Try exact snap first
      let currIndex = targets.findIndex((left) => Math.abs(left - currLeft) <= tolerance);
      if (currIndex === -1) {
        currIndex = 0;
        for (let i = 0; i < targets.length; i++) {
          if (targets[i] <= currLeft + tolerance) currIndex = i; else break;
        }
      }
      const nextIndex = (currIndex + 1) % targets.length;
      el.scrollTo({ left: targets[nextIndex], behavior: 'smooth' });
    };

    const interval = setInterval(tick, AUTO_MS);
    return () => {
      disposed = true;
      clearInterval(interval);
      el.removeEventListener('touchstart', markInteraction);
      el.removeEventListener('pointerdown', markInteraction);
      el.removeEventListener('wheel', markInteraction);
      el.removeEventListener('scroll', markInteraction);
      mq.removeEventListener?.('change', onMQ);
    };
  }, [items?.length]);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={lang === 'am' ? 'የተመረጡ ኮርሶች ካሮሴል' : 'Featured courses carousel'}
        className="group flex items-stretch gap-8 overflow-x-auto snap-x snap-mandatory pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
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
