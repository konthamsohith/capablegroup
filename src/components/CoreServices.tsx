import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Pillar {
    number: string;
    title: string;
    description: string;
    bullets: { color: string; text: string }[];
    cta: string;
    ctaHint: string;
    icon: React.ReactNode;
}

const pillars: Pillar[] = [
    {
        number: '01',
        title: 'AI-Powered Web & Product Development',
        description:
            'We build websites, web applications, and digital products using AI-assisted development workflows. Delivery is faster. Architecture is more considered. Outcomes are more durable.',
        bullets: [
            { color: '#ff6321', text: 'AI-assisted delivery workflows' },
            { color: '#ff8c56', text: 'Headless & API-first architecture' },
            { color: '#060612', text: 'LLM-integrated product features' },
        ],
        cta: 'Explore Service',
        ctaHint: 'Web & AI',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="5 9 2 12 5 15" />
                <polyline points="19 9 22 12 19 15" />
                <line x1="2" y1="12" x2="22" y2="12" opacity="0.4" />
                <line x1="8" y1="6" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="18" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Technology Strategy & Digital Transformation',
        description:
            'Our senior consultants work with leadership teams to assess existing digital infrastructure, define technology roadmaps, and oversee transformation programmes from scoping through to delivery.',
        bullets: [
            { color: '#ff6321', text: 'Infrastructure assessment & audit' },
            { color: '#ff8c56', text: 'Technology roadmap definition' },
            { color: '#060612', text: 'End-to-end programme oversight' },
        ],
        cta: 'Explore Service',
        ctaHint: 'Strategy',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Staffing & Embedded Talent',
        description:
            'We place vetted technology professionals — developers, engineers, product managers — with organisations in India and the United States, on contract, project, and full-time engagement models.',
        bullets: [
            { color: '#ff6321', text: 'Vetted senior tech professionals' },
            { color: '#ff8c56', text: 'India & US staffing practice' },
            { color: '#060612', text: 'Contract, project & full-time models' },
        ],
        cta: 'Explore Service',
        ctaHint: 'Talent',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
];

/* ── Arrow icon ─────────────────────────────────────────── */
const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

/* ── Card ───────────────────────────────────────────────── */
const PillarCard: React.FC<{ pillar: Pillar; index: number }> = ({ pillar, index }) => {
    const [hovered, setHovered] = useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setTilt({ x: -dy * 10, y: dx * 10 });
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
            }}
            transition={{
                opacity: { duration: 0.55, ease: 'easeOut', delay: index * 0.1 },
                y: { duration: 0.55, ease: 'easeOut', delay: index * 0.1 },
                rotateX: { type: 'spring', stiffness: 300, damping: 25 },
                rotateY: { type: 'spring', stiffness: 300, damping: 25 },
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: 800,
                background: hovered
                    ? 'linear-gradient(145deg, #ffffff 0%, #fff8f5 100%)'
                    : 'linear-gradient(145deg, #ffffff 0%, #fdf9f7 100%)',
                border: hovered ? '1px solid rgba(255,99,33,0.25)' : '1px solid rgba(6,6,18,0.07)',
                boxShadow: hovered
                    ? '0 24px 60px rgba(255,99,33,0.12), 0 4px 12px rgba(6,6,18,0.06)'
                    : '0 2px 12px rgba(6,6,18,0.05)',
                transition: 'border 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                minHeight: '420px',
            }}
            className="relative flex flex-col justify-between rounded-[24px] p-7 md:p-8 overflow-hidden cursor-default"
        >
            {/* Orange top-edge accent line on hover */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[24px] transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(90deg, transparent, #ff6321, transparent)',
                    opacity: hovered ? 1 : 0,
                }}
            />

            {/* Top Row: number pill + arrow */}
            <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-2">
                    <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                            background: 'rgba(255,99,33,0.08)',
                            color: '#ff6321',
                            border: '1px solid rgba(255,99,33,0.15)',
                        }}
                    >
                        {pillar.number}
                    </span>
                    <span className="text-[#69686e] text-[10px] font-medium tracking-wider uppercase">{pillar.ctaHint}</span>
                </div>

                <motion.div
                    animate={{ rotate: hovered ? 0 : -45 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                        background: hovered ? '#ff6321' : 'rgba(6,6,18,0.05)',
                        border: hovered ? '1px solid #ff6321' : '1px solid rgba(6,6,18,0.08)',
                        color: hovered ? '#ffffff' : '#060612',
                        transition: 'background 0.3s ease, color 0.3s ease, border 0.3s ease',
                    }}
                >
                    <ArrowIcon />
                </motion.div>
            </div>

            {/* Icon */}
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                    background: hovered ? 'rgba(255,99,33,0.08)' : 'rgba(6,6,18,0.04)',
                    border: hovered ? '1px solid rgba(255,99,33,0.2)' : '1px solid rgba(6,6,18,0.07)',
                    color: hovered ? '#ff6321' : '#69686e',
                }}
            >
                {pillar.icon}
            </div>

            {/* Title */}
            <h3 className="text-[#060612] text-[19px] font-bold leading-snug tracking-tight mb-3" style={{ fontFamily: 'Geist, sans-serif' }}>
                {pillar.title}
            </h3>

            {/* Description */}
            <p className="text-[#69686e] text-[13.5px] leading-relaxed mb-7" style={{ fontFamily: 'Geist, sans-serif' }}>
                {pillar.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-8">
                {pillar.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                        <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: b.color, boxShadow: `0 0 5px ${b.color}60` }}
                        />
                        <span className="text-[#060612] text-[13px] font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>{b.text}</span>
                    </li>
                ))}
            </ul>

            {/* Bottom: hint + CTA */}
            <div className="flex items-center justify-between mt-auto pt-5" style={{ borderTop: '1px solid rgba(6,6,18,0.07)' }}>
                <span className="text-[#69686e] text-[11px] font-medium tracking-wider">Click to explore</span>
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-[13px] font-bold px-5 py-2.5 rounded-xl tracking-tight transition-all duration-200"
                    style={{ background: 'rgba(6,6,18,0.05)', border: '1px solid rgba(6,6,18,0.10)', color: '#060612' }}
                    onMouseEnter={e => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.background = '#ff6321';
                        btn.style.color = '#ffffff';
                        btn.style.border = '1px solid #ff6321';
                    }}
                    onMouseLeave={e => {
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.background = 'rgba(6,6,18,0.05)';
                        btn.style.color = '#060612';
                        btn.style.border = '1px solid rgba(6,6,18,0.10)';
                    }}
                >
                    {pillar.cta}
                </motion.button>
            </div>
        </motion.div>
    );
};

/* ── Section ────────────────────────────────────────────── */
const CoreServices: React.FC = () => {
    return (
        <section id="core-services" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mb-14"
                >
                    <span className="section-tag mb-4 inline-block">CORE SERVICES</span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#060612] tracking-tighter leading-tight max-w-xl"
                            style={{ fontFamily: 'Geist, sans-serif' }}
                        >
                            Three pillars of{' '}
                            <span className="italic text-[#ff6321]">expert delivery</span>
                        </h2>
                        <p className="text-[#69686e] text-[14px] leading-relaxed max-w-xs md:text-right">
                            From AI-powered product builds to strategic transformation and embedded talent — we cover every dimension of enterprise technology.
                        </p>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pillars.map((pillar, i) => (
                        <PillarCard key={i} pillar={pillar} index={i} />
                    ))}
                </div>

                {/* Footer strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-1"
                >
                    <p className="text-[#69686e] text-[13px]">
                        16+ years of enterprise technology delivery across four continents.
                    </p>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[13px] font-bold text-[#060612] flex items-center gap-2 hover:text-[#ff6321] transition-colors"
                    >
                        View full service portfolio
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default CoreServices;
