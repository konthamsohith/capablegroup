export interface Post {
    id: number;
    category: string;
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    featured: boolean;
    heroImage: string;
    image?: string;
    description?: string;
}

export const CATEGORIES = ['All', 'AI & Enterprise', 'Strategy', 'Company'];

export const posts = [
    {
        id: 1,
        category: 'AI & Enterprise',
        tag: 'AI & ENTERPRISE TECHNOLOGY',
        title: 'Is Your Digital Infrastructure Ready for the Age of AI Agents?',
        excerpt:
            'The question facing technology and business leaders in 2026 is no longer whether AI will affect their digital infrastructure — it is whether that infrastructure is designed to work with AI, or whether it will be bypassed by it.',
        date: 'March 2026',
        readTime: '7 min read',
        featured: true,
        heroImage: '/blog-ai-agents.png',
        image: '/blog-ai-agents.png', // Added for compatibility with Blog.tsx
        description: 'The question facing technology and business leaders in 2026 is no longer whether AI will affect their digital infrastructure.', // Added for compatibility with Blog.tsx
    },
    {
        id: 2,
        category: 'Strategy',
        tag: 'STRATEGY & INSIGHT',
        title: '16 Years of Enterprise Technology Delivery: What We Have Learned',
        excerpt:
            'When Capable Groups was founded in 2010, the technology industry looked significantly different. Over 16 years and 250+ projects, these are our most durable conclusions.',
        date: 'February 2026',
        readTime: '8 min read',
        featured: false,
        heroImage: '/blog-16years.png',
        image: '/blog-16years.png',
        description: 'When Capable Groups was founded in 2010, the technology industry looked significantly different. Over 16 years, these are our durable conclusions.',
    },
    {
        id: 3,
        category: 'Company',
        tag: 'COMPANY PERSPECTIVE',
        title: 'What "AI-First" Means for a Technology Consultancy in 2026',
        excerpt:
            'The phrase "AI-first" is used widely in the technology industry at present. In many cases, it is used loosely — as a marketing descriptor rather than a description of actual operating practice.',
        date: 'January 2026',
        readTime: '5 min read',
        featured: false,
        heroImage: '/blog-aifirst-hero.png',
        image: '/blog-aifirst-hero.png',
        description: 'The phrase "AI-first" is used widely in the technology industry at present. In many cases, it is used loosely — as a marketing descriptor.',
    },
    {
        id: 4,
        category: 'AI & Enterprise',
        tag: 'AI & ENTERPRISE TECHNOLOGY',
        title: 'From Automation to Autonomy: How AI Agents Are Changing the Enterprise Stack',
        excerpt:
            'The shift from rule-based automation to goal-directed AI agents represents the most significant architectural change in enterprise software in a decade.',
        date: 'December 2025',
        readTime: '6 min read',
        featured: false,
        heroImage: '/blog-aifirst-trust.png',
        image: '/blog-aifirst-trust.png',
        description: 'The shift from rule-based automation to goal-directed AI agents represents the most significant architectural change in a decade.',
    },
    {
        id: 5,
        category: 'Strategy',
        tag: 'STRATEGY & INSIGHT',
        title: 'Why Most Digital Transformation Projects Fail — and What the Survivors Did Differently',
        excerpt:
            'Across hundreds of engagements, a consistent pattern emerges: the projects that fail share the same structural flaws, and the projects that succeed share the same disciplines.',
        date: 'November 2025',
        readTime: '9 min read',
        featured: false,
        heroImage: '/blog-aifirst-delivery.png',
        image: '/blog-aifirst-delivery.png',
        description: 'Across hundreds of engagements, a consistent pattern emerges: the projects that fail share the same structural flaws.',
    },
    {
        id: 6,
        category: 'Company',
        tag: 'COMPANY PERSPECTIVE',
        title: 'Our Engineering Principles for 2026',
        excerpt:
            'Every year we revisit our core engineering principles. This is what we believe in 2026 — and what we have updated from the prior year.',
        date: 'October 2025',
        readTime: '4 min read',
        featured: false,
        heroImage: '/blog-aifirst-scoping.png',
        image: '/blog-aifirst-scoping.png',
        description: 'Every year we revisit our core engineering principles. This is what we believe in 2026 — and what we have updated from the prior year.',
    },
];
