
import { SiteData, ChartData } from './types';

export const INITIAL_DATA: SiteData = {
  hero: {
    name: "Tanvir Ahmed",
    title: "Digital Marketing Expert & Growth Hacker",
    description: "I help businesses thrive in the digital age. Using data-driven strategies and creative campaigns to connect your brand with the right audience.",
    cta: "Get Free Consultation"
  },
  about: {
    text: "Over the past 5 years, I've worked with diverse clients globally. My primary focus is to maximize your Return on Investment (ROI) through performance-driven marketing.",
    stats: [
      { label: "Successful Projects", value: "150+" },
      { label: "Ad Spend Managed", value: "$500k+" },
      { label: "Satisfied Clients", value: "100+" },
      { label: "ROI Growth", value: "300%" }
    ]
  },
  services: [
    {
      id: "1",
      title: "Digital Marketing",
      description: "Comprehensive 360° digital strategies to build brand awareness and capture market share.",
      icon: "Globe"
    },
    {
      id: "2",
      title: "Email Marketing",
      description: "Automated, high-converting email funnels that nurture leads and drive consistent revenue.",
      icon: "Mail"
    },
    {
      id: "3",
      title: "Analytics",
      description: "In-depth data tracking and visualization to uncover growth opportunities and optimize spend.",
      icon: "BarChart"
    },
    {
      id: "4",
      title: "Lead Generation",
      description: "Fueling your sales pipeline with high-quality, verified leads ready to convert.",
      icon: "Target"
    },
    {
      id: "5",
      title: "Social Media Marketing (SMM)",
      description: "Building community and driving engagement across Facebook, Instagram, LinkedIn, and more.",
      icon: "Users"
    },
    {
      id: "6",
      title: "Ecommerce Growth Marketing",
      description: "Specialized scaling strategies for online stores to maximize ROAS and customer LTV.",
      icon: "ShoppingBag"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "E-commerce Growth Campaign",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      result: "5X Revenue Growth"
    },
    {
      id: "p2",
      title: "B2B Lead Generation",
      category: "Lead Gen",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      result: "1000+ Verified Leads"
    },
    {
      id: "p3",
      title: "Real Estate PPC Strategy",
      category: "Google Ads",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      result: "40% Lower Cost Per Lead"
    },
    {
      id: "p4",
      title: "Fashion Brand SMM",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
      result: "250% Engagement Boost"
    },
    {
      id: "p5",
      title: "SaaS Subscription Scale",
      category: "Growth Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      result: "12k Monthly Active Users"
    },
    {
      id: "p6",
      title: "Email Funnel Optimization",
      category: "Retention",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
      result: "22% Cart Recovery Rate"
    }
  ]
};

export const MOCK_CHART_DATA: ChartData[] = [
  { name: 'Jan', reach: 4000, engagement: 2400, conversions: 400 },
  { name: 'Feb', reach: 3000, engagement: 1398, conversions: 210 },
  { name: 'Mar', reach: 9800, engagement: 2000, conversions: 2290 },
  { name: 'Apr', reach: 3908, engagement: 2780, conversions: 2000 },
  { name: 'May', reach: 4800, engagement: 1890, conversions: 2181 },
  { name: 'Jun', reach: 3800, engagement: 2390, conversions: 2500 },
];
