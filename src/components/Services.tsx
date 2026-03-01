import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Code2, Smartphone, ShoppingBag, Megaphone } from 'lucide-react';

const ServiceCard = ({ title, description, tags, icon: Icon }: { title: string, description: string, tags: string[], icon: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group mb-10 last:mb-0"
    >
        <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
                {title}
            </h3>
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                <Icon size={24} strokeWidth={1.5} />
            </div>
        </div>

        <div className="border-t border-dashed border-gray-200 my-6"></div>

        <p className="text-muted text-lg leading-relaxed mb-8">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-50 text-[10px] font-bold tracking-[0.1em] text-muted uppercase rounded-full"
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
        <section id="services" className="py-24 bg-[#f8f9fa]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
                    {/* Left Column Container */}
                    <div className="relative">
                        {/* Sticky Header Content */}
                        <div className="lg:sticky lg:top-32 py-10">
                            <div className="flex flex-col items-start text-left">
                                <span className="section-tag mb-8 uppercase tracking-[0.2em] font-black text-[10px]">WHAT WE DO</span>

                                <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tight mb-12">
                                    Services built <br />
                                    to drive <span className="text-primary italic">impact</span>
                                </h2>

                                <div className="relative inline-block">
                                    <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                        Discuss your ideas
                                    </button>

                                    {/* Handwritten Note & Arrow */}
                                    <div className="absolute left-[110%] top-1/2 -translate-y-1/2 hidden xl:block whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary/40 -scale-x-100 rotate-45">
                                                <path d="M5 5C15 5 35 15 35 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />
                                                <path d="M25 35L35 35L35 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="handwritten text-primary text-xl -rotate-3">
                                                Let's get started
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Scrolling Grid */}
                    <div className="flex flex-col relative z-10">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
