import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Blog from '../components/Blog';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-background overflow-x-hidden relative font-sans">
            {/* Background Subtle Gradient Blobs with Enhanced Dynamics */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 60, -60, 0],
                        y: [0, -70, 70, 0],
                        scale: [1, 1.15, 0.85, 1],
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-15%] left-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 50, 0],
                        y: [0, 80, -80, 0],
                        scale: [1, 0.8, 1.2, 1],
                        rotate: [360, 270, 180, 90, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]"
                />
            </div>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-56 pb-32 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Badge/Tag with subtle pulse */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-12 overflow-hidden relative"
                    >
                        <motion.div
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-primary/5"
                        />
                        <span className="section-tag relative z-10 uppercase tracking-widest text-[10px] font-bold">:: CAPABLE GROUPS ::</span>
                    </motion.div>

                    {/* Main Heading with Mask Reveal */}
                    <div className="mb-10 overflow-visible flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
                        {["Innovating", "Technology", "&", "Global", "Infrastructure"].map((word, i) => (
                            <div key={i} className="overflow-hidden py-2 inline-block">
                                <motion.span
                                    variants={{
                                        hidden: { y: "110%", rotate: 5 },
                                        visible: {
                                            y: 0,
                                            rotate: 0,
                                            transition: {
                                                duration: 1,
                                                ease: [0.16, 1, 0.3, 1],
                                                delay: 0.5 + (i * 0.1)
                                            }
                                        }
                                    }}
                                    className={`text-[clamp(1.2rem,4.5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.1] block ${i > 0 ? 'text-primary italic' : 'text-[#060612]'}`}
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </div>

                    {/* Subheading with coordinated fade */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 1.2 } }
                        }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-16 font-medium"
                    >
                        Blending brilliance of experienced team and best of breed technology,
                        delivering high-impact solutions across IT, Real Estate & Infrastructure.
                    </motion.p>

                    {/* CTA Buttons with Focus Animation */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.5 } }
                        }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8"
                    >
                        <div className="relative group">
                            {/* Persistent Pulse for Focus */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -inset-1 bg-primary/30 rounded-2xl blur-lg pointer-events-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative bg-primary text-white px-12 py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 font-bold text-lg flex items-center justify-center gap-3"
                            >
                                Get Started
                                <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                            </motion.button>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto glass-card text-secondary px-12 py-5 rounded-2xl transition-all font-bold text-lg border border-white/20"
                        >
                            Our Portfolio
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Trusted By Section (Marquee style representation) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="mt-40"
                >
                    <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-12 flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-gray-200 after:h-px after:w-12 after:bg-gray-200">
                        TRUSTED BY GLOBAL LEADERS
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                        <img src="/src/assets/logos/marz.png" alt="Marz" className="h-7 object-contain" />
                        <img src="/src/assets/logos/coco.png" alt="Coco" className="h-7 object-contain" />
                        <img src="/src/assets/logos/autoom.png" alt="Autoom" className="h-7 object-contain" />
                        <img src="/src/assets/logos/racle.png" alt="Racle" className="h-7 object-contain" />
                        <img src="/src/assets/logos/crypto.png" alt="Crypto" className="h-7 object-contain" />
                        <img src="/src/assets/logos/bitcoin.png" alt="Bitcoin" className="h-7 object-contain" />
                        <img src="/src/assets/logos/paybit.png" alt="PayBit" className="h-7 object-contain" />
                        <img src="/src/assets/logos/strato.png" alt="Strato" className="h-7 object-contain" />
                    </div>
                </motion.div>
            </main>

            {/* Content Sections with large spacing and subtle transition gradients */}
            <div className="relative overflow-visible">
                {/* Global Background Accents for sections */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                    <motion.div
                        animate={{
                            y: [0, 100, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[10%] -left-[10%] w-[80%] h-[40%] bg-primary/5 rounded-full blur-[150px]"
                    />
                    <motion.div
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[20%] -right-[10%] w-[70%] h-[50%] bg-primary/5 rounded-full blur-[150px]"
                    />
                </div>

                <div className="relative z-10 flex flex-col gap-0">
                    <div className="bg-gradient-to-b from-transparent to-orange-50/20 py-32">
                        <Stats />
                    </div>
                    <div className="bg-gradient-to-b from-orange-50/20 via-white to-orange-50/30 py-32">
                        <Services />
                    </div>
                    <div className="bg-gradient-to-b from-orange-50/30 to-white py-32">
                        <Process />
                    </div>
                    <div className="bg-gradient-to-b from-white to-orange-50/10 py-32">
                        <Blog />
                    </div>
                    <div className="bg-gradient-to-b from-orange-50/10 to-transparent py-32 px-4">
                        <CTA />
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default Home;
