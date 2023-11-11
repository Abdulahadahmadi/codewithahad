// components/MouseShadow.tsx
import { useEffect, useState } from 'react';

const MouseShadow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-12 h-12 rounded-full"
      style={{
        left: mousePosition.x - 20,
        top: mousePosition.y - 16,
        background: 'radial-gradient(circle, rgba(0, 180, 216, 0), rgba(144, 205, 244, 0.5), rgba(240, 240, 240, 0.8))',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Optional: add a subtle shadow
        borderRadius: '100px', // Set to '0' for no rounding
        zIndex: 9999, // Set a high z-index to appear on top
        pointerEvents: 'none', // Don't catch mouse events
      }}
    />
  );
};

export default MouseShadow;
