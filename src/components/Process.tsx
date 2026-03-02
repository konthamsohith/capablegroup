import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

    const angles = [160, 125, 90, 55, 20];

    const handleStepClick = (index: number) => {
        setCurrentStep(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentStep]);

    return (
        <section id="process" className="relative pt-32 pb-24 overflow-hidden bg-[#fbfbfb]">
            {/* Background Decorative Gradient */}
            <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <span className="section-tag mb-4">OUR METHODOLOGY</span>
                    <h2 className="text-5xl md:text-7xl font-geist font-medium text-secondary tracking-tighter mb-8">
                        A collaborative <span className="text-primary italic">approach</span>
                    </h2>
                </div>

                <div className="relative min-h-[600px] flex flex-col items-center justify-end">
                    {/* The Arc SVG */}
                    <svg
                        viewBox="0 0 1000 500"
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-auto opacity-40 pointer-events-none"
                    >
                        {/* Outer Glow Path */}
                        <path
                            d="M 100,450 A 400,400 0 1 1 900,450"
                            stroke="white"
                            strokeWidth="12"
                            fill="transparent"
                            className="blur-[8px]"
                        />
                        {/* Main Solid Path */}
                        <path
                            d="M 100,450 A 400,400 0 1 1 900,450"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                            fill="transparent"
                        />
                    </svg>

                    {/* Step Markers on Arc */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-[2/1] pointer-events-none">
                        {steps.map((step, index) => {
                            const angle = angles[index];
                            const rad = (angle * Math.PI) / 180;
                            const x = 50 + 40 * Math.cos(rad);
                            const y = 90 - 75 * Math.sin(rad);
                            const isActive = currentStep === index;

                            // Calculate rotation to face the center of the arc
                            const rotation = 90 - angle;

                            return (
                                <div
                                    key={step.id}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                                    style={{ left: `${x}%`, top: `${y}%` }}
                                >
                                    {isActive && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase mb-2"
                                        >
                                            STEP
                                        </motion.span>
                                    )}
                                    <button
                                        onClick={() => handleStepClick(index)}
                                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-500 pointer-events-auto cursor-pointer border
                                            ${isActive
                                                ? 'bg-primary border-primary text-white scale-125 z-20 shadow-[0_10px_30px_rgba(255,99,33,0.4)]'
                                                : 'bg-white border-gray-100 text-muted scale-100 z-10 hover:border-gray-300 hover:scale-110 shadow-sm'}`}
                                        style={{ transform: `rotate(${rotation}deg)` }}
                                    >
                                        {step.id}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Step Content */}
                    <div className="max-w-2xl mx-auto mt-20 p-6 md:p-10 rounded-[40px] relative z-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col items-center text-center"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-4 tracking-tight">
                                    {steps[currentStep].title}
                                </h3>
                                <p className="text-muted text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-medium">
                                    {steps[currentStep].description}
                                </p>

                                <div className="w-full relative py-6 mb-10">
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

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_10px_25px_rgba(255,99,33,0.3)] hover:shadow-[0_15px_35px_rgba(255,99,33,0.4)] transition-all"
                                >
                                    Start your project
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex flex-col items-center gap-4">
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
        </section>
    );
};

export default Process;
