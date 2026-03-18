export interface Section {
    number?: string;
    label?: string;
    title?: string;
    body: string[];
    image?: string | null;
    imageAlt?: string | null;
    imageCaption?: string | null;
    imageLeft?: boolean;
}

export interface Post {
    id: number;
    slug: string;
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
    introTitle?: string;
    introParagraphs?: string[];
    introQuote?: {
        text: string;
        author: string;
    };
    sections?: Section[];
    constancies?: {
        label: string;
        title: string;
        items: {
            title: string;
            body: string;
            iconKey: string;
        }[];
        image?: string;
        imageAlt?: string;
        quote?: string;
        quoteAuthor?: string;
    };
    closingTitle?: string;
    closingParagraphs?: string[];
}

export const CATEGORIES = ['All', 'AI & Enterprise', 'Strategy', 'Company'];

// Unique Unsplash images per blog theme (free to use, no same image across posts)
const BLOG_IMAGES = {
    aiAgents: {
        hero: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
        data: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=1200&q=80',
        performance: 'https://images.unsplash.com/photo-1727434032773-af3cd98375ba?w=1200&q=80',
    },
    yearsEnterprise: {
        hero: 'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?w=1200&q=80',
        problem: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
        delivery: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80',
        trust: 'https://images.unsplash.com/photo-1595980542930-9eea66620834?w=1200&q=80',
    },
    aiFirst: {
        hero: 'https://images.unsplash.com/photo-1677442135131-4d7c123aef1c?w=1200&q=80',
        scoping: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
        delivery: 'https://images.unsplash.com/photo-1636690513351-0af1763f6237?w=1200&q=80',
        trust: 'https://images.unsplash.com/photo-1595980542930-9eea66620834?w=1200&q=80',
    },
    automationAutonomy: {
        hero: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=1200&q=80',
        limits: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
        agentic: 'https://images.unsplash.com/photo-1727434032773-af3cd98375ba?w=1200&q=80',
    },
    digitalTransformation: {
        hero: 'https://images.unsplash.com/photo-1705133529749-e5f1fdd1a289?w=1200&q=80',
        solution: 'https://images.unsplash.com/photo-1554023232-f4f53181a4f6?w=1200&q=80',
        documentation: 'https://images.unsplash.com/photo-1589898424451-21e24dcb143c?w=1200&q=80',
    },
    engineeringPrinciples: {
        hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
        accountability: 'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?w=1200&q=80',
        rigour: 'https://images.unsplash.com/photo-1727434032773-af3cd98375ba?w=1200&q=80',
        longevity: 'https://images.unsplash.com/photo-1554023232-f4f53181a4f6?w=1200&q=80',
        capability: 'https://images.unsplash.com/photo-1677442135131-4d7c123aef1c?w=1200&q=80',
    },
};

export const posts: Post[] = [
    {
        id: 1,
        slug: 'digital-infrastructure-ai-agents',
        category: 'AI & Enterprise',
        tag: 'AI & ENTERPRISE TECHNOLOGY',
        title: 'Is Your Digital Infrastructure Ready for the Age of AI Agents?',
        excerpt:
            'The question facing technology and business leaders in 2026 is no longer whether AI will affect their digital infrastructure — it is whether that infrastructure is designed to work with AI, or whether it will be bypassed by it.',
        date: 'March 2026',
        readTime: '7 min read',
        featured: true,
        heroImage: BLOG_IMAGES.aiAgents.hero,
        image: BLOG_IMAGES.aiAgents.hero,
        description: 'The question facing technology and business leaders in 2026 is no longer whether AI will affect their digital infrastructure.',
        introParagraphs: [
            'The question facing technology and business leaders in 2026 is no longer whether AI will affect their digital infrastructure — it is whether that infrastructure is designed to work with AI, or whether it will be bypassed by it.',
            'As we move from static applications to autonomous agents, the requirements for data availability, API design, and security change fundamentally.'
        ],
        sections: [
            {
                number: '1',
                label: 'DATA ACCESSIBILITY',
                title: 'From human-readable to agent-accessible',
                body: [
                    'Traditional infrastructure was designed for human consumption through graphical interfaces. AI agents need structured, semantic data that they can query and interpret directly.',
                    'This requires a shift toward "headless" architectures where data remains decoupled from presentation, allowing agents to interface with the core business logic without the overhead of UI parsing.'
                ],
                image: BLOG_IMAGES.aiAgents.data,
                imageAlt: 'Data accessibility visualization',
                imageLeft: false
            },
            {
                number: '2',
                label: 'LATENCY & PERFORMANCE',
                title: 'Milliseconds matter for autonomous loops',
                body: [
                    'When an agent is operating in an autonomous loop—reasoning, acting, and validating—the latency of every infrastructure call is magnified. High-latency systems become bottlenecked by their own communication overhead.',
                    'Optimizing for agentic workflows means prioritizing edge computing and low-latency database queries to ensure that agents can "think" and act in real-time.'
                ],
                image: BLOG_IMAGES.aiAgents.performance,
                imageAlt: 'Performance optimization',
                imageLeft: true
            }
        ],
        closingTitle: 'Preparing for the transition',
        closingParagraphs: [
            'The transition to agentic infrastructure is not a single project, but a paradigm shift in how we design and deploy enterprise systems.',
            'Capable Groups is helping organizations navigate this change, ensuring that their digital foundation is ready for the next decade of AI-driven autonomy.'
        ]
    },
    {
        id: 2,
        slug: '16-years-enterprise-technology',
        category: 'Strategy',
        tag: 'STRATEGY & INSIGHT',
        title: '15 Years of Enterprise Technology Delivery: What We Have Learned',
        excerpt:
            'When Capable Groups was founded in 2011, the technology industry looked significantly different. Over 15 years and 250+ projects, these are our most durable conclusions.',
        date: 'February 2026',
        readTime: '8 min read',
        featured: false,
        heroImage: BLOG_IMAGES.yearsEnterprise.hero,
        image: BLOG_IMAGES.yearsEnterprise.hero,
        description: 'When Capable Groups was founded in 2011, the technology industry looked significantly different. Over 15 years, these are our durable conclusions.',
        introParagraphs: [
            'When Capable Groups was founded in 2011, the technology industry looked significantly different. Cloud computing was nascent. Mobile was ascending. AI was, for most practical purposes, academic.',
            'Over the 15 years since, we have delivered more than 250 projects for clients across four continents. The following represents our most durable conclusions from that experience.'
        ],
        sections: [
            {
                number: '1',
                label: 'PROBLEM DEFINITION',
                title: 'Problem definition is the work',
                body: [
                    'The most consequential part of any technology engagement is the definition of the problem to be solved.',
                    'Clients frequently arrive with solutions in mind — a specific platform, a particular feature set, a technology they have read about. Experienced technology partners understand that the stated solution is the starting point, not the specification.',
                    'The productive conversation is about the underlying business problem: what is not working, what should be different, and what success looks like in measurable terms.'
                ],
                image: BLOG_IMAGES.yearsEnterprise.problem,
                imageLeft: false
            },
            {
                number: '2',
                label: 'DELIVERY SPEED',
                title: 'Delivery speed is a strategic variable',
                body: [
                    'In 2010, a complex web platform required six to twelve months to design, build, test, and deploy. In 2026, AI-assisted development has compressed that timeline significantly.',
                    'This is not a reduction in quality. It is an expansion in the number of iterations available within a given timeframe — which, when applied correctly, produces better outcomes, not worse ones.'
                ],
                image: BLOG_IMAGES.yearsEnterprise.delivery,
                imageLeft: true
            },
            {
                number: '3',
                label: 'INSTITUTIONAL TRUST',
                title: 'Institutional trust is the durable asset',
                body: [
                    'We work with a significant number of clients across multi-year relationships — not because they cannot find alternative providers, but because they have learned that we will deliver on our commitments.',
                    'In technology services, institutional trust is the most valuable and the most difficult thing to build. It is built through consistent delivery, clear communication, and the willingness to tell a client when their proposed approach is not the right one.'
                ],
                image: BLOG_IMAGES.yearsEnterprise.trust,
                imageLeft: false
            }
        ],
        constancies: {
            label: 'DURABLE CONCLUSIONS',
            title: 'Lessons from 15 years of delivery',
            items: [
                {
                    title: 'Documentation is infrastructure',
                    body: 'Every system we deliver is accompanied by documentation sufficient for a qualified engineer with no prior project context to understand, maintain, and extend it.',
                    iconKey: 'file-text'
                },
                {
                    title: 'Next shift is always closer',
                    body: 'The organisations that invested early — with considered conviction, not speculation — have consistently outperformed those that waited for consensus.',
                    iconKey: 'shield'
                },
                {
                    title: 'People define capability',
                    body: 'While tools change, the character and expertise of the people using them remain the primary drivers of project success.',
                    iconKey: 'users'
                }
            ],
            image: BLOG_IMAGES.yearsEnterprise.hero,
            imageAlt: '15 years of excellence',
            quote: 'Capability is a necessary condition. Reliability is the differentiating one.',
            quoteAuthor: 'Capable Groups, 2026'
        },
        closingTitle: 'Continuity in transition',
        closingParagraphs: [
            'The patterns have repeated across every technology transition we have observed. The shift to AI is the most significant yet, but the fundamentals of delivery remain unchanged.',
            'As we look to the next fifteen years, we remain committed to the same standards of rigour and accountability that have defined us since 2011.'
        ]
    },
    {
        id: 3,
        slug: 'ai-first-consultancy-2026',
        category: 'Company',
        tag: 'COMPANY PERSPECTIVE',
        title: 'What "AI-First" Means for a Technology Consultancy in 2026',
        excerpt:
            'The phrase "AI-first" is used widely in the technology industry at present. In many cases, it is used loosely — as a marketing descriptor rather than a description of actual operating practice.',
        date: 'January 2026',
        readTime: '5 min read',
        featured: false,
        heroImage: BLOG_IMAGES.aiFirst.hero,
        image: BLOG_IMAGES.aiFirst.hero,
        description: 'The phrase "AI-first" is used widely in the technology industry at present. In many cases, it is used loosely — as a marketing descriptor.',
        introParagraphs: [
            'The phrase "AI-first" is used widely in the technology industry at present. In many cases, it is used loosely — as a marketing descriptor rather than a description of actual operating practice. This article explains precisely what the term means for Capable Groups.'
        ],
        introQuote: {
            text: 'For us, AI-first means the intelligence layer is embedded in every stage of the engagement — not presented as an optional upgrade at the end.',
            author: 'Capable Groups, Practice Leadership'
        },
        sections: [
            {
                number: '1',
                label: 'AI IS INTEGRATED INTO THE SCOPING AND DESIGN PHASE',
                title: 'Start smarter, deliver faster',
                body: [
                    'Every engagement now begins with an AI-assisted scoping process. We use large language models to accelerate the production of wireframe copy, content architecture proposals, technical specifications, and initial project documentation.',
                    'Our senior team then reviews, validates, and refines this output. The result is a more considered brief produced in significantly less time — which compresses the distance between project initiation and delivery.',
                ],
                image: BLOG_IMAGES.aiFirst.scoping,
                imageAlt: 'AI-assisted scoping workspace',
                imageCaption: 'AI accelerates from blank canvas to considered brief — without skipping the thinking.',
                imageLeft: false,
            },
            {
                number: '2',
                label: 'AI FEATURES ARE A STANDARD COMPONENT OF PRODUCT DEVELOPMENT',
                title: 'Intelligent by default',
                body: [
                    'Capabilities that were previously premium additions — intelligent search, content summarisation, conversational interfaces — are now standard components of the development toolkit. We build with these by default, because client systems that incorporate them are more capable and more competitive than those that do not.',
                    'This does not mean every system requires every AI capability. It means every system is evaluated for where AI features would improve performance and user experience — and those evaluations now consistently yield positive answers.',
                ],
                image: BLOG_IMAGES.aiFirst.delivery,
                imageAlt: 'AI data flow pipeline visualisation',
                imageCaption: 'From intelligent search to conversational interfaces — built in, not bolted on.',
                imageLeft: true,
            },
            {
                number: '3',
                label: 'DELIVERY METHODOLOGIES ARE CONTINUOUSLY UPDATED',
                title: 'A practice that never stops improving',
                body: [
                    'Our technical practice leadership reviews AI tooling on a rolling basis and integrates new capabilities into our methodology when they meet our standards for reliability and output quality. This is an ongoing process.',
                    'The consequence is that clients who engage with Capable Groups in 2026 benefit from a methodology that is continuously evolving — incorporating proven new tools without disrupting delivery stability.',
                ],
                image: null,
                imageAlt: null,
                imageCaption: null,
                imageLeft: false,
            },
            {
                number: '4',
                label: 'CLIENT EDUCATION IS PART OF THE DELIVERY',
                title: 'Built to be understood',
                body: [
                    'We ensure that client teams understand how to use AI tools to manage, update, and extend the systems we build — reducing ongoing dependency and increasing the long-term value clients extract from our work.',
                    'This orientation reflects our view of the client relationship as a long-term partnership rather than a transactional delivery. A system your team can confidently extend is worth significantly more than one they cannot.',
                ],
                image: null,
                imageAlt: null,
                imageCaption: null,
                imageLeft: true,
            },
        ],
        constancies: {
            label: 'WHAT DOES NOT CHANGE',
            title: 'The constants that define us',
            items: [
                {
                    title: 'Delivery standards are unchanged',
                    body: 'AI-assisted development is a methodology, not a reduction in rigour. Every system is subject to the same quality, security, and performance standards it would have been under any prior methodology.',
                    iconKey: 'shield'
                },
                {
                    title: 'Client relationships are unchanged',
                    body: "We operate as long-term partners, not project vendors. The integration of AI into our practice is in service of that relationship — enabling us to deliver more value within the same timeframes and budgets.",
                    iconKey: 'users'
                },
                {
                    title: 'Documentation standards are unchanged',
                    body: 'Every system we deliver is documented to the same rigorous standard — sufficient for a qualified engineer with no prior project context to understand, maintain, and extend it independently.',
                    iconKey: 'file-text'
                }
            ],
            image: BLOG_IMAGES.aiFirst.trust,
            imageAlt: 'Capable Groups commitment to long-term client relationships',
            quote: 'AI changes the tools. It does not change the obligation.',
            quoteAuthor: 'Capable Groups, 2026'
        },
        closingTitle: 'What this means for clients',
        closingParagraphs: [
            'Working with Capable Groups in 2026 means working with a team that has integrated AI into its practice at the methodology level — not as a marketing positioning, but as a set of tools and processes that consistently produce better outcomes.',
            'Practically, this means faster delivery timelines, more considered architecture, and systems designed from day one to integrate with AI tools and agents as they continue to develop.',
            'And it means the same professional standards, the same commitment to accountability, and the same long-term orientation that has made Capable Groups a trusted partner for 15 years.'
        ]
    },
    {
        id: 4,
        slug: 'automation-to-autonomy',
        category: 'AI & Enterprise',
        tag: 'AI & ENTERPRISE TECHNOLOGY',
        title: 'From Automation to Autonomy: How AI Agents Are Changing the Enterprise Stack',
        excerpt:
            'The shift from rule-based automation to goal-directed AI agents represents the most significant architectural change in enterprise software in a decade.',
        date: 'December 2025',
        readTime: '6 min read',
        featured: false,
        heroImage: BLOG_IMAGES.automationAutonomy.hero,
        image: BLOG_IMAGES.automationAutonomy.hero,
        description: 'The shift from rule-based automation to goal-directed AI agents represents the most significant architectural change in a decade.',
        introParagraphs: [
            'For two decades, enterprise software has been built on the premise of rule-based automation: if this happens, do that. It is deterministic, reliable, and fundamentally limited.',
            'The emergence of Large Language Models (LLMs) has introduced a new paradigm: goal-directed autonomy. We are moving from systems that follow instructions to agents that pursue objectives.'
        ],
        sections: [
            {
                number: '1',
                label: 'THE LIMITS OF RULES',
                title: 'The deterministic bottleneck',
                body: [
                    'Traditional automation requires a developer to anticipate every state and define every transition. This works for simple workflows but fails when faced with the ambiguity and complexity of real-world business processes.',
                    'AI agents, however, can reason about novel situations and derive their own paths toward a goal, significantly expanding the scope of what can be automated.'
                ],
                image: BLOG_IMAGES.automationAutonomy.limits,
                imageLeft: false
            },
            {
                number: '2',
                label: 'AGENTIC ARCHITECTURE',
                title: 'Building for the reasoning loop',
                body: [
                    'Supporting autonomous agents requires a different kind of infrastructure. It requires stateful memory, tool-calling capabilities, and rigorous validation loops to ensure agent actions remain within operational guardrails.',
                    'At Capable Groups, we are designing these "agent shells"—the infrastructure that allows agents to operate safely and effectively within the enterprise environment.'
                ],
                image: BLOG_IMAGES.automationAutonomy.agentic,
                imageLeft: true
            }
        ],
        closingTitle: 'The autonomy advantage',
        closingParagraphs: [
            'The transition from automation to autonomy will define the competitive landscape of the next decade. Organisations that build the right foundation today will be the ones that scale most effectively tomorrow.'
        ]
    },
    {
        id: 5,
        slug: 'digital-transformation-failure',
        category: 'Strategy',
        tag: 'STRATEGY & INSIGHT',
        title: 'Why Most Digital Transformation Projects Fail — and What the Survivors Did Differently',
        excerpt:
            'Across hundreds of engagements, a consistent pattern emerges: the projects that fail share the same structural flaws, and the projects that succeed share the same disciplines.',
        date: 'November 2025',
        readTime: '9 min read',
        featured: false,
        heroImage: BLOG_IMAGES.digitalTransformation.hero,
        image: BLOG_IMAGES.digitalTransformation.hero,
        description: 'Across hundreds of engagements, a consistent pattern emerges: the projects that fail share the same structural flaws.',
        introParagraphs: [
            'Digital transformation is a high-stakes undertaking. Despite the investment, a significant percentage of these programmes fail to deliver their intended business value. Having overseen over 250 deliveries, we have observed a clear distinction between the projects that stumble and those that succeed.'
        ],
        sections: [
            {
                number: '1',
                label: 'THE SOLUTION TRAP',
                title: 'Starting with tools, not problems',
                body: [
                    'The number one cause of project failure is the "solution-first" approach. Organisations often commit to a specific technology platform—a CMS, an ERP, or an AI tool—before they have fully defined the business problem they are trying to solve.',
                    'The survivors do the opposite. They invest heavily in problem definition, ensuring that the technology is selected to serve the objective, rather than the objective being contorted to fit the technology.'
                ],
                image: BLOG_IMAGES.digitalTransformation.solution,
                imageLeft: false
            },
            {
                number: '2',
                label: 'THE DOCUMENTATION DEFICIT',
                title: 'Missing infrastructure',
                body: [
                    'Failure often manifests as "voodoo code"—systems that work but are understood by no one. When the original developers move on, the system becomes a liability.',
                    'Projects that succeed treat documentation as core infrastructure. They ensure that the system is maintainable, extendable, and understood by the broader organisation from day one.'
                ],
                image: BLOG_IMAGES.digitalTransformation.documentation,
                imageLeft: true
            }
        ],
        closingTitle: 'The discipline of delivery',
        closingParagraphs: [
            'Successful digital transformation is not a result of "innovation" alone. It is a result of disciplined execution, rigorous problem definition, and a commitment to long-term maintainability.'
        ]
    },
    {
        id: 6,
        slug: 'engineering-principles-2026',
        category: 'Company',
        tag: 'COMPANY PERSPECTIVE',
        title: 'Our Engineering Principles for 2026',
        excerpt:
            'Every year we revisit our core engineering principles. This is what we believe in 2026 — and what we have updated from the prior year.',
        date: 'October 2025',
        readTime: '4 min read',
        featured: false,
        heroImage: BLOG_IMAGES.engineeringPrinciples.hero,
        image: BLOG_IMAGES.engineeringPrinciples.hero,
        description: 'Every year we revisit our core engineering principles. This is what we believe in 2026 — and what we have updated from the prior year.',
        introParagraphs: [
            'As an AI-first consultancy, our methodology is constantly evolving. However, our core engineering principles remain the foundation of everything we build. In 2026, we have updated these principles to reflect the reality of AI-assisted delivery.'
        ],
        sections: [
            {
                title: 'Accountability',
                body: [
                    'We take ownership of outcomes, not just outputs. Our job is not just to write code; it is to ensure that the systems we build solve the actual business problem they were intended for.'
                ],
                image: BLOG_IMAGES.engineeringPrinciples.accountability,
                imageAlt: 'Accountability and ownership in delivery',
                imageCaption: 'We take ownership of outcomes, not just outputs.'
            },
            {
                title: 'Rigour',
                body: [
                    'We apply professional, enterprise-grade standards to every engagement. AI allows us to move faster, but it does not give us permission to skip the thinking or reduce the testing.'
                ],
                image: BLOG_IMAGES.engineeringPrinciples.rigour,
                imageAlt: 'Enterprise-grade delivery and quality standards',
                imageCaption: 'Professional standards on every engagement.'
            },
            {
                title: 'Longevity',
                body: [
                    'We build for the next decade. Every architectural decision is evaluated against its long-term maintainability and its ability to evolve as technology shifts.'
                ],
                image: BLOG_IMAGES.engineeringPrinciples.longevity,
                imageAlt: 'Long-term architecture and maintainability',
                imageCaption: 'Building for the next decade.'
            },
            {
                title: 'Capability',
                body: [
                    'We invest continuously in the expertise we bring. Being "capable" is an active process of learning and adaptation, especially in the rapidly moving field of AI.'
                ],
                image: BLOG_IMAGES.engineeringPrinciples.capability,
                imageAlt: 'Continuous learning and capability building',
                imageCaption: 'Investing in the expertise we bring.'
            }
        ],
        closingParagraphs: [
            'These principles define how we work, who we hire, and why our clients trust us. They are the constants that allow us to navigate technical change with confidence.'
        ]
    },
];

