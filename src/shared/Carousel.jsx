import React from 'react';
import Card from './Card';

export default function Carousel({ items, lang }) {
  return (
    <div className="relative">
      <div className="group flex items-stretch gap-8 overflow-x-auto snap-x snap-mandatory pb-6" style={{ scrollBehavior: 'smooth' }}>
        {items.map((c) => (
          <Card key={c.id} course={c[lang]} id={c.id} lang={lang} />
        ))}
      </div>
    </div>
  );
}
