import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Avanthika P',
    role: 'Entrepreneur',
    quote:
      'My full-stack website turned out beautifully—fast, polished, and aligned with exactly how I run my business.',
  },
  {
    name: 'Dakshesh R',
    role: 'SaaS Founder',
    quote:
      'They delivered a scalable full-stack foundation for my SaaS product with clean logic and dependable performance.',
  },
  {
    name: 'Renuka Devi D',
    role: 'Business Analyst',
    quote:
      'The entire build felt structured and thoughtful, with smooth data flow and a full-stack setup that works reliably',
  },
  {
    name: 'Dhana Rekha R',
    role: 'Freelancer',
    quote:
      'My portfolio website looks professional, loads quickly, and is easy for me to update—perfect for showcasing my work.',
  },
  {
    name: 'Pavithra S',
    role: 'Corporate Secretary',
    quote:
      'The full-stack website is modern, secure, and tailored to my workflow. Every update was delivered clearly and on time.',
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 lg:py-32 bg-surface-subtle/60 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-light/40 to-transparent" />
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Client Reviews
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by{' '}
            <span className="text-gradient">
              Growing Brands
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A single full-stack partner for design, development, and deployment—backed by real client results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-card border border-border/60 px-6 py-10 sm:px-10 sm:py-12 overflow-hidden">
            <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-orange-glow/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-orange-dark/20 blur-3xl" />

            <div className="relative">
              <Quote className="w-10 h-10 text-primary/70 mx-auto mb-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                    “{current.quote}”
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">{current.name}</span>
                    <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-primary/70" />
                    <span className="text-muted-foreground">{current.role}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/40'
                      }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


