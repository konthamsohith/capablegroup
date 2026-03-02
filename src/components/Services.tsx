import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Code2, Smartphone, ShoppingBag, Megaphone } from 'lucide-react';

const ServiceCard = ({ title, description, tags, icon: Icon }: { title: string, description: string, tags: string[], icon: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-7 md:p-8 rounded-xl border border-gray-100 shadow-sm"
    >
        <div className="flex justify-between items-start mb-5">
            <h3 className="text-[22px] font-bold text-secondary tracking-tight leading-tight">
                {title}
            </h3>
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">
                <Icon size={20} strokeWidth={1.5} />
            </div>
        </div>

        <div className="border-t border-dotted border-gray-200 mb-6 w-full"></div>

        <p className="text-[#69686e] text-[14px] leading-relaxed mb-8 font-medium">
            {description}
        </p>

        <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-5 py-2 bg-[#f5f4f3] text-[9px] font-bold tracking-[0.12em] text-[#69686e] uppercase rounded-full border border-gray-200/50"
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
        <section id="services" className="py-32 bg-[#f5f4f3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    {/* Left Column Content - Sticky Header */}
                    <div className="lg:w-[45%]">
                        <div className="lg:sticky lg:top-40 h-fit">
                            <div className="flex flex-col items-start">
                                <span className="section-tag mb-8">
                                    WHAT WE DO
                                </span>

                                <h2 className="text-5xl md:text-[72px] font-geist font-medium text-secondary tracking-tighter mb-12 leading-[1.05] max-w-lg">
                                    Services built <br />
                                    to drive <span className="text-primary italic">impact</span>
                                </h2>

                                <div className="relative inline-block">
                                    <button className="bg-primary text-white px-9 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                                        Discuss your ideas
                                    </button>

                                    {/* Handwritten Note & Arrow */}
                                    <div className="absolute left-full ml-10 top-1/2 -translate-y-1/2 hidden xl:block">
                                        <div className="flex items-center gap-5">
                                            <svg width="50" height="35" viewBox="0 0 60 40" fill="none" className="text-primary/20 -scale-x-100 rotate-12">
                                                <path d="M5 5C15 5 50 10 50 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" />
                                                <path d="M40 28L50 35L57 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="handwritten text-primary/40 text-xl -rotate-6 whitespace-nowrap">
                                                Let's get started
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Content - Scrolling List in Unit Container */}
                    <div className="lg:w-[55%]">
                        <div className="bg-[#ebeae9] p-2 md:p-2.5 rounded-[20px] border border-gray-200/50">
                            <div className="flex flex-col space-y-2.5">
                                {services.map((service, index) => (
                                    <ServiceCard key={index} {...service} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
