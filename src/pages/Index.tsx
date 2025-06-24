
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingBackground from '@/components/FloatingBackground';
import { useCustomScroll } from '@/hooks/useCustomScroll';

const Index = () => {
  const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact'];
  const { currentSection, scrollToSection } = useCustomScroll(sections);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const index = sections.indexOf(sectionId);
    if (index !== -1) {
      scrollToSection(index);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingBackground />
      
      <div 
        className="parallax-container"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Navigation 
          onScrollToSection={handleScrollToSection}
          currentSection={currentSection}
          sections={sections}
        />
        
        <HeroSection onScrollToSection={handleScrollToSection} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
