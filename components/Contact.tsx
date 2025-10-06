
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-text-primary">Get In Touch</h2>
          <p className="text-lg text-text-secondary mt-2">Have a project in mind? Let's talk.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-surface p-8 md:p-12 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-secondary/50 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-secondary/50 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-background border border-secondary/50 rounded-md py-3 px-4 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
