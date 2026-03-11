import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
    post: {
        id: number;
        slug: string;
        category: string;
        tag: string;
        title: string;
        excerpt: string;
        date: string;
        readTime: string;
        heroImage: string;
    };
}

const cardVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const ReadArrow = () => (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const navigate = useNavigate();
    return (
        <motion.article
            variants={cardVariant}
            key={post.id}
            className="group relative flex flex-col bg-white border border-gray-100 rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 h-full hover:border-[#ff6321]/30"
            onClick={() => navigate(`/blogs/${post.slug}`)}
        >
            {/* Orange top-edge accent line on hover */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
                style={{
                    background: 'linear-gradient(90deg, transparent, #ff6321, transparent)',
                }}
            />
            {/* Thumbnail */}
            <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                    src={post.heroImage}
                    alt={post.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category pill overlay */}
                <span className="absolute top-4 left-4 text-[9px] font-bold tracking-[0.2em] uppercase text-[#ff6321] bg-white/90 backdrop-blur-sm border border-[#ff6321]/20 px-2.5 py-1.5 rounded-full">
                    {post.tag}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-[11px] font-medium text-[#69686e] mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#69686e]/40" />
                    <span>{post.readTime}</span>
                </div>

                <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight text-[#000000] leading-[1.2] mb-4 group-hover:text-[#ff6321] transition-colors duration-300">
                    {post.title}
                </h3>

                <p className="text-[#69686e] text-[13px] leading-relaxed line-clamp-3 mb-5">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[12px] font-bold text-[#000000]/30 group-hover:text-[#ff6321] transition-colors duration-300 flex items-center gap-2">
                        Read more <ReadArrow />
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#f5f4f3] group-hover:bg-[#ff6321]/10 transition-colors duration-300 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-[#000000]/30 group-hover:text-[#ff6321] transition-colors duration-300" viewBox="0 0 16 16" fill="none">
                            <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
            </div>
        </motion.article>
    );
};

export default PostCard;
