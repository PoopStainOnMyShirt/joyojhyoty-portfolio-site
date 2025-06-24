
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full stack developer specializing in the Microsoft stack (C#, ASP.NET MVC, MSSQL Server), 
                along with React and Python. With 1 year of professional experience, I thrive on building and 
                experimenting with new technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about understanding the mechanics of existing systems and delivering solutions 
                that function in the real world. My approach combines technical expertise with practical 
                problem-solving skills.
              </p>
            </div>
            
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-primary mb-4">Education</h3>
              
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold">B.Tech in Electronics and Communications Engineering</h4>
                  <p className="text-muted-foreground">JSS Science and Technology, Mysore (2022)</p>
                </div>
                
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold">CBSE 12th</h4>
                  <p className="text-muted-foreground">NPS International School, Guwahati (2019)</p>
                </div>
                
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold">ICSE 10th</h4>
                  <p className="text-muted-foreground">St. Edmund's School, Shillong (2017)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
