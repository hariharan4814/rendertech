import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.8 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updatePosition = (clientX: number, clientY: number) => {
      cursorX.set(clientX);
      cursorY.set(clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setIsTouching(true);
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
      // Optional: scale down or fade out slightly on release??
      // For now just keeping it visible but maybe smaller magnitude
      setTimeout(() => setIsVisible(false), 2000);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Strong 3D Core - Follows tightly */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-primary mix-blend-screen blur-[2px] z-50 hidden sm:block"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isTouching ? 1.5 : 1,
          boxShadow: '0 0 20px 5px hsl(var(--orange-glow))',
        }}
      />

      {/* Main glow - galaxy gradient */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full mix-blend-screen"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(249,115,22,0.05) 40%, transparent 70%)',
        }}
        animate={{
          scale: isTouching ? 1.2 : 1,
          rotate: 360,
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.2 }
        }}
      />

      {/* Secondary glow - wider dispersal with color shift */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full mix-blend-screen"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 65%)',
        }}
        animate={{
          scale: isTouching ? 1.5 : [1, 1.1, 1],
        }}
        transition={{
          delay: 0.05,
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Touch-specific vivid pulse */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full sm:hidden"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          opacity: isTouching ? 0.6 : 0,
        }}
      />
    </motion.div>
  );
}
