import { useParams, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MouseFollower } from '@/components/MouseFollower';
import { servicesData } from '@/data/services';
import { useRef } from 'react';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData[id as keyof typeof servicesData];
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    if (!service) {
        return <Navigate to="/404" replace />;
    }

    const { title, icon: Icon, fullDescription, features, benefits, color } = service;
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Extract solid color for shadows roughly from the gradient string (simplification)
    const shadowColor = color.includes('orange') ? 'rgba(249, 115, 22, 0.5)' :
        color.includes('purple') ? 'rgba(168, 85, 247, 0.5)' :
            color.includes('blue') ? 'rgba(59, 130, 246, 0.5)' :
                color.includes('emerald') ? 'rgba(16, 185, 129, 0.5)' :
                    'rgba(255, 255, 255, 0.3)';

    return (
        <main ref={containerRef} className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
            <MouseFollower />
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
                {/* Dynamic Background Aura */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br ${color} opacity-10 blur-[120px] rounded-full pointer-events-none`} />

                <div className="container px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Hero Content */}
                    <motion.div
                        style={{ y: yHero, opacity: opacityHero }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium mb-8"
                        >
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
                            Premium Service
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
                        >
                            {title.split(' ').map((word, i) => (
                                <span key={i} className="inline-block mr-3">
                                    {word === '&' ? <span className="text-primary font-light italic">&</span> : word}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
                        >
                            {fullDescription}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button size="xl" variant="hero" asChild className="group">
                                <a href="#details">
                                    Explore Features
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button size="xl" variant="heroOutline" asChild>
                                <a href="/#services">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    All Services
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual 3D */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center relative"
                    >
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                            {/* Spinning Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className={`absolute inset-0 rounded-full border border-dashed border-white/20`}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className={`absolute inset-4 rounded-full border border-dotted border-white/10`}
                            />

                            {/* Central Icon Card */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-40 h-40 sm:w-56 sm:h-56 rounded-[2rem] bg-gradient-to-br ${color} p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)]`} style={{ boxShadow: `0 0 80px -20px ${shadowColor}` }}>
                                    <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-[1.8rem] flex items-center justify-center border border-white/10">
                                        <Icon className="w-20 h-20 sm:w-28 sm:h-28 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </motion.div>
            </section>


            {/* --- Features Grid (Glassmorphism) --- */}
            <section id="details" className="py-24 relative z-10">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl sm:text-5xl font-bold mb-6">Capabilities</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                                <p className="text-sm text-muted-foreground">Detailed implementation and seamless integration for your project.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us (Dark Contrast) --- */}
            <section className="py-24 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${color.split(' ')[1].replace('to-', '')}/5 to-transparent opacity-20`} />

                <div className="container px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Transformative <br /><span className={`text-transparent bg-clip-text bg-gradient-to-r ${color}`}>Benefits</span></h2>
                            <p className="text-xl text-muted-foreground mb-12">
                                We go beyond code. We deliver tangible business outcomes that help you grow, scale, and succeed in the digital landscape.
                            </p>

                            <div className="space-y-6">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex items-center gap-6 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                                    >
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                                            <span className="font-bold text-white">{i + 1}</span>
                                        </div>
                                        <h4 className="text-lg font-medium">{benefit}</h4>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative lg:h-[600px] rounded-3xl overflow-hidden bg-black/20 border border-white/5 backdrop-blur-3xl flex items-center justify-center p-8"
                        >
                            {/* Abstract Visualization */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />

                            <div className="grid grid-cols-2 gap-4 w-full h-full opacity-60">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className={`rounded-2xl bg-gradient-to-br ${color} opacity-${(i + 2) * 10} animate-pulse`} style={{ animationDelay: `${i}s`, animationDuration: '4s' }} />
                                ))}
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl max-w-sm">
                                    <Icon className="w-16 h-16 mx-auto mb-6 text-white" />
                                    <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                                    <p className="text-muted-foreground mb-6">Let's build this solution for your business today.</p>
                                    <Button size="xl" variant="hero" asChild className="w-full">
                                        <a href="#contact">Contact Us Now</a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Large CTA --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="container px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-6xl font-bold mb-8">Built for Impact</h2>
                        <Button size="xl" variant="hero" className="text-lg px-12 py-8 rounded-full shadow-[0_0_50px_rgba(255,100,0,0.3)] hover:shadow-[0_0_80px_rgba(255,100,0,0.5)] transition-shadow duration-500" asChild>
                            <a href="#contact">Start Your Project</a>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServiceDetail;
