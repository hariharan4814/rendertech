import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background/60 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-light/40 to-transparent" />
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Featured Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Visit My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore real-world web experiences I&apos;ve designed and built—from modern business
            websites to high-performance landing pages and portfolios.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="px-8 font-semibold"
            >
              <a
                href="https://hariharan.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit hariharan.me
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


