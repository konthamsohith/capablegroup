import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
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
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#000000] overflow-x-hidden">
            <SEO
                title="Projects & Case Studies | Capable Groups"
                description="Over 16 years, Capable Groups has delivered 250+ projects across web, mobile, AI product development, and technology consulting worldwide."
                canonicalUrl="https://capablegroups.com/projects"
            />

            {/* ── Hero Section ── */}
            <section className="pt-32 sm:pt-48 pb-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" animate="visible">
                        <span className="section-tag mb-8 inline-block">PROJECT PORTFOLIO</span>
                        <h1 className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[90px] font-bold tracking-tighter leading-[0.9] mb-12 text-[#000000]">
                            250+ projects.<br />
                            <span className="italic text-[#ff6321]">16 years of delivery.</span>
                        </h1>
                        <p className="text-[#69686e] text-xl md:text-2xl leading-relaxed max-w-3xl mb-16">
                            Over 16 years, Capable Groups has delivered more than 250 projects across web, mobile, e-commerce, AI product development, and technology consulting. The following represents a selection of recent and significant engagements.
                        </p>
                    </motion.div>

                    {/* Stats Modular Board */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                                className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm group hover:border-[#ff6321]/30 transition-all duration-500"
                            >
                                <div className="text-5xl font-black text-[#000000] tracking-tighter mb-2 group-hover:text-[#ff6321] transition-colors">
                                    {s.value}
                                </div>
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#69686e]">
                                    {s.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Filter Navigation */}
                    <div className="flex flex-wrap gap-3 mb-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-3 rounded-2xl text-[13px] font-bold tracking-tight transition-all duration-300 ${activeFilter === cat
                                    ? 'bg-[#000000] text-white shadow-lg'
                                    : 'bg-white text-[#69686e] border border-gray-100 hover:border-[#ff6321]/40'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Case Study Boards Grid ── */}
            <section className="pb-40">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12">
                        {filtered.map((cs) => (
                            <motion.div
                                key={cs.client}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                                className="group bg-white rounded-[48px] overflow-hidden border border-gray-100 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.06)] hover:shadow-[0_48px_100px_-20px_rgba(0,0,0,0.12)] transition-[box-shadow,border-color,transform] duration-700 hover:-translate-y-1"
                            >
                                {/* Board Header */}
                                <div className="p-10 md:p-14 border-b border-gray-50 bg-gradient-to-br from-white to-[#fcfcfc] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6321]/5 rounded-bl-full translate-x-32 -translate-y-32 transition-transform group-hover:scale-125 duration-1000" />

                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
                                        <div className="max-w-2xl">
                                            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#ff6321] mb-6 block">
                                                {cs.type}
                                            </span>
                                            <h2 className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-tighter text-[#000000] leading-[0.9] mb-8">
                                                {cs.client}
                                            </h2>
                                            <div className="flex flex-wrap gap-2">
                                                {cs.tags.map(tag => (
                                                    <span key={tag} className="px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#69686e] bg-[#f5f4f3] rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={cs.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-8 py-5 bg-[#000000] text-white text-sm font-bold rounded-2xl hover:bg-[#ff6321] transition-all transform hover:-translate-y-1 shadow-xl"
                                        >
                                            Visit Site
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Board Details Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-50">
                                    {/* Client Context */}
                                    <div className="p-10 md:p-12 group/info">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-8 h-8 rounded-lg bg-[#f5f4f3] flex items-center justify-center text-[#ff6321] group-hover/info:bg-[#ff6321] group-hover/info:text-white transition-colors">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                            </div>
                                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#69686e]">Client Context</span>
                                        </div>
                                        <p className="text-[#000000] text-[16px] leading-relaxed font-medium">
                                            {cs.context}
                                        </p>
                                    </div>

                                    {/* What We Delivered */}
                                    <div className="p-10 md:p-12 bg-[#fcfcfc] group/delivery">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-8 h-8 rounded-lg bg-[#f5f4f3] flex items-center justify-center text-[#ff6321] group-hover/delivery:bg-[#ff6321] group-hover/delivery:text-white transition-colors">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /></svg>
                                            </div>
                                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#69686e]">What We Delivered</span>
                                        </div>
                                        <ul className="space-y-4">
                                            {cs.delivered.map((item) => (
                                                <li key={item} className="flex items-start gap-4">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff6321] flex-shrink-0" />
                                                    <span className="text-[#000000] text-[14.5px] leading-snug font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outcome */}
                                    <div className="p-10 md:p-12 group/outcome">
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="w-8 h-8 rounded-lg bg-[#f5f4f3] flex items-center justify-center text-[#ff6321] group-hover/outcome:bg-[#ff6321] group-hover/outcome:text-white transition-colors">
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                                            </div>
                                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#69686e]">Strategic Outcome</span>
                                        </div>
                                        <p className="text-[#000000] text-[16px] leading-relaxed font-medium">
                                            {cs.outcome}
                                        </p>
                                        <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between opacity-40">
                                            <span className="text-[10px] font-bold tracking-widest uppercase">Performance Verified</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff6321]" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default ProjectsPage;
