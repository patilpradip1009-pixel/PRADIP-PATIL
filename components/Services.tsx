
import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-surface p-8 rounded-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
    <p className="text-text-secondary">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text-primary">What We Do</h2>
          <p className="text-lg text-text-secondary mt-2">Our expertise to grow your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service: Service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
