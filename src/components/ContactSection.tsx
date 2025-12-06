import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, Loader2, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = '919940099083';
    const text = encodeURIComponent(
      `New enquiry from Render Tech website:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Business / Project: ${formData.business || 'N/A'}\n` +
      `Message:\n${formData.message}`
    );

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    try {
      window.open(url, '_blank');
      toast({
        title: "Redirecting to WhatsApp",
        description: "You can review and send your message there.",
      });
      setFormData({ name: '', email: '', business: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Gmail',
      value: 'info.rendertech@gmail.com',
      href: 'mailto:info.rendertech@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99400 99083',
      href: 'tel:+919940099083',
      color: 'text-blue-500'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 99400 99083',
      href: 'https://wa.me/919940099083',
      color: 'text-green-500'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@render.tech',
      href: 'https://instagram.com/render.tech',
      color: 'text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-subtle/60 backdrop-blur-md relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Let's Build Something{' '}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Ready to transform your online presence? Get in touch with us today
              and let's discuss how we can bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Phone' || item.label === 'Gmail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{item.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary/90 transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border shadow-lg relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />

              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

              <div className="space-y-5">
                {/* Name */}
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="Enter your name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="Enter Your Email"
                  />
                </motion.div>

                {/* Business Name */}
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                    Business / Project Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="Enter Your Designation"
                  />
                </motion.div>

                {/* Message */}
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none hover:border-primary/50"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
