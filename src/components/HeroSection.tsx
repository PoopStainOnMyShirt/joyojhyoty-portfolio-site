
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-container">
      <div className="section-padding text-center z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in">
          Hi, I'm <span className="gradient-text">Joyojhyoty Gupta</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '0.4s' }}>
          Building functional, scalable, and impactful web solutions with the Microsoft stack, React, and Python.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            onClick={() => onScrollToSection('projects')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200"
          >
            Explore My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => onScrollToSection('contact')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
          onClick={() => onScrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
