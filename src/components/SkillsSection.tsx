
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C#", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Frameworks/Libraries", 
      skills: ["ASP.NET", "Django", "React", "Node.js"]
    },
    {
      title: "Databases",
      skills: ["MSSQL Server", "PostgreSQL"]
    },
    {
      title: "Other",
      skills: ["HTML", "CSS", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="animate-slide-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="p-3 border border-border rounded-lg text-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
