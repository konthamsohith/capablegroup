import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BlogCard = ({ category, title, description }: { category: string, title: string, description: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col h-full group"
    >
        <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-semibold tracking-widest text-[#4A96CB] uppercase bg-primary/5 px-3 py-1 rounded-full">
                {category}
            </span>
            <div className="p-2 bg-gray-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <ArrowUpRight size={20} />
            </div>
        </div>
        <h3 className="text-2xl font-semibold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
            {title}
        </h3>
        <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 flex-grow">
            {description}
        </p>
        <a href="#" className="text-secondary font-semibold text-sm hover:underline inline-flex items-center gap-1 mt-auto">
            Read More <span className="text-lg">›</span>
        </a>
    </motion.div>
);

const Blog: React.FC = () => {
    const posts = [
        {
            category: "Digital Marketing",
            title: "Evolution of Digital Advertising",
            description: "In today's world, digital marketing has evolved to become an integral part of advertising and marketing strategy for Every business."
        },
        {
            category: "Website Designing",
            title: "Creating Innovative User Experiences",
            description: "At Capable Groups, we are a set of web designers in Bangalore involved in creating innovative, user-friendly and modern digital experiences."
        },
        {
            category: "US IT Staffing",
            title: "Talent Acquisition in the Tech Industry",
            description: "US Staffing is a Talent Acquisition Industry which brings together HR Departments of the Clients with high-quality skilled candidates."
        }
    ];

    return (
        <section id="insights" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                            Blog post
                        </span>
                        <h2 className="text-5xl font-semibold text-secondary tracking-tight">
                            Insights from our <span className="text-primary">experts</span>
                        </h2>
                    </div>
                    <button className="hidden md:block bg-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition-all">
                        View all posts
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
