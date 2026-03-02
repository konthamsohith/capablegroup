import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Code2, Smartphone, ShoppingBag, Megaphone } from 'lucide-react';

const ServiceCard = ({ title, description, tags, icon: Icon, index }: { title: string, description: string, tags: string[], icon: any, index: number }) => (
    <div
        className="sticky top-32 mb-12 last:mb-0"
        style={{ zIndex: index + 10 }}
    >
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="bg-white p-10 md:p-12 rounded-[40px] transition-all duration-500 group"
        >
            <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight max-w-[70%] leading-tight">
                    {title}
                </h3>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 border border-gray-100/50 shadow-sm"
                >
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Icon size={32} strokeWidth={1.2} />
                    </motion.div>
                </motion.div>
            </div>

            <div className="border-t border-dotted border-gray-200/80 mb-10"></div>

            <p className="text-muted text-xl leading-relaxed mb-12 font-medium">
                {description}
            </p>

            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-6 py-2.5 bg-gray-50/80 text-[11px] font-black tracking-[0.2em] text-muted/70 uppercase rounded-full border border-gray-100/50"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    </div>
);

const Services: React.FC = () => {
    const services = [
        {
            title: "Branding & Identity",
            description: "From concept to prototype, we create user-centered interfaces that balance beauty with performance, ensuring every interaction feels effortless.",
            tags: ["IDENTITY", "POSITIONING", "VOICE"],
            icon: Sparkles
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive, user-centered interfaces that blend clarity, beauty, and effortless interaction.",
            tags: ["WEB", "PRODUCT", "APP"],
            icon: PenTool
        },
        {
            title: "Web Development",
            description: "We build fast, scalable, and fully responsive websites that perform beautifully — whether it's a simple portfolio or a full digital platform.",
            tags: ["FRAMER", "FRONT-END", "CMS"],
            icon: Code2
        },
        {
            title: "Mobile Apps",
            description: "Developing high-performance native and cross-platform mobile applications that provide seamless user experiences.",
            tags: ["IOS", "ANDROID", "REACT NATIVE"],
            icon: Smartphone
        },
        {
            title: "E-Commerce",
            description: "Scalable online stores designed to convert visitors into customers with optimized checkout flows and product discovery.",
            tags: ["SHOPIFY", "STRIPE", "CONVERSION"],
            icon: ShoppingBag
        },
        {
            title: "Digital Marketing",
            description: "Data-driven strategies to increase your visibility and reach your target audience through SEO, SEM, and social media.",
            tags: ["SEO", "STRATEGY", "GROWTH"],
            icon: Megaphone
        }
    ];

    return (
        <section id="services" className="py-32 bg-[#F2F2F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-20 lg:gap-32 items-stretch">
                    {/* Left Column Container */}
                    <div className="relative">
                        {/* Sticky Header Content */}
                        <div className="lg:sticky lg:top-40 h-fit py-4">
                            <div className="flex flex-col items-start text-left">
                                <span className="section-tag mb-10 text-primary border-primary/20 bg-primary/5">
                                    <span className="flex items-center gap-1">
                                        <span className="opacity-50 font-light">‹</span>
                                        <span>WHAT WE DO</span>
                                        <span className="opacity-50 font-light">›</span>
                                    </span>
                                </span>

                                <h2 className="text-6xl md:text-7xl font-bold text-secondary tracking-tighter mb-14 leading-[1.1]">
                                    Services built <br />
                                    to drive <span className="text-primary italic">impact</span>
                                </h2>

                                <div className="relative inline-block mt-4">
                                    <button className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 active:scale-95">
                                        Discuss your ideas
                                    </button>

                                    {/* Handwritten Note & Arrow */}
                                    <div className="absolute left-full ml-10 top-1/2 -translate-y-1/2 hidden xl:block whitespace-nowrap">
                                        <div className="flex items-center gap-5">
                                            <div className="relative w-16 h-12">
                                                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-primary/40 -scale-x-100 rotate-12">
                                                    <path d="M5 5C15 5 50 10 50 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" />
                                                    <path d="M40 28L50 35L57 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="handwritten text-primary text-2xl -rotate-6 tracking-wide">
                                                Let's get started
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sticky Stacking List */}
                    <div className="flex flex-col relative">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
