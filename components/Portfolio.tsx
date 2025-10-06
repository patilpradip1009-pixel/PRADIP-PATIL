
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import type { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
      <p className="text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.category}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text-primary">Our Recent Work</h2>
          <p className="text-lg text-text-secondary mt-2">A glimpse into our success stories.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item: PortfolioItem) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
