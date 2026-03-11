import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "Strategy",
        description: "We define direction, structure, and positioning to support every design decision.",
        tags: ["BRAND STRATEGY", "MESSAGING", "ROADMAP"]
    },
    {
        id: "02",
        title: "Design",
        description: "We craft intuitive interfaces and cohesive visuals that elevate the user experience.",
        tags: ["UI DESIGN", "UX DESIGN", "VISUAL SYSTEM"]
    },
    {
        id: "03",
        title: "Development",
        description: "We build fast, scalable digital products with clean code and seamless performance.",
        tags: ["WEB DEVELOPMENT", "INTEGRATIONS"]
    },
    {
        id: "04",
        title: "Implementation",
        description: "We integrate solutions smoothly into workflows to ensure efficiency and adoption.",
        tags: ["SETUP", "CONFIGURATION", "AUTOMATION"]
    },
    {
        id: "05",
        title: "Optimization",
        description: "We refine, test, and enhance your product to drive ongoing growth and impact.",
        tags: ["TESTING", "CONTINUOUS IMPROVEMENT"]
    }
];

interface MarkerProps {
    step: typeof steps[0];
    index: number;
    currentStep: number;
    smoothProgress: any;
    handleStepClick: (index: number) => void;
}

const Marker = React.memo<MarkerProps>(({ step, index, currentStep, smoothProgress, handleStepClick }) => {
    const totalGap = 55;
    const centerAngle = 90;

    // Use motion values for position and style
    const angle = useTransform(smoothProgress, (progress: number) => {
        const virtualIndex = progress * (steps.length - 1);
        return centerAngle - (index - virtualIndex) * totalGap;
    });

    // Rounding to 2 decimal places to prevent sub-pixel jitter while maintaining smooth motion
    const left = useTransform(angle, (a: number) => {
        const val = 50 + 35 * Math.cos((a * Math.PI) / 180);
        return `${Math.round(val * 100) / 100}%`;
    });
    const top = useTransform(angle, (a: number) => {
        const val = (500 / 600 * 100) - (350 / 600 * 100) * Math.sin((a * Math.PI) / 180);
        return `${Math.round(val * 100) / 100}%`;
    });

    const rotation = useTransform(angle, (a: number) => 90 - a);
    const opacity = useTransform(angle, (a: number) => (a > 15 && a < 165 ? 1 : 0));
    const scale = useTransform(angle, (a: number) => (a > 15 && a < 165 ? 1 : 0.8));

    const stepLabelOpacity = useTransform(angle, (a: number) => {
        const dist = Math.abs(a - centerAngle);
        return dist < 10 ? 1 : 0;
    });

    const isActive = currentStep === index;

    return (
        <motion.div
            className="absolute flex flex-col items-center z-20"
            style={{
                left,
                top,
                opacity,
                scale,
                x: "-50%",
                y: "-50%",
                pointerEvents: useTransform(opacity, (o) => o > 0.5 ? 'auto' : 'none'),
                willChange: 'left, top, opacity, transform'
            }}
        >
            <motion.span
                style={{ opacity: stepLabelOpacity }}
                className="text-[10px] font-bold tracking-[0.2em] text-[#ff6321] uppercase mb-2 h-4"
            >
                STEP
            </motion.span>
            <motion.button
                style={{ rotate: useTransform(rotation, (r) => `${r}deg`) }}
                animate={{
                    backgroundColor: isActive ? '#ff6321' : '#ffffff',
                    color: isActive ? '#ffffff' : '#666666',
                    borderColor: isActive ? '#ff6321' : '#e5e7eb',
                }}
                transition={{ duration: 0.3 }}
                onClick={() => handleStepClick(index)}
                className={`flex items-center justify-center font-bold text-sm pointer-events-auto cursor-pointer shadow-sm
                    ${isActive
                        ? 'w-14 h-14 md:w-16 md:h-16 rounded-[16px] shadow-[0_10px_30px_rgba(255,99,33,0.3)]'
                        : 'w-12 h-12 md:w-14 md:h-14 border rounded-xl hover:bg-gray-50'
                    }`}
            >
                {step.id}
            </motion.button>
        </motion.div>
    );
});

Marker.displayName = 'Marker';

const Process: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 35,
        restDelta: 0.0001
    });

    // Drive the current step state from the smoothed progress
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const stepIndex = Math.round(latest * (steps.length - 1));
        if (stepIndex !== currentStep) {
            setCurrentStep(stepIndex);
        }
    });

    const handleStepClick = (index: number) => {
        // Scroll the container to the relevant position
        if (containerRef.current) {
            const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
            const targetScroll = (index / (steps.length - 1)) * scrollHeight;
            window.scrollTo({
                top: containerRef.current.offsetTop + targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="process" ref={containerRef} className="relative bg-[#fbfbfb] h-[300vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center pt-24 pb-12">

                {/* Background Decorative Gradient */}
                <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl w-full mx-auto px-4 text-center relative z-10 flex-shrink-0">
                    <div className="flex flex-col items-center mb-4 md:mb-8">
                        <span className="section-tag mb-2">OUR METHODOLOGY</span>
                        <h2 className="text-[48px] font-geist font-bold text-[#000000] leading-[60px] tracking-tighter mb-4">
                            A collaborative <span className="text-primary italic">approach</span>
                        </h2>
                    </div>

                    <div className="relative h-[500px] md:h-[520px] flex flex-col items-center justify-end w-full">
                        {/* The Arc SVG */}
                        <svg
                            viewBox="0 0 1000 600"
                            className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-auto pointer-events-none"
                        >
                            <defs>
                                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="15%" stopColor="#E5E7EB" />
                                    <stop offset="50%" stopColor="#E5E7EB" />
                                    <stop offset="85%" stopColor="#E5E7EB" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            {/* Outer Glow Path */}
                            <path
                                d="M 150,500 A 350,350 0 0 1 850,500"
                                stroke="white"
                                strokeWidth="20"
                                fill="transparent"
                                className="blur-[10px]"
                            />
                            {/* Main Solid Path */}
                            <path
                                d="M 150,500 A 350,350 0 0 1 850,500"
                                stroke="url(#arcGradient)"
                                strokeWidth="3"
                                fill="transparent"
                            />
                        </svg>

                        {/* Step Markers on Arc */}
                        <div className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-[5/3] pointer-events-none">
                            {steps.map((step, index) => (
                                <Marker
                                    key={step.id}
                                    step={step}
                                    index={index}
                                    currentStep={currentStep}
                                    smoothProgress={smoothProgress}
                                    handleStepClick={handleStepClick}
                                />
                            ))}
                        </div>


                        {/* Step Content */}
                        <div className="max-w-2xl w-full mx-auto mt-8 md:mt-10 p-4 rounded-[30px] relative z-20 pointer-events-none h-[220px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex flex-col items-center text-center pointer-events-auto"
                                >
                                    <h3 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-3 tracking-tight">
                                        {steps[currentStep].title}
                                    </h3>
                                    <p className="text-[#666666] text-base md:text-lg mb-6 leading-relaxed max-w-md font-medium">
                                        {steps[currentStep].description}
                                    </p>

                                    <div className="w-full relative py-4 mb-4">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 border-t border-dashed border-gray-200" />
                                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-bold tracking-[0.2em] text-muted uppercase">
                                            {steps[currentStep].tags.map((tag, idx) => (
                                                <React.Fragment key={tag}>
                                                    <span>{tag}</span>
                                                    {idx < steps[currentStep].tags.length - 1 && (
                                                        <span className="text-gray-300">•</span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 border-t border-dashed border-gray-200" />
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Persistent CTA Button */}
                        <div className="max-w-2xl w-full mx-auto text-center mt-6 z-30 relative">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="/contact"
                                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-[0_10px_25px_rgba(255,99,33,0.3)] hover:shadow-[0_15px_35px_rgba(255,99,33,0.4)] transition-all pointer-events-auto inline-block"
                            >
                                Start your project
                            </motion.a>
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-3">
                                {steps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleStepClick(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentStep === index ? 'bg-primary scale-125' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-[12px] font-bold tracking-[0.3em] text-[#666] uppercase">
                                0{currentStep + 1} / 0{steps.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
