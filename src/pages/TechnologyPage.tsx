import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import TechStackBuilder from '../components/TechStackBuilder';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: i * 0.1 },
    }),
};



// ─── Data ─────────────────────────────────────────────────────────────────────

const practices = [
    {
        number: '01',
        title: 'AI-First Development',
        body: `We design and build websites, web applications, and digital products using AI-assisted development workflows that compress delivery timelines without compromising architectural integrity.`,
        tags: ['Headless CMS', 'LLM Integration', 'Semantic HTML', 'AI Tooling'],
        className: 'lg:col-span-8',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Mobile Engineering',
        body: `Native and cross-platform mobile applications for iOS and Android — from consumer products to enterprise tools. Over 100 applications delivered.`,
        tags: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
        className: 'lg:col-span-4',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'E-Commerce Systems',
        body: `Complete commercial ecosystems — incorporating inventory management, payment processing, and AI-driven personalisation from the outset.`,
        tags: ['Shopify', 'WooCommerce', 'Custom builds'],
        className: 'lg:col-span-4',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Strategy & Consulting',
        body: `Infrastructure audits, roadmap definition, and AI readiness assessments. We align technology with your core business objectives.`,
        tags: ['Infrastructure', 'Roadmaps', 'AI Readiness'],
        className: 'lg:col-span-8',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1V15a2 2 0 01-2-2 2 2 0 012-2v-.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2v.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
        ),
    },
    {
        number: '05',
        title: 'Digital Marketing',
        body: `Operating in direct integration with technology teams — connecting marketing performance to technical health and content architecture.`,
        tags: ['Technical SEO', 'AI Copy', 'Analytics'],
        className: 'lg:col-span-6',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            </svg>
        ),
    },
    {
        number: '06',
        title: 'IT Staffing',
        body: `Talent acquisition and placement services for technology roles in India and the United States. Vetted network of professionals.`,
        tags: ['Contract', 'Direct Placement', 'US & India'],
        className: 'lg:col-span-6',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
];

const aiFramework = [
    { 
        number: '1', 
        title: 'Structured Content Architecture', 
        body: 'Enabling AI agents and LLM crawlers to accurately parse and act on content.',
        icon: (
            <div className="relative w-full h-full overflow-hidden">
                <motion.svg viewBox="0 0 100 60" className="w-full h-full opacity-20">
                    {[0, 1, 2].map((i) => (
                        <motion.path
                            key={i}
                            d={`M 10,${20 + i * 15} L 90,${20 + i * 15}`}
                            stroke="#ff6321"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -20 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                        />
                    ))}
                    {[20, 50, 80].map((x, i) => (
                        <motion.circle
                            key={i}
                            cx={x}
                            cy={35}
                            r="3"
                            fill="#ff6321"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        />
                    ))}
                </motion.svg>
            </div>
        )
    },
    { 
        number: '2', 
        title: 'API-First Design', 
        body: 'Core information is accessible via documented APIs, not locked inside presentation layers.',
        icon: (
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.svg viewBox="0 0 100 80" className="w-full h-full opacity-60">
                    {/* API Layer Boundary */}
                    <line x1="50" y1="10" x2="50" y2="70" stroke="#ff6321" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
                    <motion.rect
                        x="48" y="15" width="4" height="50"
                        fill="#ff6321"
                        fillOpacity="0.1"
                        stroke="#ff6321"
                        strokeWidth="0.5"
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Backend Data -> API -> Frontend Packets */}
                    {[0, 1, 2].map((i) => (
                        <motion.g key={i}>
                            {/* Raw Data Dot */}
                            <motion.circle
                                r="1.5"
                                fill="#ff6321"
                                initial={{ cx: 10, cy: 25 + i * 15, opacity: 0 }}
                                animate={{ 
                                    cx: [10, 50],
                                    opacity: [0, 1, 0.5]
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: i * 0.6,
                                    ease: "easeIn"
                                }}
                            />
                            {/* Transformed Packet */}
                            <motion.rect
                                width="6" height="6"
                                rx="1"
                                fill="#ff6321"
                                initial={{ x: 50, y: 22 + i * 15, opacity: 0 }}
                                animate={{ 
                                    x: [50, 90],
                                    opacity: [0.5, 1, 0],
                                    scale: [0.8, 1, 0.8]
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    delay: i * 0.6 + 1, // Offset to start after reaching line
                                    ease: "easeOut"
                                }}
                            />
                        </motion.g>
                    ))}
                </motion.svg>
            </div>
        )
    },
    { 
        number: '3', 
        title: 'Schema.org Compliance', 
        body: 'Structured data implemented as standard, providing explicit context for machine systems.',
        icon: (
            <div className="relative w-full h-full overflow-hidden p-2">
                <div className="grid grid-cols-3 gap-1 opacity-20">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#ff6321] rounded-sm aspect-square"
                            animate={{ 
                                opacity: [0.2, 0.6, 0.2],
                                scale: [0.9, 1.1, 0.9]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        />
                    ))}
                </div>
            </div>
        )
    },
    { 
        number: '4', 
        title: 'Multi-Channel Delivery', 
        body: 'Supporting delivery to web, mobile, voice, and conversational AI without rebuild.',
        icon: (
            <div className="relative w-full h-full flex items-center justify-center opacity-20">
                <motion.svg viewBox="0 0 100 100" className="w-24 h-24">
                    <rect x="20" y="20" width="60" height="40" rx="2" stroke="#ff6321" fill="none" strokeWidth="2" />
                    <rect x="40" y="65" width="20" height="30" rx="2" stroke="#ff6321" fill="none" strokeWidth="2" />
                    <motion.path 
                        d="M 50,45 L 50,75" 
                        stroke="#ff6321" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, -8] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </motion.svg>
            </div>
        )
    },
    { 
        number: '5', 
        title: 'Observable & Measurable', 
        body: 'Full analytics and performance tracking implemented into every build.',
        icon: (
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.svg viewBox="0 0 100 60" className="w-full h-full opacity-40">
                    {/* Precision Waveform */}
                    <motion.path
                        d="M 10,30 L 30,30 L 35,10 L 45,50 L 50,30 L 90,30"
                        fill="none"
                        stroke="#ff6321"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Scanning Line */}
                    <motion.line
                        x1="10" y1="5" x2="10" y2="55"
                        stroke="#ff6321"
                        strokeWidth="0.5"
                        strokeOpacity="0.5"
                        animate={{ x: [10, 90, 10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </motion.svg>
            </div>
        )
    },
    { 
        number: '6', 
        title: 'Scalable & Modular', 
        body: 'Systems capable of absorbing new requirements without architectural compromise.',
        icon: (
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                    {/* Isometric Cube Assembly */}
                    {[
                        { x: 50, y: 30, delay: 0 },
                        { x: 35, y: 40, delay: 0.2 },
                        { x: 65, y: 40, delay: 0.4 },
                        { x: 50, y: 50, delay: 0.6 }
                    ].map((p, i) => (
                        <motion.g
                            key={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1, 
                                repeat: Infinity, 
                                repeatDelay: 2,
                                delay: p.delay 
                            }}
                        >
                            {/* Simple Isometric Diamond Facets */}
                            <path
                                d={`M ${p.x},${p.y} L ${p.x + 10},${p.y + 5} L ${p.x},${p.y + 10} L ${p.x - 10},${p.y + 5} Z`}
                                fill="#ff6321"
                                fillOpacity="0.8"
                            />
                            <path
                                d={`M ${p.x - 10},${p.y + 5} L ${p.x},${p.y + 10} L ${p.x},${p.y + 20} L ${p.x - 10},${p.y + 15} Z`}
                                fill="#ff6321"
                                fillOpacity="0.4"
                            />
                            <path
                                d={`M ${p.x},${p.y + 10} L ${p.x + 10},${p.y + 5} L ${p.x + 10},${p.y + 15} L ${p.x},${p.y + 20} Z`}
                                fill="#ff6321"
                                fillOpacity="0.6"
                            />
                        </motion.g>
                    ))}
                </motion.svg>
            </div>
        )
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const PracticeCard: React.FC<{ practice: typeof practices[0], index: number }> = ({ practice, index }) => (
    <motion.div
        variants={fadeUp}
        custom={index}
        className={`${practice.className} group relative bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 flex flex-col hover:border-[#ff6321]/30 hover:shadow-[0_32px_80px_-16px_rgba(0,0,0,0.08)] transition-[box-shadow,border-color,transform] duration-500 hover:-translate-y-1`}
    >
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#f5f4f3] text-[#000000] flex items-center justify-center group-hover:bg-[#ff6321] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {practice.icon}
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#ff6321] uppercase">
                {practice.number}
            </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-[#000000] leading-tight mb-4">
            {practice.title}
        </h3>

        <p className="text-[#69686e] text-[15px] leading-relaxed mb-8 flex-grow">
            {practice.body}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
            {practice.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase text-[#69686e] bg-[#f5f4f3] rounded-lg transition-colors group-hover:bg-white group-hover:border group-hover:border-gray-100">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

const TechnologyPage: React.FC = () => {
    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#000000]">
            <SEO
                title="Technology & Services | Capable Groups"
                description="Capable Groups offers six focused technology practice areas: AI web development, mobile apps, e-commerce, digital marketing, IT staffing, and technology strategy."
                canonicalUrl="https://capablegroups.com/technology"
            />

            {/* ── Hero ── */}
            <section className="pt-32 sm:pt-44 pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-5xl">
                    <span className="section-tag mb-10 inline-block">OUR TECHNOLOGY PRACTICE</span>
                    <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-16 text-[#000000]">
                        Built for <span className="italic text-[#ff6321]">enterprise</span> <br className="hidden md:block" />delivery
                    </h1>

                    <div className="flex flex-col md:flex-row items-start gap-12 md:gap-32">
                        <div className="max-w-md">
                            <p className="text-[#69686e] text-xl leading-relaxed border-l-2 border-[#ff6321] pl-8">
                                Focused technology services designed for organisations that require enterprise-grade standards with modern efficiency.
                            </p>
                        </div>

                        <div className="flex items-center gap-10 md:gap-16">
                            <div className="w-px h-16 bg-gray-200 hidden md:block" />
                            <div className="grid grid-cols-2 gap-10 md:gap-16">
                                <div>
                                    <div className="text-5xl font-bold text-[#000000] tracking-tighter mb-1">16+</div>
                                    <div className="text-[11px] font-bold tracking-[0.2em] text-[#69686e] uppercase opacity-60">Years exp.</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-bold text-[#000000] tracking-tighter mb-1">250+</div>
                                    <div className="text-[11px] font-bold tracking-[0.2em] text-[#69686e] uppercase opacity-60">Deliveries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── Capabilities Bento ── */}
            <section className="pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                    {practices.map((p, i) => (
                        <PracticeCard key={i} practice={p} index={i} />
                    ))}
                </div>
            </section>

            {/* ── Tech Stack: Modular Board ── */}
            <TechStackBuilder />

            {/* ── AI Readiness: Strategic Board ── */}
            <section className="py-32 bg-[#f5f4f3]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                        className="mb-24"
                    >
                        <span className="section-tag mb-8 inline-block">THE STRATEGIC FRAMEWORK</span>
                        <h2 className="text-5xl md:text-[80px] font-bold tracking-tighter leading-[0.95] mb-12">
                            Building for the <br />
                            <span className="italic text-[#ff6321]">autonomous</span> future
                        </h2>
                        <p className="text-[#69686e] text-xl leading-relaxed max-w-2xl">
                            The term "AI-ready" is often used loosely. We define it through six non-negotiable structural criteria — the criteria against which we assess and design every system we deliver.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {aiFramework.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] }
                                    }
                                }}
                                whileHover={{ 
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                className="group relative bg-white border border-gray-50 rounded-[32px] p-10 flex flex-col justify-between overflow-hidden hover:shadow-[0_48px_120px_-24px_rgba(255,100,33,0.1)] hover:border-[#ff6321]/20 transition-[box-shadow,border-color] duration-500"
                            >
                                {/* Decorative background number */}
                                <motion.span 
                                    initial={{ opacity: 0.03, scale: 1 }}
                                    whileHover={{ 
                                        scale: 1.1,
                                        x: -10,
                                        y: -5,
                                        opacity: 0.06,
                                        color: '#ff6321'
                                    }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute right-4 bottom-[-10px] text-[180px] font-black text-black/[0.03] leading-none select-none pointer-events-none"
                                >
                                    0{item.number}
                                </motion.span>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-10">
                                        <motion.div 
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                            className="w-12 h-12 rounded-2xl bg-[#000000] text-white flex items-center justify-center font-bold text-xl group-hover:bg-[#ff6321] transition-colors duration-500"
                                        >
                                            0{item.number}
                                        </motion.div>
                                        
                                        <div className="w-24 h-16 pointer-events-none">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold tracking-tight text-[#000000] leading-tight mb-4 group-hover:text-[#ff6321] transition-colors duration-500">
                                        {item.title}
                                    </h3>

                                    <p className="text-[#69686e] text-[15px] leading-relaxed group-hover:text-[#000000] transition-colors duration-500 max-w-[280px]">
                                        {item.body}
                                    </p>
                                </div>

                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 mt-12 pt-6 border-t border-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 flex items-center gap-2"
                                >
                                    <span className="text-[10px] font-bold tracking-widest text-[#ff6321] uppercase">Strategic Pillar</span>
                                    <div className="flex-grow h-px bg-[#ff6321]/20" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default TechnologyPage;
