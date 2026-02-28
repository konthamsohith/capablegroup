import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Blog from '../components/Blog';

// Logo Imports
import autoomLogo from '../assets/logos/autoom.png';
import bitcoinLogo from '../assets/logos/bitcoin.png';
import cocoLogo from '../assets/logos/coco.png';
import cryptoLogo from '../assets/logos/crypto.png';
import marzLogo from '../assets/logos/marz.png';
import paybitLogo from '../assets/logos/paybit.png';
import stratoLogo from '../assets/logos/strato.png';

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
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[12vh] pb-[12vh] text-center min-h-screen flex flex-col items-center justify-center">
                {/* Background Concentric Circles - Thinner and more subtle */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    {[1, 2, 3, 4, 5, 6].map((circle) => (
                        <div
                            key={circle}
                            className="absolute border border-gray-100/50 rounded-full"
                            style={{
                                width: `${circle * 320}px`,
                                height: `${circle * 320}px`,
                                opacity: 1 - circle * 0.15,
                            }}
                        />
                    ))}
                </div>

                {/* Main Content Area */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center relative z-10 w-full translate-y-20"
                >
                    {/* Badge/Tag */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/30 border border-gray-200/40 mb-12"
                    >
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 flex items-center gap-2">
                            <span className="text-gray-300">›</span>
                            DIGITAL AGENCY
                            <span className="text-gray-300">‹</span>
                        </span>
                    </motion.div>

                    {/* Flanking Icons and Heading Container */}
                    <div className="relative w-full flex items-center justify-center">
                        {/* Left Palette Icon */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute left-[5%] xl:left-[10%] hidden md:block"
                        >
                            <div className="icon-square">
                                <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.5 2-1.2l.6-.4c.5-.4.8-1 1-1.7.3-1.1 1.2-1.8 2.3-1.8 1.1 0 2 .8 2.1 1.9.1.5.4.9.8 1.1l.6.4c.4.7 1.1 1.2 2 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
                            </div>
                        </motion.div>

                        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-tight leading-[1.1] mb-8 max-w-5xl text-[#060612] z-10 px-4">
                            We design brands<br />
                            that move <span className="text-[#ff6321] italic">people</span>
                        </h1>

                        {/* Right Pen Icon */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="absolute right-[5%] xl:right-[10%] hidden md:block"
                        >
                            <div className="icon-square">
                                <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14 6 1.4-1.4a2 2 0 1 1 2.8 2.8L16.8 8.8c-.8.8-1.4.1-2.8-.2l-1.3-.3-3.6 3.6c.4 1.4.1 2-.8 2.8L3 21l3.5-3.5c.8-.8 1.4-.1 2.8.2L12 16c2.4.6 3.6-.6 4.8-.6m-8.1-1.3L12 8" /></svg>
                            </div>
                        </motion.div>
                    </div>

                    {/* Subheading */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.8 } }
                        }}
                        className="max-w-2xl mx-auto text-[15px] md:text-[16px] text-[#69686e]/80 leading-relaxed mb-14 font-medium px-4"
                    >
                        We combine strategy, design, and technology to help ambitious<br className="hidden md:block" />
                        brands stand out & create meaningful digital experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                        {/* Handwritten Note and Arrow (Visible on Desktop) */}
                        <div className="absolute -left-[240px] top-[10px] hidden lg:block pointer-events-none">
                            <div className="flex flex-col items-center">
                                <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="text-[#ff6321]/40 mb-1 ml-16 rotate-6">
                                    <path d="M10 35C25 15 70 10 90 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />
                                    <path d="M85 20L92 27L80 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="handwritten text-[#ff6321] text-xl -rotate-[5deg] whitespace-nowrap">
                                    Schedule a free call now
                                </span>
                            </div>
                        </div>

                        <button className="bg-[#ff6321] text-white px-10 py-4 rounded-xl transition-all shadow-lg shadow-primary/10 font-bold text-[16px] flex items-center justify-center hover:bg-[#e45217] hover:scale-[1.02] active:scale-[0.98]">
                            Discuss your ideas
                        </button>
                        <button className="bg-[#060612] text-white px-10 py-4 rounded-xl transition-all font-bold text-[16px] hover:bg-black hover:scale-[1.02] active:scale-[0.98]">
                            View services
                        </button>
                    </div>
                </motion.div>

                {/* Trusted By Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="mt-48 w-full border-t border-gray-100/80 border-dashed pt-12 relative"
                >
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6 text-[11px] font-bold tracking-[0.2em] text-[#69686e]/60 whitespace-nowrap uppercase">
                            TRUSTED BY 100+ GLOBAL LEADERS
                        </span>

                        <div className="flex flex-wrap justify-center md:justify-between items-center w-full max-w-7xl px-4 brightness-0 opacity-70 hover:opacity-100 transition-opacity duration-500 gap-12 md:gap-8">
                            <img src={autoomLogo} alt="Autoom" className="h-16 md:h-28 w-auto object-contain" />
                            <img src={marzLogo} alt="Marz" className="h-16 md:h-28 w-auto object-contain" />
                            <img src={stratoLogo} alt="Strato" className="h-16 md:h-28 w-auto object-contain" />
                            <img src={paybitLogo} alt="Paybit" className="h-16 md:h-28 w-auto object-contain" />
                            <img src={cocoLogo} alt="Coco" className="h-16 md:h-28 w-auto object-contain" />
                            <img src={bitcoinLogo} alt="Bitcoin" className="h-16 md:h-28 w-auto object-contain" />
                            <img src={cryptoLogo} alt="Crypto" className="h-16 md:h-28 w-auto object-contain" />
                        </div>
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
