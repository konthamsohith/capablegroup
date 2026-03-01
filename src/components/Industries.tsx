import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingBag, Truck } from 'lucide-react';

const IndustryItem = ({ title, icon: Icon, delay }: { title: string, icon: any, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -8 }}
        className="flex flex-col items-center group"
    >
        <div className="w-24 h-24 rounded-full border border-gray-100 flex items-center justify-center mb-6 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-500 relative">
            <Icon size={32} className="text-gray-300 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
            <div className="absolute -inset-2 rounded-full border border-dashed border-primary/0 group-hover:border-primary/20 animate-[spin_20s_linear_infinite]" />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted group-hover:text-secondary transition-colors">{title}</h3>
    </motion.div>
);

const Industries: React.FC = () => {
    return (
        <section className="py-24 bg-[#f5f4f3]/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="section-tag mb-4 shadow-sm"
                    >
                        GLOBAL REACH
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-secondary tracking-tight"
                    >
                        Specialized Sector <span className="text-primary italic">Expertise</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
                    <IndustryItem title="Fintech" icon={Landmark} delay={0.1} />
                    <IndustryItem title="Healthtech" icon={HeartPulse} delay={0.2} />
                    <IndustryItem title="E-commerce" icon={ShoppingBag} delay={0.3} />
                    <IndustryItem title="Logistics" icon={Truck} delay={0.4} />
                </div>
            </div>
        </section>
    );
};

export default Industries;
