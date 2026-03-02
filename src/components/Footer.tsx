import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="relative pt-16 pb-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="/capablelogo.png"
                                alt="Capable Groups Logo"
                                className="w-8 h-8 object-contain"
                            />
                            <span className="text-2xl font-bold text-secondary tracking-tight">Capable Groups</span>
                        </div>
                        <p className="text-muted text-lg leading-relaxed max-w-sm font-medium">
                            To be a trusted partner in providing skilled professionals and delivering cost-effective, innovative solutions globally.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook size={20} />, label: "Facebook" },
                                { icon: <Twitter size={20} />, label: "Twitter" },
                                { icon: <Linkedin size={20} />, label: "LinkedIn" },
                                { icon: <Instagram size={20} />, label: "Instagram" }
                            ].map((social, i) => (
                                <motion.a
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-background text-secondary border border-gray-100 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Navigation</h4>
                        <ul className="flex flex-col gap-2 font-medium text-muted">
                            {["Home", "About Us", "Clients", "Technologies", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Services</h4>
                        <ul className="flex flex-col gap-2 font-medium text-muted">
                            {["Mobile Apps", "E-Commerce", "Marketing", "Designing", "US Staffing"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Get in touch</h4>
                        <div className="flex flex-col gap-4">
                            <div>
                                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1.5">EMAIL US</p>
                                <a href="mailto:info@capablegroups.com" className="font-medium text-muted hover:text-primary transition-colors">info@capablegroups.com</a>
                            </div>
                            <div>
                                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1.5">CALL US</p>
                                <a href="tel:9493971983" className="font-medium text-muted hover:text-primary transition-colors">949 397 1983</a>
                            </div>
                            <div>
                                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1.5">VISIT US</p>
                                <p className="font-medium text-muted leading-relaxed">
                                    5th Floor, P & S Kickstart, Shanta Sriram Building,<br />
                                    PSR Towers, Beside DLF Building,<br />
                                    Gachibowli Hyderabad, Telangana 500032
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted font-medium text-sm">
                        © 2026 Capable Groups. All rights reserved.
                    </p>
                    <div className="flex gap-8 font-medium text-muted">
                        <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
