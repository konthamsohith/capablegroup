import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
        <section id="process" className="relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <div className="flex flex-col items-center mb-24">
                    <span className="section-tag mb-4">OUR METHODOLOGY</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tight mb-8">
                        A collaborative <span className="text-primary italic">approach</span>
                    </h2>
                </div>

                <div className="relative min-h-[600px] flex flex-col items-center justify-end pb-20">
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
                            const x = 50 + 40 * Math.cos(rad);
                            const y = 90 - 75 * Math.sin(rad);

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(index)}
                                    className={`absolute w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm shadow-xl transition-all duration-700 pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                                        ${currentStep === index
                                            ? 'bg-primary text-white scale-125 z-20 shadow-primary/30 ring-4 ring-primary/10'
                                            : 'bg-white text-muted scale-100 z-10 opacity-60 hover:opacity-100 hover:scale-110'}`}
                                    style={{ left: `${x}%`, top: `${y}%` }}
                                >
                                    {step.id}
                                </button>
                            );
                        })}
                    </div>

                    {/* Step Content */}
                    <div className="max-w-2xl mx-auto mt-32 glass-card p-12 rounded-[48px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="flex flex-col items-center"
                            >
                                <span className="mb-4 px-4 py-1.5 bg-primary/10 text-[10px] font-bold tracking-[0.3em] text-primary rounded-full">
                                    STEP {steps[currentStep].id}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
                                    {steps[currentStep].title}
                                </h3>
                                <p className="text-muted text-lg md:text-xl mb-10 leading-relaxed max-w-md font-medium">
                                    {steps[currentStep].description}
                                </p>

                                <div className="flex flex-wrap justify-center gap-4 mb-10">
                                    {steps[currentStep].tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase px-3 py-1 bg-background rounded-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-2"
                                >
                                    Start Project <ArrowRight size={20} />
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 py-2 px-6 glass-card rounded-full mt-10">
                        {steps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleStepClick(index)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentStep === index ? 'bg-primary w-8' : 'bg-secondary/10 w-2'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
