import React from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
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
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#060612]">
            <SEO
                title="About Us | Capable Groups"
                description="Capable Groups is an enterprise technology consultancy founded in Hyderabad in 2010. 80+ professionals, 250+ projects delivered across India, USA, Middle East, and the UK."
                canonicalUrl="https://capablegroups.com/about-us"
            />

            {/* Hero */}
            <section className="pt-40 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible">
                    <span className="section-tag mb-6 inline-block">ABOUT US</span>
                </motion.div>
                <motion.h1
                    variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    className="text-5xl md:text-[72px] font-bold tracking-tighter leading-[1.0] mb-8 max-w-4xl"
                >
                    Who we <span className="italic text-[#ff6321]">are</span>
                </motion.h1>
                <motion.div
                    variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
                >
                    <p className="text-[#69686e] text-[15px] leading-relaxed">
                        Capable Groups is an enterprise technology consultancy founded in Hyderabad in 2010. Over 16 years, we have grown from a five-person team to a global organisation of 80+ professionals, delivering 250+ projects for clients in India, the United States, the Middle East, and the United Kingdom.
                    </p>
                    <p className="text-[#69686e] text-[15px] leading-relaxed">
                        We are now an AI-first organisation — applying the speed and intelligence of modern AI development to the delivery standards our clients have relied on for over a decade.
                    </p>
                </motion.div>
            </section>

            {/* Origin Story */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-14">
                        <span className="section-tag mb-4 inline-block">THE FOUNDING</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-xl">
                            The founding of <span className="italic text-[#ff6321]">Capable Groups</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7 space-y-5">
                            {[
                                'In 2010, our founder established Capable Groups in Hyderabad with a conviction that has remained central to the organisation ever since: that every business, regardless of size or sector, deserves access to technology that genuinely performs.',
                                'Not templates. Not generic solutions. Considered, well-engineered work built by professionals who take ownership of outcomes.',
                                'The name "Capable" was not arrived at by chance. It reflected a commitment to the client — that whatever the scope of the engagement, Capable Groups would arrive with the expertise, the discipline, and the character required to deliver.',
                                'In the early years, the team focused on website design, digital marketing, and mobile application development. Each engagement was an opportunity to deepen the organisation\'s capability and refine its delivery model.',
                                'By 2014, the team had grown to 25 professionals and the portfolio had expanded to over 40 projects. By 2018, Capable Groups was serving clients across three continents and had launched a dedicated US IT Staffing practice to meet growing North American demand.',
                                'In 2022, the organisation made a deliberate decision to invest in AI-assisted development. This was not a reactive response to market trends. It was a considered strategic move — the result of watching how the technology was evolving and concluding, clearly, that it would redefine what was possible in delivery timelines, system architecture, and outcomes.',
                                'By 2024, that investment had produced three active AI-powered digital products: SocialFlyAI, SocialScale Agency, and Atyuttama.',
                                'In 2026, Capable Groups undertakes the most significant transformation in its history — rebuilding its digital presence as an AI-first consultancy and formalising an approach to technology partnership that has been 16 years in the making.',
                            ].map((para, i) => (
                                <motion.p
                                    key={i}
                                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} custom={i * 0.04}
                                    className="text-[#69686e] text-[14.5px] leading-relaxed"
                                >
                                    {para}
                                </motion.p>
                            ))}
                            <motion.p
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="text-[#060612] text-[16px] font-bold italic mt-4"
                            >
                                "We are Capable. That has always been the point."
                            </motion.p>
                        </div>
                        <div className="lg:col-span-5">
                            <motion.div
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                                className="bg-[#f5f4f3] rounded-[28px] p-8 border border-gray-100 sticky top-32"
                            >
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-6 block">KEY MILESTONES</span>
                                <div className="space-y-4">
                                    {[
                                        { year: '2010', event: 'Founded in Hyderabad, 5 professionals' },
                                        { year: '2014', event: '25+ team, 40+ projects, US Staffing launch' },
                                        { year: '2018', event: '150+ projects, 3 continents, SaaS practice' },
                                        { year: '2022', event: 'AI investment begins, 200+ projects' },
                                        { year: '2024', event: '3 AI products live, 80+ team, 250+ projects' },
                                        { year: '2026', event: 'AI-first repositioning, new website' },
                                    ].map((m, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <span className="text-[11px] font-bold text-[#ff6321] w-10 flex-shrink-0 mt-0.5">{m.year}</span>
                                            <span className="text-[13px] text-[#060612] leading-snug">{m.event}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <div className="bg-[#f5f4f3]">
                <Timeline />
            </div>

            {/* Our People */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-14">
                        <span className="section-tag mb-4 inline-block">OUR PEOPLE</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                            Our <span className="italic text-[#ff6321]">team</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
                        <motion.div
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                            className="lg:col-span-7 space-y-4"
                        >
                            <p className="text-[#69686e] text-[15px] leading-relaxed">
                                Capable Groups employs 80+ professionals across technology, design, product management, and consulting disciplines.
                            </p>
                            <p className="text-[#69686e] text-[15px] leading-relaxed">
                                Our senior leadership team averages over 10 years of industry experience. Our delivery teams combine technical depth with working knowledge of the industries our clients operate in — enabling more considered solutions and more productive long-term relationships.
                            </p>
                            <p className="text-[#69686e] text-[15px] leading-relaxed">
                                We are headquartered in Gachibowli, Hyderabad, with client-facing relationships in the United States, the Middle East, and the United Kingdom.
                            </p>
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {teamStats.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                                className="bg-[#f5f4f3] rounded-2xl p-6 border border-gray-100"
                            >
                                <div className="text-4xl font-bold text-[#060612] tracking-tighter mb-1">{s.value}</div>
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#69686e]">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-24 bg-[#f5f4f3]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-14">
                        <span className="section-tag mb-4 inline-block">MISSION & VALUES</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">What <span className="italic text-[#ff6321]">drives</span> us</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
                            className="bg-white rounded-[24px] p-8 border border-gray-100">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-4 block">OUR VISION</span>
                            <p className="text-[#060612] text-[15px] leading-relaxed font-medium">
                                To be the most trusted AI-powered technology partner for enterprises and organisations building their digital infrastructure for the next decade.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.06}
                            className="bg-white rounded-[24px] p-8 border border-gray-100">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-4 block">OUR MISSION</span>
                            <p className="text-[#069686e] text-[14.5px] leading-relaxed text-[#69686e]">
                                To deliver future-grade technology solutions that combine 16+ years of proven execution discipline with the speed and intelligence of AI-first development — enabling clients to move faster without compromising on quality, security, or long-term scalability.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.12}
                            className="bg-white rounded-[24px] p-8 border border-gray-100 md:col-span-2 lg:col-span-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-4 block">OUR VALUES</span>
                            <div className="space-y-4">
                                {values.map((v, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6321] flex-shrink-0" />
                                        <div>
                                            <span className="text-[13px] font-bold text-[#060612]">{v.label}</span>
                                            <span className="text-[#69686e] text-[13px]"> — {v.desc}</span>
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
