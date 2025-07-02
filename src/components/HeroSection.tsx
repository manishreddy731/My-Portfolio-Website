import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      setTimeout(() => {
        heading.style.transition = 'opacity 1s ease, transform 1s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 800);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 1s ease, transform 1s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 1300);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400 dark:bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Software Developer
            </span>
            <span className="block mt-2 text-gray-900 dark:text-white"></span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
          >
            Creating seamless digital experiences with code and design that bridge innovation with usability.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-md bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-600/10 font-medium transition-all transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;