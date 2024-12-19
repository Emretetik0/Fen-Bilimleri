import React from 'react';
import TeamMember from './TeamMember';

const MeetTheTeam = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Director', image: 'https://randomuser.me/api/portraits/women/56.jpg' },
    { name: 'Mike Doe', role: 'Senior Designer', image: 'https://randomuser.me/api/portraits/men/37.jpg' },
    { name: 'Jane Doe', role: 'Senior Designer', image: 'https://randomuser.me/api/portraits/men/83.jpg' },
    { name: 'Karen Doe', role: 'Project Manager', image: 'https://randomuser.me/api/portraits/lego/6.jpg' },
  ];

  return (
    <div id="team" className="container mx-auto py-8 px-4 scroll-mt-16">
      <h1 className="text-3xl font-bold text-center mb-3">ÖĞRETMEN KADROMUZ</h1>
      <div className="flex justify-center mb-8">
        <div className="w-16 h-1 bg-blue-500"></div>
      </div>
      <p className="text-center text-gray-600 mb-12 text-xl">
        Alanında uzman eğitmenlerle başarıya odaklanın.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;