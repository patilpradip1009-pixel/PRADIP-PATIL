
import React from 'react';
import type { NavLink, Service, PortfolioItem, TeamMember, Testimonial } from './types';

// Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const MegaphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.378 1.23 20.72 2.75 21.054 5.39c.334 2.639-1.42 5.09-3.962 5.585-2.542.495-4.83 2.16-6.326 4.723-.59.97-1.125 2.007-1.527 3.07C8.832 20.37 7.18 20.086 7 18.234c-.18-.94.22-1.841.683-2.553z" />
  </svg>
);
const CodeBracketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const PencilSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const SERVICES: Service[] = [
  {
    icon: <SearchIcon />,
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines and attract organic traffic with our proven SEO strategies.',
  },
  {
    icon: <MegaphoneIcon />,
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build a strong brand presence across all major social media platforms.',
  },
  {
    icon: <PencilSquareIcon />,
    title: 'Content Creation',
    description: 'From blog posts to video scripts, our creative team produces compelling content that resonates.',
  },
  {
    icon: <CodeBracketIcon />,
    title: 'Web Development',
    description: 'We build fast, responsive, and user-friendly websites that provide an exceptional user experience.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'E-commerce Platform', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/project1/600/400' },
  { id: 2, title: 'SaaS Brand Launch', category: 'Social Media', imageUrl: 'https://picsum.photos/seed/project2/600/400' },
  { id: 3, title: 'Local Business SEO', category: 'SEO', imageUrl: 'https://picsum.photos/seed/project3/600/400' },
  { id: 4, title: 'Tech Blog Content', category: 'Content Creation', imageUrl: 'https://picsum.photos/seed/project4/600/400' },
  { id: 5, title: 'Fashion Brand Campaign', category: 'Social Media', imageUrl: 'https://picsum.photos/seed/project5/600/400' },
  { id: 6, title: 'Startup Website', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/project6/600/400' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Jane Doe', role: 'CEO & Founder', imageUrl: 'https://picsum.photos/seed/jane/300/300' },
  { name: 'John Smith', role: 'Lead Developer', imageUrl: 'https://picsum.photos/seed/john/300/300' },
  { name: 'Emily White', role: 'Marketing Director', imageUrl: 'https://picsum.photos/seed/emily/300/300' },
  { name: 'Michael Black', role: 'SEO Specialist', imageUrl: 'https://picsum.photos/seed/michael/300/300' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Pocket Studio transformed our online presence. Their team is knowledgeable, responsive, and truly cares about their clients\' success.',
    author: 'Alex Johnson',
    company: 'CEO of Innovate Inc.',
  },
  {
    quote: 'The best investment we\'ve made in marketing. Our traffic has doubled, and our conversion rates have never been better.',
    author: 'Samantha Lee',
    company: 'Founder of Tech Solutions',
  },
  {
    quote: 'Working with them was a breeze. They understood our vision and delivered results that exceeded our expectations.',
    author: 'David Chen',
    company: 'Marketing Manager at Creative Co.',
  },
];
