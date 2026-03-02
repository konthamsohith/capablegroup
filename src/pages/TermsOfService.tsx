import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-geist font-bold text-secondary mb-8 tracking-tighter">
                    Terms of Service
                </h1>

                <div className="prose prose-lg text-muted max-w-none">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">1. Agreement to Terms</h2>
                    <p className="mb-6">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Capable Groups ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">2. Intellectual Property Rights</h2>
                    <p className="mb-6">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">3. User Representations</h2>
                    <p className="mb-6">
                        By using the Site, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">4. Prohibited Activities</h2>
                    <p className="mb-6">
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">5. Governing Law</h2>
                    <p className="mb-6">
                        These Terms shall be governed by and defined following the laws of India. Capable Groups and yourself irrevocably consent that the courts of Hyderabad, Telangana shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">6. Contact Us</h2>
                    <p className="mb-6">
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        <br /><br />
                        <strong>Capable Groups</strong><br />
                        Email: info@capablegroups.com<br />
                        Phone: 949 397 1983<br />
                        Address: 5th Floor, P & S Kickstart, Shanta Sriram Building, PSR Towers, Beside DLF Building, Gachibowli Hyderabad, Telangana 500032
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
