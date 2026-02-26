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

    // Calculate positions for dots/markers on a semi-circle
    // Angles for steps: from left (180deg) to right (0deg)
    // We want them spread across the top half
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
        <section className="py-32 bg-[#f8f8f8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                        &gt; PROCESS &lt;
                    </span>
                    <h2 className="text-6xl font-semibold text-secondary tracking-tight">
                        A collaborative approach
                    </h2>
                </div>

                <div className="relative min-h-[600px] flex flex-col items-center justify-end pb-32">
                    {/* The Arc SVG */}
                    <svg
                        viewBox="0 0 1000 500"
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-auto opacity-10 pointer-events-none"
                    >
                        <path
                            d="M 100,450 A 400,400 0 1 1 900,450"
                            stroke="black"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray="4 8"
                        />
                    </svg>

                    {/* Step Markers on Arc */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-[2/1] pointer-events-none">
                        {steps.map((step, index) => {
                            const angle = angles[index];
                            const rad = (angle * Math.PI) / 180;
                            // Centered at (500, 450) relative to SVG viewBox 1000x500
                            // Map to percentage for div positioning
                            const x = 50 + 40 * Math.cos(rad);
                            const y = 90 - 75 * Math.sin(rad);

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(index)}
                                    className={`absolute w-12 h-12 rounded-xl flex items-center justify-center font-semibold text-sm shadow-xl transition-all duration-500 pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                                        ${currentStep === index
                                            ? 'bg-primary text-white scale-125 z-20'
                                            : 'bg-white text-gray-400 scale-100 z-10 opacity-60 hover:opacity-100'}`}
                                    style={{ left: `${x}%`, top: `${y}%` }}
                                >
                                    {step.id}
                                    {currentStep === index && (
                                        <span className="absolute -top-8 text-[10px] uppercase tracking-widest text-primary font-black">
                                            STEP
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Step Content */}
                    <div className="max-w-xl mx-auto mt-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center"
                            >
                                <h3 className="text-4xl font-semibold text-secondary mb-4">
                                    {steps[currentStep].title}
                                </h3>
                                <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-md">
                                    {steps[currentStep].description}
                                </p>

                                <div className="w-full h-px bg-gray-200 mb-6 opacity-50" />

                                <div className="flex flex-wrap justify-center gap-6 mb-12">
                                    {steps[currentStep].tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary text-white px-10 py-4 rounded-2xl font-semibold shadow-xl shadow-primary/20 hover:bg-[#3d7da8] transition-colors"
                                >
                                    Start your project
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots & Page Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <div className="text-[10px] font-black tracking-widest text-gray-400">
                            {steps[currentStep].id}/05
                        </div>
                        <div className="flex gap-2">
                            {steps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleStepClick(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentStep === index ? 'bg-primary w-4' : 'bg-gray-200'
                                        }`}
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
