'use client';

import React, { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Force dark mode at the lowest level possible
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    document.body.classList.add('dark');
    document.body.style.backgroundColor = '#0A0A0A';
    document.body.style.color = '#FFFFFF';
    
    return () => {
      // Optional: cleanup if we want landing to go back to its theme
      // But for now, let's keep it forced while in admin
    };
  }, []);

  return (
    <div className="dark min-h-screen bg-[#0A0A0A] text-white selection:bg-rose-500/30">
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          background-color: #0A0A0A !important;
          color: white !important;
          color-scheme: dark !important;
        }
        html {
          background-color: #0A0A0A !important;
          color-scheme: dark !important;
        }
        :root {
          --background: #0A0A0A !important;
          --foreground: #FFFFFF !important;
          --primary: #E11D48 !important;
        }
        .light body, .light html {
            background-color: #0A0A0A !important;
        }
      `}} />
      {children}
    </div>
  );
}
