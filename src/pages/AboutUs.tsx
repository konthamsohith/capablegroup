import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AboutUs: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 bg-[#fbfbfb] min-h-screen font-geist">
            <SEO
                title="About Us | Capable Groups"
                description="Learn more about Capable Groups: a multidisciplinary agency built on clarity, craft, and commitment to elevate brands with meaning."
                canonicalUrl="https://capablegroups.com/about-us"
            />
            {/* Background Decorative Rings */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] max-w-[1500px] max-h-[1500px] rounded-full border border-gray-100 pointer-events-none -translate-y-1/2 opacity-50 z-0"></div>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] max-w-[2000px] max-h-[2000px] rounded-full border border-gray-100 pointer-events-none -translate-y-1/2 opacity-50 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Who We Are Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="section-tag mb-8">
                        ABOUT US
                    </span>
                    <h1 className="text-5xl md:text-7xl font-medium text-secondary tracking-tighter mb-16">
                        Who we are
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
                        <div className="bg-white rounded-[32px] p-10 md:p-14 text-left flex flex-col justify-between shadow-sm border border-gray-50 h-full min-h-[400px]">
                            <h2 className="text-3xl md:text-4xl font-medium text-secondary leading-tight mb-8">
                                A studio built on clarity, craft and commitment
                            </h2>
                            <div>
                                <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                                    We're a multidisciplinary agency creating thoughtful, scalable digital solutions, starting every project clear understanding of your goals, audience, and challenges.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-[#ff6321] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-[0_10px_20px_rgba(255,99,33,0.25)] hover:shadow-[0_15px_30px_rgba(255,99,33,0.35)] transition-all"
                                >
                                    Start a project
                                </motion.button>
                            </div>
                        </div>
                        <div className="rounded-[32px] overflow-hidden h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                                alt="Capable Groups Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="mt-32 mb-16">
                    <span className="section-tag mb-8">
                        OUR MISSION
                    </span>
                    <h2 className="text-4xl md:text-6xl font-medium text-secondary tracking-tighter mb-12 max-w-xl">
                        Designed to elevate brands with meaning
                    </h2>

                    <div className="relative rounded-[32px] overflow-hidden h-[500px] md:h-[600px] w-full mt-8">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                            alt="Mission Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}

                        {/* Floating Core Values Card */}
                        <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 bg-white rounded-[24px] p-8 w-[90%] md:w-[350px] shadow-2xl">
                            <h3 className="text-xl font-bold text-secondary mb-6">Core Values</h3>
                            <div className="border-t border-dashed border-gray-200 mb-6" />
                            <ul className="flex flex-col gap-4 text-sm font-medium text-[#666666]">
                                {['Strategy-Led', 'Detail-Driven', 'Transparent Process', 'Long-Term Partnership', 'High-Quality Execution'].map((value, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        </div>
                                        {value}
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-dashed border-gray-200 mt-6 mb-4" />
                            <p className="text-[10px] font-bold text-muted uppercase tracking-wider">
                                © 2026 Capable Groups
                            </p>
                        </div>
                    </div>
                </div>

                {/* Impact In Numbers Section */}
                <div className="mt-32">
                    <span className="section-tag mb-8">
                        STATS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium text-secondary tracking-tighter mb-12">
                        Impact in numbers
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stat Card 1 */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 flex flex-col justify-between min-h-[250px]">
                            <div>
                                <h3 className="text-lg font-bold text-secondary mb-3">Global Talent Pool</h3>
                                <p className="text-sm text-[#666666] leading-relaxed max-w-[250px]">
                                    A continuously expanding network of highly skilled, vetted professionals worldwide.
                                </p>
                            </div>
                            <div>
                                <div className="border-t border-dashed border-gray-200 mb-4" />
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-medium text-secondary tracking-tighter">5,000+</span>
                                    <div className="flex gap-1 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 flex flex-col justify-between min-h-[250px]">
                            <div>
                                <h3 className="text-lg font-bold text-secondary mb-3">Projects Delivered</h3>
                                <p className="text-sm text-[#666666] leading-relaxed max-w-[250px]">
                                    A proven track record of successful deliveries across numerous industries and domains.
                                </p>
                            </div>
                            <div>
                                <div className="border-t border-dashed border-gray-200 mb-4" />
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-medium text-secondary tracking-tighter">1,200+</span>
                                    <div className="flex gap-1 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 flex flex-col justify-between min-h-[250px]">
                            <div>
                                <h3 className="text-lg font-bold text-secondary mb-3">Global Client Base</h3>
                                <p className="text-sm text-[#666666] leading-relaxed max-w-[250px]">
                                    Trusted by hundreds of leading businesses around the globe to scale securely.
                                </p>
                            </div>
                            <div>
                                <div className="border-t border-dashed border-gray-200 mb-4" />
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-medium text-secondary tracking-tighter">500+</span>
                                    <div className="flex gap-1 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-20 pt-16 md:pt-24">
                <CTA />
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;
