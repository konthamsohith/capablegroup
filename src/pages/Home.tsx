import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
import nexovaLogo from '../assets/logos/nexova.png';
import grovaLogo from '../assets/logos/grova.png';
import klyveLogo from '../assets/logos/klyve.png';
import orbixLogo from '../assets/logos/orbix.png';

const techStack = [
    {
        name: 'React',
        color: '#61DAFB',
        icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" className="w-16 h-16">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        ),
    },
    {
        name: 'Next.js',
        color: '#ffffff',
        icon: (
            <svg viewBox="0 0 24 24" className="w-16 h-16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
            </svg>
        ),
    },
    {
        name: 'Tailwind CSS',
        color: '#06B6D4',
        icon: (
            <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-16 h-16">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
        ),
    },
    {
        name: 'Node.js',
        color: '#339933',
        icon: (
            <svg viewBox="0 0 24 24" className="w-16 h-16" fill="#339933" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
            </svg>
        ),
    },
    {
        name: 'TypeScript',
        color: '#3178C6',
        icon: (
            <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: '#3178C6' }}>
                <span className="text-white font-black text-2xl tracking-tighter" style={{ fontFamily: 'system-ui, sans-serif' }}>TS</span>
            </div>
        ),
    },
    {
        name: 'Figma',
        color: '#F24E1E',
        icon: (
            <svg viewBox="0 0 24 24" className="w-16 h-16">
                <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
                <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
                <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
                <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
                <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
            </svg>
        ),
    },
];

const Home: React.FC = () => {
    const [techIndex, setTechIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTechIndex((prev) => (prev + 1) % techStack.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#000000] selection:bg-[#ff6321] selection:text-white relative">
            <SEO
                title="Capable Groups | Elite Teams & Digital Solutions"
                description="A multidisciplinary agency creating thoughtful, scalable digital solutions. We engineer growth through unified strategy, design, and high-performance development."
                keywords="digital agency, capable groups, UI/UX design, software development, IT staffing, marketing"
                canonicalUrl="https://capablegroups.com"
            />
            <div className="relative">
                {/* Background Subtle Gradient Blobs */}
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

                {/* ── Hero Section ─────────────────────────────────── */}
                <main id="home" className="relative z-10 min-h-screen flex flex-col justify-center overflow-hidden">


                    {/* Animated glow blobs (light mode) */}
                    <motion.div
                        animate={{ x: [0, 40, -40, 0], y: [0, -50, 50, 0], scale: [1, 1.1, 0.9, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-[-10%] right-[5%] w-[50%] h-[70%] bg-[#ff6321]/8 rounded-full blur-[120px] pointer-events-none z-0"
                    />
                    <motion.div
                        animate={{ x: [0, -30, 30, 0], y: [0, 60, -60, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"
                    />

                    {/* Content container */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                        {/* ── LEFT COLUMN ── */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="flex-1 flex flex-col items-start gap-8 text-left"
                        >
                            {/* Badge */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
                                className="flex items-center gap-2 border border-[#ff6321]/30 bg-[#ff6321]/10 rounded-full px-4 py-1.5"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6321] animate-pulse" />
                                <span className="text-[11px] font-bold tracking-[0.3em] text-[#ff6321] uppercase">Digital Agency</span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.15 } } }}
                                className="text-[34px] sm:text-[44px] md:text-[50px] lg:text-[50px] xl:text-[58px] font-bold leading-[1.05] tracking-tighter text-[rgb(6,6,18)]"
                                style={{ fontFamily: '"Geist Sans", system-ui, sans-serif' }}
                            >
                                Digital infrastructure<br />
                                for{' '}
                                <span className="italic text-[#ff6321]">serious execution</span>
                            </motion.h1>

                            {/* Subtext */}
                            <motion.p
                                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.3 } } }}
                                className="text-[15px] sm:text-[16px] leading-[1.7] text-[rgb(105,104,110)] max-w-lg"
                                style={{ fontFamily: '"Geist Sans", system-ui, sans-serif' }}
                            >
                                The pace of technology has shifted. What previously took a team of engineers six months to build can now be delivered in six weeks — if you are working with a partner who understands AI-assisted development.
                            </motion.p>

                            {/* Metric chips */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.45 } } }}
                                className="flex flex-wrap gap-3"
                            >
                                {[
                                    { value: '6 wks', label: 'avg. delivery' },
                                    { value: '100+', label: 'global clients' },
                                    { value: 'AI-first', label: 'development' },
                                ].map((chip) => (
                                    <div key={chip.value} className="flex items-center gap-2 bg-black/5 border border-black/10 rounded-xl px-4 py-2">
                                        <span className="text-[16px] font-bold text-[rgb(6,6,18)]">{chip.value}</span>
                                        <span className="text-[12px] text-[rgb(105,104,110)] font-medium">{chip.label}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } } }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 w-full sm:w-auto"
                            >
                                <button
                                    onClick={() => window.location.href = '/projects'}
                                    className="group flex items-center justify-center gap-2 bg-[rgb(6,6,18)] text-white px-8 py-4 rounded-2xl font-bold text-[14px] tracking-tight hover:bg-[#1a1a2e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
                                >
                                    See our work
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                                <button
                                    onClick={() => window.location.href = '/contact'}
                                    className="group flex items-center justify-center gap-2 bg-[#ff6321] text-white px-8 py-4 rounded-2xl font-bold text-[14px] tracking-tight hover:bg-[#e45217] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,99,33,0.25)]"
                                >
                                    Discuss an engagement
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                            </motion.div>

                        </motion.div>

                        {/* ── RIGHT COLUMN — Animated Visual ── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                            className="flex-1 flex items-center justify-center relative w-full min-h-[380px] lg:min-h-[500px]"
                        >
                            {/* Outer ring */}
                            <div className="absolute w-[280px] sm:w-[360px] lg:w-[420px] aspect-square rounded-full border border-black/5" />
                            <div className="absolute w-[220px] sm:w-[280px] lg:w-[320px] aspect-square rounded-full border border-black/5 animate-[spin_30s_linear_infinite]" />

                            {/* Core orb with cycling tech icon */}
                            <motion.div
                                animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative w-40 h-40 sm:w-56 h-56 rounded-full flex items-center justify-center"
                                style={{ background: 'radial-gradient(circle at 35% 35%, #ff6321, #c0310a 50%, #0a0a0f)' }}
                            >
                                <div className="absolute inset-4 rounded-full"
                                    style={{ background: 'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.15), transparent 60%)' }} />
                                <div className="absolute -inset-8 rounded-full bg-[#ff6321]/10 blur-2xl" />

                                {/* Cycling icon */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={techIndex}
                                        initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
                                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                                        className="relative z-10 flex flex-col items-center gap-2"
                                    >
                                        {techStack[techIndex].icon}
                                        <span className="text-[11px] font-bold tracking-wide text-white/80 uppercase">
                                            {techStack[techIndex].name}
                                        </span>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>

                            {/* Orbiting small orb 1 */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                                className="absolute w-[300px] h-[300px]"
                                style={{ transformOrigin: 'center' }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[rgb(6,6,18)] shadow-[0_0_12px_rgba(0,0,0,0.3)]" />
                            </motion.div>

                            {/* Orbiting small orb 2 */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                                className="absolute w-[380px] h-[380px]"
                                style={{ transformOrigin: 'center' }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#ff6321] shadow-[0_0_8px_rgba(255,99,33,0.8)]" />
                            </motion.div>

                            {/* Floating stat card */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute bottom-12 right-4 lg:right-0 bg-white border border-black/8 rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                            >
                                <div className="text-[28px] font-bold text-[rgb(6,6,18)] leading-none">98%</div>
                                <div className="text-[11px] text-[rgb(105,104,110)] font-medium mt-1">Client satisfaction rate</div>
                                <div className="flex gap-0.5 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3 h-3 text-[#ff6321]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating badge card */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute top-12 left-4 lg:left-0 bg-white border border-black/8 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                            >
                                <div className="text-[11px] text-[rgb(105,104,110)] font-medium">Latest deployment</div>
                                <div className="text-[14px] font-bold text-[rgb(6,6,18)] mt-0.5">Autoom Platform v3</div>
                                <div className="flex items-center gap-1.5 mt-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] text-green-600 font-medium">Live 2 days ago</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* ── Logo Strip ── */}
                    <motion.div
                        id="clients"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="relative z-10 w-full border-t border-black/5 pt-8 pb-10"
                    >
                        <div className="max-w-7xl mx-auto px-6 lg:px-12">
                            <p className="text-[11px] font-bold tracking-[0.3em] text-black/20 uppercase mb-6 text-center">
                                Trusted by <span className="text-black/40">100+</span> global leaders
                            </p>
                            <div className="w-full overflow-hidden relative">

                                <motion.div
                                    animate={{ x: ['0%', '-50%'] }}
                                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
                                    className="flex items-center gap-12 w-max brightness-0 opacity-30 hover:opacity-60 transition-opacity duration-500"
                                >
                                    <img src={autoomLogo} alt="Autoom" width="64" height="64" loading="lazy" className="h-16 w-auto object-contain shrink-0" />
                                    <img src={marzLogo} alt="Marz" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={stratoLogo} alt="Strato" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={paybitLogo} alt="Paybit" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={atyuttamaLogo} alt="Atyuttama" width="32" height="32" loading="lazy" className="h-8 w-auto object-contain shrink-0" />
                                    <img src={socialflyLogo} alt="SocialFly" width="20" height="20" loading="lazy" className="h-5 w-auto object-contain shrink-0" />
                                    <img src={socialscaleLogo} alt="SocialScale" width="36" height="36" loading="lazy" className="h-9 w-auto object-contain shrink-0" />
                                    <img src={cocoLogo} alt="Coco" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={bitcoinLogo} alt="Bitcoin" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={cryptoLogo} alt="Crypto" width="64" height="64" loading="lazy" className="h-16 w-auto object-contain shrink-0" />
                                    <img src={nexovaLogo} alt="Nexova" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={grovaLogo} alt="Grova" width="64" height="64" loading="lazy" className="h-16 w-auto object-contain shrink-0" />
                                    <img src={klyveLogo} alt="Klyve" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={orbixLogo} alt="Orbix" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    {/* Duplicate for loop */}
                                    <img src={autoomLogo} alt="Autoom" width="64" height="64" loading="lazy" className="h-16 w-auto object-contain shrink-0" />
                                    <img src={marzLogo} alt="Marz" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={stratoLogo} alt="Strato" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={paybitLogo} alt="Paybit" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={atyuttamaLogo} alt="Atyuttama" width="32" height="32" loading="lazy" className="h-8 w-auto object-contain shrink-0" />
                                    <img src={socialflyLogo} alt="SocialFly" width="20" height="20" loading="lazy" className="h-5 w-auto object-contain shrink-0" />
                                    <img src={socialscaleLogo} alt="SocialScale" width="36" height="36" loading="lazy" className="h-9 w-auto object-contain shrink-0" />
                                    <img src={cocoLogo} alt="Coco" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={bitcoinLogo} alt="Bitcoin" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={cryptoLogo} alt="Crypto" width="64" height="64" loading="lazy" className="h-16 w-auto object-contain shrink-0" />
                                    <img src={nexovaLogo} alt="Nexova" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={grovaLogo} alt="Grova" width="64" height="64" loading="lazy" className="h-16 w-auto object-contain shrink-0" />
                                    <img src={klyveLogo} alt="Klyve" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
                                    <img src={orbixLogo} alt="Orbix" width="56" height="56" loading="lazy" className="h-14 w-auto object-contain shrink-0" />
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
                <div className="bg-gradient-to-b from-orange-50/20 via-white to-orange-50/30 pt-12 pb-0">
                    <Services />
                </div>
                <div className="bg-gradient-to-b from-orange-50/30 to-[#f5f4f3] pt-0 pb-12">
                    <Process />
                </div>
                <div className="bg-[#f5f4f3] pt-0 pb-0">
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
