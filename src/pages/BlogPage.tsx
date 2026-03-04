import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut' as const, delay: i * 0.07 },
    }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

import { posts, CATEGORIES } from '../data/blogData';

import PostCard from '../components/PostCard';

const featuredCardVariant = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: 'easeOut' as const, delay: i * 0.07 },
    }),
};

const FeaturedCard: React.FC<{ post: (typeof posts)[0] }> = ({ post }) => (
    <motion.div
        variants={featuredCardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group relative rounded-[28px] overflow-hidden bg-[#000000] cursor-pointer"
        style={{ minHeight: 440 }}
    >
        {/* Background image */}
        <div className="absolute inset-0">
            <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-14" style={{ minHeight: 440 }}>
            <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#ff6321] bg-[#ff6321]/10 border border-[#ff6321]/30 px-3 py-1.5 rounded-full">
                    {post.tag}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-[11px] font-medium text-white/50">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-[11px] font-medium text-white/50">{post.readTime}</span>
            </div>

            <h2 className="text-[28px] sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5 max-w-3xl">
                {post.title}
            </h2>

            <p className="text-white/60 text-[15px] leading-relaxed max-w-2xl mb-8">
                {post.excerpt}
            </p>

            <span className="inline-flex items-center gap-2.5 text-[13px] font-bold text-[#ff6321] group-hover:gap-4 transition-all duration-300">
                Read Article
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </div>
    </motion.div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const BlogPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const featured = posts.find((p) => p.featured) || posts[0];
    const filtered =
        activeCategory === 'All'
            ? posts.filter((p) => !p.featured)
            : posts.filter((p) => p.category === activeCategory && !p.featured);

    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#000000] flex flex-col">
            <SEO
                title="Perspectives | Capable Groups"
                description="Analysis, insight, and informed perspective from the Capable Groups team on AI, enterprise technology, digital strategy, and building at the frontier."
                canonicalUrl="https://capablegroups.com/blogs"
            />

            {/* ── Hero Header ── */}
            <section className="pt-40 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                    <span className="section-tag mb-6 inline-block">PERSPECTIVES</span>
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-[40px] sm:text-[56px] md:text-[72px] font-bold tracking-tighter leading-[1.0] max-w-2xl text-[#000000]"
                    >
                        From the{' '}
                        <span className="italic text-[#ff6321]">field</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="text-[#69686e] text-[15px] leading-relaxed max-w-sm md:text-right"
                    >
                        Analysis and informed perspective from the Capable Groups team on AI, enterprise technology, and digital strategy.
                    </motion.p>
                </div>
            </section>

            {/* ── Featured Article ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
                <FeaturedCard post={featured} />
            </section>

            {/* ── Category Filters ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 pb-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-1">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-[12px] font-bold tracking-wide transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-[#000000] text-white'
                                    : 'text-[#69686e] hover:text-[#000000] hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#69686e]">
                        {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </section>

            {/* ── Article Grid ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-28 flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.length > 0 ? (
                            filtered.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))
                        ) : (
                            <motion.div
                                variants={cardVariant}
                                className="col-span-3 text-center py-24 text-[#69686e] text-[15px]"
                            >
                                No articles in this category yet.
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default BlogPage;
