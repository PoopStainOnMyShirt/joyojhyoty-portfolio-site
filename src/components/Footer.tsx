
const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-padding">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">Joyojhyoty Gupta</div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
