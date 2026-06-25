import { 
  Code2, 
  PenTool, 
  LayoutTemplate, 
  Smartphone, 
  ShoppingBag, 
  BarChart3, 
  Settings,
  Globe,
  Database,
  Search,
  Users,
  Briefcase,
  Compass,
  Rocket,
  Headset,
  GraduationCap,
  FileText
} from 'lucide-react';


export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' },
];

// Single source of truth for business contact details.
// TODO: replace these placeholders with your real NAP before launch.
export const CONTACT_INFO = {
  email: 'hello@dslash.agency',
  phone: '+91 90000 00000',
  location: 'Bengaluru, India',
};

export const SERVICES = [
  {
    title: 'Custom Landing Pages',
    description: 'High-converting, pixel-perfect pages built to elevate your brand and maximize your marketing ROI.',
    icon: LayoutTemplate,
  },
  {
    title: 'Custom Software Development',
    description: 'Scalable web applications engineered specifically for your unique business workflows and operations.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    description: 'User-first interfaces that delight and retain customers through intuitive, seamless interactions.',
    icon: PenTool,
  },
];

export const DETAILED_SERVICES = [
  {
    id: 'web',
    title: 'Website Development',
    description: 'Your website is the first thing people see. We make sure it looks great, loads fast, and turns visitors into customers.',
    tags: ['Landing Pages', 'Mobile Friendly', 'SEO Ready', 'Fast Loading'],
    icon: Globe,
    techStack: [
      { name: 'WordPress', category: 'CMS SOLUTION', icon: LayoutTemplate, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg' },
      { name: 'Shopify', category: 'E-COMMERCE EXPERT', icon: ShoppingBag, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/shopify/shopify-original.svg' },
      { name: 'PHP (Laravel)', category: 'BACKEND FRAMEWORK', icon: Code2, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg' },
      { name: 'Core PHP', category: 'BACKEND SCRIPTING', icon: Code2, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
      { name: 'Node.JS', category: 'JAVASCRIPT RUNTIME', icon: Database, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
      { name: 'React.JS', category: 'FRONTEND LIBRARY', icon: LayoutTemplate, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'We turn your app idea into a real product that works smoothly on any phone. Simple to use, built to last.',
    tags: ['iOS & Android', 'Easy to Use', 'App Store Ready', 'Smooth Performance'],
    icon: Smartphone,
    techStack: [
      { name: 'React Native', category: 'CROSS-PLATFORM', icon: Smartphone, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      { name: 'Flutter', category: 'CROSS-PLATFORM', icon: Smartphone, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
      { name: 'iOS (Swift)', category: 'NATIVE DEVELOPMENT', icon: Smartphone, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg' },
      { name: 'Android (Kotlin)', category: 'NATIVE DEVELOPMENT', icon: Smartphone, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg' },
      { name: 'PWA', category: 'WEB APP', icon: Globe, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
      { name: 'Firebase', category: 'BACKEND SERVICE', icon: Database, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
    ]
  },
  {
    id: 'ecommerce',
    title: 'Custom E-Commerce',
    description: 'We create online stores that are easy to manage and easy to buy from. More orders, less headache.',
    tags: ['Online Store', 'Safe Payments', 'Easy Checkout', 'Sell 24/7'],
    icon: ShoppingBag,
    techStack: [
      { name: 'Next.js Commerce', category: 'HEADLESS E-COM', icon: LayoutTemplate, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
      { name: 'Stripe Integration', category: 'PAYMENTS', icon: ShoppingBag, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/stripe/stripe-original.svg' },
      { name: 'WooCommerce', category: 'WORDPRESS E-COM', icon: LayoutTemplate, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg' },
      { name: 'Custom Cart SDK', category: 'CUSTOM SOLUTIONS', icon: Code2, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
      { name: 'Inventory API', category: 'BACKEND INTEGRATION', icon: Database, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
      { name: 'Shopify Plus', category: 'ENTERPRISE E-COM', icon: ShoppingBag, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/shopify/shopify-original.svg' },
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Getting people to notice your brand online is our job. We run smart campaigns that bring in real results.',
    tags: ['Meta Ads', 'Google Ads', 'SEO', 'Email Marketing'],
    icon: BarChart3,
    techStack: [
      { name: 'SEO Optimization', category: 'ORGANIC GROWTH', icon: Search, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg' },
      { name: 'Google Ads (SEM)', category: 'PAID ADVERTISING', icon: BarChart3, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg' },
      { name: 'Social Media', category: 'ENGAGEMENT', icon: Users, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/facebook/facebook-original.svg' },
      { name: 'Content Strategy', category: 'BRAND AUTHORITY', icon: PenTool, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg' },
      { name: 'Email Marketing', category: 'RETENTION', icon: Users, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mailchimp/mailchimp-original.svg' },
      { name: 'Analytics & Reporting', category: 'DATA INSIGHTS', icon: BarChart3, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg' },
    ]
  },
  {
    id: 'design',
    title: 'Graphic Designing',
    description: 'People judge a brand by how it looks. We make sure yours looks great — from your logo to your social media posts.',
    tags: ['Logo Design', 'Brand Identity', 'Social Creatives', 'Poster & Banner Design'],
    icon: PenTool,
    techStack: [
      { name: 'UI/UX Design', category: 'USER EXPERIENCE', icon: LayoutTemplate, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
      { name: 'Brand Identity', category: 'BRANDING', icon: PenTool, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg' },
      { name: 'Illustration', category: 'VISUAL ASSETS', icon: PenTool, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-line.svg' },
      { name: 'Logo Design', category: 'BRANDING', icon: PenTool, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/inkscape/inkscape-original.svg' },
      { name: 'Print Media', category: 'MARKETING ASSETS', icon: Briefcase, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg' },
      { name: 'App Interface', category: 'MOBILE DESIGN', icon: Smartphone, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/xd/xd-line.svg' },
    ]
  },
  {
    id: 'erp',
    title: 'ERP & CRM Systems',
    description: 'Stop doing everything manually. We build systems that manage your customers, orders, and team — all in one place.',
    tags: ['Customer Tracking', 'Sales Management', 'Smart Automation', 'Real-Time Reports'],
    icon: Settings,
    techStack: [
      { name: 'Custom CRM', category: 'CUSTOMER MANAGEMENT', icon: Users, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'Odoo ERP', category: 'BUSINESS SUITE', icon: Settings, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
      { name: 'Salesforce', category: 'ENTERPRISE CRM', icon: Users, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg' },
      { name: 'Workflow Automation', category: 'EFFICIENCY', icon: Settings, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg' },
      { name: 'Dashboard Analytics', category: 'DATA VISUALIZATION', icon: BarChart3, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg' },
      { name: 'Third-party API', category: 'INTEGRATION', icon: Database, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg' },
    ]
  },
  {
    id: 'student',
    title: 'Student Services',
    description: 'Kickstart your career with ATS-friendly resume building, stunning student portfolios, GitHub & LinkedIn optimization, and expert guidance on college projects and presentations.',
    tags: ['Resume Making', 'Student Portfolio', 'GitHub & LinkedIn', 'College Projects'],
    icon: GraduationCap,
    techStack: [
      { name: 'ATS Resume Building', category: 'CAREER', icon: FileText, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg' },
      { name: 'Portfolio Development', category: 'SHOWCASING', icon: Globe, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
      { name: 'GitHub Optimization', category: 'DEVELOPER', icon: Code2, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
      { name: 'LinkedIn Branding', category: 'PROFESSIONAL', icon: Users, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg' },
      { name: 'Project Guidance', category: 'ACADEMIC', icon: PenTool, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
      { name: 'Presentation Design', category: 'COMMUNICATION', icon: Briefcase, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg' },
    ]
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and project requirements to ensure alignment from day one.',
    icon: Compass,
  },
  {
    title: 'Design',
    description: 'Creating wireframes and high-fidelity mockups that bring your vision to life before writing a single line of code.',
    icon: PenTool,
  },
  {
    title: 'Development',
    description: 'Building robust, scalable solutions using cutting-edge technologies like Next.js, React, and Tailwind CSS.',
    icon: Code2,
  },
  {
    title: 'Launch',
    description: 'Rigorous testing, performance optimization, and seamless deployment to ensure a flawless go-live experience.',
    icon: Rocket,
  },
  {
    title: 'Support',
    description: 'Ongoing maintenance, feature enhancements, and dedicated technical support to keep your software running smoothly.',
    icon: Headset,
  },
];

export const PORTFOLIO = [
  {
    title: 'SunDrift Luxury Resort',
    category: 'Landing Pages',
    serviceId: 'web',
    description: 'A tropical resort landing page with immersive hero imagery, room booking flows, and 4.9-star guest ratings — crafted to convert visitors into bookings.',
    image: '/projects/1_sundrift.png',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    link: 'https://hotelsundrift.netlify.app/',
  },
  {
    title: 'Premium Portfolio UI',
    category: 'Portfolio',
    serviceId: 'design',
    description: 'A sleek, modern portfolio showcasing dark mode aesthetics and smooth micro-interactions, designed for creative agencies.',
    image: '/projects/1_portfolio.png',
    tags: ['Portfolio', 'React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://ariasharmaportfolio.netlify.app/',
  },
  {
    title: 'Belle Aura Studio',
    category: 'Landing Pages',
    serviceId: 'web',
    description: 'A luxury beauty & spa landing page for Bengaluru\'s premier salon — showcasing bridal makeup, spa services, and 25,000+ happy clients with WhatsApp booking.',
    image: '/projects/2_parlor.png',
    tags: ['Next.js', 'Tailwind', 'WhatsApp API'],
    link: 'https://beauty-parlour-landing-page-two.vercel.app/',
  },
  {
    title: 'Smart Cool Technologies',
    category: 'Landing Pages',
    serviceId: 'web',
    description: 'A professional appliance repair service site for Salem with instant WhatsApp booking, a 2-hour response guarantee, and 5K+ happy customer proof points.',
    image: '/projects/3_smartcool.png',
    tags: ['Next.js', 'Tailwind', 'WhatsApp API'],
    link: 'https://smartcooltechnologies.in/appliance-service/',
  },
  {
    title: 'Modern Dashboard Design',
    category: 'Portfolio',
    serviceId: 'design',
    description: 'A high-performance analytics dashboard featuring dark mode aesthetics, intuitive data visualization, and real-time insights.',
    image: '/projects/2_portfolio.png',
    tags: ['Portfolio', 'Next.js', 'Tailwind', 'Chart.js'],
    link: 'https://anishakhan.netlify.app/#',
  },
  {
    title: 'Elegance Boutique',
    category: 'E-commerce',
    serviceId: 'ecommerce',
    description: 'A premium Indian fashion e-commerce store for handcrafted sarees & kurtis — featuring Pan-India delivery to 500+ cities, 98% satisfaction rate, and 200+ artisan partners.',
    image: '/projects/4_boutique.png',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: 'https://elegamnceboutique.netlify.app/',
  },
  {
    title: 'Meera UPVC & Interiors',
    category: 'Landing Pages',
    serviceId: 'web',
    description: 'A bold interior solutions landing page specialising in UPVC doors, false ceilings & kitchen cabinets — with a 100% weather-proof warranty and instant quote CTA.',
    image: '/projects/5_pvc.png',
    tags: ['Next.js', 'Tailwind', 'WhatsApp API'],
    link: 'https://meera-upvc.vercel.app/',
  },
  {
    title: 'CareConnect',
    category: 'Web Apps',
    serviceId: 'web',
    description: 'A compassionate HIPAA-compliant web app for Alzheimer\'s caregivers — offering 500+ resources, a supportive community, and 24/7 access to practical care tools.',
    image: '/projects/6_care_connect.png',
    tags: ['React', 'Node.js', 'Firebase'],
    link: 'https://careconnecting.netlify.app/',
  },
  {
    title: 'Creative Agency Portfolio',
    category: 'Portfolio',
    serviceId: 'design',
    description: 'A modern, interactive portfolio designed to showcase creative work with stunning animations and a clean layout.',
    image: '/projects/3_portfolio.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://rdineshkumar-portfolio.netlify.app/',
  },
  {
    title: 'Global Explorer Tourism',
    category: 'Landing Pages',
    serviceId: 'web',
    description: 'An immersive travel and tourism landing page featuring breathtaking visuals, destination guides, and seamless booking flows.',
    image: '/projects/7_tourisim.png',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://namaste-tourism.netlify.app/',
  },
  {
    title: 'Analytics Dashboard Pro',
    category: 'Web Apps',
    serviceId: 'erp',
    description: 'A comprehensive admin dashboard with real-time analytics, data visualization, and a dark mode aesthetic.',
    image: '/projects/8_dashboard.png',
    tags: ['React', 'Chart.js', 'Tailwind'],
    link: 'https://yaitsakilan.github.io/pos/',
  },
  {
    title: 'Enterprise Management System',
    category: 'Web Apps',
    serviceId: 'erp',
    description: 'A robust enterprise dashboard designed for data management, user tracking, and seamless administrative workflows.',
    image: '/projects/9_dashboard.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://yaitsakilan.github.io/crm/#',
  },
  {
    title: 'CarQure — Google Ads',
    category: 'Google Ads',
    serviceId: 'marketing',
    description: 'App install campaign: 3.46K clicks · 8.94% CTR · ₹5.98 Avg. CPC',
    image: '/campigns/1.jpeg',
    tags: ['App Install', 'Google Ads'],
    link: '/digital-marketing',
  },
  {
    title: 'Smart Cool Technologies',
    category: 'Google Ads',
    serviceId: 'marketing',
    description: 'Long-running campaign: 55K impressions · 4.56K clicks · ₹67.6K spend',
    image: '/campigns/2.jpeg',
    tags: ['Search Campaign', 'Google Ads'],
    link: '/digital-marketing',
  },
  {
    title: 'Lenovo.com Campaign Deep-Dive',
    category: 'Google Ads',
    serviceId: 'marketing',
    description: '373K clicks · 3.18M impressions · ₹7.6M cost · 68.6K conversions (Feb 2024 – Nov 2025)',
    image: '/campigns/4.jpeg',
    tags: ['E-Commerce', 'Google Ads'],
    link: '/digital-marketing',
  },
  {
    title: 'CarQure — Meta Ads',
    category: 'Meta Ads',
    serviceId: 'marketing',
    description: '5.6M reach · 5.8 frequency · 0.7 CTR · ₹8.54 CPC (Jan–Jun 2026)',
    image: '/campigns/5.jpeg',
    tags: ['Reach', 'Meta Ads'],
    link: '/digital-marketing',
  },
  {
    title: 'CarQure — Meta Campaign Manager',
    category: 'Meta Ads',
    serviceId: 'marketing',
    description: '41 active campaigns · ₹1.44M total spend · Multiple conversions across services',
    image: '/campigns/6.jpeg',
    tags: ['Campaign Manager', 'Meta Ads'],
    link: '/digital-marketing',
  },
  {
    title: 'Dev Portfolio Pro',
    category: 'Student Portfolio',
    serviceId: 'student',
    description: 'A modern, responsive student portfolio website showcasing projects, skills, and achievements with a clean, professional design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Portfolio', 'Next.js', 'Responsive'],
    link: '#',
  },
  {
    title: 'ATS-Optimized Resume',
    category: 'Resume Making',
    serviceId: 'student',
    description: 'Professional ATS-friendly resume built to pass automated screenings and get your application noticed by top recruiters.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    tags: ['Resume', 'ATS', 'Career'],
    link: '#',
  },
  {
    title: 'GitHub Profile Revamp',
    category: 'GitHub Optimization',
    serviceId: 'student',
    description: 'Transformed GitHub profile with pinned repositories, contribution metrics, and a polished README that attracts recruiters.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80',
    tags: ['GitHub', 'Open Source', 'Profile'],
    link: '#',
  },
  {
    title: 'LinkedIn Branding Suite',
    category: 'LinkedIn Optimization',
    serviceId: 'student',
    description: 'Strategic LinkedIn profile makeover with custom banner, keyword-rich headline, and compelling experience summaries.',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80',
    tags: ['LinkedIn', 'Branding', 'Networking'],
    link: '#',
  },
  {
    title: 'AI-Powered Chatbot',
    category: 'College Projects',
    serviceId: 'student',
    description: 'End-to-end AI chatbot built with NLP and machine learning — a standout college capstone project with real-world impact.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Machine Learning', 'NLP'],
    link: '#',
  }
];

export const TESTIMONIALS = [
  {
    name: 'Karthik Rajan',
    role: 'CEO at TechFlow',
    quote: 'The team delivered an exceptional custom software solution that streamlined our entire operation. Professional, fast, and incredibly talented.',
    rating: 5.0,
    date: '12 Sep, 2023',
    initials: 'KR',
  },
  {
    name: 'Meera Subramaniam',
    role: 'Founder of GrowthMark',
    quote: 'Our new landing page increased conversion rates by 45% within the first month. The dark luxury aesthetic perfectly matched our rebrand.',
    rating: 4.9,
    date: '24 Oct, 2023',
    initials: 'MS',
  },
  {
    name: 'Arvind Krishnan',
    role: 'Product Manager',
    quote: 'Working with them was a breeze. They understood our complex requirements and translated them into a seamless, beautiful user interface.',
    rating: 5.0,
    date: '05 Nov, 2023',
    initials: 'AK',
  },
  {
    name: 'Divya Nair',
    role: 'CTO at NextGen',
    quote: 'Superior architecture and clean code. They are now our go-to partner for all critical web application projects.',
    rating: 4.8,
    date: '18 Dec, 2023',
    initials: 'DN',
  },
  {
    name: 'Priya Venkatesh',
    role: 'Marketing Director',
    quote: 'They transformed our digital presence completely. The attention to detail and creative approach exceeded all our expectations.',
    rating: 5.0,
    date: '10 Jan, 2024',
    initials: 'PV',
  },
  {
    name: 'Rajesh Iyer',
    role: 'Startup Founder',
    quote: 'From concept to launch in just 4 weeks. The team moved fast without ever compromising on quality or user experience.',
    rating: 4.9,
    date: '28 Feb, 2024',
    initials: 'RI',
  },
  {
    name: 'Lakshmi Pillai',
    role: 'Head of Product',
    quote: 'The dashboard they built gives us real-time insights that have fundamentally changed how we make business decisions.',
    rating: 5.0,
    date: '15 Mar, 2024',
    initials: 'LP',
  },
];

export const PRICING_TIERS = [
  {
    name: 'Starter',
    monthlyPrice: '₹999',
    oneTimePrice: '₹4,999',
    description: 'Perfect for small businesses needing a high-impact presence.',
    features: [
      'Custom Landing Page (Up to 3 sections)',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      '1 Revision Round',
      'Standard Support',
    ],
    isPopular: false,
  },
  {
    name: 'Growth',
    monthlyPrice: '₹2,499',
    oneTimePrice: '₹12,999',
    description: 'Ideal for scaling companies requiring custom web applications.',
    features: [
      'Custom Web Application Development',
      'Advanced UI/UX Design',
      'Database Integration',
      'User Authentication',
      'API Development',
      '3 Revision Rounds',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    oneTimePrice: 'Custom',
    description: 'For large organizations with complex software needs.',
    features: [
      'Full-Scale Custom Software Architecture',
      'Legacy System Migration',
      'Advanced Security Implementations',
      'Dedicated Project Manager',
      'Unlimited Revisions during dev',
      '24/7 Premium Support',
      'SLA Guarantees',
    ],
    isPopular: false,
  },
];

export const FAQS = [
  {
    question: 'Do you offer ongoing support?',
    answer: 'Absolutely. We offer monthly retainer packages for continuous maintenance, feature updates, and technical support to ensure your product remains cutting-edge.',
  },
  {
    question: 'What is your revision process?',
    answer: 'We believe in collaborative design. Most packages include structured revision rounds at each major milestone (wireframing, high-fidelty design, and post-development staging) to guarantee your satisfaction.',
  },
  {
    question: 'Can you work with our existing branding?',
    answer: 'Yes, we seamlessly integrate your existing brand guidelines into our designs, ensuring a consistent and elevated look while maintaining brand recognition.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We specialize in modern, high-performance tech stacks, primarily using Next.js, React, TypeScript, and Tailwind CSS for frontend, coupled with robust backend solutions tailored to your needs.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We offer flexible pricing. For well-defined scopes, we provide a fixed one-time project fee. For ongoing development or larger, evolving platforms, we offer strategic monthly retainers.',
  },
];
