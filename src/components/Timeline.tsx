import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface Milestone {
    year: string;
    era: string;
    headline: string;
    body: string[];
    metric?: { value: string; label: string };
    accent: string;
    accentLight: string;
    icon: React.ReactNode;
}

const milestones: Milestone[] = [
    {
        year: '2010',
        era: 'FOUNDATION',
        headline: 'Born in Hyderabad',
        body: [
            '5-person core team. A single promise.',
            'Website design & digital marketing.',
            'First clients in the Hyderabad metro area.',
            'Founding principle: quality technology for every organisation.',
        ],
        metric: { value: '5', label: 'Founding Team' },
        accent: '#ff6321',
        accentLight: 'rgba(255,99,33,0.08)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        year: '2012',
        era: 'EARLY GROWTH',
        headline: 'First Steps Outward',
        body: [
            'Team doubles to 10 professionals.',
            'Mobile app development added to portfolio.',
            'First client engagement outside India.',
            'E-commerce development services launched.',
        ],
        metric: { value: '10+', label: 'Projects Delivered' },
        accent: '#e05a18',
        accentLight: 'rgba(224,90,24,0.07)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
            </svg>
        ),
    },
    {
        year: '2014',
        era: 'SCALING THE PRACTICE',
        headline: 'Enterprise Clients. US Office.',
        body: [
            '25+ professionals. 40+ projects delivered.',
            'US IT Staffing division established.',
            'New office at Gachibowli — the heart of Hyderabad tech.',
            'First sustained enterprise-scale engagements.',
        ],
        metric: { value: '40+', label: 'Projects Delivered' },
        accent: '#c94f12',
        accentLight: 'rgba(201,79,18,0.07)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        year: '2016',
        era: 'INTERNATIONAL PRESENCE',
        headline: '3 Continents. 100+ Projects.',
        body: [
            'Active clients in India, USA, and the Middle East.',
            '100+ projects in the portfolio.',
            'Team grows to 40+ professionals.',
            'First contract with a multinational organisation.',
        ],
        metric: { value: '100+', label: 'Projects Delivered' },
        accent: '#b84410',
        accentLight: 'rgba(184,68,16,0.07)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
        ),
    },
    {
        year: '2018',
        era: 'AT SCALE',
        headline: 'Full-Stack. Fully Matured.',
        body: [
            '150+ projects delivered. 50+ team members.',
            'Technology strategy consulting formalised.',
            'First SaaS product development completed.',
            'US IT Staffing: 3+ active enterprise accounts.',
        ],
        metric: { value: '150+', label: 'Projects Delivered' },
        accent: '#ff6321',
        accentLight: 'rgba(255,99,33,0.08)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        year: '2020',
        era: 'ORGANISATIONAL RESILIENCE',
        headline: 'Every Project. On Schedule.',
        body: [
            'Distributed delivery model adopted.',
            '20+ projects completed during COVID-19 — all on time.',
            'Digital transformation consulting demand surges.',
            'Team: 60+ professionals.',
        ],
        metric: { value: '20+', label: 'Delivered in Crisis' },
        accent: '#e05a18',
        accentLight: 'rgba(224,90,24,0.07)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        year: '2022',
        era: 'AI INVESTMENT BEGINS',
        headline: 'A Deliberate Strategic Bet.',
        body: [
            'Strategic decision to invest in AI-assisted development.',
            'First AI-integrated products delivered.',
            'R&D practice focused on AI-web integration established.',
            '200+ projects. 70+ team members.',
        ],
        metric: { value: '200+', label: 'Projects Delivered' },
        accent: '#c94f12',
        accentLight: 'rgba(201,79,18,0.07)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" opacity="0.3" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" />
            </svg>
        ),
    },
    {
        year: '2024',
        era: 'AI PRODUCTS GO LIVE',
        headline: 'Three Products. One Vision.',
        body: [
            'SocialFlyAI — AI social media platform (socialflyai.com)',
            'SocialScale Agency — digital agency presence (socialscale.agency)',
            'Atyuttama — brand digital identity (atyuttama.com)',
            '250+ projects. 80+ team members. Worldwide.',
        ],
        metric: { value: '250+', label: 'Projects Delivered' },
        accent: '#b84410',
        accentLight: 'rgba(184,68,16,0.07)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
            </svg>
        ),
    },
    {
        year: '2026',
        era: 'THE AI-FIRST ORGANISATION',
        headline: 'Trusted for 16 Years. Built for What\'s Next.',
        body: [
            'Formally repositioned as an AI-first technology consultancy.',
            'New website. Revised service architecture.',
            'Formalised AI delivery methodology.',
            '16+ years of institutional knowledge at AI speed.',
        ],
        metric: { value: 'AI-First', label: 'Since 2026' },
        accent: '#ff6321',
        accentLight: 'rgba(255,99,33,0.12)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /><polygon points="12 6 14.09 10.26 18.5 10.91 15.25 14.07 16.09 18.49 12 16.25 7.91 18.49 8.75 14.07 5.5 10.91 9.91 10.26 12 6" fill="currentColor" />
            </svg>
        ),
    },
];

/* ── Individual Card ────────────────────────────────────── */
const TimelineCard: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const isRight = index % 2 === 0;

    return (
        <div ref={ref} className="relative flex items-start gap-0 group">
            {/* ── Desktop Layout ── */}
            <div className="hidden md:grid w-full" style={{ gridTemplateColumns: '1fr 60px 1fr' }}>

                {/* Left Side */}
                <div className={`pr-8 ${isRight ? 'flex flex-col items-end text-right' : 'flex flex-col items-start text-left opacity-0 pointer-events-none'}`}>
                    {isRight && (
                        <motion.div
                            initial={{ opacity: 0, x: -32 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                            className="w-full max-w-[420px]"
                        >
                            <CardContent milestone={milestone} align="right" />
                        </motion.div>
                    )}
                </div>

                {/* Center Track + Node */}
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, ease: 'backOut', delay: 0 }}
                        className="relative flex-shrink-0 z-10"
                        style={{ marginTop: '28px' }}
                    >
                        {/* Outer pulse ring */}
                        <motion.div
                            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: milestone.accent }}
                        />
                        {/* Node */}
                        <div
                            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shadow-lg relative z-10"
                            style={{ backgroundColor: milestone.accent, color: 'white' }}
                        >
                            {milestone.icon}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side */}
                <div className={`pl-8 ${!isRight ? 'flex flex-col items-start text-left' : 'flex flex-col items-end text-right opacity-0 pointer-events-none'}`}>
                    {!isRight && (
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                            className="w-full max-w-[420px]"
                        >
                            <CardContent milestone={milestone} align="left" />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* ── Mobile Layout ── */}
            <div className="flex md:hidden w-full gap-4">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, ease: 'backOut' }}
                        className="relative flex-shrink-0 z-10 mt-1"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: milestone.accent }}
                        />
                        <div
                            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-lg relative z-10"
                            style={{ backgroundColor: milestone.accent, color: 'white' }}
                        >
                            {milestone.icon}
                        </div>
                    </motion.div>
                    {/* connector line placeholder */}
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                    className="flex-1 pb-8"
                >
                    <CardContent milestone={milestone} align="left" />
                </motion.div>
            </div>
        </div>
    );
};

/* ── Card Content ────────────────────────────────────────── */
const CardContent: React.FC<{ milestone: Milestone; align: 'left' | 'right' }> = ({ milestone, align }) => {
    return (
        <div
            className="rounded-2xl p-6 border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-opacity-60"
            style={{ borderColor: `${milestone.accent}22` }}
        >
            {/* Era Tag */}
            <div className={`flex items-center gap-2 mb-3 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
                <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: milestone.accentLight, color: milestone.accent }}
                >
                    {milestone.era}
                </span>
            </div>

            {/* Year + Headline */}
            <div className={`mb-4 ${align === 'right' ? 'text-right' : 'text-left'}`}>
                <span
                    className="text-[56px] font-bold leading-none block mb-1 tracking-tighter"
                    style={{ color: `${milestone.accent}18`, fontFamily: 'Geist, sans-serif' }}
                >
                    {milestone.year}
                </span>
                <h3
                    className="text-[17px] font-bold text-[#060612] leading-snug -mt-6 relative z-10"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                >
                    {milestone.headline}
                </h3>
            </div>

            {/* Body */}
            <ul className={`space-y-1.5 mb-5 ${align === 'right' ? 'text-right' : 'text-left'}`}>
                {milestone.body.map((line, i) => (
                    <li key={i} className="text-[13px] text-[#69686e] leading-relaxed flex items-start gap-2" style={{ flexDirection: align === 'right' ? 'row-reverse' : 'row' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: milestone.accent }} />
                        <span>{line}</span>
                    </li>
                ))}
            </ul>

            {/* Metric Badge */}
            {milestone.metric && (
                <div className={`flex ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <div
                        className="inline-flex items-baseline gap-1.5 px-3 py-2 rounded-xl border"
                        style={{ backgroundColor: milestone.accentLight, borderColor: `${milestone.accent}30` }}
                    >
                        <span className="text-[22px] font-bold tracking-tight" style={{ color: milestone.accent, fontFamily: 'Geist, sans-serif' }}>
                            {milestone.metric.value}
                        </span>
                        <span className="text-[11px] font-medium text-[#69686e] uppercase tracking-wide">
                            {milestone.metric.label}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

/* ── Scroll Progress Track ───────────────────────────────── */
const ProgressTrack: React.FC<{ containerRef: React.RefObject<HTMLDivElement> }> = ({ containerRef }) => {
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.2'] });
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-100 z-0">
            <motion.div
                className="w-full bg-gradient-to-b from-[#ff6321] via-[#e05a18] to-[#ff6321] origin-top rounded-full"
                style={{ scaleY, height: '100%' }}
            />
        </div>
    );
};

/* ── Mobile Progress Track ───────────────────────────────── */
const MobileTrack: React.FC = () => (
    <div className="block md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-gray-100 z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#ff6321] to-transparent opacity-30" />
    </div>
);

/* ── Main Export ─────────────────────────────────────────── */
const Timeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="timeline" className="relative py-24 overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#ff6321]/4 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#060612]/4 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-20"
                >
                    <span className="section-tag mb-4 inline-block">OUR JOURNEY</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#060612] tracking-tighter mb-4"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                    >
                        Sixteen Years of{' '}
                        <span className="italic" style={{ color: '#ff6321' }}>Measured Growth</span>
                    </h2>
                    <p className="text-[#69686e] text-base max-w-xl mx-auto leading-relaxed">
                        From a 5-person team in Hyderabad to an AI-first consultancy serving clients worldwide.
                        Every milestone, earned.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative">
                    <ProgressTrack containerRef={containerRef as React.RefObject<HTMLDivElement>} />
                    <MobileTrack />

                    {/* Spacing node: top cap */}
                    <div className="hidden md:block h-6" />

                    <div className="relative space-y-12 md:space-y-16">
                        {milestones.map((milestone, index) => (
                            <TimelineCard key={milestone.year} milestone={milestone} index={index} />
                        ))}
                    </div>

                    {/* Bottom cap */}
                    <div className="hidden md:block h-6" />
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#060612] text-white text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#ff6321] animate-pulse" />
                        <span>16+ years of trust. The next chapter starts now.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
