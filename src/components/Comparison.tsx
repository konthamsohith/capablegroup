import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

const Comparison: React.FC = () => {
    const [isCapableGroupsSelected, setIsCapableGroupsSelected] = useState(true);

    const comparisonData = [
        { other: "Slow, unclear timelines", capableGroups: "Clear weekly updates" },
        { other: "Extra charges for changes", capableGroups: "Transparent pricing" },
        { other: "No clear process", capableGroups: "Documented workflow" },
        { other: "Designs break in dev", capableGroups: "Design-dev alignment" },
        { other: "Complex, hard builds", capableGroups: "Clean, scalable builds" },
    ];

    return (
        <section className="py-24 bg-background px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                {/* Headlines */}
                <h2 className="text-4xl md:text-5xl font-semibold text-secondary mb-4 tracking-tight">
                    We know choosing the right agency<br />
                    is hard because few <span className="text-primary">truly deliver</span>.
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl font-semibold text-secondary mb-16 tracking-tight">
                    <span>So we made it simple</span>
                    <span className="text-primary italic">to compare</span>
                    <span>how we work</span>

                    {/* Toggle Switch */}
                    <button
                        onClick={() => setIsCapableGroupsSelected(!isCapableGroupsSelected)}
                        className="relative w-16 h-8 bg-primary rounded-full p-1 transition-colors duration-300"
                    >
                        <motion.div
                            animate={{ x: isCapableGroupsSelected ? 32 : 0 }}
                            className="bg-white w-6 h-6 rounded-full shadow-sm"
                        />
                    </button>

                    <span>versus what you usually</span>
                    <span>get <span className="text-primary">in the market.</span></span>
                </div>

                {/* Comparison Card/Table */}
                <div className="relative max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-visible border border-gray-100">
                    <div className="flex">
                        {/* Other Agencies Column */}
                        <div className="flex-1 pt-8 pb-4">
                            <h3 className="text-xl font-semibold text-secondary mb-8 text-left px-8">Other agencies</h3>
                            {comparisonData.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 px-8 py-4 border-t border-gray-50 text-gray-400">
                                    <ChevronRight className="w-4 h-4" />
                                    <span className="text-sm font-medium">{item.other}</span>
                                </div>
                            ))}
                        </div>

                        {/* Capable Groups Column (Overlay Box) */}
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-primary/90 text-white rounded-3xl -my-4 -mr-4 py-8 shadow-2xl transform translate-x-2">
                                <h3 className="text-xl font-semibold mb-8 text-left px-8">Capable Groups</h3>
                                {comparisonData.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 px-8 py-4 border-t border-white/10">
                                        <ChevronRight className="w-4 h-4 text-white" />
                                        <span className="text-sm font-bold">{item.capableGroups}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Proof Footer */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10">
                    <button className="bg-primary text-white px-8 py-4 rounded-2xl hover:bg-[#3d7da8] transition-all font-semibold shadow-lg shadow-primary/20">
                        Read our story
                    </button>

                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <img
                                        key={i}
                                        src={`https://i.pravatar.cc/100?u=capablegroups-${i}`}
                                        alt="User"
                                        className="w-12 h-12 rounded-full border-4 border-white object-cover"
                                    />
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-white flex items-center justify-center text-xs font-bold text-gray-500 shadow-sm">
                                    +52
                                </div>
                            </div>

                            <div className="flex flex-col items-start leading-tight">
                                <div className="flex gap-0.5 mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={16} fill="#0AA4E3" color="#0AA4E3" />
                                    ))}
                                    <span className="ml-2 font-bold text-gray-800">4.9/5</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Trusted by <span className="text-primary font-bold">54+</span> visionary brands
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
