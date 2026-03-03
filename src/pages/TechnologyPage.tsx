import React from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
};

const practices = [
    {
        number: '01',
        title: 'AI-First Web & Application Development',
        body: `We design and build websites, web applications, and digital products using AI-assisted development workflows that compress delivery timelines without compromising architectural integrity.\n\nEvery system we deliver is built to be AI-agent compatible — structured, API-accessible, and designed to integrate with automation and intelligence layers that are rapidly becoming standard across enterprise technology stacks.`,
        tags: ['Headless CMS', 'LLM Integration', 'Semantic HTML', 'AI Tooling', 'Rapid Prototyping'],
    },
    {
        number: '02',
        title: 'Mobile Application Development',
        body: `We develop native and cross-platform mobile applications for iOS and Android — from consumer-facing products to enterprise field tools.\n\nOur mobile practice has delivered over 100 applications across retail, logistics, healthcare, and professional services.`,
        tags: ['iOS (Swift)', 'Android (Kotlin)', 'React Native', 'Flutter', 'AI Features'],
    },
    {
        number: '03',
        title: 'E-Commerce Development',
        body: `We design and build e-commerce platforms as complete commercial ecosystems — incorporating inventory management, payment processing, analytics, and AI-driven personalisation from the outset.\n\nOur practice covers platform-based implementations and fully custom builds for clients with complex commercial requirements.`,
        tags: ['Shopify', 'WooCommerce', 'Custom React', 'AI Recommendations', 'Multi-currency'],
    },
    {
        number: '04',
        title: 'Digital Marketing & Search Optimisation',
        body: `Our digital marketing practice operates in direct integration with our technology teams — ensuring marketing performance is connected to the technical health and content architecture of the systems we build.`,
        tags: ['Technical SEO', 'Content Strategy', 'Performance Marketing', 'AI Copywriting', 'Analytics'],
    },
    {
        number: '05',
        title: 'IT Staffing — US & Domestic',
        body: `We provide talent acquisition and placement services for technology roles in India and the United States, serving organisations that require qualified professionals on contract, project, or permanent engagement models.\n\nOur staffing practice draws on an established network of vetted candidates across full-stack development, AI and ML engineering, product management, QA, and technology consulting.`,
        tags: ['Contract', 'Contract-to-Hire', 'Direct Placement', 'India', 'United States'],
    },
    {
        number: '06',
        title: 'Technology Strategy & Consulting',
        body: `Our senior consultants work with technology and business leadership teams to assess existing digital infrastructure, identify capability gaps, and define technology roadmaps aligned with organisational objectives.\n\nEngagements in this practice typically precede and inform delivery work — ensuring what we build is grounded in a clear understanding of where the client needs to go and what constraints they operate within.`,
        tags: ['Infrastructure Audit', 'Roadmap Definition', 'Programme Oversight', 'AI Readiness'],
    },
];

const techStack = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Django', 'FastAPI'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'] },
    { category: 'AI & ML', items: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'Hugging Face', 'Pinecone', 'Weaviate'] },
    { category: 'Cloud', items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Vercel'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Redis'] },
    { category: 'CMS', items: ['Sanity', 'Contentful', 'Strapi'] },
    { category: 'E-Commerce', items: ['Shopify', 'WooCommerce', 'Magento'] },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'] },
];

const aiFramework = [
    { number: '1', title: 'Structured Content Architecture', body: 'All content is organised with clear hierarchical structure and semantic meaning — enabling AI agents, LLM crawlers, and automation systems to accurately parse, index, and act on it.' },
    { number: '2', title: 'API-First Design', body: 'Core information — services, team data, project records — is accessible via documented APIs, not locked inside presentation layers.' },
    { number: '3', title: 'Schema.org Compliance', body: 'Structured data is implemented on every page, providing explicit context for search engines, AI assistants, and knowledge graph systems.' },
    { number: '4', title: 'Multi-Channel Content Delivery', body: 'Content architecture supports delivery to web, mobile, voice interfaces, and conversational AI without requiring structural rebuild.' },
    { number: '5', title: 'Observable and Measurable', body: 'Full analytics instrumentation, error monitoring, and performance tracking implemented as standard — enabling continuous, data-informed improvement.' },
    { number: '6', title: 'Scalable and Maintainable', body: 'Systems are documented, modular, and capable of absorbing new requirements without architectural compromise.' },
];

const TechnologyPage: React.FC = () => {
    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#060612]">
            <SEO
                title="Technology & Services | Capable Groups"
                description="Capable Groups offers six focused technology practice areas: AI web development, mobile apps, e-commerce, digital marketing, IT staffing, and technology strategy."
                canonicalUrl="https://capablegroups.com/technology"
            />

            {/* Hero */}
            <section className="pt-40 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" animate="visible">
                    <span className="section-tag mb-6 inline-block">OUR TECHNOLOGY PRACTICE</span>
                </motion.div>
                <motion.h1
                    variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    className="text-5xl md:text-[72px] font-bold tracking-tighter leading-[1.0] mb-8 max-w-4xl"
                >
                    Built for{' '}
                    <span className="italic text-[#ff6321]">enterprise-grade</span>{' '}
                    delivery
                </motion.h1>
                <motion.p
                    variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    className="text-[#69686e] text-lg leading-relaxed max-w-2xl"
                >
                    Capable Groups offers a focused set of technology services designed for organisations that require enterprise-grade delivery standards combined with the speed and efficiency of modern AI-assisted development. Each practice area is staffed by experienced professionals and supported by a delivery methodology refined over 16 years.
                </motion.p>
            </section>

            {/* Practice Areas */}
            <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-12">
                    <span className="section-tag mb-4 inline-block">SIX PRACTICE AREAS</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">What we <span className="italic text-[#ff6321]">deliver</span></h2>
                </motion.div>

                <div className="flex flex-col divide-y divide-gray-200/60">
                    {practices.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i * 0.05}
                            className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 group"
                        >
                            <div className="lg:col-span-1">
                                <span className="text-[11px] font-bold tracking-[0.2em] text-[#ff6321] uppercase">{p.number}</span>
                            </div>
                            <div className="lg:col-span-4">
                                <h3 className="text-xl font-bold text-[#060612] leading-snug">{p.title}</h3>
                            </div>
                            <div className="lg:col-span-7">
                                {p.body.split('\n\n').map((para, j) => (
                                    <p key={j} className="text-[#69686e] text-[14px] leading-relaxed mb-4">{para}</p>
                                ))}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase text-[#69686e] bg-white border border-gray-200 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-14">
                        <span className="section-tag mb-4 inline-block">TECHNOLOGY STACK</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Technologies we <span className="italic text-[#ff6321]">work with</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((cat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i * 0.05}
                                className="bg-[#f5f4f3] rounded-2xl p-6 border border-gray-100"
                            >
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff6321] mb-3 block">{cat.category}</span>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map(item => (
                                        <span key={item} className="text-[13px] font-medium text-[#060612]">{item}</span>
                                    )).reduce((acc: React.ReactNode[], el, idx, arr) => {
                                        acc.push(el);
                                        if (idx < arr.length - 1) acc.push(<span key={`dot-${idx}`} className="text-[#69686e]">·</span>);
                                        return acc;
                                    }, [])}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Readiness Framework */}
            <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-14">
                    <span className="section-tag mb-4 inline-block">AI READINESS</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-xl">
                        What <span className="italic text-[#ff6321]">AI-readiness</span> means in practice
                    </h2>
                    <p className="text-[#69686e] text-[14px] leading-relaxed max-w-2xl mt-6">
                        The term "AI-ready" is used widely without a consistent definition. The following represents our working standard — the criteria against which we assess and design every system we deliver.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aiFramework.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={i * 0.07}
                            className="bg-white rounded-2xl p-8 border border-gray-100"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-[28px] font-bold text-[#ff6321]/20 leading-none tracking-tighter">{item.number}</span>
                                <div>
                                    <h3 className="text-[16px] font-bold text-[#060612] mb-2">{item.title}</h3>
                                    <p className="text-[#69686e] text-[13.5px] leading-relaxed">{item.body}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default TechnologyPage;
