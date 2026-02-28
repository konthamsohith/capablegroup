import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Outer Rounded Container */}
                <div className="p-2 md:p-4 rounded-[40px] border border-gray-100 bg-gray-50/30">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#FFD08A] via-[#FFB35B] to-[#FF931E] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12"
                    >
                        {/* Decorative Background Rings */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] right-[20%] w-[400px] h-[400px] border-[2px] border-orange-900 rounded-full" />
                            <div className="absolute bottom-[-20%] left-[30%] w-[300px] h-[300px] border-[2px] border-orange-900 rounded-full" />
                            <div className="absolute bottom-[10%] left-[45%] w-[150px] h-[150px] border-[2px] border-orange-900 rounded-full" />
                        </div>

                        {/* Left Content */}
                        <div className="relative z-10 lg:w-1/2 text-left">
                            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8B5E3C] uppercase mb-6 block font-sans">
                                LET'S BUILD SOMETHING GREAT
                            </span>
                            <h2 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight mb-10 leading-[1.05]">
                                Ready to start <br className="hidden md:block" />
                                your next project?
                            </h2>
                            <button className="bg-[#0A0A0A] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-tight hover:scale-105 transition-transform">
                                Get started
                            </button>
                        </div>

                        {/* Right Content - The Floating Card */}
                        <div className="relative lg:w-auto w-full max-w-sm">
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[24px] shadow-2xl relative"
                            >
                                {/* Available Tag */}
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-2.5 h-2.5 bg-black rounded-full shadow-inner ring-4 ring-gray-100 animate-pulse" />
                                    <span className="text-[10px] font-bold tracking-[0.15em] text-gray-500 uppercase">
                                        AVAILABLE FOR PROJECT
                                    </span>
                                </div>

                                {/* Avatars */}
                                <div className="flex items-center mb-8">
                                    <div className="w-14 h-14 rounded-full border-[3px] border-white shadow-xl overflow-hidden bg-gray-200">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                                            alt="Lead Designer"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="mx-3 text-gray-400 font-medium">+</div>
                                    <div className="w-14 h-14 rounded-full border-[3px] border-white shadow-xl bg-black flex items-center justify-center text-white text-xs font-bold -ml-2">
                                        You
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-secondary mb-2 tracking-tight">
                                    Quick 15-minute call
                                </h3>
                                <p className="text-gray-500 font-medium text-[15px] mb-8">
                                    Pick a time that works for you.
                                </p>

                                <button className="w-full bg-[#FF6B35] text-white py-4 rounded-xl font-bold tracking-tight hover:scale-[1.02] transition-transform shadow-lg shadow-orange-500/20">
                                    Book a free call
                                </button>

                                {/* Floating Label Cursor (Amanda) */}
                                <motion.div
                                    animate={{
                                        x: [0, 10, 0],
                                        y: [0, -10, 0]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-6 top-1/4 z-20"
                                >
                                    <div className="flex flex-col items-center">
                                        <svg className="w-6 h-6 text-black drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21 3L3 10.53v.98l6.84 3.48 3.48 6.84h.98L21 3z" />
                                        </svg>
                                        <div className="bg-black text-[10px] text-white font-black px-3 py-1 rounded-full -mt-2 tracking-widest shadow-xl">
                                            AMANDA
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
