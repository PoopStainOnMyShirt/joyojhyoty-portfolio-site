
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer - 1",
      company: "Aurigo Software Technologies",
      period: "2023 – Present",
      description: "Working on full-stack development projects using Microsoft technologies and modern web frameworks."
    },
    {
      title: "Intern - Dev",
      company: "Aurigo Software Technologies", 
      period: "2022 – 2023",
      description: "Gained hands-on experience in software development and contributed to various development projects."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative md:pl-20 animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <h4 className="text-lg font-medium">{exp.company}</h4>
                    <p className="text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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

export default ExperienceSection;
