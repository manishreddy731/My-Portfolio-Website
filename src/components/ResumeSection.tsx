import React, { useEffect, useRef } from 'react';
import { Code, Globe, Layout, Users, Download } from 'lucide-react';

const ResumeSection: React.FC = () => {
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

  const experiences = [
    {
      title: "Computer Programming Training",
      company: "Lovely Professional University",
      date: "March 2024",
      description: "Completed a 72-hour intensive online course on Computer Programming via the iamneo platform. Gained foundational and practical knowledge in programming concepts, focusing on algorithmic thinking and efficient problem-solving techniques.",
      techStack: "C++ with Data Structures and Algorithms (DSA)"
    },
    {
      title: "Solutions Architecture Job Simulation",
      company: "Forage",
      date: "June 2024 - July 2024",
      description: "Designed a simple and scalable hosting architecture using AWS Elastic Beanstalk for a client facing rapid growth and performance bottlenecks. Improved system responsiveness and ensured cost-effective scaling by optimizing infrastructure.",
      techStack: "AWS Elastic Beanstalk · EC2 · RDS · Load Balancer · Auto Scaling · S3"
    },
    {
      title: "Cloud Computing Training",
      company: "Gokboru Tech",
      date: "March 2024",
      description: "Mastered AWS Cloud Computing through intensive training. Mastering key elements of cloud architecture and security and deployment strategies. Gained hands-on experience in AWS services for scalable and secure cloud solutions.",
      techStack: "Amazon Web Services"
    }
  ];

  const education = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 6.9",
      date: "Since August 2022"
    },
    {
      institution: "Sankalp Junior Kalasala",
      location: "Hyderabad, Telangana",
      degree: "Intermediate",
      score: "Percentage: 88.7%",
      date: "June 2018 - March 2020"
    },
    {
      institution: "Adarsh Vidya Bhavan",
      location: "Hyderabad, Telangana",
      degree: "Matriculation",
      score: "Percentage: 83.5%",
      date: "June 2016 - March 2018"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              My <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Resume</span>
            </h2>
            <a
              href="https://drive.google.com/file/d/1O9zp-ZdfonWDrlN6kpB6yWLkfKr-Q1Fo/view?usp=sharing"
              download
              className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Layout className="text-indigo-500 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400">
                    <strong>Tech Stack:</strong> {exp.techStack}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <Code className="text-indigo-500 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.institution}</h4>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">{edu.location}</div>
                  <div className="text-gray-800 dark:text-gray-200 font-medium mb-2">{edu.degree}</div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <span>{edu.score}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
