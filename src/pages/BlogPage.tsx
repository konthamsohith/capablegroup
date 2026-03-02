import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const BlogPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            category: "DESIGN",
            title: "The future of scalable design systems in 2025",
            date: "Jan 2, 2026",
            author: { name: "Sophia Reyes", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800",
            featured: true
        },
        {
            category: "BRANDING",
            title: "Why storytelling shapes brand success",
            date: "Dec 20, 2025",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
        },
        {
            category: "DEVELOPMENT",
            title: "Built for High-Performance in Framer",
            date: "Dec 6, 2025",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
        },
        {
            category: "DEVELOPMENT",
            title: "Creating Lightning-Fast Websites in Framer",
            date: "Nov 3, 2025",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
        },
        {
            category: "BRANDING",
            title: "How stories shape digital experiences",
            date: "Oct 31, 2025",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
        }
    ];

    return (
        <div className="pt-32 bg-[#f4f4f4] min-h-screen font-geist flex flex-col">
            <SEO
                title="Our Blogs | Insights from Capable Groups"
                description="Explore insights from Capable Groups' experts on scalable design systems, digital experiences, branding, and high-performance development."
                canonicalUrl="https://capablegroups.com/blogs"
            />
            {/* Header */}
            <div className="text-center mb-16 px-4">
                <h1 className="text-5xl md:text-7xl font-medium text-[#060612] tracking-tighter">
                    Our Blogs
                </h1>
            </div>

            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, idx) => {
                        if (post.featured) {
                            return (
                                <motion.button
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="col-span-1 md:col-span-2 bg-white rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-sm border border-gray-100 min-h-[400px] text-left cursor-pointer"
                                >
                                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#69686e] uppercase mb-4 block">
                                                {post.category}
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-medium text-[#060612] tracking-tight leading-tight mb-8 max-w-sm">
                                                {post.title}
                                            </h2>
                                            <p className="text-[#69686e] text-sm font-medium">
                                                {post.date}
                                            </p>
                                        </div>
                                        {post.author && (
                                            <div className="flex items-center gap-3 mt-8">
                                                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
                                                <span className="font-medium text-[#060612] text-sm">{post.author.name}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 p-4 md:p-6 md:pl-0">
                                        <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden bg-gray-100">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        }

                        // Regular cards
                        return (
                            <motion.button
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="group relative col-span-1 bg-white rounded-2xl p-8 flex flex-col justify-between shadow-sm border border-gray-100 min-h-[300px] text-left cursor-pointer overflow-hidden transition-all duration-500"
                            >
                                {/* Expanding Background Image on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                                    <div className="absolute inset-0 bg-black/40 z-10" />
                                    <img src={post.image} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#69686e] group-hover:text-white/80 transition-colors duration-300 uppercase mb-4 block">
                                            {post.category}
                                        </span>
                                        <h3 className="text-2xl font-medium text-[#060612] group-hover:text-white transition-colors duration-300 tracking-tight leading-tight mb-6 pr-4">
                                            {post.title}
                                        </h3>
                                    </div>

                                    <div className="flex justify-between items-end w-full mt-8">
                                        <p className="text-[#69686e] group-hover:text-white/80 transition-colors text-sm font-medium duration-300">
                                            {post.date}
                                        </p>
                                        <div className="w-20 h-14 rounded-xl overflow-hidden bg-gray-100 shadow-sm shrink-0 shadow-black/10 group-hover:opacity-0 transition-opacity duration-300">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-12">
                    <button className="bg-[#050511] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md hover:scale-105 transition-transform">
                        Load More
                    </button>
                </div>
            </div>

            <div className="relative z-20 pt-16 md:pt-24">
                <CTA />
                <Footer />
            </div>
        </div>
    );
};

export default BlogPage;
