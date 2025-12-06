
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MouseFollower } from '@/components/MouseFollower';
import { servicesData } from '@/data/services';
import { StarDoodle, SpiralDoodle, SparkleDoodle } from '@/components/DoodleIcons';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData[id as keyof typeof servicesData];

    if (!service) {
        return <Navigate to="/404" replace />;
    }

    const { title, icon: Icon, fullDescription, features, benefits, color } = service;

    return (
        <main className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
            <MouseFollower />
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                {/* Fun Doodles */}
                <StarDoodle className="hidden lg:block absolute top-40 left-20 w-12 h-12 text-yellow-400 rotate-12" delay={0.2} />
                <SpiralDoodle className="hidden lg:block absolute top-32 right-32 w-16 h-16 text-primary/50" delay={0.5} />

                <div className="container px-4 relative z-10">
                    <Button variant="ghost" size="sm" asChild className="mb-8 hover:bg-primary/10 -ml-4">
                        <a href="/#services" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Services
                        </a>
                    </Button>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${color} mb-6 shadow-glow`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                                {title} <SparkleDoodle className="inline-block w-8 h-8 text-yellow-400 align-top ml-2" />
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {fullDescription}
                            </p>

                            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <StarDoodle className="w-5 h-5 text-primary" />
                                    What's Included
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {features.map((feature, i) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="xl" variant="hero" asChild>
                                    <a href="/#contact">Get Started with {title}</a>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right Column: Visuals & Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Abstract Visual Representation */}
                            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${color} p-1 opacity-90 shadow-2xl transition-transform duration-500`}>
                                <div className="w-full h-full bg-background/90 backdrop-blur-xl rounded-[20px] p-8 flex flex-col justify-center relative overflow-hidden">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                                    <h3 className="text-2xl font-bold mb-6 relative z-10">Why Choose This?</h3>
                                    <div className="space-y-6 relative z-10">
                                        {benefits.map((benefit, i) => (
                                            <motion.div
                                                key={benefit}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                                className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm"
                                            >
                                                <div className={`p-2 rounded-full bg-gradient-to-br ${color} bg-opacity-10`}>
                                                    <Icon className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="font-medium">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Blur */}
                            <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br ${color} opacity-20 blur-[100px] -z-10`} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ServiceDetail;
