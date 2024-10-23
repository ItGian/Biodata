import React from 'react';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => (
  <div className="bg-gray-300 dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden hover:animate-pulse dark:text-gray-200 text-gray-900  ">
    <Image 
      src={imageUrl || "/api/placeholder/400/300"} 
      alt={title} 
      width={400} 
      height={300} 
      className="w-full h-48 object-cover "
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-900dark:text-gray-200">{title}</h3>
      <p className="text-gray-800 dark:text-gray-600">{description}</p>
    </div>
  </div>
);

const ProjectPortfolio: React.FC = () => {
  const projects: ProjectCardProps[] = [
    { title: "CRUD", description: "Making a 'Create Read Update Delete' Function using PHP and MySQL ", imageUrl: "/images/Project_1.png" },
    { title: "Web Designing", description: "Making a Landing Page for Orphanage Website using HTML, CSS, JavaScript and Bootstrap", imageUrl: "/images/Project_2.png" },
    { title: "Login/Register", description: "Making a Login/Register Page for Web using PHP and MySQL", imageUrl: "/images/Project_3.png" },
    { title: "Web Designing", description: "Making a Landing Page with Dark Mode Function and the theme is to choose a random industry using HTML, CSS, JavaScript and Bootstrap ", imageUrl: "/images/Project_4.png" },
  ];

  return (
    <section id="Project" className="bg-gray-300 dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
      <div className="grid  gap-4 mt-8">
    <div className="container mx-auto px-4 py-8 bg-gray-300 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-2 text-center text-gray-900 dark:text-gray-200">My Projects</h1>
      <p className="text-xl text-gray-600 mb-8 text-center">A collection of my recent work</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default ProjectPortfolio;