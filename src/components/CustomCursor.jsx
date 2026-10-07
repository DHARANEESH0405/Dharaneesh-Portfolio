import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on touch devices / mobile screens
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOverInteractive = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOverInteractive);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOverInteractive);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp trailing dot
  useEffect(() => {
    if (isMobile || !isVisible) return;
    let animationFrameId;

    const render = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small crisp center dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-blue-400 rounded-full transition-transform duration-75 ease-out shadow-[0_0_8px_#3b82f6]"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      {/* Outer ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/40 transition-all duration-150 ease-out ${
          isHovered ? 'bg-blue-500/10 scale-150 border-blue-400/80' : ''
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - 16}px, ${trailingPos.y - 16}px, 0)`,
        }}
      />
    </div>
  );
}
