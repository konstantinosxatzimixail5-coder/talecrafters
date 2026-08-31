"use client";

import { useEffect } from 'react';

export function ImpCursor() {
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 48;
      canvas.height = 48;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, 48, 48);
      const dataUrl = canvas.toDataURL('image/png');
      const cursorValue = `url(${dataUrl}) 24 24, auto`;

      const style = document.createElement('style');
      style.id = 'imp-cursor-style';
      style.textContent = `
        * { cursor: ${cursorValue} !important; }
        a, button, [role="button"], input[type="submit"] { cursor: ${cursorValue} !important; }
      `;

      const existing = document.getElementById('imp-cursor-style');
      if (existing) existing.remove();

      document.head.appendChild(style);
    };
    // 96px covers the 48px canvas at 2x. The original was a 2000px,
    // 88kB plate being downscaled on every page load.
    img.src = '/brand/cursor-96.png';

    return () => {
      const existing = document.getElementById('imp-cursor-style');
      if (existing) existing.remove();
    };
  }, []);

  return null;
}
