import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, description, tags, icon }: { title: string, description: string, tags: string[], icon: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="glass-card p-10 rounded-[32px] group relative overflow-hidden flex flex-col h-full"
    >
        <div className="flex justify-between items-start mb-8">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50/50 p-2 group-hover:scale-110 transition-transform duration-500">
                <img
                    src={icon}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="p-3 rounded-full bg-secondary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={20} />
            </div>
        </div>

        <h3 className="text-3xl font-bold text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">
            {title}
        </h3>

        <p className="text-muted leading-relaxed mb-8 flex-grow">
            {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100/50">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-4 py-1.5 bg-secondary/5 text-[10px] font-bold tracking-[0.2em] text-muted uppercase rounded-full"
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
            title: "Mobile App Development",
            description: "Innovators in top mobile app development. Share your idea and we'll bring it to life with high performance and polish.",
            tags: ["iOS", "ANDROID", "CROSS-PLATFORM"],
            icon: "https://framerusercontent.com/images/VxaX187KtYUExvg4GWWS825dlo.gif?width=300&height=300"
        },
        {
            title: "E-Commerce Development",
            description: "Transform your business with high-conversion e-commerce solutions tailored for growth and scalability.",
            tags: ["SHOPIFY", "WOOCOMMERCE", "CUSTOM"],
            icon: "https://framerusercontent.com/images/Url11o8XThJwsCXbChyt6K6k.gif?width=300&height=300"
        },
        {
            title: "Digital Marketing Services",
            description: "Integrated advertising and marketing strategies that drive visibility, engagement, and consistent results.",
            tags: ["SEO", "SEM", "SOCIAL MEDIA"],
            icon: "https://framerusercontent.com/images/8gIc0PgTS4D1f8V36s6QO5xVPTM.gif?width=300&height=300"
        },
        {
            title: "Website Designing",
            description: "Creating innovative, user-friendly designs that capture your brand essence and engage your audience effectively.",
            tags: ["UI/UX", "RESPONSIVE", "MODERN"],
            icon: "https://framerusercontent.com/images/VxaX187KtYUExvg4GWWS825dlo.gif?width=300&height=300"
        },
        {
            title: "US IT Staffing",
            description: "Talent acquisition industry leaders bringing together HR departments with highly skilled global candidates.",
            tags: ["RECRUITMENT", "TALENT", "OUTSOURCING"],
            icon: "https://framerusercontent.com/images/Url11o8XThJwsCXbChyt6K6k.gif?width=300&height=300"
        },
        {
            title: "Domestic Staffing",
            description: "Excellent domestic staffing solutions in India to help companies scale rapidly with the right talent pool.",
            tags: ["INDIA", "HIRE", "CONTRACT"],
            icon: "https://framerusercontent.com/images/8gIc0PgTS4D1f8V36s6QO5xVPTM.gif?width=300&height=300"
        }
    ];

    return (
        <section id="services" className="relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <span className="section-tag uppercase tracking-[0.3em] font-black text-[9px]">CAPABLE SERVICES</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-secondary tracking-tight mb-8"
                    >
                        High-Impact <span className="text-primary italic">Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-muted text-xl font-medium leading-relaxed"
                    >
                        We offer a comprehensive spectrum of IT and infrastructure solutions designed to drive your strategic objectives forward.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
