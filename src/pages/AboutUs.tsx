import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
};

const values = [
    { label: 'Accountability', desc: 'We take ownership of outcomes, not just outputs.' },
    { label: 'Rigour', desc: 'We apply professional standards to every engagement.' },
    { label: 'Longevity', desc: 'We build systems designed to serve clients for years.' },
    { label: 'Capability', desc: 'We invest continuously in the expertise we bring.' },
];

const teamStats = [
    { value: '80+', label: 'Professionals' },
    { value: '10+', label: 'Years Avg. Senior Experience' },
    { value: '6', label: 'Practice Areas' },
    { value: '3', label: 'Active AI Products' },
];

const AboutUs: React.FC = () => {
    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#000000]">
            <SEO
                title="About Us | Capable Groups"
                description="Capable Groups is an enterprise technology consultancy founded in Hyderabad in 2010. 80+ professionals, 250+ projects delivered across India, USA, Middle East, and the UK."
                canonicalUrl="https://capablegroups.com/about-us"
            />

            {/* ── Hero: High-Fidelity Board ── */}
            <section className="pt-44 pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-5xl">
                    <span className="section-tag mb-10 inline-block">OUR IDENTITY</span>
                    <h1 className="text-[42px] sm:text-[64px] md:text-[86px] lg:text-[110px] font-bold tracking-tighter leading-[0.85] mb-20 text-[#000000]">
                        Who we <span className="italic text-[#ff6321]">are</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Primary Identity Card */}
                        <div className="lg:col-span-8 bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group transition-[box-shadow,border-color] duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6321]/5 rounded-bl-full transition-all group-hover:w-40 group-hover:h-40" />
                            <p className="text-[24px] md:text-[32px] font-bold tracking-tight leading-[1.1] text-[#000000] mb-10 relative z-10">
                                <span className="text-[#ff6321]">Capable Groups</span> is an enterprise technology consultancy founded in Hyderabad in 2010.
                            </p>
                            <p className="text-[#69686e] text-lg md:text-xl leading-relaxed max-w-2xl relative z-10">
                                Over 16 years, we have grown from a five-person team to a global organisation of 80+ professionals, delivering 250+ projects for clients in India, the United States, the Middle East, and the United Kingdom.
                            </p>

                            <div className="mt-16 flex items-center gap-12 border-t border-gray-100 pt-10 relative z-10">
                                <div className="flex flex-col">
                                    <span className="text-5xl font-black tracking-tighter text-[#000000]">80+</span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#69686e] mt-1">Professionals</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-5xl font-black tracking-tighter text-[#000000]">250+</span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#69686e] mt-1">Deliveries</span>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Strategy Card */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            <div className="bg-[#000000] text-white rounded-[40px] p-10 flex flex-col justify-between h-full border border-black group hover:bg-[#ff6321] transition-colors duration-500">
                                <div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] group-hover:text-white mb-8 block transition-colors">THE TRANSFORMATION</span>
                                    <h3 className="text-2xl font-bold tracking-tight leading-snug">
                                        We are now an <span className="italic">AI-first</span> organisation.
                                    </h3>
                                </div>
                                <p className="text-white/70 group-hover:text-white mt-12 text-[15px] leading-relaxed transition-colors">
                                    Applying the speed and intelligence of modern AI development to the delivery standards our clients have relied on for over a decade.
                                </p>
                            </div>

                            <a
                                href="#timeline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById('timeline');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            >
                                <span className="text-[11px] font-bold tracking-widest text-[#69686e] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Founded 2010</span>
                                <div className="w-10 h-10 rounded-full bg-[#f5f4f3] flex items-center justify-center group-hover:bg-[#ff6321] group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── The Founding: Heritage Board ── */}
            <section className="pt-16 pb-32 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
                        <span className="section-tag mb-6 inline-block">THE FOUNDING</span>
                        <h2 className="text-[48px] md:text-[80px] font-bold tracking-tighter leading-[0.9] mb-12">
                            The heritage of <br />
                            <span className="italic text-[#ff6321]">Capable Groups</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* 2010: The Conviction */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-12 bg-[#f5f4f3] rounded-[40px] p-10 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-12 items-center"
                        >
                            <div className="flex-shrink-0">
                                <span className="text-[64px] sm:text-[100px] md:text-[140px] font-black text-[#ff6321]/15 leading-none select-none">2010</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#000000] mb-6">The Founding Conviction</h3>
                                <p className="text-[#69686e] text-lg md:text-xl leading-relaxed max-w-3xl">
                                    In 2010, our founder established Capable Groups in Hyderabad with a conviction that has remained central to the organisation ever since: that every business, regardless of size or sector, deserves access to technology that genuinely performs.
                                </p>
                            </div>
                        </motion.div>

                        {/* Philosophy High-Contrast Block */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-7 bg-[#000000] rounded-[40px] p-10 md:p-14 text-white relative group overflow-hidden"
                        >
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#ff6321]/20 rounded-full blur-[100px] group-hover:bg-[#ff6321]/30 transition-all duration-700" />
                            <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#ff6321] mb-10">CORE PHILOSOPHY</h4>
                            <p className="text-[22px] sm:text-[28px] md:text-[34px] font-bold tracking-tight leading-tight relative z-10">
                                Not templates. Not generic solutions. Considered, well-engineered work built by professionals who <span className="text-[#ff6321] italic">take ownership of outcomes.</span>
                            </p>
                        </motion.div>

                        {/* The Name Card */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-5 bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm flex flex-col justify-between"
                        >
                            <p className="text-[#69686e] text-[15.5px] leading-relaxed">
                                The name "Capable" was not arrived at by chance. It reflected a commitment to the client — that whatever the scope of the engagement, Capable Groups would arrive with the expertise, the discipline, and the character required to deliver.
                            </p>
                            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-[11px] font-bold tracking-widest text-[#000000] uppercase">Integrity First</span>
                                <div className="w-2 h-2 rounded-full bg-[#ff6321]" />
                            </div>
                        </motion.div>

                        {/* Growth Narrative Blocks */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            <motion.div
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="bg-[#f5f4f3] rounded-[40px] p-10 md:p-12 border border-gray-50"
                            >
                                <span className="text-[11px] font-bold tracking-[0.2em] text-[#ff6321] uppercase mb-6 block">EARLY YEARS & GROWTH</span>
                                <p className="text-[#69686e] text-[16px] leading-relaxed mb-8">
                                    In the early years, the team focused on website design, digital marketing, and mobile application development. Each engagement was an opportunity to deepen the organisation's capability and refine its delivery model.
                                </p>
                                <p className="text-[#000000] text-[16px] font-bold leading-relaxed">
                                    By 2014, the team had grown to 25 professionals and the portfolio had expanded to over 40 projects. By 2018, Capable Groups was serving clients across three continents.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="bg-white rounded-[40px] p-10 md:p-12 border border-black shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6321] translate-x-12 -translate-y-12 rotate-45" />
                                <span className="text-[11px] font-bold tracking-[0.2em] text-[#ff6321] uppercase mb-6 block">AI PIVOT</span>
                                <p className="text-[#69686e] text-[14.5px] leading-relaxed mb-6">
                                    In 2022, we made a deliberate decision to invest in AI-assisted development. This was not a reactive response but a considered strategic move — redefining what was possible in delivery timelines, system architecture, and outcomes.
                                </p>
                                <div className="bg-[#f5f4f3] rounded-2xl p-6">
                                    <p className="text-[13px] font-bold text-[#000000]">
                                        By 2024, our investment produced three active AI products: SocialFlyAI, SocialScale Agency, and Atyuttama.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Final Strategic Transformation */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-12 bg-white rounded-[40px] p-10 md:p-16 border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-12"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-[#000000] text-[#ff6321] flex items-center justify-center flex-shrink-0">
                                <span className="text-3xl font-black">26</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#000000] mb-4">The AI-First Consultancy (2026)</h4>
                                <p className="text-[#69686e] text-lg leading-relaxed max-w-4xl">
                                    In 2026, Capable Groups undertakes the most significant transformation in its history — rebuilding its digital presence as an AI-first consultancy and formalising an approach to technology partnership that has been 16 years in the making.
                                </p>
                            </div>
                        </motion.div>

                        {/* The Large Closing Quote */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-12 text-center py-24"
                        >
                            <p className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold tracking-tighter text-[#000000] leading-[0.9] mb-8">
                                "We are <span className="text-[#ff6321] italic">Capable</span>. <br />
                                That has always been the point."
                            </p>
                            <div className="w-24 h-1 bg-[#ff6321] mx-auto rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <div className="bg-[#f5f4f3]">
                <Timeline />
            </div>

            {/* ── Our People: Global Talent Board ── */}
            <section className="py-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
                        <span className="section-tag mb-6 inline-block">OUR PEOPLE</span>
                        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold tracking-tighter leading-[0.9] mb-12 text-[#000000]">
                            The collective <br />
                            <span className="italic text-[#ff6321]">intelligence</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                                <p className="text-[#000000] text-[20px] md:text-[24px] font-bold tracking-tight leading-tight">
                                    Capable Groups employs 80+ professionals across technology, design, product management, and consulting disciplines.
                                </p>
                                <p className="text-[#69686e] text-lg leading-relaxed">
                                    Our senior leadership team averages over 10 years of industry experience. Our delivery teams combine technical depth with working knowledge of the industries our clients operate in — enabling more considered solutions and more productive long-term relationships.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#f5f4f3] rounded-[40px] p-10 flex flex-col justify-center">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-6 block">GLOBAL OPERATIONS</span>
                                <h3 className="text-2xl font-bold text-[#000000] leading-snug">
                                    Headquartered in <span className="text-[#ff6321]">Hyderabad</span>, with client relationships in the US, UK, and Middle East.
                                </h3>
                            </motion.div>
                        </div>

                        {/* High-Impact Talent Stats */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {teamStats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                                    className="group bg-white rounded-[32px] p-10 border border-gray-100 hover:border-[#ff6321]/30 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.06)] transition-[box-shadow,border-color,transform] duration-500 hover:-translate-y-1"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-5xl font-black tracking-tighter text-[#000000] mb-2 group-hover:text-[#ff6321] transition-colors">
                                            {s.value}
                                        </span>
                                        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#69686e]">
                                            {s.label}
                                        </span>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[9px] font-bold tracking-widest text-[#69686e] uppercase">Verified Resource</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6321]" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Strategic Foundations: Mission, Vision, Values ── */}
            <section className="py-32 bg-[#f5f4f3]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
                        <span className="section-tag mb-6 inline-block">STRATEGIC FOUNDATIONS</span>
                        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold tracking-tighter leading-[0.9] mb-12 text-[#000000]">
                            What <span className="italic text-[#ff6321]">drives</span> us
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Vision Card (High Contrast) */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-5 bg-[#000000] text-white rounded-[40px] p-12 flex flex-col justify-between group overflow-hidden"
                        >
                            <div>
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-12 block">OUR VISION</span>
                                <p className="text-[28px] md:text-[32px] font-bold tracking-tight leading-[1.15] relative z-10">
                                    To be the most trusted <span className="italic">AI-powered</span> technology partner for enterprises building the next decade.
                                </p>
                            </div>
                            <div className="mt-20 flex items-center gap-4">
                                <div className="w-12 h-px bg-white/20" />
                                <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">A Decade of Trust</span>
                            </div>
                        </motion.div>

                        {/* Mission Card (Modular Design) */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-7 bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm flex flex-col justify-between group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#f5f4f3] rounded-bl-full -translate-y-8 translate-x-8 transition-transform group-hover:scale-110" />
                            <div>
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-12 block">OUR MISSION</span>
                                <p className="text-[18px] md:text-[20px] font-bold text-[#000000] leading-snug mb-8 relative z-10 max-w-xl">
                                    To deliver future-grade technology solutions that combine 16+ years of proven execution discipline with the speed and intelligence of AI-first development.
                                </p>
                                <p className="text-[#69686e] text-lg leading-relaxed relative z-10 max-w-lg">
                                    Enabling clients to move faster without compromising on quality, security, or long-term scalability. Every system is built to perform.
                                </p>
                            </div>
                        </motion.div>

                        {/* Values Board (Full Width) */}
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="lg:col-span-12 bg-white rounded-[40px] p-12 md:p-16 border border-gray-100 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.06)]"
                        >
                            <span className="text-[11px] font-bold tracking-[0.2em] text-[#ff6321] uppercase mb-12 block text-center">OUR CORE VALUES</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {values.map((v, i) => (
                                    <div key={i} className="flex flex-col gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-[#f5f4f3] flex items-center justify-center text-[#ff6321] group-hover:bg-[#ff6321] group-hover:text-white transition-all duration-300">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#000000] mb-2">{v.label}</h4>
                                            <p className="text-[#69686e] text-[15px] leading-relaxed">
                                                {v.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default AboutUs;
