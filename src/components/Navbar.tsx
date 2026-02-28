import React, { useState } from 'react';
import { X, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Projects', href: '#services' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact Us', href: '#footer' },
    ];

    return (
        <header className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4">
            <div className="relative w-full max-w-7xl flex justify-center">
                <div className="relative">
                    <nav className="agnos-nav rounded-2xl transition-all duration-500 flex items-center h-[52px] overflow-hidden relative z-[101]">
                        {/* Logo Part */}
                        <div className="flex items-center gap-3 px-5 h-full cursor-pointer hover:bg-gray-50/50 transition-colors">
                            <img src="/capblelogo.png" alt="Logo" className="w-7 h-7 object-contain" />
                            <span className="font-bold text-lg tracking-tight text-[#060612]">CapableGroups</span>
                        </div>

                        <div className="nav-divider"></div>

                        {/* Menu Button */}
                        <div className="flex items-center px-6 h-full">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="group flex flex-col gap-1.5 items-center justify-center w-9 h-9 hover:bg-gray-50 rounded-xl transition-all"
                            >
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                        >
                                            <X size={18} className="text-gray-600" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            className="flex flex-col gap-1 items-center"
                                        >
                                            <div className="w-5 h-0.5 bg-gray-600"></div>
                                            <div className="w-5 h-0.5 bg-gray-600"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>

                        <div className="nav-divider"></div>

                        {/* CTA Section */}
                        <div className="flex items-center px-6 h-full">
                            <button className="bg-[#060612] text-white px-4 py-1.5 rounded-xl hover:bg-black transition-all font-medium text-sm shadow-sm">
                                Get started
                            </button>
                        </div>
                    </nav>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-3xl agnos-nav z-[100] overflow-hidden p-2"
                            >
                                <div className="flex flex-col overflow-hidden">
                                    {navLinks.map((link, i) => (
                                        <React.Fragment key={link.name}>
                                            <a
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`px-8 py-3.5 text-[18px] font-semibold transition-colors hover:bg-gray-50 ${i === 0 ? 'text-primary' : 'text-secondary'}`}
                                            >
                                                {link.name}
                                            </a>
                                            {i < navLinks.length - 1 && (
                                                <div className="mx-8 border-b border-gray-100/10 border-dashed border-t-0 h-px bg-[radial-gradient(circle,_rgba(229,231,235,1)_0%,_rgba(255,255,255,0)_100%)]"></div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                {/* Dropdown Footer */}
                                <div className="flex items-center justify-between px-8 py-4 mt-1 border-t border-gray-50 bg-gray-50/30">
                                    <div className="flex items-center gap-2">
                                        {[
                                            { Icon: Facebook, href: '#' },
                                            { Icon: Instagram, href: '#' },
                                            { Icon: Linkedin, href: '#' },
                                            { Icon: Twitter, href: '#' }
                                        ].map(({ Icon, href }, i) => (
                                            <a
                                                key={i}
                                                href={href}
                                                className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm"
                                            >
                                                <Icon size={14} />
                                            </a>
                                        ))}
                                    </div>
                                    <span className="text-gray-400 text-xs font-medium">© 2026 CapableGroups</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
