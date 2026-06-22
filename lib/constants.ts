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
  Headset
} from 'lucide-react';


export const NAV_LINKS = [
  { label: 'Services', href: '/#contact' },
  { label: 'Portfolio', href: '/#portfolio' },
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
    description: 'High-performance websites and custom storefronts designed to scale with your business.',
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
    description: 'Native and cross-platform mobile applications that provide seamless user experiences on all devices.',
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
    description: 'Full-featured online stores with secure payments, inventory management, and seamless checkouts.',
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
    description: 'Strategic marketing campaigns that drive traffic, increase engagement, and boost conversions.',
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
    description: 'Visual identities and creative assets that communicate your brand values and resonate with your audience.',
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
    description: 'Customized business management software to streamline operations and enhance customer relationships.',
    icon: Settings,
    techStack: [
      { name: 'Custom CRM', category: 'CUSTOMER MANAGEMENT', icon: Users, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'Odoo ERP', category: 'BUSINESS SUITE', icon: Settings, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
      { name: 'Salesforce', category: 'ENTERPRISE CRM', icon: Users, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg' },
      { name: 'Workflow Automation', category: 'EFFICIENCY', icon: Settings, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg' },
      { name: 'Dashboard Analytics', category: 'DATA VISUALIZATION', icon: BarChart3, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg' },
      { name: 'Third-party API', category: 'INTEGRATION', icon: Database, logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg' },
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
    description: 'A tropical resort landing page with immersive hero imagery, room booking flows, and 4.9-star guest ratings — crafted to convert visitors into bookings.',
    image: '/projects/1_sundrift.png',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    link: 'https://hotelsundrift.netlify.app/',
  },
  {
    title: 'Premium Portfolio UI',
    category: 'Portfolio',
    description: 'A sleek, modern portfolio showcasing dark mode aesthetics and smooth micro-interactions, designed for creative agencies.',
    image: '/projects/1_portfolio.png',
    tags: ['Portfolio', 'React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://ariasharmaportfolio.netlify.app/',
  },
  {
    title: 'Belle Aura Studio',
    category: 'Landing Pages',
    description: 'A luxury beauty & spa landing page for Bengaluru\'s premier salon — showcasing bridal makeup, spa services, and 25,000+ happy clients with WhatsApp booking.',
    image: '/projects/2_parlor.png',
    tags: ['Next.js', 'Tailwind', 'WhatsApp API'],
    link: 'https://beauty-parlour-landing-page-two.vercel.app/',
  },
  {
    title: 'Smart Cool Technologies',
    category: 'Landing Pages',
    description: 'A professional appliance repair service site for Salem with instant WhatsApp booking, a 2-hour response guarantee, and 5K+ happy customer proof points.',
    image: '/projects/3_smartcool.png',
    tags: ['Next.js', 'Tailwind', 'WhatsApp API'],
    link: 'https://smartcooltechnologies.in/appliance-service/',
  },
  {
    title: 'Modern Dashboard Design',
    category: 'Portfolio',
    description: 'A high-performance analytics dashboard featuring dark mode aesthetics, intuitive data visualization, and real-time insights.',
    image: '/projects/2_portfolio.png',
    tags: ['Portfolio', 'Next.js', 'Tailwind', 'Chart.js'],
    link: 'https://anishakhan.netlify.app/#',
  },
  {
    title: 'Elegance Boutique',
    category: 'E-commerce',
    description: 'A premium Indian fashion e-commerce store for handcrafted sarees & kurtis — featuring Pan-India delivery to 500+ cities, 98% satisfaction rate, and 200+ artisan partners.',
    image: '/projects/4_boutique.png',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: 'https://elegamnceboutique.netlify.app/',
  },
  {
    title: 'Meera UPVC & Interiors',
    category: 'Landing Pages',
    description: 'A bold interior solutions landing page specialising in UPVC doors, false ceilings & kitchen cabinets — with a 100% weather-proof warranty and instant quote CTA.',
    image: '/projects/5_pvc.png',
    tags: ['Next.js', 'Tailwind', 'WhatsApp API'],
    link: 'https://meera-upvc.vercel.app/',
  },
  {
    title: 'CareConnect',
    category: 'Web Apps',
    description: 'A compassionate HIPAA-compliant web app for Alzheimer\'s caregivers — offering 500+ resources, a supportive community, and 24/7 access to practical care tools.',
    image: '/projects/6_care_connect.png',
    tags: ['React', 'Node.js', 'Firebase'],
    link: 'https://careconnecting.netlify.app/',
  },
  {
    title: 'Creative Agency Portfolio',
    category: 'Portfolio',
    description: 'A modern, interactive portfolio designed to showcase creative work with stunning animations and a clean layout.',
    image: '/projects/3_portfolio.png',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://rdineshkumar-portfolio.netlify.app/',
  },
  {
    title: 'Global Explorer Tourism',
    category: 'Landing Pages',
    description: 'An immersive travel and tourism landing page featuring breathtaking visuals, destination guides, and seamless booking flows.',
    image: '/projects/7_tourisim.png',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: 'https://namaste-tourism.netlify.app/',
  },
  {
    title: 'Analytics Dashboard Pro',
    category: 'Web Apps',
    description: 'A comprehensive admin dashboard with real-time analytics, data visualization, and a dark mode aesthetic.',
    image: '/projects/8_dashboard.png',
    tags: ['React', 'Chart.js', 'Tailwind'],
    link: 'https://yaitsakilan.github.io/pos/',
  },
  {
    title: 'Enterprise Management System',
    category: 'Web Apps',
    description: 'A robust enterprise dashboard designed for data management, user tracking, and seamless administrative workflows.',
    image: '/projects/9_dashboard.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://yaitsakilan.github.io/crm/#',
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
