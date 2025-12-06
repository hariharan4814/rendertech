
import {
    Briefcase,
    Globe,
    Rocket,
    ShoppingBag,
    Paintbrush,
    Wrench,
    Code2,
    Cpu,
    Database,
    Layout,
    Smartphone,
    Zap
} from 'lucide-react';

export const servicesData = {
    'business-web-platforms': {
        title: 'Business Web Platforms',
        icon: Briefcase,
        shortDescription: 'Corporate-grade websites and portals that position your brand like an established IT company.',
        fullDescription: "In the digital age, your website is your headquarters. We build robust, scalable, and secure business platforms that serve as the foundation of your digital presence. Whether you need a client portal, an intranet, or a public-facing corporate site, we engineer solutions that imply trust, authority, and reliability.",
        features: [
            'Custom Content Management Systems (CMS)',
            'Secure Client Portals',
            'API Integrations (CRM, ERP)',
            'Enterprise-Grade Security',
            'Scalable Cloud Architecture',
            'Analytics & Reporting Dashboards'
        ],
        benefits: [
            'Streamline internal operations',
            'Enhance client trust and retention',
            'Automate business processes',
            'Data-driven decision making'
        ],
        color: 'from-blue-500 to-cyan-400'
    },
    'portfolio-sites': {
        title: 'Portfolio Sites',
        icon: Globe,
        shortDescription: 'High-impact portfolio and personal branding sites for creators, founders, and professionals.',
        fullDescription: "Your personal brand deserves more than a template. We craft bespoke portfolio sites that tell your story, showcase your work, and convert visitors into clients or employers. Using immersive animations and unique layouts, we ensure you stand out in a crowded market.",
        features: [
            'Interactive Project Galleries',
            'Story-driven About Pages',
            'Blog & Newsletter Integration',
            'Social Media Aggregation',
            'Fast Performance & SEO',
            'Contact & Booking Forms'
        ],
        benefits: [
            'Control your digital narrative',
            'Attract high-value opportunities',
            'Showcase expertise effectively',
            'Build a loyal audience'
        ],
        color: 'from-purple-500 to-pink-500'
    },
    'product-launch-saas': {
        title: 'Product Launch & SaaS',
        icon: Rocket,
        shortDescription: 'Conversion-focused pages and full-stack MVPs that get your product in front of customers fast.',
        fullDescription: "Speed to market is everything. We specialize in building Minimum Viable Products (MVPs) and high-conversion landing pages for startups. From database architecture to frontend polish, we handle the full stack so you can focus on user acquisition.",
        features: [
            'Rapid MVP Development',
            'Waitlist & Launch Pages',
            'User Authentication & Roles',
            'Payment Gateway Integration (Stripe, LemonSqueezy)',
            'SaaS Dashboard UI',
            'Onboarding Flows'
        ],
        benefits: [
            'Validate ideas quickly',
            'Start generating revenue sooner',
            'Scale effortlessly',
            'Engage early adopters'
        ],
        color: 'from-orange-500 to-red-500'
    },
    'e-commerce-solutions': {
        title: 'E-commerce Solutions',
        icon: ShoppingBag,
        shortDescription: 'End-to-end storefronts with secure backends, inventory, and order flows that scale with you.',
        fullDescription: "Sell everywhere. We build custom e-commerce experiences that go beyond basic Shopify templates. Whether it's a niche boutique or a large-scale marketplace, we ensure your store is fast, secure, and optimized for sales.",
        features: [
            'Custom Cart & Checkout Flows',
            'Inventory Management Systems',
            'Multi-currency & Multi-language',
            'Wishlist & Reviews',
            'Admin Control Panels',
            'Integration with Shipping Providers'
        ],
        benefits: [
            'Maximize conversion rates',
            'Reduce cart abandonment',
            'Simplify store management',
            'Expand global reach'
        ],
        color: 'from-emerald-500 to-green-400'
    },
    'ui-ux-redesign': {
        title: 'UI/UX Redesign',
        icon: Paintbrush,
        shortDescription: 'Transform outdated interfaces into modern, intuitive user experiences.',
        fullDescription: "Bad design costs money. We audit and redesign existing applications to improve usability, accessibility, and visual appeal. By focusing on user behavior and modern design trends, we breathe new life into legacy systems.",
        features: [
            'Heuristic Evaluation & Audits',
            'Wireframing & Prototyping',
            'Design Systems & Style Guides',
            'Accessibility (WCAG) Compliance',
            'Mobile-First Responsive Design',
            'Micro-interactions & Animation'
        ],
        benefits: [
            'Increase user satisfaction',
            'Reduce support tickets',
            'Modernize brand perception',
            'Improve retention rates'
        ],
        color: 'from-pink-500 to-rose-400'
    },
    'ongoing-support': {
        title: 'Ongoing Support',
        icon: Wrench,
        shortDescription: 'Retainers for new features, performance tuning, and long-term maintenance of your stack.',
        fullDescription: "Software is never 'finished'. We provide long-term partnership to ensure your application stays secure, fast, and feature-rich. Think of us as your on-demand CTO and engineering team.",
        features: [
            'Security Patches & Updates',
            'Performance Optimization',
            'New Feature Development',
            'Server Monitoring & Backups',
            'Code Refactoring',
            'Technical Consulting'
        ],
        benefits: [
            'Peace of mind',
            'Predictable costs',
            'Continuous improvement',
            'Expert technical guidance'
        ],
        color: 'from-indigo-500 to-blue-500'
    }
};
