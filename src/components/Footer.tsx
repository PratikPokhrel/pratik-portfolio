
import { Github, Linkedin, Mail, ExternalLink , SignalMedium} from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pratik-pokharel-763018222/',
    icon: <Linkedin size={20} className="transition-colors duration-300 group-hover:text-primary" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/PratikPokhrel',
    icon: <Github size={20} className="transition-colors duration-300 group-hover:text-primary" />,
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@pratikpokhrel51',
    icon: <SignalMedium size={20} className="transition-colors duration-300 group-hover:text-primary" />,
  },
  {
    name: 'Email',
    url: 'mailto:pratikpokhrel1@outlook.com',
    icon: <Mail size={20} className="transition-colors duration-300 group-hover:text-primary" />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Noosa Heads, Queensland 4567</p>
              <a href="mailto:pratikpokhrel1@outlook.com" className="block mt-1 hover:text-primary transition-colors">pratikpokhrel1@outlook.com</a>
              <p className="mt-1">+61 450829957</p>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-secondary hover:bg-secondary/80 p-2 rounded-full transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Pratik Pokharel. All rights reserved.</p>
          <p className="mt-1">Full Stack Developer specializing in .NET and web technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
