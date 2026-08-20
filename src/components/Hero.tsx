
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
    <section className="min-h-screen flex items-center bg-[#0d1c28] pt-28 pb-16 text-white">
      <div className="container mx-auto px-6 md:px-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="order-2 lg:order-1 stagger-animation">
            {/* <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-2 w-2 bg-primary" />
            </div> */}
            <h1 className="max-w-3xl text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.98] mb-6">
              Goverened for <span className="text-primary">Security</span> engineered to drive intelligence.
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
I build trusted, governed data ecosystems by combining data governance, metadata management, data cataloguing, lineage, business glossaries, and data quality. I turn fragmented data into well-managed, discoverable, and accountable assets that enable confident, self-service decision-making.         </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium shadow-md hover:bg-[#54e1c6] transition-all duration-300 flex items-center"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 border border-slate-600 text-white rounded-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md border border-slate-700 bg-[#142b3a] p-3 shadow-2xl">
              <img
                ref={imageRef}
                src={`${import.meta.env.BASE_URL}uploads/364753015_9684088654998843_5728523195615897320_n.jpg`}
                alt="Pratik Pokharel"
                className={`h-[28rem] w-full object-cover ${isImageLoaded ? 'loaded' : 'image-blur'}`}
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
