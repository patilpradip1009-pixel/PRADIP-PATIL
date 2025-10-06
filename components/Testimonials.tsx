
import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const QuoteIcon = () => (
    <svg className="w-10 h-10 text-primary opacity-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-surface p-8 rounded-lg shadow-lg flex flex-col h-full">
        <QuoteIcon />
        <p className="text-text-secondary italic my-4 flex-grow">"{testimonial.quote}"</p>
        <div>
            <p className="font-bold text-text-primary">{testimonial.author}</p>
            <p className="text-sm text-secondary">{testimonial.company}</p>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text-primary">What Our Clients Say</h2>
          <p className="text-lg text-text-secondary mt-2">Real feedback from our happy partners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
