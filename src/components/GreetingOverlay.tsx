import React, { useEffect, useState } from 'react';

interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "Hello", language: "English" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "你好", language: "Chinese" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Ciao", language: "Italian" },
  { text: "Hallo", language: "German" },
  { text: "مرحبا", language: "Arabic" },
  { text: "नमस्ते", language: "Hindi" },
];

const GreetingOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsVisible(false);
        setTimeout(onComplete, 1000);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [currentIndex, isAnimating, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        <h2 
          className="text-4xl md:text-6xl font-bold text-white mb-2 transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {greetings[currentIndex].text}
        </h2>
        <p 
          className="text-gray-400 text-lg md:text-xl"
          style={{
            opacity: isVisible ? 0.7 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {greetings[currentIndex].language}
        </p>
      </div>
    </div>
  );
};

export default GreetingOverlay;