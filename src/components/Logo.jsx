import React from 'react';
import logoImg from '../assets/image.jpg';

export default function Logo({ small, ...props }) {
  return (
    <img
      src={logoImg}
      alt="DaraCorp logo"
  className={small ? 'h-10 w-auto object-contain' : 'h-14 w-auto object-contain'}
      {...props}
    />
  );
}
