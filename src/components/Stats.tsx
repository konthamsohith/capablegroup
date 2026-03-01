import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, label }: { value: number, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return (
        <div ref={ref} className="text-center p-8 rounded-3xl group hover:bg-white transition-all duration-500">
            <motion.div className="text-5xl md:text-7xl font-bold text-secondary mb-3 tracking-tighter group-hover:text-primary transition-colors">
                <motion.span>{displayValue}</motion.span>{label.includes("Money") ? "$" : "+"}
            </motion.div>
            <p className="text-muted font-bold text-xs uppercase tracking-[0.3em]">
                {label}
            </p>
        </div>
    );
};

const Stats: React.FC = () => {
    const stats = [
        { value: 5000, label: "Global Talent Pool" },
        { value: 1200, label: "Projects Delivered" },
        { value: 85, label: "Revenue Impact (m)" },
        { value: 500, label: "Global Client Base" }
    ];

    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="section-tag mb-4">CAPABLE NUMBERS</span>
                </div>

                <div className="relative group">
                    {/* Background Soft Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-[56px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="glass-card relative z-10 p-6 md:p-12 rounded-[48px] border border-white/40 shadow-2xl shadow-primary/5 bg-white/60">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <Counter key={index} {...stat} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
