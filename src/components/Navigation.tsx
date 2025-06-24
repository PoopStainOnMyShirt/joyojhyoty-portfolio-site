
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onScrollToSection: (section: string) => void;
}

const Navigation = ({ onScrollToSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">JG</div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onScrollToSection(item.toLowerCase())}
                className="text-sm transition-colors duration-200 hover:scale-105 transform hover:text-primary"
              >
                {item}
              </button>
            ))}
          </div>

          <Button 
            onClick={() => onScrollToSection('contact')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
