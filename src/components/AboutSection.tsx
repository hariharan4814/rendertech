import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap, Globe } from 'lucide-react';

const techStack = [
  { name: 'HTML5', color: 'bg-orange-500' },
  { name: 'CSS3', color: 'bg-blue-500' },
  { name: 'JavaScript / TypeScript', color: 'bg-yellow-500' },
  { name: 'React / Next.js', color: 'bg-cyan-500' },
  { name: 'Node.js / Express', color: 'bg-emerald-500' },
  { name: 'MongoDB / PostgreSQL', color: 'bg-green-500' },
  { name: 'REST / APIs', color: 'bg-purple-500' },
  { name: 'Docker & Deployment', color: 'bg-slate-500' },
];

const highlights = [
  { icon: Code2, value: '3+', label: 'Years Learning' },
  { icon: Palette, value: '10+', label: 'Projects Completed' },
  { icon: Zap, value: '100%', label: 'Client Satisfaction' },
  { icon: Globe, value: '24/7', label: 'Available' },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-subtle/60 backdrop-blur-md relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-xl">
                <div className="aspect-[4/3] bg-card p-8 flex items-center justify-center">
                  {/* Abstract Design Element */}
                  <div className="relative w-full h-full">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-primary/20" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-2 border-dashed border-primary/30" />
                    </motion.div>
                    {/* Center Logo Slot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-20 sm:w-40 sm:h-24 rounded-2xl overflow-hidden border border-dashed border-primary/40 shadow-glow">
                        <img src="/logo.png" alt="Render Tech" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Fast Delivery</div>
                    <div className="text-xs text-muted-foreground">On-time, every time</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Crafting Digital Excellence with{' '}
              <span className="text-gradient">Passion</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Render Tech is a full-stack freelance studio delivering end-to-end web applications
              for growing brands and modern businesses. From UX strategy and interface design to
              backend APIs and database architecture, everything is handled in one place.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every project is treated like a long-term partnership: scalable code, reliable
              infrastructure, and clean, conversion-focused interfaces that feel like a mature IT company
              built them—while still giving you the speed and flexibility of working with one person.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-card border border-border"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <span className="text-sm font-medium text-muted-foreground mb-3 block">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border"
                  >
                    <span className={`inline-block w-2 h-2 rounded-full ${tech.color} mr-2`} />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
