import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border pt-12 pb-32 md:pb-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Render Tech logo"
                className="h-9 w-auto"
              />
            </div>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Render Tech. All rights reserved.</p>
          <p>Designed & Developed by Render Tech</p>
        </div>
      </div>
    </footer>
  );
}
