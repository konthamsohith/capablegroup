import React from 'react';
import { motion } from 'framer-motion';
import { posts } from '../data/blogData';
import PostCard from './PostCard';

const ArrowRight = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
);

const Blog: React.FC = () => (
    <section id="blog" className="relative pt-24 pb-24 bg-[#f5f4f3] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Header: Combined Mockup Layout ── */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag mb-8 inline-block">LATEST INSIGHTS</span>
                    <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-medium tracking-tighter leading-[1.1] text-[#000000] mb-8">
                        Insights from our <span className="italic text-[#ff6321]">experts</span>
                    </h2>
                    <p className="text-[#69686e] text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto font-medium">
                        Stay updated with the latest trends and thoughts from our industry-leading specialists across infrastructure and technology.
                    </p>
                </motion.div>
            </div>

            {/* ── Same Cards as Blog ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.slice(0, 3).map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {/* View All CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center"
            >
                <motion.a
                    href="/blogs"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-[#000000] text-white text-[14px] font-bold rounded-2xl hover:bg-[#ff6321] transition-all transform hover:-translate-y-1 shadow-2xl"
                >
                    BROWSE ALL PERSPECTIVES <ArrowRight />
                </motion.a>
            </motion.div>

        </div>
    </section>
);

export default Blog;
