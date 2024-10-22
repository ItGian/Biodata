import React from 'react';

const ExperienceSection = () => {

  const experiences = [
    {
      title: 'Wakil Ketua OSIS SMK TI BALI GLOBAL BADUNG',
      period: '2020'
    },
    {
      title: 'Green Ambasador',
      period: 'Released on December 23, 2021'
    },
    {
      title: 'Axioo Mengajar',
      period: 'Released on December 23, 2021'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-gray-900/50 rounded-lg">
      
      
    <div className="relative min-h-[400px]">
      {/* Left side - Education */}

      {/* Right side - Experience */}
      <div className="absolute right-0 top-0 w-1/2 space-y-16 pt-8">
        {experiences.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 pl-8">
            <div className="w-3 h-3 rounded-full bg-blue-500 relative">
              <div className="absolute top-1/2 right-full h-px w-8 bg-gray-700"></div>
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  );
};

export default ExperienceSection;