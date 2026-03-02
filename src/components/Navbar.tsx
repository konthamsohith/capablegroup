import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/', isPage: true },
        { name: 'About Us', href: '/about-us', isPage: true },
        { name: 'Services', href: '#services', isPage: false },
        { name: 'Blog', href: '#blog', isPage: false },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string, href: string, isPage?: boolean }) => {
        e.preventDefault();

        if (link.isPage) {
            navigate(link.href);
            window.scrollTo(0, 0);
        } else {
            // If we are not on the home page and trying to click an anchor, navigate home first
            if (location.pathname !== '/') {
                navigate('/');
                // Small delay to allow home to render before scrolling
                setTimeout(() => {
                    const element = document.getElementById(link.href.replace('#', ''));
                    if (element && lenis) {
                        lenis.scrollTo(element, { offset: -100, duration: 2 });
                    }
                }, 100);
            } else {
                const element = document.getElementById(link.href.replace('#', ''));
                if (element && lenis) {
                    lenis.scrollTo(element, { offset: -100, duration: 2 });
                }
            }
        }
        setIsOpen(false);
    };

    return (
        <header className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4">
            <div className="relative w-full max-w-7xl flex justify-center">
                <div className="relative">
                    <nav className="capable-nav rounded-2xl transition-all duration-500 flex items-center h-[64px] overflow-hidden relative z-[101]">
                        {/* Logo Part */}
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                if (location.pathname !== '/') {
                                    navigate('/');
                                    window.scrollTo(0, 0);
                                } else {
                                    lenis?.scrollTo(0);
                                }
                            }}
                            className="flex items-center gap-3 px-6 h-full cursor-pointer hover:bg-gray-50/50 transition-colors"
                        >
                            <img
                                src="/capablelogo.png"
                                alt="Logo"
                                className="w-8 h-8 object-contain"
                            />
                            <span className="font-bold text-xl tracking-tight text-[#060612]">Capable Groups</span>
                        </div>

                        <div className="nav-divider"></div>

                        {/* Middle Segment - Desktop Links / Mobile Menu Button */}
                        <div className="flex items-center h-full">
                            {/* Desktop Links */}
                            <div className="hidden lg:flex items-center h-full">
                                {navLinks.map((link, i) => (
                                    <React.Fragment key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link)}
                                            className="px-6 h-full flex items-center text-[14px] font-bold text-secondary/70 hover:text-primary transition-colors hover:bg-gray-50/50"
                                        >
                                            {link.name}
                                        </a>
                                        {i < navLinks.length - 1 && <div className="nav-divider !h-6 opacity-30"></div>}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Mobile/Tablet Menu Button */}
                            <div className="flex lg:hidden items-center justify-center px-6 h-full border-l border-gray-100/50 lg:border-none">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="group flex flex-col gap-1.5 items-center justify-center w-10 h-10 hover:bg-gray-50 rounded-xl transition-all"
                                >
                                    <div className={`w-6 h-0.5 bg-secondary rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                                    <div className={`w-6 h-0.5 bg-secondary rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                                    <div className={`w-6 h-0.5 bg-secondary rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                                </button>
                            </div>
                        </div>

                        <div className="nav-divider"></div>

                        {/* CTA Section */}
                        <div className="flex items-center px-8 h-full hover:bg-gray-50/50 transition-colors">
                            <button
                                onClick={() => lenis?.scrollTo('#contact', { offset: -100 })}
                                className="bg-[#ff6321] text-white px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-all font-bold text-sm tracking-tight shadow-lg shadow-primary/10"
                            >
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
                                className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-3xl capable-nav z-[100] overflow-hidden p-2"
                            >
                                <div className="flex flex-col overflow-hidden">
                                    {navLinks.map((link, i) => (
                                        <React.Fragment key={link.name}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleNavClick(e, link)}
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
