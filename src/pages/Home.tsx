import React from 'react';
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
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-56 pb-48 text-center min-h-screen flex flex-col items-center justify-center">
                {/* Background Concentric Circles */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    {[1, 2, 3, 4, 5, 6].map((circle) => (
                        <div
                            key={circle}
                            className="absolute border border-gray-200/30 rounded-full"
                            style={{
                                width: `${circle * 350}px`,
                                height: `${circle * 350}px`,
                                opacity: 1 - circle * 0.12,
                            }}
                        />
                    ))}
                </div>

                {/* Floating Icon Cards */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden sm:block hidden">
                    {/* Top Left */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [-5, -2, -5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[22%] left-[12%] glass-card p-4 rounded-2xl shadow-sm rotate-[-5deg]"
                    >
                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M22 12h-2" /><path d="M4 12H2" /><path d="m19.07 4.93-1.41 1.41" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 19.07-1.41-1.41" /><path d="m6.34 6.34-1.41-1.41" /></svg>
                        </div>
                    </motion.div>

                    {/* Top Right */}
                    <motion.div
                        animate={{ y: [0, 15, 0], rotate: [5, 8, 5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[18%] right-[15%] glass-card p-4 rounded-2xl shadow-sm rotate-[5deg]"
                    >
                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                        </div>
                    </motion.div>

                    {/* Bottom Left */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [8, 5, 8] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[28%] left-[18%] glass-card p-4 rounded-2xl shadow-sm rotate-[8deg]"
                    >
                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M12 16h3.5a3.5 3.5 0 1 1-3.5 3.5V16z" /></svg>
                        </div>
                    </motion.div>

                    {/* Bottom Right */}
                    <motion.div
                        animate={{ y: [0, 12, 0], rotate: [-8, -5, -8] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-[25%] right-[20%] glass-card p-4 rounded-2xl shadow-sm rotate-[-8deg]"
                    >
                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center relative z-10"
                >
                    {/* Badge/Tag */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/50 border border-gray-200/50 mb-10"
                    >
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                            <span className="text-gray-300 mr-2">›</span>
                            DIGITAL AGENCY
                            <span className="text-gray-300 ml-2">‹</span>
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-[clamp(2.5rem,8.5vw,6rem)] font-bold tracking-tight leading-[1.02] mb-8 max-w-4xl text-[#060612]">
                        We design brands<br />
                        that move <span className="text-primary">people</span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.8 } }
                        }}
                        className="max-w-xl mx-auto text-base md:text-lg text-muted leading-relaxed mb-12 font-medium"
                    >
                        We combine strategy, design, and technology to help ambitious brands stand out & create meaningful digital experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1 } }
                        }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
                    >
                        {/* Handwritten Note and Arrow (Visible on Desktop) */}
                        <div className="absolute -left-52 top-0 hidden lg:block pointer-events-none">
                            <div className="flex flex-col items-end">
                                <span className="handwritten text-primary text-2xl -rotate-[8deg] mb-2">
                                    Schedule a free call now
                                </span>
                                <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="text-primary/60 -mr-6">
                                    <path d="M5 25C15 5 45 5 55 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />
                                    <path d="M50 25H55V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <button className="bg-primary text-white px-10 py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 font-bold text-base flex items-center justify-center hover:bg-[#e45217] hover:scale-[1.02] active:scale-[0.98]">
                            Discuss your ideas
                        </button>
                        <button className="bg-[#060612] text-white px-10 py-4 rounded-2xl transition-all font-bold text-base hover:bg-black hover:scale-[1.02] active:scale-[0.98]">
                            View services
                        </button>
                    </motion.div>
                </motion.div>

                {/* Trusted By Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="mt-40 w-full"
                >
                    <div className="max-w-4xl mx-auto">
                        <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-12 flex items-center justify-center gap-6 before:h-px before:flex-1 before:bg-gray-200/80 before:border-t before:border-dashed after:h-px after:flex-1 after:bg-gray-200/80 after:border-t after:border-dashed">
                            TRUSTED BY 100+ GLOBAL LEADERS
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                            <img src="/src/assets/logos/marz.png" alt="Nexter" className="h-6 object-contain" />
                            <img src="/src/assets/logos/coco.png" alt="Oslo" className="h-6 object-contain" />
                            <img src="/src/assets/logos/autoom.png" alt="Monme" className="h-6 object-contain" />
                            <img src="/src/assets/logos/crypto.png" alt="Next" className="h-6 object-contain" />
                        </div>
                    </div>
                </motion.div>
                {/* Bottom Right Sticky Badge */}
                <div className="absolute bottom-10 right-10 hidden xl:flex flex-col gap-3 items-end pointer-events-none z-[100]">
                    <div className="glass-card px-4 py-2.5 rounded-xl shadow-lg border border-white/40 flex items-center gap-3">
                        <span className="text-[12px] font-bold text-secondary">Get it for FREE</span>
                        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M14 2v6h6"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/></svg>
                    </div>
                </div>
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
