import React from 'react';

const PendidikanSection = () => {
  const education = [
    {
      title: 'SMPN 4 KUTA UTARA',
      period: '2020'
    },
    {
      title: 'SMK TI BALI GLOBAL BADUNG',
      period: 'Released on December 23, 2021'
    }
  ];


  return (

    <th>
    <div className="w-full max-w-5xl mx-auto p-6 bg-gray-900/50 rounded-lg">
      
      <div className="relative min-h-[400px]">
        {/* Left side - Education */}
        <div className="absolute left-0 top-0 w-1/2 space-y-16">
          {education.map((item, idx) => (
            <div key={idx} className="flex items-center justify-end gap-4 pr-8">
              <div className="text-right">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.period}</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-500 relative">
                <div className="absolute top-1/2 left-full h-px w-8 bg-gray-700"></div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
    </th>
  );
};

export default PendidikanSection;