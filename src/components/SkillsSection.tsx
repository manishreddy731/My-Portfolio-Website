import React, { useEffect, useRef } from 'react';
import { Code, Database, FileCode, GitBranch, Server, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'languages' | 'frameworks' | 'tools';
}

const skills: Skill[] = [
  // Languages
  { name: 'C++', icon: <FileCode size={40} />, category: 'languages' },
  { name: 'Java', icon: <FileCode size={40} />, category: 'languages' },
  { name: 'SQL', icon: <Database size={40} />, category: 'languages' },
  { name: 'DSA', icon: <Code size={40} />, category: 'languages' },
  
  // Frameworks & Libraries
  { name: 'HTML5', icon: <FileCode size={40} />, category: 'frameworks' },
  { name: 'CSS3', icon: <FileCode size={40} />, category: 'frameworks' },
  { name: 'RESTful APIs', icon: <Server size={40} />, category: 'frameworks' },

  // Tools & Platforms
  { name: 'AWS', icon: <Server size={40} />, category: 'tools' },
  { name: 'Linux', icon: <Terminal size={40} />, category: 'tools' },
  { name: 'Docker', icon: <Server size={40} />, category: 'tools' },
  { name: 'Kubernetes', icon: <Server size={40} />, category: 'tools' },
  { name: 'Git', icon: <GitBranch size={40} />, category: 'tools' },
  { name: 'MySQL', icon: <Database size={40} />, category: 'tools' },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const renderSkillsCategory = (categoryTitle: string, category: Skill['category']) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">{categoryTitle}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills
          .filter(skill => skill.category === category)
          .map((skill, idx) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                {skill.icon}
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </div>

        <div className="space-y-12">
          {renderSkillsCategory('Programming Languages', 'languages')}
          {renderSkillsCategory('Frameworks & Libraries', 'frameworks')}
          {renderSkillsCategory('Tools & Platforms', 'tools')}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
