import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Flame } from 'lucide-react';

const PricingCard = ({
    type,
    price,
    description,
    features,
    buttonText,
    isPopular,
    isDark
}: {
    type: string,
    price: string,
    description: string,
    features: string[],
    buttonText: string,
    isPopular?: boolean,
    isDark?: boolean
}) => (
    <motion.div
        whileHover={{ y: -10 }}
        className={`relative flex-1 p-8 rounded-[32px] overflow-hidden ${isDark ? 'bg-primary text-white' : 'bg-white text-secondary border border-gray-100 shadow-sm'
            }`}
    >
        {isPopular && (
            <div className="absolute top-6 right-6">
                <span className="bg-white/20 backdrop-blur-md text-[10px] font-semibold tracking-widest px-3 py-1 rounded-full uppercase">
                    Popular
                </span>
            </div>
        )}

        <div className="mb-12">
            <span className={`text-[10px] font-semibold tracking-widest uppercase opacity-60 mb-4 block`}>
                {type}
            </span>
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-semibold tracking-tight">{price}</span>
                <span className="text-sm opacity-60">/ project</span>
            </div>
            <p className="text-sm font-medium opacity-70 leading-relaxed max-w-[240px]">
                {description}
            </p>
        </div>

        <div className="space-y-4 mb-12">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div className={`p-0.5 rounded-full ${isDark ? 'bg-white/20' : 'bg-gray-50'}`}>
                        <Check size={14} className={isDark ? 'text-white' : 'text-primary'} />
                    </div>
                    <span className="text-sm font-semibold">{feature}</span>
                </div>
            ))}
        </div>

        <button className={`w-full py-4 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg ${isDark
            ? 'bg-secondary text-white hover:bg-black'
            : 'bg-primary text-white hover:bg-[#3d7da8] shadow-primary/20'
            }`}>
            {buttonText}
        </button>

        {/* Decorative background icons */}
        <div className={`absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none`}>
            {type === "STARTER" ? (
                <Rocket size={120} className="transform rotate-12 translate-x-1/4 translate-y-1/4" />
            ) : (
                <Flame size={120} className="transform -rotate-12 translate-x-1/4 translate-y-1/4" />
            )}
        </div>
    </motion.div>
);

const Pricing: React.FC = () => {
    return (
        <section className="py-32 bg-background px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                        &gt; PRICING &lt;
                    </span>
                    <h2 className="text-6xl font-semibold text-secondary tracking-tight">
                        Plan that fits
                    </h2>
                </div>

                <div className="bg-[#f0f0f0] p-4 md:p-8 rounded-[48px] border border-gray-100 flex flex-col md:flex-row gap-6 mb-12">
                    <PricingCard
                        type="STARTER"
                        price="$999"
                        description="Perfect for startups and small teams launching their first project."
                        features={[
                            "1 Landing Page Design",
                            "Basic Brand Guidelines",
                            "Mobile Responsive Layout",
                            "2 Revisions",
                            "Delivery in 7 days"
                        ]}
                        buttonText="Get started now"
                    />

                    <PricingCard
                        isDark
                        isPopular
                        type="GROWTH"
                        price="$2499"
                        description="Best for growing brands looking to scale their digital presence."
                        features={[
                            "Multi-page Website Design",
                            "Brand Strategy Session",
                            "Web Animations & Interactions",
                            "4 Revisions",
                            "Delivery in 14 days"
                        ]}
                        buttonText="Start your project"
                    />
                </div>

                <div className="text-center">
                    <p className="text-gray-400 text-sm font-medium mb-2">
                        For agencies and enterprises needing custom strategy and execution.
                    </p>
                    <a href="#" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Contact us <span className="text-lg">›</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
