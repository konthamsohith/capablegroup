import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, tags, icon }: { title: string, description: string, tags: string[], icon: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
    >
        <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-semibold text-secondary">{title}</h3>
            <div className="w-20 h-20 rounded-xl overflow-hidden group-hover:shadow-md transition-shadow">
                <img
                    src={icon}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        <p className="font-medium text-[16px] leading-[1.6] text-gray-500 mb-8">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-4 py-1.5 bg-gray-50 text-[10px] font-semibold tracking-widest text-gray-400 uppercase rounded-full border border-gray-100"
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
            description: "We are the innovators in the part of top mobile app developers. Just share your idea with us and we'll bring it to life.",
            tags: ["iOS", "ANDROID", "CROSS-PLATFORM"],
            icon: "https://framerusercontent.com/images/VxaX187KtYUExvg4GWWS825dlo.gif?width=300&height=300"
        },
        {
            title: "E-Commerce Development",
            description: "E-Commerce websites transform businesses and help them to expand for the growth of the company.",
            tags: ["SHOPIFY", "WOOCOMMERCE", "CUSTOM"],
            icon: "https://framerusercontent.com/images/Url11o8XThJwsCXbChyt6K6k.gif?width=300&height=300"
        },
        {
            title: "Digital Marketing Services",
            description: "In today's world, digital marketing has evolved to become an integral part of advertising and marketing strategy.",
            tags: ["SEO", "SEM", "SOCIAL MEDIA"],
            icon: "https://framerusercontent.com/images/8gIc0PgTS4D1f8V36s6QO5xVPTM.gif?width=300&height=300"
        },
        {
            title: "Website Designing",
            description: "At Capable Groups, we are a set of web designers in Bangalore involved in creating innovative, user-friendly designs.",
            tags: ["UI/UX", "RESPONSIVE", "MODERN"],
            icon: "https://framerusercontent.com/images/VxaX187KtYUExvg4GWWS825dlo.gif?width=300&height=300"
        },
        {
            title: "US IT Staffing",
            description: "US Staffing is a Talent Acquisition Industry which brings together HR Departments of the Clients with skilled candidates.",
            tags: ["RECRUITMENT", "TALENT", "OUTSOURCING"],
            icon: "https://framerusercontent.com/images/Url11o8XThJwsCXbChyt6K6k.gif?width=300&height=300"
        },
        {
            title: "Domestic Staffing",
            description: "We provide wide-ranging industries with excellent domestic staffing solutions in India to help companies scale.",
            tags: ["INDIA", "HIRE", "CONTRACT"],
            icon: "https://framerusercontent.com/images/8gIc0PgTS4D1f8V36s6QO5xVPTM.gif?width=300&height=300"
        }
    ];

    return (
        <section className="relative py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Sticky Content */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                            <div className="inline-flex items-center space-x-2 mb-6">
                                <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                                    &gt; WHAT WE DO &lt;
                                </span>
                            </div>

                            <h2 className="text-5xl font-semibold text-secondary mb-12 leading-[1.1] tracking-tight">
                                Services built<br />to drive impact
                            </h2>

                            <div className="relative group inline-block">
                                <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-[#3d7da8] transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-semibold text-lg">
                                    Discuss your ideas
                                </button>


                            </div>
                        </div>
                    </div>

                    {/* Right Side: Service Cards Container */}
                    <div className="lg:w-2/3">
                        <div className="bg-[#f0f0f0] p-6 md:p-10 rounded-[40px] border border-gray-100">
                            <div className="flex flex-col gap-6">
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
