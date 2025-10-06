import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-10">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center z-20">
            <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary leading-tight mb-4">
                    We Craft Digital <span className="text-primary">Experiences</span>
                </h1>
                <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                    Pocket Studio is a full-service digital marketing agency dedicated to helping your brand thrive in the digital landscape. We turn clicks into customers.
                </p>
                <a 
                    href="#services"
                    className="bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 inline-block"
                >
                    Explore Our Services
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;