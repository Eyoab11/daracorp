import React from 'react';
import logoImg from '../assets/image.jpg';

export default function Logo({ small, ...props }) {
  return (
    <img
      src={logoImg}
      alt="DaraCorp logo"
      className={small ? 'h-10 w-10' : 'h-14 w-14'}
      {...props}
    />
  );
}
