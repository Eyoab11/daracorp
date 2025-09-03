import React from 'react';

/**
 * Marquee — continuously scrolls its children horizontally in a loop.
 * Props:
 * - items: React nodes or strings to render as tiles
 * - duration: seconds for one full loop (default 30)
 * - gap: tailwind gap class string (default 'gap-8')
 */
export default function Marquee({ items = [], duration = 30, gap = 'gap-8' }) {
  const style = { ['--marquee-duration']: `${duration}s` };
  const row = (
    <div className={`marquee-row flex items-center ${gap}`}> 
      {items.map((it, i) => (
        <div key={i} className="shrink-0">
          {typeof it === 'string' ? <span>{it}</span> : it}
        </div>
      ))}
    </div>
  );

  return (
    <div className="marquee relative overflow-hidden" style={style}>
      <div className="marquee-mask pointer-events-none" aria-hidden="true" />
      <div className="marquee-track flex">
        {row}
        {/* duplicate for seamless loop */}
        <div aria-hidden="true">{row}</div>
      </div>
    </div>
  );
}
