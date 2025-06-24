
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mouse Based on Image Recognition",
      description: "A webcam-powered tool that uses MediaPipe to detect hand landmarks and control the mouse pointer through gesture recognition.",
      technologies: ["Python", "MediaPipe", "OpenCV"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative overflow-hidden border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="p-8 border border-border rounded-lg bg-card/50">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">What I'm Exploring</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I'm currently not offering formal freelance services, but I'm open to collaborating on 
                interesting problems involving RESTful APIs, web scraping with Scrapy and Selenium, 
                and full website development using modern stacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
