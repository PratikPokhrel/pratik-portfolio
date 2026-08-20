
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    id: 1,
    title: 'Enterprise Metadata Catalogue & Data Quality Platform',
    description: 'Independent project demonstrating a metadata governance platform for metadata scanning and harvesting, catalogue curation, data profiling, data quality rule management, data ownership assignment, enterprise data dictionary and business glossary development, data classification, and sensitive data tagging.',
    technologiesLabel: 'Features',
    technologies: ['Metadata scanning', 'Metadata harvesting', 'Data profiling', 'DQ rules', 'Data dictionary', 'Business glossary', 'Classification', 'Sensitive data tagging'],
    hideCodeIcon: true,
    imageUrl: `${import.meta.env.BASE_URL}uploads/image_cat.png`,
    secondaryImageUrl: `${import.meta.env.BASE_URL}uploads/image.png`,
    codeUrl: 'https://github.com/PratikPokhrel',
  },
  {
    id: 2,
    title: 'University Project - Greyhound Racing Data',
    description: 'Led a data scraping, extraction and analytics project under the supervision of Professor Antony Bedford and an external client, processing over 3 million rows of racing data. Designed and implemented a structured pipeline for efficient extraction and storage in a local MSSQL database, ensuring seamless data processing and management.',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'MSSQL', 'ReactJS'],
    imageUrl: 'https://cdn.animalsaustralia.org/wp-content/uploads/2021/11/25104330/Greyhound_RacingHeader.jpg',
    codeUrl: 'https://github.com/PratikPokhrel/GBGR_Scraper',
  },
  {
    id: 3,
    title: 'Enterprise Resource Planning System',
    description: 'At Rigo Nepal, a well-established software company in Nepal, I played a key role in designing, developing, and maintaining Finance, ERP, HMS, and HRMS applications. These solutions were built with scalability, high performance, and efficiency in mind, integrating multiple modules to streamline business operations. My work focused on enhancing data management, optimizing workflows, and improving overall business efficiency. Collaborating closely with a dynamic development team, I contributed to building robust software tailored to diverse business needs, ensuring seamless integration and usability for clients across various industries.',
    technologies: ['C#', 'ASP.NET MVC', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'ReactJS', 'API'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxNzc3Mw&ixlib=rb-4.0.3&q=80&w=900',
    codeUrl: 'https://github.com/PratikPokhrel',
  },
  {
    id: 4,
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
    <section id="projects" className="py-20 bg-[#f7f3ea]">
      <div className="container mx-auto px-6 md:px-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">03 / Metadata systems</p>
        <h2 className="section-heading">Built for the catalogue</h2>
        
        <div className="mt-12 relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projectsData.map((project, index) => (
                <div key={project.id} className="min-w-full">
                  <div className="glass-panel overflow-hidden shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative image-blur-wrapper overflow-hidden bg-[#0d1c28] p-3">
                        <div className="flex flex-col gap-3">
                          <img
                            src={project.imageUrl}
                            alt={`${project.title} metadata catalogue screenshot`}
                            className={cn('h-auto max-h-[360px] w-full object-contain', isImageLoaded[index] ? 'loaded' : 'image-blur')}
                            onLoad={() => handleImageLoad(index)}
                          />
                          {project.secondaryImageUrl && (
                            <img
                              src={project.secondaryImageUrl}
                              alt={`${project.title} data quality and profiling screenshot`}
                              className="h-auto max-h-[360px] w-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8 flex flex-col">
                        <p className="mb-2 text-xs uppercase tracking-wider text-primary">My metadata application</p>
                        <h3 className="text-2xl font-display font-semibold mb-4">{project.title}</h3>
                        <p className="mb-6 text-muted-foreground flex-grow text-sm">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{project.technologiesLabel ?? 'Technologies'}</h4>
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
                            {!project.hideCodeIcon && <Github size={16} className="ml-2" />}
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
