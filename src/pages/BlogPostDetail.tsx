import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/blogData';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import { Shield, Users, FileText, ArrowRight, ArrowLeft } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'shield': <Shield className="w-5 h-5" />,
    'users': <Users className="w-5 h-5" />,
    'file-text': <FileText className="w-5 h-5" />,
};

const BlogPostDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = posts.find((p) => p.slug === slug);

    useEffect(() => {
        if (!post) {
            // If post not found, redirect to blog list or show error
            // For now, redirecting to /blogs
            navigate('/blogs', { replace: true });
        }
    }, [post, navigate]);

    if (!post) return null;

    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#000000]">
            <SEO
                title={`${post.title} | Capable Groups`}
                description={post.description || post.excerpt}
                canonicalUrl={`https://capablegroups.com/blogs/${post.slug}`}
            />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-44 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 mb-10 text-[11px] font-bold tracking-widest uppercase text-[#69686e]">
                            <Link to="/blogs" className="hover:text-[#ff6321] transition-colors">Perspectives</Link>
                            <span className="opacity-30">/</span>
                            <span className="text-[#000000]">{post.category}</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-[0.95] mb-10 text-balance">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 mb-12 border-y border-black/5 py-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-[#ff6321]" />
                                <span className="text-[12px] font-bold uppercase tracking-widest">{post.tag}</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#69686e] text-[12px] font-medium">
                                <span>{post.date}</span>
                                <span className="w-1 h-1 rounded-full bg-black/20" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        {post.introParagraphs && post.introParagraphs.map((para, i) => (
                            <p key={i} className="text-[#000000] text-[18px] md:text-[21px] leading-relaxed max-w-2xl mb-6 font-medium opacity-90">
                                {para}
                            </p>
                        ))}
                    </motion.div>
                </div>

                {/* Hero Image - Same content width as title for alignment */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
                >
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl shadow-black/5 bg-black/5">
                        <img
                            src={post.heroImage}
                            alt={post.title}
                            width="1200"
                            height="600"
                            className="w-full h-full object-cover object-center block"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Content Body - Standardized Vertical Rhythm */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-32">

                {/* Intro quote - Integrated variant */}
                {post.introQuote && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="pt-12"
                    >
                        <div className="relative">
                            <div className="absolute -left-8 top-0 text-7xl font-serif text-[#ff6321] opacity-20">"</div>
                            <blockquote className="relative">
                                <p className="text-[#000000] text-[28px] md:text-[36px] font-serif leading-tight tracking-tight italic">
                                    {post.introQuote.text}
                                </p>
                                <footer className="mt-6 flex items-center gap-4">
                                    <span className="w-10 h-px bg-black/10" />
                                    <span className="text-[12px] font-bold text-[#69686e] uppercase tracking-widest">
                                        {post.introQuote.author}
                                    </span>
                                </footer>
                            </blockquote>
                        </div>
                    </motion.section>
                )}

                {/* Sections - Refined for "One Narrative" feel */}
                {post.sections && post.sections.map((sec, i) => (
                    <motion.section
                        key={i}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            {sec.label && (
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321]">
                                    {sec.label}
                                </span>
                            )}
                            {sec.title && (
                                <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#000000] leading-tight">
                                    {sec.title}
                                </h2>
                            )}
                            <div className="space-y-4">
                                {sec.body.map((para, j) => (
                                    <p key={j} className="text-[#69686e] text-[17px] leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {sec.image && (
                            <div className="py-4">
                                <div className="rounded-[24px] overflow-hidden aspect-[16/10] shadow-xl border border-black/5">
                                    <img 
                                        src={sec.image} 
                                        alt={sec.imageAlt ?? ''} 
                                        width="800"
                                        height="500"
                                        loading="lazy"
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                {sec.imageCaption && (
                                    <p className="text-[12px] text-[#69686e] font-medium mt-4 italic opacity-70">
                                        — {sec.imageCaption}
                                    </p>
                                )}
                            </div>
                        )}
                    </motion.section>
                ))}

                {/* Constancies / Insights Section - Integrated as a 'Chapter' */}
                {post.constancies && (
                    <motion.section
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="pt-12"
                    >
                        <div className="bg-white border border-black/5 rounded-[40px] p-8 md:p-14 shadow-sm relative overflow-hidden">
                            {/* Decorative background accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6321]/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <div className="relative z-10 space-y-12">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321]">
                                        {post.constancies.label}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight max-w-xl">
                                        {post.constancies.title}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 gap-10">
                                    {post.constancies.items.map((c, i) => (
                                        <div key={i} className="flex gap-6 items-start group">
                                            <div className="w-12 h-12 rounded-2xl bg-[#ff6321]/10 text-[#ff6321] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#ff6321] group-hover:text-white">
                                                {iconMap[c.iconKey] || <Shield className="w-6 h-6" />}
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-[18px] font-bold">{c.title}</h3>
                                                <p className="text-[#69686e] text-[15px] leading-relaxed">{c.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {post.constancies.quote && (
                                    <div className="pt-8 border-t border-black/5 mt-12">
                                        <p className="text-[20px] font-serif italic text-black/80">
                                            "{post.constancies.quote}"
                                        </p>
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#69686e] mt-4">
                                            — {post.constancies.quoteAuthor}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* Closing Section */}
                {(post.closingTitle || post.closingParagraphs) && (
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {post.closingTitle && (
                            <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">
                                {post.closingTitle}
                            </h2>
                        )}
                        <div className="space-y-6">
                            {post.closingParagraphs && post.closingParagraphs.map((para, i) => (
                                <p key={i} className="text-[#69686e] text-[17px] leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff6321] text-white text-[14px] font-bold rounded-2xl hover:bg-[#e45217] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#ff6321]/20"
                            >
                                Discuss your project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/blogs"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#000000] text-[14px] font-bold rounded-2xl border border-black/5 hover:border-[#ff6321]/20 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Perspectives
                            </Link>
                        </div>
                    </motion.section>
                )}
            </div>

            <CTA />
            <Footer />
        </div>
    );
};

export default BlogPostDetail;
