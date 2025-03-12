
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

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 stagger-animation">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
              Full Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Hi, I'm Pratik Pokharel
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              With 3+ years of experience in .NET, C#, and web development, I build efficient, scalable solutions to complex problems. Let's create something exceptional together.
            </p>
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
                src="/lovable-uploads/1d519867-97a8-4942-bc8b-a70c68d172e2.png"
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
