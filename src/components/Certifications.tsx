
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const certificationsData = [
  {
    id: 1,
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    credentialId: 'AI-900',
    credentialUrl: 'https://example.com/credential',
    skills: ['Azure AI', 'Machine Learning', 'Cognitive Services', 'Natural Language Processing'],
  },
  {
    id: 2,
    title: 'Azure Data Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    credentialId: 'DP-900',
    credentialUrl: 'https://example.com/credential',
    skills: ['Azure Data Solutions', 'Relational Databases', 'Non-relational Data', 'Analytics'],
  },
  {
    id: 3,
    title: 'IT Specialist-Python',
    issuer: 'Certiport',
    date: '2022',
    credentialId: 'IT-Python-123',
    credentialUrl: 'https://example.com/credential',
    skills: ['Python Programming', 'Data Structures', 'OOP', 'File Handling', 'APIs'],
  },
  {
    id: 4,
    title: 'Microsoft Security, Compliance, and Identity Management',
    issuer: 'Microsoft',
    date: '2022',
    credentialId: 'SC-900',
    credentialUrl: 'https://example.com/credential',
    skills: ['Security', 'Compliance', 'Identity Management', 'Azure AD', 'Zero Trust'],
  },
];

const coursesData = [
  {
    id: 1,
    title: 'Web Development with ASP.NET Core',
    platform: 'Pluralsight',
    instructor: 'Scott Allen',
    completionDate: 'January 2023',
    url: 'https://example.com/course',
  },
  {
    id: 2,
    title: 'Entity Framework Core: Getting Started',
    platform: 'Pluralsight',
    instructor: 'Julie Lerman',
    completionDate: 'November 2022',
    url: 'https://example.com/course',
  },
  {
    id: 3,
    title: 'Python for Data Science and Machine Learning',
    platform: 'Udemy',
    instructor: 'Jose Portilla',
    completionDate: 'July 2022',
    url: 'https://example.com/course',
  },
  {
    id: 4,
    title: 'SQL Server Performance Tuning',
    platform: 'Linkedin Learning',
    instructor: 'Mark Wilkins',
    completionDate: 'May 2022',
    url: 'https://example.com/course',
  },
];

type TabType = 'certifications';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState<TabType>('certifications');
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    scrollToTop();
  };

  return (
    <section id="certifications" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-center mx-auto">Certifications & Courses</h2>
        
        <div className="flex justify-center mt-8 mb-10">
          <div className="bg-secondary rounded-lg p-1 flex">
            <button
              className={cn(
                'px-6 py-2 rounded-md transition-colors font-medium',
                activeTab === 'certifications'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10'
              )}
              onClick={() => handleTabChange('certifications')}
            >
              Certifications
            </button>
            
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar"
        >
          {activeTab === 'certifications' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="glass-panel rounded-lg p-6 card-hover">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <Award className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-display font-semibold text-lg">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Credential ID: {cert.credentialId}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="skill-badge text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline mt-2"
                    >
                      View Credential
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coursesData.map((course) => (
                <div key={course.id} className="glass-panel rounded-lg p-6 card-hover">
                  <h3 className="font-display font-semibold text-lg mb-1">{course.title}</h3>
                  <p className="text-primary font-medium">{course.platform}</p>
                  
                  <div className="flex justify-between items-center my-3">
                    <p className="text-sm text-muted-foreground">
                      Instructor: {course.instructor}
                    </p>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{course.completionDate}</span>
                    </div>
                  </div>
                  
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline mt-2"
                  >
                    View Course
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
