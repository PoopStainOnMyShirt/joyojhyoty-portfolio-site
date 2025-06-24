
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                What would you do if you had a software expert available at your fingertips? 
                Want to start a new project? Or just say hey. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:joyojhyoty@gmail.com"
                  className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>joyojhyoty@gmail.com</span>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
            
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
