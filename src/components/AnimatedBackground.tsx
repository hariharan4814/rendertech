import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;

    const ParticleCount = 150; // Adjust for density
    const ConnectionDistance = 100;
    const MouseDistance = 200;

    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      originalSize: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.originalSize = Math.random() * 2 + 0.5;
        this.size = this.originalSize;
        // White/Blue-ish stars
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (MouseDistance - distance) / MouseDistance;

          // Push away slightly
          this.vx -= forceDirectionX * force * 0.05;
          this.vy -= forceDirectionY * force * 0.05;

          // Glow up
          this.size = this.originalSize * 1.5;
        } else {
          // Return to normal speed/size
          if (this.vx > 0.5) this.vx *= 0.95;
          if (this.vx < -0.5) this.vx *= 0.95;
          if (this.vy > 0.5) this.vy *= 0.95;
          if (this.vy < -0.5) this.vy *= 0.95;

          if (this.size > this.originalSize) {
            this.size -= 0.1;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < ParticleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw nebulas (soft gradients)
      // We can do this with CSS for better performance, or simple large gradient circles here.
      // Let's rely on the CSS/motion-divs for the nebula background, and canvas for stars.

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, index) => {
        // Only connect some particles to avoid clutter
        if (index % 2 !== 0) return;

        particles.slice(index + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < ConnectionDistance) {
            ctx.strokeStyle = `rgba(100, 150, 255, ${1 - distance / ConnectionDistance * 0.8})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none bg-[#0a0a0f]">
      {/* Deep Space Gradients / Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0f] to-[#000000]" />

      {/* Nebula Globs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[0%] w-[50vw] h-[50vw] rounded-full bg-purple-900/20 blur-[100px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-orange-900/10 blur-[100px] mix-blend-screen"
      />

      {/* Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Overlay to ensure text readability if needed (vignette) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-40" />
    </div>
  );
}
