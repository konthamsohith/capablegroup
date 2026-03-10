import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Milestone {
    year: string;
    era: string;
    headline: string;
    body: string[];
    metric?: { value: string; label: string };
    accent: string;
}

const milestones: Milestone[] = [
    {
        year: '2010',
        era: 'FOUNDATION',
        headline: 'Born in Hyderabad',
        body: ['5-person core team.', 'Website design & digital marketing.', 'First clients in Hyderabad.'],
        metric: { value: '5', label: 'Founding Team' },
        accent: '#8b4513'
    },
    {
        year: '2014',
        era: 'SCALING',
        headline: 'Enterprise & US Office',
        body: ['25+ professionals.', 'US IT Staffing division.', 'Gachibowli tech hub office.'],
        metric: { value: '40+', label: 'Projects' },
        accent: '#5d3a1a'
    },
    {
        year: '2018',
        era: 'AT SCALE',
        headline: 'Full-Stack Maturity',
        body: ['150+ projects delivered.', 'Technology strategy consulting.', 'First SaaS product.'],
        metric: { value: '50+', label: 'Team Members' },
        accent: '#3e2712'
    },
    {
        year: '2022',
        era: 'AI INVESTMENT',
        headline: 'The Strategic Bet',
        body: ['AI-assisted dev investment.', 'AI products delivered.', '200+ total projects.'],
        metric: { value: 'AI-Ready', label: 'Since 2022' },
        accent: '#ff6321'
    },
    {
        year: '2026',
        era: 'DESTINATION',
        headline: 'AI-First Agency',
        body: ['AI-first consultancy shift.', 'New delivery architecture.', '16+ years of knowledge.'],
        metric: { value: 'X', label: 'The Goal' },
        accent: '#ff6321'
    }
];

const ParchmentTexture: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply">
        <svg width="100%" height="100%">
            <filter id="parchment">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                <feDiffuseLighting in="noise" lightingColor="#f4e4bc" surfaceScale="2">
                    <feDistantLight azimuth="45" elevation="60" />
                </feDiffuseLighting>
            </filter>
            <rect width="100%" height="100%" filter="url(#parchment)" />
        </svg>
    </div>
);

const InkSplatter: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
    <div className="absolute opacity-10 pointer-events-none select-none" style={style}>
        <svg viewBox="0 0 200 200" width="150" height="150" fill="currentColor">
            <path d="M100 20c-10 0-15 10-25 10s-20-10-30-5-5 20 5 30 15 10 15 25-10 20-5 35 25 15 35 5 20-30 40-30 30 10 40 5 5-25-5-35-25-10-25-25 15-20 10-35-25-15-35-10z" />
            <circle cx="160" cy="40" r="10" />
            <circle cx="40" cy="150" r="15" />
            <circle cx="180" cy="160" r="8" />
        </svg>
    </div>
);

const TimelineCard: React.FC<{ milestone: Milestone }> = ({ milestone }) => {
    return (
        <div className="relative flex-shrink-0 w-[320px] px-4 py-4 flex flex-col items-center justify-center">
            {/* Hand-drawn Card Style */}
            <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-[2rem] border-2 border-[#5d3a1a]/20 shadow-xl overflow-hidden group hover:border-[#ff6321]/40 transition-colors duration-500">
                {/* Vintage Corner Brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#5d3a1a]/30" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#5d3a1a]/30" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#5d3a1a]/30" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#5d3a1a]/30" />

                <div className="relative z-10">
                    <span className="text-[10px] font-black tracking-[0.3em] text-[#ff6321] opacity-80 uppercase mb-2 block">
                        {milestone.era}
                    </span>
                    <h3 className="text-[40px] font-bold text-[#3e2712] leading-none mb-2 tracking-tighter" style={{ fontFamily: '"Geist Sans", sans-serif' }}>
                        {milestone.year}
                    </h3>
                    <h4 className="text-[18px] font-bold text-[#5d3a1a] mb-6 leading-tight">
                        {milestone.headline}
                    </h4>
                    <ul className="space-y-3 mb-8">
                        {milestone.body.map((item, i) => (
                            <li key={i} className="text-[14px] text-[#5d3a1a]/80 flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6321]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    {milestone.metric && (
                        <div className="pt-6 border-t border-[#5d3a1a]/10">
                            <div className="text-[24px] font-bold text-[#ff6321] leading-none mb-1">
                                {milestone.metric.value}
                            </div>
                            <div className="text-[10px] font-black text-[#5d3a1a]/40 tracking-wider uppercase">
                                {milestone.metric.label}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* X marks the spot marker */}
            <div className="mt-12 relative">
                <div className="absolute -inset-8 bg-[#ff6321]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#ff6321] drop-shadow-[0_4px_8px_rgba(255,99,33,0.3)]">
                        <motion.path
                            d="M 20 20 L 80 80 M 80 20 L 20 80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    </svg>
                    {/* Pulsing Ring */}
                    <div className="absolute -inset-2 border-2 border-dashed border-[#ff6321]/30 rounded-full animate-[spin_12s_linear_infinite]" />
                </div>
            </div>
        </div>
    );
};

const Timeline: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);
    const x = useSpring(xTransform, { stiffness: 100, damping: 20, restDelta: 0.001 });

    const pathProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

    return (
        <section ref={sectionRef} id="timeline" className="relative h-[300vh] bg-[#fdfaf3] overflow-visible">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
                <ParchmentTexture />

                {/* Decorative Ink Splatters */}
                <InkSplatter style={{ top: '10%', left: '5%', color: '#3e2712' }} />
                <InkSplatter style={{ bottom: '20%', right: '10%', color: '#5d3a1a', transform: 'rotate(180deg) scale(1.5)' }} />
                <InkSplatter style={{ top: '40%', right: '20%', color: '#8b4513', opacity: 0.05 }} />

                <div className="max-w-7xl mx-auto px-8 w-full relative z-20 mb-12 -mt-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-[44px] font-bold text-[#3e2712] tracking-tighter leading-[0.9] mb-4">
                            Measurements of <br />
                            <span className="italic text-[#ff6321]">Steady Mastery</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative w-full h-[55vh] flex items-center">

                    <motion.div
                        ref={containerRef}
                        style={{ x }}
                        className="flex pl-[10%] items-center gap-12 relative z-20"
                    >
                        {/* Connecting Sea Path - Now moves with the container */}
                        <div className="absolute left-[150px] top-[71%] w-[2500px] h-4 overflow-visible pointer-events-none z-10">
                            <svg width="100%" height="200" viewBox="0 0 2500 200" fill="none" preserveAspectRatio="none">
                                <motion.path
                                    d="M 0 100 
                                       Q 80 140, 160 100 
                                       Q 344 60, 528 100 
                                       Q 712 140, 896 100 
                                       Q 1080 60, 1264 100 
                                       Q 1448 140, 1632 100 
                                       L 2500 100"
                                    stroke="#ff6321"
                                    strokeWidth="4"
                                    strokeDasharray="12 16"
                                    strokeLinecap="round"
                                    style={{ pathLength: pathProgress }}
                                    animate={{ strokeDashoffset: [0, -28] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                />
                            </svg>
                        </div>

                        {milestones.map((milestone, index) => (
                            <TimelineCard key={index} milestone={milestone} />
                        ))}

                        {/* Ending Treasure Chest / Destination */}
                        <div className="flex-shrink-0 w-[450px] flex flex-col items-center justify-center pr-20">
                            <div className="text-center">
                                <span className="text-[12px] font-black tracking-[0.4em] text-[#ff6321] uppercase mb-10 block animate-pulse">
                                    THE DESTINATION REACHED
                                </span>
                                <div className="p-10 bg-[#3e2712] text-white rounded-[3rem] shadow-2xl space-y-4 scale-90">
                                    <h3 className="text-4xl font-bold tracking-tight">The Next Chapter</h3>
                                    <p className="opacity-60 text-sm">Our maps are constantly being redrawn. <br />Join us for the next discovery.</p>
                                    <button className="mt-8 px-8 py-4 bg-[#ff6321] rounded-2xl font-bold hover:scale-105 transition-transform">
                                        Partner with us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

