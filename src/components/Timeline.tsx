import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" opacity="0.3" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" />
            </svg>
        ),
    },
    {
        year: '2024',
        era: 'AI PRODUCTS GO LIVE',
        headline: 'Three Products. One Vision.',
        body: [
            'SocialFlyAI — AI social media platform',
            'SocialScale Agency — digital agency presence',
            'Atyuttama — brand digital identity',
            '250+ projects. 80+ team members.',
        ],
        metric: { value: '250+', label: 'Projects Delivered' },
        accent: '#b84410',
        accentLight: 'rgba(184,68,16,0.07)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
            </svg>
        ),
    },
    {
        year: '2026',
        era: 'THE DESTINATION',
        headline: 'The AI-First Organisation',
        body: [
            'Formally repositioned as an AI-first consultancy.',
            'New delivery architecture. AI-speed development.',
            'Formalised AI delivery methodology.',
            '16+ years of institutional knowledge, accelerated.',
        ],
        metric: { value: 'AI-First', label: 'Since 2026' },
        accent: '#ff6321',
        accentLight: 'rgba(255,99,33,0.12)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg >
        ),
    },
];

/* ── Individual Card ────────────────────────────────────── */
const TimelineCard: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isRight = index % 2 === 0;
    const isLast = index === milestones.length - 1;
    const bulgeRight = isRight;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.92', 'start 0.35'],
    });

    // Card slides in from its side and fades in as it scrolls up into view
    const leftX = useTransform(scrollYProgress, [0, 1], [-60, 0]);
    const rightX = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);
    const nodeScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);
    const nodeOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.7, 1]);
    const mobileX = useTransform(scrollYProgress, [0, 1], [40, 0]);

    return (
        <div ref={ref} className="relative flex items-start w-full group pb-12 md:pb-24">

            {/* ── Serpentine Map Path (Desktop) ── */}
            {!isLast && (
                <div className="hidden md:block absolute left-1/2 top-[56px] w-[240px] lg:w-[320px] -translate-x-1/2 pointer-events-none z-0" style={{ height: '100%' }}>
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
                        <motion.path
                            d={bulgeRight ? "M 50 0 C 140 25, 140 75, 50 100" : "M 50 0 C -40 25, -40 75, 50 100"}
                            fill="none"
                            stroke="#ff6321"
                            strokeWidth="3.5"
                            strokeDasharray="8 10"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            className="drop-shadow-sm"
                            animate={{ strokeDashoffset: [0, -36] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        />
                    </svg>
                </div>
            )}

            {/* ── Serpentine Map Path (Mobile) ── */}
            {!isLast && (
                <div className="md:hidden absolute left-[19px] top-[24px] w-[30px] pointer-events-none z-0" style={{ height: '100%' }}>
                    <svg width="100%" height="100%" viewBox="0 0 10 100" preserveAspectRatio="none" className="overflow-visible">
                        <motion.path
                            d={bulgeRight ? "M 5 0 C 40 30, -30 70, 5 100" : "M 5 0 C -30 30, 40 70, 5 100"}
                            fill="none"
                            stroke="#ff6321"
                            strokeWidth="2.5"
                            strokeDasharray="6 8"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            className="drop-shadow-sm"
                            animate={{ strokeDashoffset: [0, -28] }}
                            transition={{ duration: 1.0, repeat: Infinity, ease: 'linear' }}
                        />
                    </svg>
                </div>
            )}

            {/* ── Desktop Layout ── */}
            <div className="hidden md:grid w-full z-10" style={{ gridTemplateColumns: '1fr 60px 1fr' }}>
                {/* Left Side */}
                <div className={`pr-10 lg:pr-16 ${isRight ? 'flex flex-col items-end text-right' : 'flex flex-col items-start text-left opacity-0 pointer-events-none'}`}>
                    {isRight && (
                        <motion.div
                            style={{ x: leftX, opacity }}
                            className="w-full max-w-[420px]"
                        >
                            <CardContent milestone={milestone} align="right" />
                        </motion.div>
                    )}
                </div>

                {/* Center Map Node */}
                <div className="flex flex-col items-center">
                    <motion.div
                        style={{ scale: nodeScale, opacity: nodeOpacity }}
                        className="relative flex-shrink-0 z-10"
                    >
                        <div style={{ marginTop: '28px' }} className="relative">
                            {/* Map point outer dash ring */}
                            <div className="absolute -inset-2 rounded-full border border-dashed border-[#ff6321] opacity-40 animate-[spin_10s_linear_infinite]" />
                            {/* Node */}
                            <div
                                className="w-12 h-12 rounded-full border-4 flex items-center justify-center relative z-10 shadow-lg bg-white"
                                style={{ borderColor: milestone.accent, color: milestone.accent }}
                            >
                                {milestone.icon}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side */}
                <div className={`pl-10 lg:pl-16 ${!isRight ? 'flex flex-col items-start text-left' : 'flex flex-col items-end text-right opacity-0 pointer-events-none'}`}>
                    {!isRight && (
                        <motion.div
                            style={{ x: rightX, opacity }}
                            className="w-full max-w-[420px]"
                        >
                            <CardContent milestone={milestone} align="left" />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* ── Mobile Layout ── */}
            <div className="flex md:hidden w-full gap-5 z-10">
                <div className="flex flex-col items-center">
                    <motion.div
                        style={{ scale: nodeScale, opacity: nodeOpacity }}
                        className="relative flex-shrink-0 z-10 mt-1"
                    >
                        <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#ff6321] opacity-40 animate-[spin_10s_linear_infinite]" />
                        <div
                            className="w-10 h-10 rounded-full border-[3px] flex items-center justify-center relative z-10 shadow-md bg-white"
                            style={{ borderColor: milestone.accent, color: milestone.accent }}
                        >
                            <div className="scale-75 origin-center text-current">{milestone.icon}</div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    style={{ x: mobileX, opacity }}
                    className="flex-1"
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
            className="rounded-2xl p-5 md:p-6 bg-[#fdfdfc] shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-[#e5e5e5] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 relative z-10"
        >
            {/* Vintage edge decorative lines (map style) */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-dashed border-[#00000008] pointer-events-none rounded-xl" />

            {/* Era Tag */}
            <div className={`flex items-center gap-2 mb-4 relative z-10 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
                <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-md border"
                    style={{ backgroundColor: milestone.accentLight, color: milestone.accent, borderColor: `${milestone.accent}20` }}
                >
                    {milestone.era}
                </span>
            </div>

            {/* Year + Headline */}
            <div className={`mb-5 relative z-10 ${align === 'right' ? 'text-right' : 'text-left'}`}>
                <span
                    className="text-[48px] font-bold leading-none block mb-2 tracking-tighter"
                    style={{ color: `${milestone.accent}12`, fontFamily: 'Geist, sans-serif' }}
                >
                    {milestone.year}
                </span>
                <h3
                    className="text-[17px] font-bold text-[#000000] leading-snug -mt-5 relative z-10"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                >
                    {milestone.headline}
                </h3>
            </div>

            {/* Body */}
            <ul className={`space-y-1.5 mb-5 relative z-10 ${align === 'right' ? 'text-right' : 'text-left'}`}>
                {milestone.body.map((line, i) => (
                    <li key={i} className="text-[13px] text-[#69686e] leading-relaxed flex items-start gap-2.5" style={{ flexDirection: align === 'right' ? 'row-reverse' : 'row' }}>
                        <span className="mt-2 w-1 h-1 rounded flex-shrink-0" style={{ backgroundColor: milestone.accent }} />
                        <span>{line}</span>
                    </li>
                ))}
            </ul>

            {/* Metric Badge */}
            {milestone.metric && (
                <div className={`flex relative z-10 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <div
                        className="inline-flex flex-col gap-0.5 px-4 py-2 bg-white rounded-lg border border-[#e5e5e5]"
                    >
                        <span className="text-[20px] font-bold tracking-tight leading-none" style={{ color: milestone.accent, fontFamily: 'Geist, sans-serif' }}>
                            {milestone.metric.value}
                        </span>
                        <span className="text-[10px] font-bold text-[#69686e] uppercase tracking-[0.1em]">
                            {milestone.metric.label}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

/* ── Map Decorative Elements ─────────────────────────────── */
const MapDecorations: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft lighting */}
        <div className="absolute top-[15%] left-[-10%] w-[50vh] h-[50vh] bg-[#ff6321]/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vh] h-[50vh] bg-[#ff6321]/3 rounded-full blur-[100px]" />

        {/* Map Elements */}
        {/* Top Right Compass Rose suggestion */}
        <div className="absolute top-[8%] right-[5%] md:right-[15%] opacity-[0.03] transform rotate-12">
            <svg width="240" height="240" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#000" strokeWidth="0.5" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#000" strokeWidth="0.25" />
                <polygon points="50,15 54,46 50,50 46,46" fill="#000" stroke="none" />
                <polygon points="50,85 46,54 50,50 54,54" fill="#000" stroke="none" />
                <polygon points="85,50 54,54 50,50 54,46" fill="#000" stroke="none" />
                <polygon points="15,50 46,46 50,50 46,54" fill="#000" stroke="none" />
            </svg>
        </div>

        {/* Topographic Lines mid-left */}
        <div className="absolute top-[40%] left-[-5%] opacity-[0.02] transform -rotate-6">
            <svg width="300" height="400" viewBox="0 0 100 100">
                <path d="M 0 50 Q 50 10, 100 40 T 200 60" fill="none" stroke="#000" strokeWidth="0.3" id="p1" />
                <path d="M 0 60 Q 50 20, 100 50 T 200 70" fill="none" stroke="#000" strokeWidth="0.3" id="p2" />
                <path d="M 0 70 Q 50 30, 100 60 T 200 80" fill="none" stroke="#000" strokeWidth="0.3" id="p3" strokeDasharray="1 2" />
            </svg>
        </div>

        {/* Bottom map X marking */}
        <div className="absolute bottom-[2%] left-[10%] opacity-[0.04]">
            <svg width="120" height="120" viewBox="0 0 100 100">
                <path d="M 20 20 L 80 80 M 80 20 L 20 80" fill="none" stroke="#000" strokeWidth="1" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#000" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>
        </div>
    </div>
);

/* ── Main Export ─────────────────────────────────────────── */
const Timeline: React.FC = () => {
    return (
        <section id="timeline" className="relative py-16 md:py-24 overflow-hidden bg-[#f9f8f6]">
            <MapDecorations />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="section-tag mb-4 inline-block tracking-[0.2em]">OUR JOURNEY</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#000000] tracking-tighter leading-tight"
                        style={{ fontFamily: 'Geist, sans-serif' }}
                    >
                        Sixteen Years of{' '}
                        <span className="italic text-[#ff6321]">Measured Growth</span>
                    </h2>
                    <p className="text-[#69686e] text-[16px] max-w-xl mx-auto leading-relaxed">
                        From a 5-person team in Hyderabad to an AI-first consultancy serving clients worldwide. Every milestone, earned.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    <div className="relative">
                        {milestones.map((milestone, index) => (
                            <TimelineCard key={milestone.year} milestone={milestone} index={index} />
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mt-8 text-center"
                >
                    <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#e5e5e5] bg-white shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff6321] animate-[pulse_2s_ease-in-out_infinite]" />
                        <span className="text-[#000000] text-sm font-bold tracking-wide uppercase">The next chapter starts now.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;

