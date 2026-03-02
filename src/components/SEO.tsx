import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Capable Groups | Elite Teams & Digital Solutions",
    description = "Capable Groups is a continuous expanding network of highly skilled, vetted professionals worldwide. We deliver UI/UX design, digital marketing, development, and strategic staffing.",
    canonicalUrl = "https://capablegroups.com",
    ogImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&h=630&auto=format&fit=crop",
    ogType = "website",
    keywords = "UI/UX design, digital agency, tech staffing, digital marketing, scalable development, branding, Capable Groups"
}) => {
    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Structured Data for Organization */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Capable Groups",
                        "url": "https://capablegroups.com",
                        "logo": "https://capablegroups.com/capablelogo.png",
                        "description": "A multidisciplinary agency creating thoughtful, scalable digital solutions.",
                        "sameAs": [
                            "https://www.linkedin.com/company/capable-groups",
                            "https://twitter.com/capablegroups"
                        ]
                    }
                `}
            </script>
        </Helmet>
    );
};

export default SEO;
