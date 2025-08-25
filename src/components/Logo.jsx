import React from 'react';

export default function Logo({ small }) {
  return (
    <div className={`grid place-items-center ${small ? 'h-10 w-10' : 'h-14 w-14'} rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold shadow-lg`} aria-label="DaraCorp logo">
      <span className={small ? 'text-lg' : 'text-2xl'}>DC</span>
    </div>
  );
}
