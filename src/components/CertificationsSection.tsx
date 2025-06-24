
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Certificate } from 'lucide-react';

const CertificationsSection = () => {
  const awards = [
    {
      title: "Aurigo Role Model Award",
      description: "Recognition for exemplary performance and leadership qualities in the workplace."
    },
    {
      title: "Aurigo Team Award",
      description: "Acknowledged for outstanding collaboration and team contribution to project success."
    }
  ];

  const certifications = [
    {
      title: "Python for Beginners",
      description: "Foundational Python programming concepts and syntax mastery."
    },
    {
      title: "Intermediate and Advanced Python",
      description: "Advanced Python concepts including OOP, decorators, and frameworks."
    },
    {
      title: "C# for Beginners by Mosh Hamedani",
      description: "Comprehensive introduction to C# programming fundamentals."
    },
    {
      title: "C# Intermediate and Advanced by Mosh Hamedani",
      description: "Advanced C# concepts, LINQ, async programming, and best practices."
    },
    {
      title: "React Bootcamp",
      description: "Modern React development including hooks, context, and state management."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-card/50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Certifications & Awards</h2>
          
          {/* Awards Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Award className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold text-primary">Awards</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card 
                  key={award.title}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary group-hover:scale-105 transition-transform duration-200">
                      {award.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Certificate className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold text-primary">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-in"
                  style={{ animationDelay: `${(index + awards.length) * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary group-hover:scale-105 transition-transform duration-200">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
