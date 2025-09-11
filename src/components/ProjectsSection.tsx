import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Java based Inventory Management System',
    description: 'Developed a full-stack inventory management system integrating frontend, backend, and database components. Designed RESTful APIs with Spring Boot connected to a MySQL database for seamless CRUD operations. Built a responsive user interface using HTML, CSS, JavaScript for asynchronous interactions. Ensured secure user authentication and data validation, and deployed the application in a Linux environment using Docker, with Git for version control.',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Java', 'MySQL', 'REST API', 'Docker'],
    githubUrl: 'https://github.com/manishreddy731/Project-ION-front-end',
  },

  {
  id: 2,
  title: 'Tetris Game – JavaScript Browser Game',
  description: 'A fully interactive browser-based Tetris game built with vanilla JavaScript, featuring real-time gameplay, keyboard controls, and responsive UI. Deployed using GitHub Pages.',
  image: 'https://learning.mcpt.ca/img/gridexample.png',
  technologies: ['JavaScript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/manishreddy731/TetrisGame',
},

  {
    id: 3,
    title: 'Creating Visualisations using AWS',
    description: 'A data visualization project leveraging AWS S3 for data storage and Amazon QuickSight for creating interactive, insightful dashboards and reports.',
    image: 'https://cloudcompiled.com/wp-content/uploads/2020/08/quicksight_dashboard_sample.png',
    technologies: ['AWS S3', 'QuickSight'],
    
    githubUrl: 'https://github.com/manishreddy731/Creating-Visualizations',
  },

  {
    id: 4,
    title: 'Book Store – Full Stack Web Application for Managing Personal Book Collection',
    description: 'A full-featured web application designed to manage personal book collections with seamless user interaction.Includes dynamic CRUD operations, user authentication, flash messaging, and responsive form validation for an enhanced user experience.',
    image: 'https://static.vecteezy.com/system/resources/previews/021/916/224/large_2x/promo-banner-with-stack-of-books-globe-inkwell-quill-plant-lantern-ebook-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-advertising-vector.jpg',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'HTML/CSS', 'Vercel'],
    
    githubUrl: 'https://github.com/manishreddy731/BookStore',
  },
 
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A showcase of my recent work, demonstrating my skills in design, development, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-800"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay content that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-md hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-md hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
