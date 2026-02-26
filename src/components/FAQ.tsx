import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: "How long does a typical project take?",
        answer: "A typical project can take anywhere from 2 to 6 weeks depending on the complexity of the requirements and the number of revisions."
    },
    {
        id: 2,
        question: "Do you work with startups or only large brands?",
        answer: "We work with brands of all sizes! Whether you are a solo founder launching your first MVP or a late-stage company scaling your design system, we have a plan for you."
    },
    {
        id: 3,
        question: "What's included in your design packages?",
        answer: "Our packages typically include research, wireframing, high-fidelity UI design, prototyping, and a handoff document for developers."
    },
    {
        id: 4,
        question: "Do you provide development services too?",
        answer: "Yes, we offer full-stack web development services using modern technologies like React, Next.js, and Framer to bring your designs to life."
    },
    {
        id: 5,
        question: "How do we start a project?",
        answer: "Simply pick a plan that fits your needs, or reach out to us via the contact form. We'll schedule a kick-off call to discuss your vision."
    },
    {
        id: 6,
        question: "Can you help with ongoing updates after launch?",
        answer: "Absolutely. We offer maintenance and ongoing support plans to ensure your product continues to evolve with your users' needs."
    }
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: typeof faqs[0], isOpen: boolean, toggle: () => void }) => {
    return (
        <div className="mb-4">
            <button
                onClick={toggle}
                className="w-full bg-white p-6 md:p-8 rounded-[32px] flex items-center justify-between text-left transition-all hover:shadow-sm group"
            >
                <span className="text-xl md:text-2xl font-semibold text-secondary">
                    {faq.id}. {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-secondary rotate-45' : 'bg-black text-white'}`}>
                    <Plus size={20} className={isOpen ? 'text-white' : 'text-white'} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-10 py-6 text-gray-500 text-lg font-medium leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background px-4 relative">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4 block">
                        &gt; GOT QUESTIONS &lt;
                    </span>
                    <h2 className="text-6xl font-semibold text-secondary tracking-tight">
                        We've got answers
                    </h2>


                </div>

                {/* FAQ List Container (Card-in-card) */}
                <div className="bg-[#f0f0f0] p-4 md:p-8 rounded-[48px] border border-gray-100 mb-16">
                    {faqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            toggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                        />
                    ))}
                </div>

                {/* Footer Footer */}
                <div className="flex flex-col items-center">
                    <div className="flex -space-x-4 mb-4">
                        {[1, 2, 3].map((i) => (
                            <img
                                key={i}
                                src={`https://i.pravatar.cc/150?u=faq-${i}`}
                                alt="Support Avatar"
                                className="w-12 h-12 rounded-full border-4 border-white object-cover grayscale"
                            />
                        ))}
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary mb-6">
                        Still have questions?
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-10 py-4 rounded-2xl font-semibold shadow-xl shadow-primary/20 hover:bg-[#3d7da8] transition-colors"
                    >
                        Let's talk
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
