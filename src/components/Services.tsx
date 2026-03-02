import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Code2, Smartphone, ShoppingBag, Megaphone } from 'lucide-react';

const ServiceCard = ({ title, description, tags, icon: Icon }: { title: string, description: string, tags: string[], icon: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-10 md:p-12 rounded-[32px] mb-8 last:mb-0 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
    >
        <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight leading-tight">
                {title}
            </h3>
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">
                <Icon size={24} strokeWidth={1.5} />
            </div>
        </div>

        <div className="border-t border-dashed border-gray-200 mb-8"></div>

        <p className="text-muted text-lg leading-relaxed mb-10 font-medium">
            {description}
        </p>

        <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-5 py-2 bg-gray-50 text-[10px] font-bold tracking-[0.1em] text-gray-500 uppercase rounded-full border border-gray-100"
                >
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
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
        <section id="services" className="py-24 bg-[#F8F8F8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column Content - Sticky Header */}
                    <div className="lg:w-[42%]">
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="flex flex-col items-start">
                                <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 flex items-center gap-2">
                                    <span className="opacity-30">›</span>
                                    WHAT WE DO
                                    <span className="opacity-30">‹</span>
                                </span>

                                <h2 className="text-6xl md:text-[80px] font-bold text-secondary tracking-tight mb-12 leading-[1.05]">
                                    Services built <br />
                                    to drive <span className="text-primary italic">impact</span>
                                </h2>

                                <div className="relative inline-block">
                                    <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                        Discuss your ideas
                                    </button>

                                    {/* Handwritten Note & Arrow */}
                                    <div className="absolute left-full ml-8 top-1/2 -translate-y-1/2 hidden xl:block">
                                        <div className="flex items-center gap-4">
                                            <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="text-primary/10 -scale-x-100 rotate-12">
                                                <path d="M5 5C10 5 35 8 35 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" />
                                                <path d="M28 20L35 25L38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="handwritten text-orange-500/50 text-xl -rotate-6 whitespace-nowrap">
                                                Let's get started
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Content - Scrolling List */}
                    <div className="lg:w-[58%]">
                        <div className="flex flex-col space-y-8">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
