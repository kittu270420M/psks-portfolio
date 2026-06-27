import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="fixed z-0 pointer-events-none hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        width: 500,
        height: 500,
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, rgba(0,245,255,0.10) 0%, rgba(108,99,255,0.04) 40%, transparent 70%)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  );
}
