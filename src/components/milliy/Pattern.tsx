'use client';

import React from 'react';

/**
 * Uzbek traditional pattern components (Ismlimiy / Gulyayra style)
 * for use as borders, backgrounds, or decorative elements.
 */

export const UzbekPatternCorner = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path 
      d="M10 10C10 30 30 10 50 10C70 10 90 30 90 50C90 70 70 90 50 90C30 90 10 70 10 50" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    <path d="M50 20V35M50 65V80M20 50H35M65 50H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 30L40 40M60 60L70 70M70 30L60 40M40 60L30 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const UzbekPatternDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-milliy-primary to-transparent" />
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 5C20 5 15 15 5 20C15 25 20 35 20 35C20 35 25 25 35 20C25 15 20 5 20 5Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-milliy-primary to-transparent" />
  </div>
);

export const UzbekPatternBorder = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-8 opacity-20 ${className}`} style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0c5 10 10 5 20 5v30c-10 0-15-5-20-5s-10 5-20 5V5c10 0 15 5 20 5V0z' fill='none' stroke='%23805256' stroke-width='1'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat-x'
  }} />
);
