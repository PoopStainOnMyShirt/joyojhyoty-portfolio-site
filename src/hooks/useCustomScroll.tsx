
import { useEffect, useState, useCallback } from 'react';

export const useCustomScroll = (sections: string[]) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sections.length || isScrolling) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    const element = document.getElementById(sections[index]);
    if (element) {
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const scrollTo = elementTop - (windowHeight - elementHeight) / 2;
      
      window.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: 'smooth'
      });
      
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, [sections, isScrolling]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (isScrolling) return;
    
    if (e.deltaY > 0) {
      // Scroll down
      scrollToSection(Math.min(currentSection + 1, sections.length - 1));
    } else {
      // Scroll up
      scrollToSection(Math.max(currentSection - 1, 0));
    }
  }, [currentSection, scrollToSection, isScrolling]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isScrolling) return;
    
    switch (e.key) {
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        scrollToSection(Math.min(currentSection + 1, sections.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        scrollToSection(Math.max(currentSection - 1, 0));
        break;
    }
  }, [currentSection, scrollToSection, isScrolling]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  return {
    currentSection,
    scrollToSection,
    isScrolling
  };
};
