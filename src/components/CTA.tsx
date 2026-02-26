import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    return (
        <section className="py-24 bg-background px-4 relative flex justify-center items-center">
            {/* Background Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute top-1/2 left-10 -translate-y-1/2 w-24 h-24 bg-white shadow-2xl rounded-3xl flex items-center justify-center -rotate-12 border border-gray-100"
                >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-300 font-semibold">A</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute top-1/2 right-10 -translate-y-1/2 w-24 h-24 bg-white shadow-2xl rounded-3xl flex items-center justify-center rotate-12 border border-gray-100"
                >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* Main CTA Box */}
            <div className="w-full max-w-6xl bg-[#f0f0f0] p-4 md:p-8 rounded-[48px] border border-gray-100">
                <div className="bg-gradient-to-br from-[#A3D8F4] to-[#4A96CB] p-12 md:p-20 rounded-[32px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Background Circles Decoration */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-white/10 rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[30px] border-white/10 rounded-full" />
                    </div>

                    {/* Left Content */}
                    <div className="relative z-10 text-white max-w-xl text-center lg:text-left">
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-80 mb-6 block">
                            Let's build something great
                        </span>
                        <h2 className="text-5xl md:text-8xl font-semibold leading-[1] mb-12 tracking-tighter">
                            Ready to start<br />your next project?
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:bg-black transition-colors"
                        >
                            Get started
                        </motion.button>
                    </div>

                    {/* Right Booking Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="relative z-10 bg-white/95 backdrop-blur-sm p-8 rounded-[32px] shadow-2xl max-w-sm w-full"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                            <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                                Available for project
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mb-8">
                            <img
                                src="https://i.pravatar.cc/150?u=olivia"
                                alt="Olivia"
                                className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                            />
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-semibold -ml-4 border-2 border-white shadow-sm">
                                You
                            </div>
                            <span className="text-gray-300 ml-2">+</span>
                        </div>

                        <h3 className="text-2xl font-semibold text-secondary mb-2">
                            Quick 15-minute call
                        </h3>
                        <p className="text-gray-400 font-medium mb-8">
                            Pick a time that works for you.
                        </p>

                        <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:bg-[#3d7da8] transition-colors">
                            Book a free call
                        </button>

                        {/* Floating Cursor/Label Decoration */}
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 transform">
                            <div className="bg-black text-white text-[10px] font-semibold px-3 py-1 rounded-full relative">
                                AMANDA
                                <svg className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 3L3 10.53v.98l6.84 3.48 3.48 6.84h.98L21 3z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
