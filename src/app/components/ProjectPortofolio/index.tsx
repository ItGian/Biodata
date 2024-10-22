import React from 'react';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:animate-pulse ">
    <Image 
      src={imageUrl || "/api/placeholder/400/300"} 
      alt={title} 
      width={400} 
      height={300} 
      className="w-full h-48 object-cover "
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ProjectPortfolio: React.FC = () => {
  const projects: ProjectCardProps[] = [
    { title: "Project 1", description: "Description for Project 1", imageUrl: "/path/to/image1.jpg" },
    { title: "Project 2", description: "Description for Project 2", imageUrl: "/path/to/image2.jpg" },
    { title: "Project 3", description: "Description for Project 3", imageUrl: "/path/to/image3.jpg" },
    { title: "Project 4", description: "Description for Project 4", imageUrl: "/path/to/image4.jpg" },
    { title: "Project 5", description: "Description for Project 5", imageUrl: "/path/to/image5.jpg" },
    { title: "Project 6", description: "Description for Project 6", imageUrl: "/path/to/image6.jpg" },
  ];

  return (
    <section id="Project">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
      <div className="grid  gap-4 mt-8">
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-2 text-center text-white">My Projects</h1>
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