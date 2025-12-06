import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, LayoutGrid, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: Briefcase },
  { href: '#portfolio', label: 'Portfolio', icon: LayoutGrid },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo - image-based for light/dark themes */}
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="Render Tech logo"
                className="h-10 w-auto"
              />
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-foreground/70 font-medium transition-colors duration-300 hover:text-foreground group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-3/4 blur-[1px]" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

        </nav>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <div className="bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-lg shadow-primary/10 p-2 mx-auto max-w-sm ring-1 ring-white/10">
          <ul className="flex items-center justify-between px-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex flex-col items-center gap-1 p-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all active:scale-95"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
