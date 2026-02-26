import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, ShoppingCart, Cpu, Users, Globe, History } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-xl text-primary">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="font-semibold text-secondary mb-1">{title}</h4>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </div>
);

const InfoCard = ({ title, description, icon: Icon, linkText = "Read More" }: { title: string, description: string, icon: any, linkText?: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 h-full flex flex-col"
    >
        <div className="bg-[#f0f0f0] w-14 h-14 rounded-2xl flex items-center justify-center text-secondary mb-6">
            <Icon size={28} />
        </div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">{title}</h3>
        <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 flex-grow">
            {description}
        </p>
        <a href="#" className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1">
            {linkText} <span className="text-lg">›</span>
        </a>
    </motion.div>
);

const About: React.FC = () => {
    const features = [
        {
            title: "Experienced Team",
            description: "Experienced and versatile team onboard bringing diverse expertise.",
            icon: Users
        },
        {
            title: "Latest Technology",
            description: "We leverage latest technology to provide high-end solutions.",
            icon: Cpu
        },
        {
            title: "Global Clientele",
            description: "Serving a wide range of global clients with excellence.",
            icon: Globe
        },
        {
            title: "Vast Experience",
            description: "Years of industry experience across multiple sectors.",
            icon: History
        }
    ];

    return (
        <section id="about" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                            WELCOME TO Capable Groups
                        </span>
                        <h2 className="text-5xl font-semibold text-secondary mb-8 tracking-tight leading-[1.1]">
                            Diversified interests in <span className="text-primary">IT, Non-IT and Real Estate</span>
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">
                            Capable Groups is a leading conglomerate based with diversified interests.
                            Blending brilliance of experienced team and best of the breed technology,
                            the company offers a wide spectrum of IT, Non-IT and Real Estate & Infrastructure
                            solutions among others.
                        </p>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">
                            Our portfolio comprises of many services, enabling customers in optimally
                            utilizing digital medium in accomplishing their strategic objectives.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>

                {/* Latest Tech Card */}
                <div className="bg-[#f0f0f0] p-4 md:p-8 rounded-[48px] border border-gray-100 mb-16">
                    <div className="bg-white p-12 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-semibold text-secondary mb-4">Latest Technology</h3>
                            <p className="text-gray-500 font-medium text-lg leading-relaxed">
                                Keeping in sync with the latest technology, Capable Groups is enabling enterprises to scaleup and stay competitive in the digital age.
                            </p>
                        </div>
                        <div className="bg-primary/10 p-6 rounded-full text-primary scale-125">
                            <Cpu size={48} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                {/* Vision, Mission, One Stop grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <InfoCard
                        title="Our Vision"
                        description="To be a trusted partner in providing skilled professionals and delivering cost effective and innovative solutions."
                        icon={Target}
                    />
                    <InfoCard
                        title="Mission Statement"
                        description="To provide localised IT service capability through our iShore™ model to enable businesses to scale optimally."
                        icon={Rocket}
                    />
                    <InfoCard
                        title="One Stop Shop"
                        description="Your entire technology requirement like design, development & online solutions are handled under one roof."
                        icon={ShoppingCart}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
