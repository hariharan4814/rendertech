import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe,
  Briefcase,
  Rocket,
  ShoppingBag,
  Paintbrush,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'business-web-platforms',
    icon: Briefcase,
    title: 'Business Web Platforms',
    description: 'Corporate-grade websites and portals that position your brand like an established IT company.',
  },
  {
    id: 'portfolio-sites',
    icon: Globe,
    title: 'Portfolio Sites',
    description: 'High-impact portfolio and personal branding sites for creators, founders, and professionals.',
  },
  {
    id: 'product-launch-saas',
    icon: Rocket,
    title: 'Product Launch & SaaS',
    description: 'Conversion-focused pages and full-stack MVPs that get your product in front of customers fast.',
  },
  {
    id: 'e-commerce-solutions',
    icon: ShoppingBag,
    title: 'E-commerce Solutions',
    description: 'End-to-end storefronts with secure backends, inventory, and order flows that scale with you.',
  },
  {
    id: 'ui-ux-redesign',
    icon: Paintbrush,
    title: 'UI/UX Redesign',
    description: 'Transform outdated interfaces into modern, intuitive user experiences.',
  },
  {
    id: 'ongoing-support',
    icon: Wrench,
    title: 'Ongoing Support',
    description: 'Retainers for new features, performance tuning, and long-term maintenance of your stack.',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-background/60 backdrop-blur-md relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            End-to-End Web Solutions{' '}
            <span className="text-gradient">Tailored for You</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to launch, we provide comprehensive web development services
            that help your business thrive in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.title} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border card-hover cursor-pointer h-full"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
