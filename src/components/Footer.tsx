import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background pt-24 pb-12 px-4 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
                    {/* Branding & Mission */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center p-2">
                                <img
                                    src="/capblelogo.png"
                                    alt="Capable Groups Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold text-secondary">Capable Groups</span>
                        </div>
                        <p className="font-geist font-medium text-[16px] leading-[19px] text-[#69686e]">
                            To be a trusted partner in providing skilled professionals and delivering cost effective and innovative solutions and support businesses in USA, EMEA and the Indian subcontinent.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook size={18} fill="currentColor" />, label: "Facebook" },
                                { icon: <Instagram size={18} />, label: "Instagram" },
                                { icon: <Linkedin size={18} fill="currentColor" />, label: "LinkedIn" },
                                { icon: <Twitter size={18} fill="currentColor" />, label: "X" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center hover:bg-[#4A96CB] transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:pl-4">
                        <h4 className="font-geist font-semibold text-[12px] leading-[12px] text-[#69686e] mb-8">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Home</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">About Us</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Clients</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Technologies</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="font-geist font-semibold text-[12px] leading-[12px] text-[#69686e] mb-8">
                            Services
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Mobile App Development</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">E-Commerce Development</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Digital Marketing Services</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Website Designing</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">US IT Staffing</a></li>
                            <li><a href="#" className="font-geist font-semibold text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors">Domestic Staffing</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-4 lg:pl-8">
                        <h4 className="font-geist font-semibold text-[12px] leading-[12px] text-[#69686e] mb-8">
                            Contact Information
                        </h4>
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                <a href="mailto:Info@capablegroups.com" className="font-geist font-[500] text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors block">Info@capablegroups.com</a>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                                <a href="tel:9493971983" className="font-geist font-[500] text-[16px] leading-[19px] text-[#69686e] hover:text-[#4A96CB] transition-colors block">9493971983</a>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Address</p>
                                <p className="font-geist font-[500] text-[16px] leading-[19px] text-[#69686e]">
                                    5th Floor, P & S Kickstart, Shanta Sriram Building PSR Towers,<br />
                                    Beside DLF Building, Gachibowli<br />
                                    Hyderabad, Telangana 500032
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-[#f0f0f0] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <p className="text-gray-400 font-bold text-sm">
                        © 2011 Capable Groups. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
