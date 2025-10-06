
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center">
    <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
    <h4 className="text-lg font-bold text-text-primary">{member.name}</h4>
    <p className="text-primary">{member.role}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-text-primary">About Pocket Studio</h2>
          <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
            We are a passionate team of digital strategists, creatives, and developers committed to delivering outstanding results. Our mission is to build partnerships, not just projects.
          </p>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-text-primary">Meet Our Team</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {TEAM_MEMBERS.map((member: TeamMember) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
