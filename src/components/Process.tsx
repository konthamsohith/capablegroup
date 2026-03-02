import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

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

const Process: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest === 1) {
            setCurrentStep(steps.length - 1);
            return;
        }
        const stepIndex = Math.floor(latest * steps.length);
        setCurrentStep(stepIndex);
    });

    const angles = [160, 125, 90, 55, 20];

    const handleStepClick = (index: number) => {
        // Find the rough scroll percentage this click corresponds to, 
        // to optionally scroll the window, but we will just let it be 
        // a pure visual click or ignore click logic if we want strict scroll binding.
        // For strict scroll binding, it's better to let scroll dictate state.
        // If we want click to scroll, we'd need to calculate the pixel offset 
        setCurrentStep(index);
    };

    const getMarkerStyle = (index: number) => {
        const angle = 90 - (index - currentStep) * 55;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 35 * Math.cos(rad);
        const y = 90 - 70 * Math.sin(rad);
        const rotation = 90 - angle;
        const isVisible = angle > -10 && angle < 190;

        return { x, y, rotation, isVisible };
    };

    return (
        <section id="process" ref={containerRef} className="relative bg-[#fbfbfb] h-[300vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center pt-24 pb-8">

                {/* Background Decorative Gradient */}
                <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl w-full mx-auto px-4 text-center relative z-10 flex-shrink-0">
                    <div className="flex flex-col items-center mb-4 md:mb-8">
                        <span className="section-tag mb-2">OUR METHODOLOGY</span>
                        <h2 className="text-3xl md:text-5xl font-geist font-medium text-secondary tracking-tighter mb-4">
                            A collaborative <span className="text-primary italic">approach</span>
                        </h2>
                    </div>

                    <div className="relative h-[420px] md:h-[450px] flex flex-col items-center justify-end w-full">
                        {/* The Arc SVG */}
                        <svg
                            viewBox="0 0 1000 500"
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
                                d="M 150,450 A 350,350 0 0 1 850,450"
                                stroke="white"
                                strokeWidth="20"
                                fill="transparent"
                                className="blur-[10px]"
                            />
                            {/* Main Solid Path */}
                            <path
                                d="M 150,450 A 350,350 0 0 1 850,450"
                                stroke="url(#arcGradient)"
                                strokeWidth="3"
                                fill="transparent"
                            />
                        </svg>

                        {/* Step Markers on Arc */}
                        <div className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-[2/1] pointer-events-none">
                            {steps.map((step, index) => {
                                const isActive = currentStep === index;
                                const { x, y, rotation, isVisible } = getMarkerStyle(index);

                                return (
                                    <motion.div
                                        key={step.id}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
                                        animate={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                            opacity: isVisible ? 1 : 0,
                                            scale: isVisible ? 1 : 0.8
                                        }}
                                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                                        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                                    >
                                        {isActive && (
                                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff6321] uppercase mb-2">
                                                STEP
                                            </span>
                                        )}
                                        <motion.button
                                            animate={{ rotate: rotation }}
                                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                                            onClick={() => handleStepClick(index)}
                                            className={`flex items-center justify-center font-bold text-sm transition-colors duration-300 pointer-events-auto cursor-pointer
                                                ${isActive
                                                    ? 'w-14 h-14 md:w-16 md:h-16 bg-[#ff6321] text-white rounded-[16px] shadow-[0_10px_30px_rgba(255,99,33,0.3)]'
                                                    : 'w-12 h-12 md:w-14 md:h-14 bg-white text-muted border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm'
                                                }`}
                                        >
                                            {step.id}
                                        </motion.button>
                                    </motion.div>
                                );
                            })}
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
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-[0_10px_25px_rgba(255,99,33,0.3)] hover:shadow-[0_15px_35px_rgba(255,99,33,0.4)] transition-all pointer-events-auto"
                            >
                                Start your project
                            </motion.button>
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <span className="text-[11px] font-bold tracking-[0.3em] text-muted">
                                0{currentStep + 1}/0{steps.length}
                            </span>
                            <div className="flex items-center gap-3">
                                {steps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleStepClick(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentStep === index ? 'bg-primary scale-125' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
