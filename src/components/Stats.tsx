import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(target: number, inView: boolean, duration = 2000) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start: number | null = null;
        const tick = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, target, duration]);
    return value;
}

/* Small area sparkline */
const AreaSpark: React.FC<{ inView: boolean; delay?: number }> = ({ inView, delay = 0 }) => {
    const d = [12, 28, 45, 70, 110, 160, 210, 250];
    const W = 100, H = 36, max = 250;
    const pts = d.map((v, i) => `${(i / (d.length - 1)) * W},${H - (v / max) * H}`).join(' ');
    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-9" preserveAspectRatio="none">
            <defs>
                <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff6321" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ff6321" stopOpacity="0" />
                </linearGradient>
                <clipPath id="sc1">
                    <motion.rect x="0" y="0" height={H}
                        width={inView ? W : 0}
                        transition={{ duration: 1.8, ease: 'easeOut', delay }} />
                </clipPath>
            </defs>
            <polygon points={`${pts} ${W},${H} 0,${H}`} fill="url(#sg1)" clipPath="url(#sc1)" />
            <polyline points={pts} fill="none" stroke="#ff6321" strokeWidth="2"
                strokeLinejoin="round" strokeLinecap="round" clipPath="url(#sc1)" />
        </svg>
    );
};

/* Technical Bar Chart */
const BarSpark: React.FC<{ inView: boolean; delay?: number }> = ({ inView, delay = 0 }) => {
    const bars = [40, 65, 50, 80, 55, 95, 60, 85, 45, 75];
    const W = 100, H = 36, gap = 3;
    const bw = (W - gap * (bars.length - 1)) / bars.length;
    return (
        <div className="mt-2 h-9 w-full relative">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
                {bars.map((h, i) => {
                    const barH = (h / 100) * H;
                    const x = i * (bw + gap);
                    return (
                        <motion.rect
                            key={i}
                            x={x} width={bw} rx="1"
                            fill={i % 2 === 0 ? "#ff6321" : "#f0ede9"}
                            initial={{ y: H, height: 0 }}
                            animate={inView ? { y: H - barH, height: barH } : { y: H, height: 0 }}
                            transition={{ duration: 0.6, delay: delay + i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                        />
                    );
                })}
                {/* Horizontal guide lines */}
                <line x1="0" y1={H * 0.25} x2={W} y2={H * 0.25} stroke="#000" strokeOpacity="0.03" strokeWidth="0.5" />
                <line x1="0" y1={H * 0.5} x2={W} y2={H * 0.5} stroke="#000" strokeOpacity="0.03" strokeWidth="0.5" />
                <line x1="0" y1={H * 0.75} x2={W} y2={H * 0.75} stroke="#000" strokeOpacity="0.03" strokeWidth="0.5" />
            </svg>
        </div>
    );
};

/* Retention fill bar */
const DonutSpark: React.FC<{ inView: boolean; pct: number; delay?: number }> = ({ inView, pct, delay = 0 }) => {
    const ticks = [0, 25, 50, 75, 100];
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <div className="relative h-2 bg-[#f0ede9] rounded-full overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#ff6321] to-[#ffb38a]"
                    initial={{ width: '0%' }}
                    animate={inView ? { width: `${pct * 100}%` } : {}}
                    transition={{ duration: 1.8, ease: 'easeOut', delay }}
                />
            </div>
            <div className="flex justify-between">
                {ticks.map(t => (
                    <div key={t} className="flex flex-col items-center">
                        <div className="w-px h-1.5 bg-[#e0dcd8]" />
                        <span className="text-[8px] text-[#c0bbb6] font-medium">{t}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* Continent dots row */
const DotsSpark: React.FC<{ inView: boolean; delay?: number }> = ({ inView, delay = 0 }) => {
    const items = [
        { label: 'NA', active: true },
        { label: 'EU', active: true },
        { label: 'AS', active: true },
        { label: 'ME', active: true },
        { label: 'EA', active: false },
        { label: 'OC', active: false },
    ];
    return (
        <div className="flex gap-2 items-center">
            {items.map((c, i) => (
                <motion.div key={i}
                    className="flex flex-col items-center gap-0.5"
                    initial={{ opacity: 0, y: 4 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: delay + i * 0.08 }}>
                    <div className="w-3 h-3 rounded-full"
                        style={{ background: c.active ? '#ff6321' : '#e8e4e0', boxShadow: c.active ? '0 0 0 3px rgba(255,99,33,0.15)' : 'none' }} />
                    <span className="text-[8px] font-semibold" style={{ color: c.active ? '#ff6321' : '#c0bbb6' }}>{c.label}</span>
                </motion.div>
            ))}
        </div>
    );
};

const statItems = [
    { value: 250, suffix: '+', label: 'Projects Delivered', chart: 'area' },
    { value: 10, suffix: '+', label: 'Industry Verticals', chart: 'bars' },
    { value: 4, suffix: '', label: 'Continents Served', chart: 'dots' },
    { value: 80, suffix: '%', label: 'Client Retention', chart: 'donut' },
];

const Stats: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="section-tag mb-4">CAPABLE NUMBERS</span>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-[32px] sm:rounded-[56px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="glass-card relative z-10 p-4 sm:p-12 rounded-[32px] sm:rounded-[48px] border border-white/40 shadow-2xl shadow-primary/5 bg-white/60">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-black/5">
                            {statItems.map((stat, i) => {
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const count = useCountUp(stat.value, inView);
                                return (
                                    <motion.div key={stat.label}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                                        className="group/stat flex flex-col gap-3 py-8 sm:py-4 px-6 text-center sm:text-left">

                                        {/* Number */}
                                        <div className="flex items-end gap-0.5 justify-center sm:justify-start leading-none">
                                            <span className="text-5xl sm:text-6xl font-bold text-[rgb(6,6,18)] tracking-tighter group-hover/stat:text-primary transition-colors duration-300">
                                                {count.toLocaleString()}
                                            </span>
                                            <span className="text-2xl font-bold text-[#ff6321] mb-0.5">{stat.suffix}</span>
                                        </div>

                                        {/* Label */}
                                        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[rgb(105,104,110)]">
                                            {stat.label}
                                        </p>

                                        {/* Compact chart */}
                                        <div className="mt-1">
                                            {stat.chart === 'area' && <AreaSpark inView={inView} delay={i * 0.12} />}
                                            {stat.chart === 'bars' && <BarSpark inView={inView} delay={i * 0.12} />}
                                            {stat.chart === 'dots' && <DotsSpark inView={inView} delay={i * 0.12} />}
                                            {stat.chart === 'donut' && <DonutSpark inView={inView} pct={0.8} delay={i * 0.12} />}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
