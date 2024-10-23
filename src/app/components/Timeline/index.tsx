import React from 'react';

const ExperienceTimeline = () => {
  const education = [
    {
      title: 'SMPN 4 KUTA UTARA',
      period: '2018 - 2021'
    },
    {
      title: 'SMK TI BALI GLOBAL BADUNG',
      period: '2021 - now'
    }
  ];
  
  const experiences = [
    {
      title: 'Wakil Ketua OSIS SMK TI BALI GLOBAL BADUNG',
      period: '2023 - 2024'
    },
    {
      title: 'Green Ambasador',
      period: '2022 - 2023'
    },
    {
      title: 'Axioo Mengajar (Robotic)',
      period: '2022'
    }
  ];

  return (
    <section id="Experience" className="bg-gray-300 dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
                <div className="grid  gap-4 mt-8">
                    <div className="mb-4 text-4xl  text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
                        <h1>
                            My Experience
                        </h1>
                    </div>
                    <br></br>
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 bg-gray-300 dark:bg-gray-900 rounded-lg">
      {/* Desktop view - two columns */}
      <div className="hidden md:grid md:grid-cols-2 text-center mb-4">
        <h2 className="text-gray-800 dark:text-gray-200 font-bold">EDUCATION</h2>
        <h2 className="text-gray-800 dark:text-gray-200 font-bold">EXPERIENCE</h2>
      </div>
      
      {/* Mobile view - section headers */}
      <div className="md:hidden space-y-6">
        <h2 className="text-gray-800 dark:text-gray-200 font-bold text-center">EDUCATION</h2>
        <div className="space-y-6">
          {education.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></div>
              <div>
                <h3 className="text-gray-800 dark:text-gray-400 font-extrabold">{item.title}</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">{item.period}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-gray-800 dark:text-gray-200 font-bold text-center pt-8">EXPERIENCE</h2>
        <div className="space-y-6">
          {experiences.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></div>
              <div>
                <h3 className="text-gray-800 dark:text-gray-400 font-extrabold">{item.title}</h3>
                <p className="text-sm text-gray-800 dark:text-gray-400">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view - timeline */}
      <div className="relative min-h-[400px] hidden md:block py-16"> {/* Added py-16 for extra padding */}
        {/* Center line - now extended */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2 -my-16"></div> {/* Added negative margin to extend line */}
        
        {/* Left side - Education */}
        <div className="absolute left-0 top-0 w-1/2 space-y-16">
          {education.map((item, idx) => (
            <div key={idx} className="flex items-center justify-end gap-4 pr-8">
              <div className="text-right">
                <h3 className="text-gray-800 dark:text-gray-200 font-extrabold">{item.title}</h3>
                <p className="text-sm text-gray-800 dark:text-gray-200">{item.period}</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-500 relative">
                <div className="absolute top-1/2 left-full h-px w-8 bg-gray-700"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right side - Experience */}
        <div className="absolute right-0 top-0 w-1/2 space-y-16 pt-8">
          {experiences.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 pl-8">
              <div className="w-3 h-3 rounded-full bg-blue-500 relative">
                <div className="absolute top-1/2 right-full h-px w-8 bg-gray-700"></div>
              </div>
              <div className="text-left">
                <h3 className="text-gray-800 dark:text-gray-200 font-extrabold">{item.title}</h3>
                <p className="text-sm text-gray-800 dark:text-gray-200">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default ExperienceTimeline;