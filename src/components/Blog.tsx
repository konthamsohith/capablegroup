import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BlogCard = ({ category, title, description }: { category: string, title: string, description: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="glass-card p-10 rounded-[40px] flex flex-col h-full group transition-all duration-500"
    >
        <div className="flex justify-between items-start mb-8">
            <span className="px-4 py-1.5 bg-primary/10 text-[10px] font-bold tracking-[0.2em] text-primary uppercase rounded-full">
                {category}
            </span>
            <div className="p-3 bg-background/50 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <ArrowUpRight size={20} />
            </div>
        </div>
        <h3 className="text-3xl font-bold text-secondary mb-6 leading-tight group-hover:text-primary transition-colors tracking-tight">
            {title}
        </h3>
        <p className="text-muted text-lg leading-relaxed mb-8 flex-grow">
            {description}
        </p>
        <a href="#" className="text-secondary font-bold text-sm tracking-tight inline-flex items-center gap-2 group/btn">
            LEARN MORE
            <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary text-xl"
            >
                ›
            </motion.span>
        </a>
    </motion.div>
);

const Blog: React.FC = () => {
    const posts = [
        {
            category: "Digital Marketing",
            title: "Evolution of Digital Advertising",
            description: "Modern strategies that have evolved to become an integral part of high-impact advertising for every business."
        },
        {
            category: "Website Designing",
            title: "Creating Innovative User Experiences",
            description: "Involved in creating innovative, user-friendly and modern digital experiences that capture the brand essence."
        },
        {
            category: "US IT Staffing",
            title: "Talent Acquisition in the Tech Industry",
            description: "Bringing together HR departments of the clients with high-quality skilled candidates for seamless integration."
        }
    ];

    return (
        <section id="blog" className="relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="section-tag mb-4">LATEST INSIGHTS</span>
                    <h2 className="text-5xl md:text-7xl font-geist font-medium text-secondary tracking-tighter mb-8">
                        Insights from our <span className="text-primary italic">experts</span>
                    </h2>
                    <p className="max-w-2xl text-muted text-xl font-medium mb-12 leading-relaxed">
                        Stay updated with the latest trends and thoughts from our industry-leading specialists across infrastructure and technology.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
