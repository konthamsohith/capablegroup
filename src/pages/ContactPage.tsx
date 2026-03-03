import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 } }),
};

const enquiryTypes = [
    'New Website or Web Application',
    'Mobile Application Development',
    'AI Product Development',
    'E-Commerce Platform',
    'Technology Strategy Consulting',
    'US IT Staffing',
    'Domestic Staffing (India)',
    'General Enquiry',
];

const ContactPage: React.FC = () => {
    const [form, setForm] = useState({
        fullName: '', organisation: '', email: '', telephone: '', enquiry: '', brief: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-[#f5f4f3] min-h-screen font-geist text-[#060612]">
            <SEO
                title="Contact | Capable Groups"
                description="Get in touch with Capable Groups. We respond to all technology enquiries within one business day."
                canonicalUrl="https://capablegroups.com/contact"
            />

            <section className="pt-40 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <motion.div variants={fadeUp} initial="hidden" animate="visible">
                            <span className="section-tag mb-6 inline-block">GET IN TOUCH</span>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp} initial="hidden" animate="visible" custom={1}
                            className="text-5xl md:text-[64px] font-bold tracking-tighter leading-[1.0] mb-8"
                        >
                            Let's start a<br />
                            <span className="italic text-[#ff6321]">conversation.</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeUp} initial="hidden" animate="visible" custom={2}
                            className="text-[#69686e] text-[15px] leading-relaxed mb-10 max-w-md"
                        >
                            If you are considering a technology engagement — or assessing whether your current digital infrastructure is fit for purpose — we would welcome the opportunity to discuss it with you. We respond to all enquiries within one business day.
                        </motion.p>

                        {/* Contact Details */}
                        <motion.div
                            variants={fadeUp} initial="hidden" animate="visible" custom={3}
                            className="space-y-6"
                        >
                            {[
                                {
                                    label: 'EMAIL US',
                                    value: 'Info@capablegroups.com',
                                    href: 'mailto:Info@capablegroups.com',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: 'CALL US',
                                    value: '+91 9493971983',
                                    href: 'tel:+919493971983',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: 'VISIT US',
                                    value: '5th Floor, P & S Kickstart, Gachibowli, Hyderabad 500032',
                                    href: '#',
                                    icon: (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                    ),
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#ff6321] flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#69686e] block mb-1">{item.label}</span>
                                        <a href={item.href} className="text-[14px] font-medium text-[#060612] hover:text-[#ff6321] transition-colors">
                                            {item.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                        {submitted ? (
                            <div className="bg-white rounded-[28px] p-10 border border-gray-100 flex flex-col items-center justify-center min-h-[500px] text-center">
                                <div className="w-14 h-14 rounded-full bg-[#ff6321]/10 flex items-center justify-center mb-6">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#ff6321" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[#060612] mb-3 tracking-tight">Enquiry Submitted</h3>
                                <p className="text-[#69686e] text-[14px] leading-relaxed max-w-xs">
                                    Thank you. We acknowledge all enquiries within one business day and will be in touch shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-[28px] p-8 md:p-10 border border-gray-100 space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {[
                                        { id: 'fullName', label: 'Full Name', required: true, type: 'text' },
                                        { id: 'organisation', label: 'Organisation Name', required: true, type: 'text' },
                                    ].map(f => (
                                        <div key={f.id}>
                                            <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#69686e] mb-2 block">
                                                {f.label}{f.required && ' *'}
                                            </label>
                                            <input
                                                type={f.type}
                                                name={f.id}
                                                required={f.required}
                                                value={form[f.id as keyof typeof form]}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f4f3] text-[14px] font-medium text-[#060612] placeholder-[#69686e]/40 focus:outline-none focus:border-[#ff6321]/50 transition-colors"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {[
                                        { id: 'email', label: 'Business Email', required: true, type: 'email' },
                                        { id: 'telephone', label: 'Telephone', required: false, type: 'tel' },
                                    ].map(f => (
                                        <div key={f.id}>
                                            <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#69686e] mb-2 block">
                                                {f.label}{f.required && ' *'}
                                            </label>
                                            <input
                                                type={f.type}
                                                name={f.id}
                                                required={f.required}
                                                value={form[f.id as keyof typeof form]}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f4f3] text-[14px] font-medium text-[#060612] placeholder-[#69686e]/40 focus:outline-none focus:border-[#ff6321]/50 transition-colors"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#69686e] mb-2 block">Nature of Enquiry *</label>
                                    <select
                                        name="enquiry"
                                        required
                                        value={form.enquiry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f4f3] text-[14px] font-medium text-[#060612] focus:outline-none focus:border-[#ff6321]/50 transition-colors"
                                    >
                                        <option value="">Select an option</option>
                                        {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#69686e] mb-2 block">Project Brief (optional)</label>
                                    <textarea
                                        name="brief"
                                        rows={4}
                                        value={form.brief}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your project or enquiry..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#f5f4f3] text-[14px] font-medium text-[#060612] placeholder-[#69686e]/40 focus:outline-none focus:border-[#ff6321]/50 transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#ff6321] text-white py-4 rounded-xl font-bold text-[14px] tracking-tight hover:bg-[#e45217] transition-colors"
                                >
                                    Submit Enquiry →
                                </button>
                                <p className="text-center text-[11px] text-[#69686e]">We acknowledge all enquiries within one business day.</p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
