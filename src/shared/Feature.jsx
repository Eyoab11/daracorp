import React from 'react';

export default function Feature({ title, desc }) {
  return (
    <div className="group rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</div>
      <p className="text-gray-600 text-base">{desc}</p>
    </div>
  );
}
