
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(window.location.pathname);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-[#0d1c28]/95 shadow-lg' : 'py-4 bg-[#0d1c28]'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 text-sm font-bold font-display tracking-[0.12em] text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center bg-primary text-[#0d1c28]"><Database size={16} /></span>
          <span> <span className="text-primary">DATA GOVERNANCE | BI | SECURITY</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link',
                activePath === link.path && 'active'
              )}
              onClick={() => setActivePath(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/20 overflow-hidden transition-all duration-300',
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        )}
      >
        <nav className="flex flex-col px-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'py-2 hover:text-primary transition-colors',
                activePath === link.path && 'text-primary font-medium'
              )}
              onClick={() => {
                setActivePath(link.path);
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
