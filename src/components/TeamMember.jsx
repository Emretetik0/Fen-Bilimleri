import React from 'react';

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="text-center">
      <img src={image} alt={`Portrait of ${name}`} className="w-40 h-40 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TeamMember;
