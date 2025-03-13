
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    id: 1,
    title: 'University Project - Greyhound Racing Data',
    description: 'Led a data scraping, extraction and analytics project under the supervision of Professor Antony Bedford and an external client, processing over 3 million rows of racing data. Designed and implemented a structured pipeline for efficient extraction and storage in a local MSSQL database, ensuring seamless data processing and management.',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'MSSQL', 'ReactJS'],
    imageUrl: 'https://cdn.animalsaustralia.org/wp-content/uploads/2021/11/25104330/Greyhound_RacingHeader.jpg',
    codeUrl: 'https://github.com/PratikPokhrel/GBGR_Scraper',
  },
  {
    id: 2,
    title: 'Enterprise Resource Planning System',
    description: 'At Rigo Nepal, a well-established software company in Nepal, I played a key role in designing, developing, and maintaining Finance, ERP, HMS, and HRMS applications. These solutions were built with scalability, high performance, and efficiency in mind, integrating multiple modules to streamline business operations. My work focused on enhancing data management, optimizing workflows, and improving overall business efficiency. Collaborating closely with a dynamic development team, I contributed to building robust software tailored to diverse business needs, ensuring seamless integration and usability for clients across various industries.',
    technologies: ['C#', 'ASP.NET MVC', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'ReactJS', 'API'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxNzc3Mw&ixlib=rb-4.0.3&q=80&w=900',
    codeUrl: 'https://github.com/PratikPokhrel',
  },
  {
    id: 3,
    title: 'Dynamic Form Builder',
    description: 'Designed and implemented a dynamic drag-and-drop form builder for surveys using .NET Core, API, PostgreSQL, and Angular. Leveraging custom JSON queries, the application enabled automatic form generation with customizable templates, allowing surveyors to create and modify dynamic forms seamlessly during data collection.',
    technologies: ['C#', 'ASP.NET MVC', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'ReactJS', 'API'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxNzc3Ng&ixlib=rb-4.0.3&q=80&w=900',
    codeUrl: 'https://github.com/PratikPokhrel',
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsImageLoaded(new Array(projectsData.length).fill(false));
  }, []);

  const handleImageLoad = (index: number) => {
    setIsImageLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-center mx-auto">Featured Projects</h2>
        
        <div className="mt-12 relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projectsData.map((project, index) => (
                <div key={project.id} className="min-w-full">
                  <div className="glass-panel rounded-lg overflow-hidden shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto image-blur-wrapper overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className={cn(
                            'w-full h-full object-cover',
                            isImageLoaded[index] ? 'loaded' : 'image-blur'
                          )}
                          onLoad={() => handleImageLoad(index)}
                        />
                      </div>
                      
                      <div className="p-6 md:p-8 flex flex-col">
                        <h3 className="text-2xl font-display font-semibold mb-4">{project.title}</h3>
                        <p className="mb-6 text-muted-foreground flex-grow text-sm">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech} 
                                style={{backgroundColor:'#D9EAFD', cursor:'pointer'}}
                                className="skill-badge"
                              >
                               <span className='text-sm'
                                
                               >{tech}</span> 
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                          >
                            Code
                            <Github size={16} className="ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2 px-4">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all duration-300',
                    activeIndex === index 
                      ? 'bg-primary scale-125' 
                      : 'bg-secondary hover:bg-primary/50'
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
