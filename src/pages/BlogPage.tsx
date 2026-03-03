import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
};

const posts = [
    {
        category: 'AI & ENTERPRISE TECHNOLOGY',
        title: 'Is Your Digital Infrastructure Ready for the Age of AI Agents?',
        excerpt: 'The question facing technology and business leaders in 2026 is no longer whether AI will affect their digital infrastructure — it is whether that infrastructure is designed to work with AI, or whether it will be bypassed by it.',
        date: 'March 2026',
        readTime: '7 min read',
        featured: true,
        heroImage: '/blog-ai-agents.png',
        content: [
            'Enterprise technology strategy has entered a period of genuine transition. The question facing technology and business leaders in 2026 is no longer whether AI will affect their digital infrastructure — it is whether that infrastructure is designed to work with AI, or whether it will be bypassed by it.',
            'The specific risk is this: AI agents — automated systems capable of browsing, reading, reasoning about, and acting on web content — are becoming primary actors on the internet. If your website and digital systems are not structured in ways these agents can understand, you are effectively invisible to an increasingly important channel.',
            'Most enterprise websites were built as presentation layers. They were designed to communicate information to human visitors — not to serve as structured data sources for automated systems. The consequence is that content is often embedded in visual layouts, locked behind JavaScript rendering, or distributed across PDF documents rather than being available as structured, machine-readable data.',
        ],
        dimensions: [
            { title: 'Structured Data Implementation', body: 'Schema.org markup applied consistently across all pages enables AI systems to correctly classify and interpret your content.' },
            { title: 'Semantic HTML and Content Hierarchy', body: 'Well-structured HTML with meaningful heading hierarchies provides a content skeleton that machine systems can navigate.' },
            { title: 'API-Accessible Information Architecture', body: 'Critical business information should be accessible via documented APIs, not only via rendered web pages.' },
            { title: 'Performance and Crawlability', body: 'Pages that load quickly and return clean HTML are significantly more accessible to automated systems.' },
        ],
    },
    {
        category: 'STRATEGY & INSIGHT',
        title: '16 Years of Enterprise Technology Delivery: What We Have Learned',
        excerpt: 'When Capable Groups was founded in 2010, the technology industry looked significantly different. Over the 16 years since, we have delivered more than 250 projects. These are our most durable conclusions.',
        date: 'February 2026',
        readTime: '8 min read',
        featured: false,
        heroImage: '/blog-16years.png',
        lessons: [
            { title: 'Problem Definition Is the Work', body: 'The most consequential part of any technology engagement is the definition of the problem to be solved. Clients frequently arrive with solutions in mind. Experienced technology partners understand that the stated solution is the starting point, not the specification.' },
            { title: 'Delivery Speed Is a Strategic Variable', body: 'In 2010, a complex web platform required six to twelve months to design, build, test, and deploy. In 2026, AI-assisted development has compressed that timeline significantly. This is not a reduction in quality — it is an expansion in the number of iterations available within a given timeframe.' },
            { title: 'Institutional Trust Is the Durable Asset', body: 'In technology services, institutional trust is the most valuable and the most difficult thing to build. It is built through consistent delivery, clear communication, and the willingness to tell a client when their proposed approach is not the right one.' },
            { title: 'Documentation Is Infrastructure', body: 'Every system we deliver is accompanied by documentation sufficient for a qualified engineer with no prior project context to understand, maintain, and extend it. Systems without adequate documentation depreciate rapidly as personnel change.' },
            { title: 'The Next Platform Shift Is Always Closer Than It Appears', body: 'In 2018, AI-assisted development was a fringe topic. By 2022, it was central. By 2026, it is the standard. The organisations that invested early — with considered conviction, not speculation — have consistently outperformed those that waited for consensus.' },
        ],
    },
    {
        category: 'COMPANY PERSPECTIVE',
        title: 'What "AI-First" Means for a Technology Consultancy in 2026',
        excerpt: 'The phrase "AI-first" is used widely in the technology industry at present. In many cases, it is used loosely — as a marketing descriptor rather than a description of actual operating practice.',
        date: 'January 2026',
        readTime: '5 min read',
        featured: false,
        link: '/blogs/ai-first-consultancy-2026',
        heroImage: '/blog-aifirst-hero.png',
        points: [
            { title: 'AI Is Integrated Into the Scoping and Design Phase', body: 'Every engagement now begins with an AI-assisted scoping process. We use large language models to accelerate the production of wireframe copy, content architecture proposals, technical specifications, and initial project documentation.' },
            { title: 'AI Features Are a Standard Component', body: 'Capabilities that were previously premium additions — intelligent search, content summarisation, conversational interfaces — are now standard components of the development toolkit.' },
            { title: 'Delivery Methodologies Are Continuously Updated', body: 'Our technical practice leadership reviews AI tooling on a rolling basis and integrates new capabilities into our methodology when they meet our standards for reliability and output quality.' },
            { title: 'Client Education Is Part of the Delivery', body: 'We ensure that client teams understand how to use AI tools to manage, update, and extend the systems we build — reducing ongoing dependency and increasing the long-term value clients extract from our work.' },
        ],
    },
];

const BlogPage: React.FC = () => {
    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#060612] flex flex-col">
            <SEO
                title="Perspectives | Capable Groups"
                description="Analysis, insight, and informed perspective from the Capable Groups team on AI, enterprise technology, digital strategy, and building at the frontier."
                canonicalUrl="https://capablegroups.com/blogs"
            />

            {/* Hero */}
            <section className="pt-40 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div variants={fadeUp} initial="hidden" animate="visible">
                    <span className="section-tag mb-6 inline-block">PERSPECTIVES</span>
                </motion.div>
                <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    className="text-5xl md:text-[72px] font-bold tracking-tighter leading-[1.0] mb-8 max-w-3xl">
                    From the <span className="italic text-[#ff6321]">field</span>
                </motion.h1>
                <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    className="text-[#69686e] text-lg leading-relaxed max-w-xl">
                    Analysis, insight, and informed perspective from the Capable Groups team. We write about AI, enterprise technology, digital strategy, and the practical realities of building at the frontier.
                </motion.p>
            </section>

            {/* Articles */}
            <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
                <div className="flex flex-col gap-6">
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} custom={i * 0.06}
                            className="bg-white rounded-[28px] overflow-hidden border border-gray-100"
                        >
                            {/* Full-bleed Hero Image Banner */}
                            {(post as any).heroImage && (
                                <div className="w-full h-56 md:h-72 overflow-hidden">
                                    <img
                                        src={(post as any).heroImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            )}

                            {/* Article Header */}
                            <div className="p-8 md:p-10 border-b border-gray-100">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321]">{post.category}</span>
                                    <div className="flex items-center gap-4 text-[11px] font-medium text-[#69686e]">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#69686e]" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#060612] leading-snug mb-4 max-w-3xl">
                                    {post.title}
                                </h2>
                                <p className="text-[#69686e] text-[14px] leading-relaxed max-w-3xl">
                                    {post.excerpt}
                                </p>
                            </div>

                            {/* Article Body */}
                            <div className="p-8 md:p-10">
                                {post.content && (
                                    <div className="mb-8 space-y-4">
                                        {post.content.map((para, j) => (
                                            <p key={j} className="text-[#69686e] text-[14px] leading-relaxed">{para}</p>
                                        ))}
                                    </div>
                                )}

                                {post.dimensions && (
                                    <div>
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#69686e] mb-4 block">THE FOUR DIMENSIONS OF AI READINESS</span>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {post.dimensions.map((d, j) => (
                                                <div key={j} className="bg-[#f5f4f3] rounded-xl p-5">
                                                    <h4 className="text-[13px] font-bold text-[#060612] mb-1.5">{j + 1}. {d.title}</h4>
                                                    <p className="text-[#69686e] text-[13px] leading-relaxed">{d.body}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <a href="/contact" className="inline-flex items-center gap-2 text-[13px] font-bold text-[#ff6321] hover:underline">
                                                Speak With Our Technology Team →
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {post.lessons && (
                                    <div className="space-y-5">
                                        {post.lessons.map((l, j) => (
                                            <div key={j} className="flex items-start gap-4">
                                                <span className="text-[22px] font-bold text-[#ff6321]/20 leading-none tracking-tighter flex-shrink-0 mt-0.5">{j + 1}</span>
                                                <div>
                                                    <h4 className="text-[14px] font-bold text-[#060612] mb-1">{l.title}</h4>
                                                    <p className="text-[#69686e] text-[13.5px] leading-relaxed">{l.body}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {post.points && (
                                    <div className="space-y-5">
                                        {post.points.map((p, j) => (
                                            <div key={j} className="flex items-start gap-4">
                                                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#ff6321] flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-[14px] font-bold text-[#060612] mb-1">{p.title}</h4>
                                                    <p className="text-[#69686e] text-[13.5px] leading-relaxed">{p.body}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {/* @ts-ignore - link is optional */}
                                {(post as any).link && (
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <Link
                                            to={(post as any).link}
                                            className="inline-flex items-center gap-2 px-5 py-3 bg-[#ff6321] text-white text-[13px] font-bold rounded-xl hover:bg-[#e45217] transition-colors"
                                        >
                                            Read Full Article with Images →
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default BlogPage;
