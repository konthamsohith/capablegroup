import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const sections = [
    {
        number: '1',
        label: 'AI IS INTEGRATED INTO THE SCOPING AND DESIGN PHASE',
        title: 'Start smarter, deliver faster',
        body: [
            'Every engagement now begins with an AI-assisted scoping process. We use large language models to accelerate the production of wireframe copy, content architecture proposals, technical specifications, and initial project documentation.',
            'Our senior team then reviews, validates, and refines this output. The result is a more considered brief produced in significantly less time — which compresses the distance between project initiation and delivery.',
        ],
        image: '/blog-aifirst-scoping.png',
        imageAlt: 'AI-assisted scoping workspace',
        imageCaption: 'AI accelerates from blank canvas to considered brief — without skipping the thinking.',
        imageLeft: false,
    },
    {
        number: '2',
        label: 'AI FEATURES ARE A STANDARD COMPONENT OF PRODUCT DEVELOPMENT',
        title: 'Intelligent by default',
        body: [
            'Capabilities that were previously premium additions — intelligent search, content summarisation, conversational interfaces — are now standard components of the development toolkit. We build with these by default, because client systems that incorporate them are more capable and more competitive than those that do not.',
            'This does not mean every system requires every AI capability. It means every system is evaluated for where AI features would improve performance and user experience — and those evaluations now consistently yield positive answers.',
        ],
        image: '/blog-aifirst-delivery.png',
        imageAlt: 'AI data flow pipeline visualisation',
        imageCaption: 'From intelligent search to conversational interfaces — built in, not bolted on.',
        imageLeft: true,
    },
    {
        number: '3',
        label: 'DELIVERY METHODOLOGIES ARE CONTINUOUSLY UPDATED',
        title: 'A practice that never stops improving',
        body: [
            'Our technical practice leadership reviews AI tooling on a rolling basis and integrates new capabilities into our methodology when they meet our standards for reliability and output quality. This is an ongoing process.',
            'The consequence is that clients who engage with Capable Groups in 2026 benefit from a methodology that is continuously evolving — incorporating proven new tools without disrupting delivery stability.',
        ],
        image: null,
        imageAlt: null,
        imageCaption: null,
        imageLeft: false,
    },
    {
        number: '4',
        label: 'CLIENT EDUCATION IS PART OF THE DELIVERY',
        title: 'Built to be understood',
        body: [
            'We ensure that client teams understand how to use AI tools to manage, update, and extend the systems we build — reducing ongoing dependency and increasing the long-term value clients extract from our work.',
            'This orientation reflects our view of the client relationship as a long-term partnership rather than a transactional delivery. A system your team can confidently extend is worth significantly more than one they cannot.',
        ],
        image: null,
        imageAlt: null,
        imageCaption: null,
        imageLeft: true,
    },
];

const constancies = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Delivery standards are unchanged',
        body: 'AI-assisted development is a methodology, not a reduction in rigour. Every system is subject to the same quality, security, and performance standards it would have been under any prior methodology.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Client relationships are unchanged',
        body: "We operate as long-term partners, not project vendors. The integration of AI into our practice is in service of that relationship — enabling us to deliver more value within the same timeframes and budgets.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        title: 'Documentation standards are unchanged',
        body: 'Every system we deliver is documented to the same rigorous standard — sufficient for a qualified engineer with no prior project context to understand, maintain, and extend it independently.',
    },
];

const AiFirstBlogPage: React.FC = () => {
    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#000000]">
            <SEO
                title="What &quot;AI-First&quot; Means for a Technology Consultancy in 2026 | Capable Groups"
                description="The phrase 'AI-first' is used widely. This article explains precisely what the term means for Capable Groups: how AI is integrated into our delivery methodology and what it changes for clients."
                canonicalUrl="https://capablegroups.com/blogs/ai-first-consultancy-2026"
            />

            {/* Hero */}
            <section className="relative pt-40 pb-0 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 mb-8 text-[12px] font-medium text-[#69686e]">
                            <Link to="/blogs" className="hover:text-[#ff6321] transition-colors">Perspectives</Link>
                            <span>/</span>
                            <span className="text-[#000000]">Company Perspective</span>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-[#ff6321]/10 text-[#ff6321] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full">
                                Company Perspective
                            </span>
                            <span className="text-[12px] text-[#69686e] font-medium">January 2026</span>
                            <span className="text-[12px] text-[#69686e] font-medium">· 5 min read</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tighter leading-[1.05] mb-8">
                            What <span className="italic text-[#ff6321]">"AI-First"</span> Means for a Technology Consultancy in 2026
                        </h1>

                        <p className="text-[#69686e] text-[17px] leading-relaxed max-w-2xl">
                            The phrase "AI-first" is used widely in the technology industry at present. In many cases, it is used loosely — as a marketing descriptor rather than a description of actual operating practice. This article explains precisely what the term means for Capable Groups.
                        </p>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="w-full h-[420px] md:h-[520px] rounded-[28px] overflow-hidden">
                        <img
                            src="/blog-aifirst-hero.png"
                            alt="Neural network visualisation representing AI-first technology"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Intro quote */}
            <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="border-l-4 border-[#ff6321] pl-8 py-2"
                >
                    <p className="text-[#000000] text-[22px] md:text-[26px] font-medium leading-snug tracking-tight italic">
                        "For us, AI-first means the intelligence layer is embedded in every stage of the engagement — not presented as an optional upgrade at the end."
                    </p>
                    <footer className="mt-4 text-[13px] font-bold text-[#69686e] not-italic tracking-wide uppercase">
                        — Capable Groups, Practice Leadership
                    </footer>
                </motion.blockquote>
            </section>

            {/* 4 Points with images */}
            <section className="pb-8">
                {sections.map((sec, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}
                        className="mb-4"
                    >
                        {/* Section with image */}
                        {sec.image ? (
                            <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'bg-white' : ''}`}
                                style={i % 2 === 1 ? {} : {}}>
                                {/* If imageLeft, image comes first on desktop */}
                                {sec.imageLeft && (
                                    <div className="order-last lg:order-first">
                                        <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl">
                                            <img src={sec.image} alt={sec.imageAlt ?? ''} className="w-full h-full object-cover" />
                                        </div>
                                        {sec.imageCaption && (
                                            <p className="text-[11px] text-[#69686e] font-medium mt-3 text-center tracking-wide">{sec.imageCaption}</p>
                                        )}
                                    </div>
                                )}
                                <div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-3 block">{sec.label}</span>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#000000] mb-6 leading-tight">{sec.title}</h2>
                                    {sec.body.map((para, j) => (
                                        <p key={j} className="text-[#69686e] text-[15px] leading-relaxed mb-4">{para}</p>
                                    ))}
                                </div>
                                {!sec.imageLeft && (
                                    <div>
                                        <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl">
                                            <img src={sec.image} alt={sec.imageAlt ?? ''} className="w-full h-full object-cover" />
                                        </div>
                                        {sec.imageCaption && (
                                            <p className="text-[11px] text-[#69686e] font-medium mt-3 text-center tracking-wide">{sec.imageCaption}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Text-only section */
                            <div className={`py-16 ${i % 2 === 1 ? 'bg-white' : ''}`}>
                                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex items-start gap-8">
                                        <div className="hidden md:flex flex-col items-center gap-3 flex-shrink-0 pt-1">
                                            <span className="text-[48px] font-bold text-[#ff6321]/15 leading-none tracking-tighter">{sec.number}</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-3 block">{sec.label}</span>
                                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#000000] mb-6">{sec.title}</h2>
                                            {sec.body.map((para, j) => (
                                                <p key={j} className="text-[#69686e] text-[15px] leading-relaxed mb-4">{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </section>

            {/* What Does Not Change */}
            <section className="py-24 bg-[#000000] text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-4 block">WHAT DOES NOT CHANGE</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-xl leading-tight">
                            The constants that <span className="italic text-[#ff6321]">define us</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {constancies.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-white/5 border border-white/10 rounded-[24px] p-8"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#ff6321]/10 text-[#ff6321] flex items-center justify-center mb-5">
                                    {c.icon}
                                </div>
                                <h3 className="text-[16px] font-bold text-white mb-3">{c.title}</h3>
                                <p className="text-white/60 text-[14px] leading-relaxed">{c.body}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                        className="w-full rounded-[28px] overflow-hidden h-[340px] md:h-[440px] relative"
                    >
                        <img
                            src="/blog-aifirst-trust.png"
                            alt="Capable Groups commitment to long-term client relationships"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-white text-[18px] font-bold leading-snug max-w-lg">
                                "AI changes the tools. It does not change the obligation."
                            </p>
                            <p className="text-white/60 text-[12px] font-medium mt-2 uppercase tracking-widest">Capable Groups, 2026</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Closing section */}
            <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#000000] mb-6">
                        What this means for clients
                    </h2>
                    <p className="text-[#69686e] text-[15px] leading-relaxed mb-5">
                        Working with Capable Groups in 2026 means working with a team that has integrated AI into its practice at the methodology level — not as a marketing positioning, but as a set of tools and processes that consistently produce better outcomes.
                    </p>
                    <p className="text-[#69686e] text-[15px] leading-relaxed mb-5">
                        Practically, this means faster delivery timelines, more considered architecture, and systems designed from day one to integrate with AI tools and agents as they continue to develop.
                    </p>
                    <p className="text-[#69686e] text-[15px] leading-relaxed mb-10">
                        And it means the same professional standards, the same commitment to accountability, and the same long-term orientation that has made Capable Groups a trusted partner for 16 years.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff6321] text-white text-[14px] font-bold rounded-xl hover:bg-[#e45217] transition-colors"
                        >
                            Discuss your project →
                        </Link>
                        <Link
                            to="/blogs"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#000000] text-[14px] font-bold rounded-xl border border-gray-200 hover:border-[#ff6321]/40 transition-colors"
                        >
                            ← Back to Perspectives
                        </Link>
                    </div>
                </motion.div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default AiFirstBlogPage;
