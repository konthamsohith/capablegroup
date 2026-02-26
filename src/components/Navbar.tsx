import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-100/50 overflow-hidden">
            {/* Animated Background Content */}
            <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: [-100, 100],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute -left-20 top-0 w-64 h-full bg-[#4A96CB] blur-[60px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [100, -100],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute -right-20 top-0 w-80 h-full bg-[#A3D8F4] blur-[80px] rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img src="/capblelogo.png" alt="Logo" className="h-8 w-auto" />
                        <img src="/logo.png" alt="Capable Groups" className="h-10 w-auto" />
                    </div>

                    <div className="hidden md:flex items-center space-x-12">
                        <a href="#home" className="text-secondary/70 hover:text-primary transition-colors font-semibold text-[15px]">Home</a>
                        <a href="#about" className="text-secondary/70 hover:text-primary transition-colors font-semibold text-[15px]">About Us</a>
                        <a href="#clients" className="text-secondary/70 hover:text-primary transition-colors font-semibold text-[15px]">Clients</a>
                        <a href="#technologies" className="text-secondary/70 hover:text-primary transition-colors font-semibold text-[15px]">Technologies</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <div className="h-6 w-px bg-gray-200"></div>
                        <button className="bg-secondary text-white px-6 py-2.5 rounded-lg hover:bg-black transition-all transform hover:-translate-y-0.5 hover:shadow-lg font-semibold text-sm">
                            Get started
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary hover:text-primary transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-4">
                            <a href="#home" className="block px-3 py-2 text-base font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-md">Home</a>
                            <a href="#about" className="block px-3 py-2 text-base font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-md">About Us</a>
                            <a href="#clients" className="block px-3 py-2 text-base font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-md">Clients</a>
                            <a href="#technologies" className="block px-3 py-2 text-base font-semibold text-secondary hover:text-primary hover:bg-gray-50 rounded-md">Technologies</a>
                            <div className="pt-4 border-t border-gray-100">
                                <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-black transition-all font-medium">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
