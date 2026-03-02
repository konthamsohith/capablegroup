import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <SEO
                title="Privacy Policy | Capable Groups"
                description="Privacy Policy for Capable Groups. Learn how we collect, use, and protect your personal data."
                canonicalUrl="https://capablegroups.com/privacy-policy"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-geist font-bold text-secondary mb-8 tracking-tighter">
                    Privacy Policy
                </h1>

                <div className="prose prose-lg text-muted max-w-none">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">1. Introduction</h2>
                    <p className="mb-6">
                        Welcome to Capable Groups ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">2. The data we collect about you</h2>
                    <p className="mb-6">
                        Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">3. How we use your personal data</h2>
                    <p className="mb-6">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">4. Data Security</h2>
                    <p className="mb-6">
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">5. Contact Details</h2>
                    <p className="mb-6">
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;
