import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Menu } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDissolved, setIsDissolved] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const lenis = useLenis();
    const navigate = useNavigate();
    const location = useLocation();

    const { scrollY } = useScroll();
    const smoothY = useSpring(scrollY, { stiffness: 80, damping: 20, mass: 1 });

    const navScale = useTransform(smoothY, [0, 100], [1, 0.98]);
    const navWidth = useTransform(smoothY, [0, 150], ['100%', typeof window !== 'undefined' && window.innerWidth >= 1024 ? '78%' : '90%']);
    const navTop = useTransform(smoothY, [0, 150], [0, 24]);
    const navRadius = useTransform(smoothY, [0, 150], [0, 16]);
    const navShadowOpacity = useTransform(smoothY, [0, 150], [0, 0.05]);

    // Smooth, continuously variable padding
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
    const paddingX = useTransform(smoothY, [0, 150], [isDesktop ? '10vw' : '4vw', isDesktop ? '2vw' : '4vw']);
    const bgOpacity = useTransform(smoothY, [0, 100], [1, 0.75]);
    const borderOpacity = useTransform(smoothY, [0, 100], [0, 0.2]);
    const navBg = useTransform(bgOpacity, (o) => `rgba(255,255,255,${o})`);
    const navBorder = useTransform(borderOpacity, (o) => `rgba(255,255,255,${o})`);
    const blurAmount = useTransform(smoothY, [0, 100], [0, 16]);
    const backdropBlur = useTransform(blurAmount, (b) => `blur(${b}px)`);

    useEffect(() => {
        // Detector for Timeline section to dissolve navbar
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsDissolved(entry.isIntersecting);
            },
            {
                threshold: [0, 0.01, 0.1],
                rootMargin: "0px"
            }
        );

        const timelineSection = document.getElementById('timeline');
        if (timelineSection) observer.observe(timelineSection);

        return () => {
            if (timelineSection) observer.unobserve(timelineSection);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', isPage: true },
        { name: 'Services', href: '#services', isPage: false },
        { name: 'About Us', href: '/about-us', isPage: true },
        { name: 'Technologies', href: '/technology', isPage: true },
        { name: 'Projects', href: '/projects', isPage: true },
        { name: 'Blogs', href: '/blogs', isPage: true },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string, href: string, isPage?: boolean }) => {
        e.preventDefault();
        if (link.isPage) {
            if (location.pathname === link.href) {
                if (lenis) {
                    lenis.scrollTo(0, { duration: 1.5 });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                navigate(link.href);
            }
        } else {
            const targetId = link.href.replace('#', '');
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element && lenis) {
                        lenis.scrollTo(element, { offset: -100, duration: 1.5 });
                    }
                }, 100);
            } else {
                const element = document.getElementById(targetId);
                if (element && lenis) {
                    lenis.scrollTo(element, { offset: -100, duration: 1.5 });
                }
            }
        }
        setIsOpen(false);
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -24 }}
            animate={{
                opacity: isDissolved ? 0 : 1,
                y: isDissolved ? -32 : 0,
                filter: isDissolved ? "blur(12px)" : "blur(0px)",
                scale: isDissolved ? 0.96 : 1,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Quintic ease for premium feel
            }}
            className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
        >
            <motion.div
                style={{
                    paddingTop: navTop,
                    width: navWidth,
                    margin: '0 auto'
                }}
                className="flex justify-center"
            >
                <motion.div
                    style={{
                        scale: navScale,
                        borderRadius: navRadius,
                        boxShadow: useTransform(navShadowOpacity, (opacity) => `0 20px 50px rgba(0,0,0,${opacity})`),
                        paddingLeft: paddingX,
                        paddingRight: paddingX,
                        backgroundColor: navBg,
                        borderColor: navBorder,
                        backdropFilter: backdropBlur,
                        WebkitBackdropFilter: backdropBlur,
                    }}
                    className="
                        pointer-events-auto
                        flex items-center justify-between
                        w-full
                        capable-nav
                        h-[72px]
                        will-change-transform
                    "
                >
                    {/* Segment 1: Brand (Left) */}
                    <div className="flex-1 flex justify-start">
                        <motion.div
                            onClick={() => {
                                if (location.pathname === '/') {
                                    if (lenis) lenis.scrollTo(0, { duration: 1.5 });
                                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    navigate('/');
                                }
                            }}
                            className="flex items-center gap-3 cursor-pointer group px-4 py-2"
                        >
                            <div className="relative">
                                <img
                                    src="/capablelogo.png"
                                    alt="Capable Groups Logo"
                                    width="40"
                                    height="40"
                                    className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="font-bold text-[18px] sm:text-[20px] tracking-tight text-secondary">Capable</span>
                                <span className="font-bold text-[18px] sm:text-[20px] tracking-tight text-secondary">Groups</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Segment 2: Nav (Center) */}
                    <div className="hidden lg:flex flex-none items-center bg-black/[0.03] rounded-full p-1 border border-black/5">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <div
                                    key={link.name}
                                    className="relative px-5 py-2.5 rounded-full cursor-pointer transition-all"
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    {/* Link Background Pill */}
                                    {(hoveredLink === link.name || isActive) && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white rounded-full shadow-sm z-0"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className={`
                                            relative z-10 text-[13px] font-bold tracking-tight transition-colors duration-300
                                            ${isActive ? 'text-primary' : 'text-secondary/50 hover:text-secondary'}
                                        `}
                                    >
                                        {link.name}
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                    {/* Segment 3: Actions (Right) */}
                    <div className="flex-1 flex justify-end items-center gap-3">
                        <motion.button
                            onClick={() => {
                                if (location.pathname === '/contact') {
                                    if (lenis) lenis.scrollTo(0, { duration: 1.5 });
                                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    navigate('/contact');
                                }
                            }}
                            className="bg-secondary text-white px-6 py-3 rounded-2xl font-bold text-xs tracking-wider uppercase hover:bg-primary transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-primary/40"
                        >
                            Contact Us
                        </motion.button>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 hover:bg-gray-100/50 rounded-xl lg:hidden transition-colors"
                            aria-label="Open mobile menu"
                        >
                            <Menu className="w-6 h-6 text-gray-900" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-x-4 top-24 bg-white/95 backdrop-blur-3xl rounded-[32px] p-8 shadow-2xl border border-white/20 lg:hidden pointer-events-auto z-[101]"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`text-xl font-bold ${location.pathname === link.href ? 'text-primary' : 'text-secondary'}`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <div className="h-px bg-black/5 w-full my-2" />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {[{ Icon: Facebook, label: "Facebook" }, { Icon: Instagram, label: "Instagram" }, { Icon: Linkedin, label: "LinkedIn" }, { Icon: Twitter, label: "Twitter" }].map(({ Icon, label }, i) => (
                                        <motion.a
                                            key={i}
                                            whileHover={{ y: -2 }}
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-secondary"
                                            aria-label={`Follow us on ${label}`}
                                            title={`Follow us on ${label}`}
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    ))}
                                </div>
                                <span className="text-secondary/40 text-sm font-bold pt-1">© 2026</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
