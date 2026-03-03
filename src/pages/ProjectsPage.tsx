import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const, delay: i * 0.08 } }),
};

const caseStudies = [
    {
        client: 'SocialFlyAI',
        url: 'https://socialflyai.com',
        type: 'AI Product Development — Full Stack',
        category: 'AI Products',
        year: '2024',
        context: 'SocialFlyAI required a technology partner capable of designing and building a production-ready AI-powered social media platform from the ground up — including content generation, scheduling automation, analytics, and third-party social platform integrations.',
        delivered: [
            'Full-stack web application architecture and build',
            'AI content generation layer, integrated with leading LLM providers',
            'Social media scheduling and distribution automation engine',
            'User dashboard with performance analytics and reporting',
            'API integrations with major social media platforms',
            'Deployment infrastructure with CI/CD pipelines',
        ],
        outcome: 'SocialFlyAI is now a live, actively scaling AI SaaS product serving a growing user base. The platform operates reliably at production scale and has been structured to support continued feature development.',
        tags: ['AI Product', 'Full Stack', 'LLM Integration', 'SaaS'],
    },
    {
        client: 'SocialScale Agency',
        url: 'https://www.socialscale.agency',
        type: 'Web Development — Agency Digital Presence',
        category: 'Web Development',
        year: '2024',
        context: 'SocialScale Agency required a website that would communicate the depth and credibility of their digital marketing expertise to prospective enterprise clients — clearly positioning the agency as a professional partner rather than a commodity service provider.',
        delivered: [
            'Custom website design and full development',
            'Conversion-optimised service and case study page structure',
            'Integrated lead capture and CRM connection',
            'Technical SEO foundation and structured data implementation',
            'Fully responsive, performance-optimised delivery',
        ],
        outcome: 'SocialScale Agency operates a professional, high-performance digital presence that accurately represents their positioning and actively supports new business development.',
        tags: ['Web Development', 'SEO', 'CRM Integration'],
    },
    {
        client: 'Atyuttama',
        url: 'https://atyuttama.com',
        type: 'Brand Digital Identity',
        category: 'Web Development',
        year: '2024',
        context: 'Atyuttama required a digital presence that communicated the purpose, values, and character of the organisation with clarity and authenticity.',
        delivered: [
            'Brand-aligned website design and development',
            'Content architecture and information design',
            'Mobile-first, fully responsive build',
            'Performance optimisation to meet Core Web Vitals standards',
            'SEO foundation and analytics integration',
        ],
        outcome: 'A digital presence that accurately reflects the brand and provides a clear, well-structured experience for the organisation\'s audience.',
        tags: ['Brand Identity', 'Web Development', 'Performance'],
    },
];

const stats = [
    { value: '250+', label: 'Projects Delivered' },
    { value: '10+', label: 'Industry Verticals' },
    { value: '4', label: 'Continents Served' },
    { value: '80%', label: 'Client Retention' },
];

const categories = ['All', 'Web Development', 'Mobile Applications', 'AI Products', 'E-Commerce', 'Consulting'];

const ProjectsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? caseStudies
        : caseStudies.filter(c => c.category === activeFilter);

    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#060612]">
            <SEO
                title="Projects & Case Studies | Capable Groups"
                description="Over 16 years, Capable Groups has delivered 250+ projects across web, mobile, AI product development, and technology consulting worldwide."
                canonicalUrl="https://capablegroups.com/projects"
            />

            {/* Hero */}
            <section className="pt-40 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible">
                    <span className="section-tag mb-6 inline-block">PROJECT PORTFOLIO</span>
                </motion.div>
                <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    className="text-5xl md:text-[72px] font-bold tracking-tighter leading-[1.0] mb-8 max-w-4xl">
                    250+ projects.<br />
                    <span className="italic text-[#ff6321]">16 years of delivery.</span>
                </motion.h1>
                <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    className="text-[#69686e] text-lg leading-relaxed max-w-2xl">
                    Over 16 years, Capable Groups has delivered more than 250 projects across web, mobile, e-commerce, AI product development, and technology consulting. The following represents a selection of recent and significant engagements.
                </motion.p>
            </section>

            {/* Stats Strip */}
            <section className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                            className="bg-white rounded-2xl p-6 border border-gray-100 text-center"
                        >
                            <div className="text-4xl font-bold text-[#060612] tracking-tighter mb-1">{s.value}</div>
                            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#69686e]">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Filter */}
            <section className="pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-[12px] font-bold tracking-wide transition-all ${activeFilter === cat
                                ? 'bg-[#ff6321] text-white'
                                : 'bg-white text-[#69686e] border border-gray-200 hover:border-[#ff6321]/40 hover:text-[#ff6321]'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Case Studies */}
            <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8">
                    {filtered.map((cs, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={i * 0.05}
                            className="bg-white rounded-[28px] overflow-hidden border border-gray-100"
                        >
                            {/* Card Header */}
                            <div className="p-8 md:p-10 border-b border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-2 block">{cs.type}</span>
                                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#060612]">{cs.client}</h2>
                                    </div>
                                    <a
                                        href={cs.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#060612] text-white text-[13px] font-bold rounded-xl hover:bg-[#ff6321] transition-colors"
                                    >
                                        Visit Site
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cs.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase text-[#69686e] bg-[#f5f4f3] border border-gray-200 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Body — 3 columns */}
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                <div className="p-8 md:p-10">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#69686e] mb-3 block">Client Context</span>
                                    <p className="text-[#060612] text-[14px] leading-relaxed">{cs.context}</p>
                                </div>
                                <div className="p-8 md:p-10">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#69686e] mb-3 block">What We Delivered</span>
                                    <ul className="space-y-2.5">
                                        {cs.delivered.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff6321] flex-shrink-0" />
                                                <span className="text-[#060612] text-[13px] leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 md:p-10">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#69686e] mb-3 block">Outcome</span>
                                    <p className="text-[#060612] text-[14px] leading-relaxed">{cs.outcome}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default ProjectsPage;
