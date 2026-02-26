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
        <div ref={ref} className="text-center">
            <motion.div className="text-5xl md:text-6xl font-semibold text-secondary mb-2 tracking-tighter">
                {displayValue}
            </motion.div>
            <p className="text-gray-400 font-semibold text-xs uppercase tracking-[0.2em]">
                {label}
            </p>
        </div>
    );
};

const Stats: React.FC = () => {
    const stats = [
        { value: 85389, label: "Money Donated" },
        { value: 10693, label: "Happy Clients" },
        { value: 50177, label: "People Impacted" },
        { value: 669, label: "Positive Feedbacks" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#f0f0f0] p-12 md:p-20 rounded-[48px] border border-gray-100">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                        {stats.map((stat, index) => (
                            <Counter key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
