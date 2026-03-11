import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="pt-8 pb-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Outer Rounded Container */}
                <div className="p-2 md:p-3 rounded-[40px] border border-gray-100 bg-gray-50/50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FFB75E] to-[#FF8C37] p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12"
                    >
                        {/* Decorative Background Rings */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] border-[1px] border-orange-900/20 rounded-full" />
                            <div className="absolute bottom-[-30%] left-[20%] w-[400px] h-[400px] border-[1px] border-orange-900/20 rounded-full" />
                            <div className="absolute top-[20%] left-[40%] w-[180px] h-[180px] border-[1px] border-orange-900/15 rounded-full" />
                        </div>

                        {/* Left Content */}
                        <div className="relative z-10 lg:w-1/2 text-left">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-orange-900/60 uppercase mb-6 block font-sans">
                                LET'S BUILD SOMETHING GREAT
                            </span>
                            <h2 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-geist font-medium text-[#0A0A0A] tracking-tighter mb-12 leading-[1] max-w-xl">
                                Ready to start <br className="hidden md:block" />
                                your next project?
                            </h2>
                            <a href="/contact" className="bg-[#080808] text-white px-10 py-4 rounded-xl font-bold text-sm tracking-tight hover:scale-105 transition-transform inline-block cursor-pointer">
                                Get started
                            </a>
                        </div>

                        {/* Right Content - The Floating Card */}
                        <div className="relative lg:w-auto w-full max-w-sm">
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative border border-white/50"
                            >
                                {/* Available Tag */}
                                <div className="flex items-center gap-2 mb-8 bg-gray-50/50 w-fit px-3 py-1.5 rounded-full border border-gray-100">
                                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <span className="text-[9px] font-bold tracking-[0.1em] text-gray-500 uppercase">
                                        AVAILABLE FOR PROJECT
                                    </span>
                                </div>

                                {/* Avatars */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full border-[2px] border-white shadow-md overflow-hidden bg-gray-200">
                                            <img
                                                src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=150&auto=format&fit=crop"
                                                alt="Lead Expert"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="mx-2 text-gray-300 font-medium">+</div>
                                        <div className="w-11 h-11 rounded-full border-[2px] border-white shadow-md bg-black flex items-center justify-center text-white text-[10px] font-bold">
                                            You
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-[22px] font-bold text-secondary mb-1.5 tracking-tight leading-none">
                                    Quick 15-minute call
                                </h3>
                                <p className="text-gray-400 font-medium text-[14px] mb-8">
                                    Pick a time that works for you.
                                </p>

                                <a href="/contact" className="w-full bg-[#FF6321] text-white py-4 rounded-xl font-bold tracking-tight hover:scale-[1.02] transition-transform shadow-lg shadow-orange-500/10 inline-block text-center cursor-pointer">
                                    Book a free call
                                </a>

                                {/* Fixed Label (Amanda) */}
                                <motion.div
                                    animate={{
                                        x: [0, 4, 0],
                                        y: [0, -4, 0]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-2 top-[45%] z-20 pointer-events-none hidden xl:block"
                                >
                                    <div className="relative">
                                        <svg
                                            className="w-6 h-6 text-[#080808] drop-shadow-sm -rotate-[15deg]"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            style={{ transform: 'translate(-8px, -8px)' }}
                                        >
                                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                        </svg>
                                        <div className="absolute left-2 top-2 bg-[#080808] text-[11px] text-white font-bold px-4 py-2 rounded-[14px] shadow-2xl whitespace-nowrap">
                                            CHRIS
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
