import React from 'react';
import { Palette, Code2, PenTool, Layout, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

import About from '../components/About';
import Stats from '../components/Stats';
import Blog from '../components/Blog';


const Home: React.FC = () => {
    return (
        <div className="min-h-screen pt-20 bg-background overflow-x-hidden relative">
            {/* Background Animations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                {/* High-end Animated Blobs */}
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#4A96CB] rounded-full blur-[120px] opacity-[0.15]"
                />
                <motion.div
                    animate={{
                        x: [0, -30, 30, 0],
                        y: [0, 50, -50, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#A3D8F4] rounded-full blur-[100px] opacity-[0.2]"
                />

                {/* Floating Subtle Icons */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[15%] text-[#4A96CB]/10 hidden lg:block"
                >
                    <Palette size={80} strokeWidth={1} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[30%] right-[15%] text-[#4A96CB]/10 hidden lg:block"
                >
                    <Code2 size={100} strokeWidth={1} />
                </motion.div>
                <motion.div
                    animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] right-[20%] text-[#4A96CB]/5 hidden lg:block"
                >
                    <Layout size={60} strokeWidth={1} />
                </motion.div>

                {/* Concentric Background Curves */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[1000px] opacity-[0.03] text-secondary pointer-events-none">
                    <svg viewBox="0 0 1000 1000" className="w-full h-full">
                        <circle cx="500" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="500" cy="250" r="350" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="500" cy="250" r="500" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="500" cy="250" r="650" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="500" cy="250" r="800" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </div>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-4 mb-8"
                >
                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <span className="text-xs font-semibold tracking-widest text-[#4A96CB] uppercase">WELCOME TO Capable Groups</span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-geist font-semibold text-[72px] leading-[1.1] tracking-tighter text-[#060612] mb-6"
                >
                    Leading conglomerate<br />
                    with <span className="text-[#4A96CB]">diversified interests</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-3xl mx-auto font-geist font-medium text-[18px] leading-[1.5] text-[#69686e] mb-12"
                >
                    Blending brilliance of experienced team and best of the breed technology,
                    offering a wide spectrum of IT, Non-IT and Real Estate & Infrastructure solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 relative"
                >
                    <div className="relative group">
                        <button className="bg-[#4A96CB] text-white px-8 py-4 rounded-xl hover:bg-[#3d7da8] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold text-lg">
                            Discuss your ideas
                        </button>


                    </div>

                    <button className="bg-secondary text-white px-8 py-4 rounded-xl hover:bg-black transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center gap-2">
                        View services
                    </button>
                </motion.div>

                {/* Floating Icons */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 hidden lg:block">
                    {/* Top Left */}
                    <div className="absolute top-[10%] left-[15%] p-4 bg-white rounded-2xl shadow-xl transform -rotate-12 animate-float" style={{ animationDelay: '0s' }}>
                        <Palette className="w-8 h-8 text-gray-300" />
                    </div>
                    {/* Top Right */}
                    <div className="absolute top-[15%] right-[15%] p-4 bg-white rounded-2xl shadow-xl transform rotate-12 animate-float" style={{ animationDelay: '2s' }}>
                        <PenTool className="w-8 h-8 text-gray-300" />
                    </div>
                    {/* Bottom Left */}
                    <div className="absolute bottom-[30%] left-[20%] p-5 bg-white rounded-2xl shadow-xl transform rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                        <Layout className="w-8 h-8 text-gray-300" />
                    </div>
                    {/* Bottom Right */}
                    <div className="absolute bottom-[35%] right-[18%] p-5 bg-white rounded-2xl shadow-xl transform -rotate-6 animate-float" style={{ animationDelay: '3s' }}>
                        <Code2 className="w-8 h-8 text-gray-300" />
                    </div>
                </div>

                {/* Trusted By Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-32 border-t border-gray-200/60 pt-16"
                >
                    <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-12">
                        Trusted by 100+ Global Leaders
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - In a real app these would be SVGs */}
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center gap-1"><Terminal className="w-6 h-6" /> Nexter</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center gap-1">oslo.</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center gap-1">NAMAE</div>
                        <div className="h-8 font-bold text-xl text-gray-800 flex items-center gap-1">next*</div>
                    </div>

                </motion.div>
            </main>

            <About />
            <Stats />
            <Services />
            <Blog />
            <Process />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
