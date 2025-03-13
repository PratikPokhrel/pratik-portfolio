
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setIsImageLoaded(true);
    }
  }, []);


  // Get the base URL for assets based on environment
  const getBasePath = () => {
    // For local development with Vite or when running from cloned repo
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return window.location.pathname.includes('uploads') ? '' : '/';
    }
    
    // For GitHub Pages or other deployed environments
    const basePath = import.meta.env.BASE_URL || '/';
    return basePath === '/' ? '' : basePath;
  };


  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 ">
      <div className="container mx-auto px-6 md:px-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 stagger-animation">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6" 
                          style={{backgroundColor:'#D9EAFD', cursor:'pointer'}}
                          >
              Full Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Hi, I'm Pratik Pokharel
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
            With over three years of experience in  C#.NET, MSSQL, ReactJS, Angular and web development, I specialize in building efficient and scalable solutions to tackle complex challenges. Let’s collaborate to create something outstanding            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="shiny-button px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 image-blur-wrapper rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 rounded-xl"></div>
              <img
                ref={imageRef}
                // src={`${getBasePath()}pratik-portfolio/uploads/364753015_9684088654998843_5728523195615897320_n.jpg`}
                src={`${getBasePath()}/uploads/364753015_9684088654998843_5728523195615897320_n.jpg`}
                alt="Pratik Pokharel"
                className={`w-full h-full object-cover ${isImageLoaded ? 'loaded' : 'image-blur'}`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
