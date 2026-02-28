import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Working with this team was effortless that they understood our brand vision & turned it into a digital experience that truly represents who we are.",
        author: "Olivia Carter",
        role: "Brand Director",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=olivia"
    },
    {
        id: 2,
        text: "They translated our ideas into a clean, modern digital presence that feels exactly right for our brand.",
        author: "Ethan Miller",
        role: "Director",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=ethan"
    },
    {
        id: 3,
        text: "The team instantly grasped what we needed and delivered a seamless experience that exceeded every expectation.",
        author: "Sophia Reyes",
        role: "Data Science Consultant",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=sophia"
    },
    {
        id: 4,
        text: "Their attention to detail and creative approach helped us launch a product that truly stands out in the market.",
        author: "Marcus Chen",
        role: "Founder",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=marcus"
    }
];

const Testimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth > 768 ? 600 : clientWidth;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                        &gt; TESTIMONIALS &lt;
                    </span>
                    <h2 className="text-6xl font-semibold text-secondary tracking-tight">
                        What clients say
                    </h2>
                </div>

                <div className="relative">
                    {/* Testimonials Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar px-12"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[320px] md:min-w-[550px] flex-shrink-0 bg-[#f0f0f0] p-4 rounded-[40px] border border-gray-100 snap-center"
                            >
                                <div className="bg-white p-10 md:p-12 rounded-[32px] h-full flex flex-col justify-between shadow-sm">
                                    <p className="text-xl md:text-2xl font-medium text-secondary leading-[1.4] mb-16">
                                        {item.text}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.avatar}
                                                alt={item.author}
                                                className="w-10 h-10 rounded-full object-cover grayscale"
                                            />
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-semibold text-secondary text-sm">{item.author}</h4>
                                                <span className="text-gray-300 text-sm">—</span>
                                                <p className="text-sm text-gray-400 font-medium">{item.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-0.5">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} size={14} fill="#0AA4E3" color="#0AA4E3" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation and Progress */}
                    <div className="flex flex-col items-center gap-8 mt-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-400" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Progress Line */}
                        <div className="w-full max-w-sm h-px bg-gray-200 relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-primary"
                                style={{ width: "20%" }}
                                animate={{ width: "40%" }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
