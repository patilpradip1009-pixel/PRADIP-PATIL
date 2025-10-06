
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
