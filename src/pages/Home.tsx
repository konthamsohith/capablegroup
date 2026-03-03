import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Blog from '../components/Blog';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';
import CoreServices from '../components/CoreServices';

// Logo Imports
import autoomLogo from '../assets/logos/autoom.png';
import bitcoinLogo from '../assets/logos/bitcoin.png';
import cocoLogo from '../assets/logos/coco.png';
import cryptoLogo from '../assets/logos/crypto.png';
import marzLogo from '../assets/logos/marz.png';
import paybitLogo from '../assets/logos/paybit.png';
import stratoLogo from '../assets/logos/strato.png';
import atyuttamaLogo from '../assets/logos/atyuttama.png';
import socialflyLogo from '../assets/logos/socialfly.png';
import socialscaleLogo from '../assets/logos/socialscale.png';

const Home: React.FC = () => {
    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#060612] selection:bg-[#ff6321] selection:text-white relative">
            <SEO
                title="Capable Groups | Elite Teams & Digital Solutions"
                description="A multidisciplinary agency creating thoughtful, scalable digital solutions. We engineer growth through unified strategy, design, and high-performance development."
                keywords="digital agency, capable groups, UI/UX design, software development, IT staffing, marketing"
                canonicalUrl="https://capablegroups.com"
            />
            <div className="relative">
                {/* Background Subtle Gradient Blobs Restricted to Hero, Stats, and Services */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 60, -60, 0],
                            y: [0, -70, 70, 0],
                            scale: [1, 1.15, 0.85, 1],
                            rotate: [0, 90, 180, 270, 360],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-primary/15 rounded-full blur-[140px]"
                    />
                    <motion.div
                        animate={{
                            x: [0, -50, 50, 0],
                            y: [0, 80, -80, 0],
                            scale: [1, 0.8, 1.2, 1],
                            rotate: [360, 270, 180, 90, 0],
                        }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[20%] right-[-10%] w-[50%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            y: [0, 100, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[40%] -left-[10%] w-[80%] h-[30%] bg-primary/5 rounded-full blur-[150px]"
                    />
                </div>

                {/* Hero Section */}
                <main id="home" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[12vh] pb-[12vh] text-center min-h-screen flex flex-col items-center justify-center">
                    {/* ... Hero Content remains same ... */}
                    {/* (Omitted for brevity in instruction, but kept in actual replacement) */}
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
                            className="section-tag mb-12"
                        >
                            DIGITAL AGENCY
                        </motion.div>

                        {/* Flanking Icons and Heading Container */}
                        <div className="relative w-full flex items-center justify-center">
                            {/* Left AI Icon */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -10, 0]
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    opacity: { delay: 0.5, duration: 1 },
                                    x: { delay: 0.5, duration: 1 },
                                    y: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="absolute left-[2%] xl:left-[6%] top-[-15%] hidden md:block group"
                            >
                                <div className="w-24 h-24 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500 relative backdrop-blur-sm">
                                    <svg className="w-10 h-10 text-primary transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M50 80c-18 0-33-14-33-31s15-31 33-31s33 14 33 31" opacity="0.4" />
                                        <path d="M35 60l8-25 8 25M38 52h10" strokeWidth="3" />
                                        <path d="M62 35v25M58 35h8M58 60h8" strokeWidth="3" />
                                        <circle cx="75" cy="35" r="3" fill="currentColor" stroke="none" />
                                    </svg>
                                    <div className="absolute -inset-2 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
                                </div>
                            </motion.div>

                            <h1
                                className="tracking-tight mb-8 max-w-[90%] md:max-w-5xl z-10 px-4"
                                style={{
                                    fontFamily: '"Geist Sans", system-ui, sans-serif',
                                    fontWeight: 500,
                                    color: 'rgb(6, 6, 18)',
                                    fontSize: '72px',
                                    lineHeight: '72px'
                                }}
                            >
                                Digital infrastructure<br />
                                for <span
                                    style={{
                                        fontFamily: '"Geist Sans", system-ui, sans-serif',
                                        fontWeight: 500,
                                        color: 'rgb(255, 99, 33)',
                                        fontSize: '72px',
                                        lineHeight: '72px',
                                        fontStyle: 'italic'
                                    }}
                                >serious execution</span>
                            </h1>

                            {/* Right Top Domestic Staffing Icon */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -12, 0]
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    opacity: { delay: 0.6, duration: 1 },
                                    x: { delay: 0.6, duration: 1 },
                                    y: {
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.2
                                    }
                                }}
                                className="absolute right-[2%] xl:right-[6%] top-[-15%] hidden md:block group"
                            >
                                <div className="w-24 h-24 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500 relative backdrop-blur-sm">
                                    <svg className="w-10 h-10 text-primary transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M50 40c8 0 12-6 12-12s-4-12-12-12-12 6-12 12 4 12 12 12ZM30 85c0-12 10-20 20-20s20 8 20 20M25 45c5 0 8-4 8-8s-3-8-8-8-8 4-8 8 3 8 8 8ZM15 80c0-10 6-15 10-15M75 45c5 0 8-4 8-8s-3-8-8-8-8 4-8 8 3 8 8 8ZM85 80c0-10-6-15-10-15" />
                                    </svg>
                                    <div className="absolute -inset-2 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
                                </div>
                            </motion.div>

                            {/* Left Bottom Terminal Icon */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -8, 0]
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    opacity: { delay: 0.7, duration: 1 },
                                    x: { delay: 0.7, duration: 1 },
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.4
                                    }
                                }}
                                className="absolute left-[6%] xl:left-[10%] bottom-[-30%] hidden md:block group"
                            >
                                <div className="w-20 h-20 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500 relative backdrop-blur-sm">
                                    <svg className="w-7 h-7 text-primary transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
                                    <div className="absolute -inset-2 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
                                </div>
                            </motion.div>

                            {/* Right Bottom Layers Icon */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -15, 0]
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    opacity: { delay: 0.8, duration: 1 },
                                    x: { delay: 0.8, duration: 1 },
                                    y: {
                                        duration: 4.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.6
                                    }
                                }}
                                className="absolute right-[6%] xl:right-[10%] bottom-[-30%] hidden md:block group"
                            >
                                <div className="w-20 h-20 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500 relative backdrop-blur-sm">
                                    <svg className="w-7 h-7 text-primary transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                                    <div className="absolute -inset-2 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Subheading */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.8 } }
                            }}
                            className="max-w-3xl mx-auto mb-14 px-4 flex flex-col gap-4"
                            style={{
                                fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                                fontWeight: 500,
                                color: 'rgb(105, 104, 110)',
                                fontSize: '16px',
                                lineHeight: '1.6',
                                fontStyle: 'normal'
                            }}
                        >
                            <p>
                                The pace of technology has shifted. What previously took a team of engineers six months to build can now be delivered in six weeks — if you are working with a partner who understands AI-assisted development.
                            </p>
                        </motion.div>

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

                            <button
                                onClick={() => window.location.href = '/projects'}
                                className="bg-[#060612] text-white px-10 py-4 rounded-xl transition-all font-bold text-[16px] flex items-center justify-center hover:bg-black hover:scale-[1.02] active:scale-[0.98]">
                                See our work →
                            </button>
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="bg-[#ff6321] text-white px-10 py-4 rounded-xl transition-all shadow-lg shadow-primary/10 font-bold text-[16px] flex items-center justify-center hover:bg-[#e45217] hover:scale-[1.02] active:scale-[0.98]">
                                Discuss an engagement →
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
                            <span
                                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase tracking-[0.2em]"
                                style={{
                                    fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                                    fontWeight: 600,
                                    color: 'rgb(105, 104, 110)',
                                    fontSize: '12px',
                                    lineHeight: '12px'
                                }}
                            >
                                TRUSTED BY <span style={{ color: 'rgb(6, 6, 18)' }}>100+</span> GLOBAL LEADERS
                            </span>

                            <div className="w-full max-w-5xl overflow-hidden relative mt-4">
                                <motion.div
                                    animate={{
                                        x: ["0%", "-50%"],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 30,
                                            ease: "linear",
                                        },
                                    }}
                                    className="flex items-center gap-12 w-max brightness-0 opacity-70 hover:opacity-100 transition-opacity duration-500"
                                >
                                    {/* First set of logos */}
                                    <img src={autoomLogo} alt="Autoom" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={marzLogo} alt="Marz" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={stratoLogo} alt="Strato" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={paybitLogo} alt="Paybit" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={atyuttamaLogo} alt="Atyuttama" className="h-10 md:h-12 w-auto object-contain shrink-0" />
                                    <img src={socialflyLogo} alt="SocialFly" className="h-4 md:h-6 w-auto object-contain shrink-0" />
                                    <img src={socialscaleLogo} alt="SocialScale" className="h-8 md:h-12 w-auto object-contain shrink-0" />
                                    <img src={cocoLogo} alt="Coco" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={bitcoinLogo} alt="Bitcoin" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={cryptoLogo} alt="Crypto" className="h-16 md:h-20 w-auto object-contain shrink-0" />

                                    {/* Duplicate set for seamless loop */}
                                    <img src={autoomLogo} alt="Autoom" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={marzLogo} alt="Marz" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={stratoLogo} alt="Strato" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={paybitLogo} alt="Paybit" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={atyuttamaLogo} alt="Atyuttama" className="h-10 md:h-12 w-auto object-contain shrink-0" />
                                    <img src={socialflyLogo} alt="SocialFly" className="h-4 md:h-6 w-auto object-contain shrink-0" />
                                    <img src={socialscaleLogo} alt="SocialScale" className="h-8 md:h-12 w-auto object-contain shrink-0" />
                                    <img src={cocoLogo} alt="Coco" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={bitcoinLogo} alt="Bitcoin" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                    <img src={cryptoLogo} alt="Crypto" className="h-16 md:h-20 w-auto object-contain shrink-0" />
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                </main>

                <div className="relative z-10">
                    <div id="about" className="bg-gradient-to-b from-transparent to-orange-50/20 pt-12 pb-32">
                        <Stats />
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="relative z-10">
                <div className="bg-gradient-to-b from-orange-50/20 via-white to-orange-50/10">
                    <Timeline />
                </div>
            </div>

            {/* Core Service Pillars */}
            <div className="relative z-10">
                <div className="bg-gradient-to-b from-orange-50/10 via-white to-orange-50/20">
                    <CoreServices />
                </div>
            </div>

            {/* Services and following sections without the main background animations */}
            <div className="relative z-10 flex flex-col gap-0">
                <div className="bg-gradient-to-b from-orange-50/20 via-white to-orange-50/30 pt-32 pb-0">
                    <Services />
                </div>
                <div className="bg-gradient-to-b from-orange-50/30 to-white pt-0 pb-32">
                    <Process />
                </div>
                <div className="bg-gradient-to-b from-white to-orange-50/10 pt-12 pb-20">
                    <Blog />
                </div>

                <div className="bg-gradient-to-b from-orange-50/10 to-transparent pt-0 pb-32">
                    <CTA />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
