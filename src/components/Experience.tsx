
import { useState } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const experienceData = [
  {
    id: 1,
    role: 'Mid-Level Software Developer',
    company: 'Rigo Technologies Nepal',
    duration: 'May 2021 - Mar 2022',
    description: [
      'Developed and maintained Finance, ERP, HMS, and HRMS applications, ensuring scalable and efficient business solutions',
      'Designed and implemented moderately complex software solutions using C# programming language in ASP.Net(MVC), Entity Framework, and Web API',
      'Implemented the application\'s core components, including a Data Access Layer (DAL) and Business Logic Layer (BLL)',
      'Evaluated and implemented new technologies to maximize the efficiency of web applications',
    ],
  },
  {
    id: 2,
    role: 'Junior Software Developer',
    company: 'Verisk Nepal',
    duration: 'Aug 2020 - Mar 2021',
    description: [
      'Worked at a well-established U.S.-based healthcare provider company outsourced in Nepal',
      'Developed and maintained ASP.NET Core Web API and .NET Core applications, implementing new features as required',
      'Designed and developed backend systems using the Entity Framework Code-First approach with the Repository Pattern',
      'Created and optimized Stored Procedures and Functions using SQL Server Management Studio',
      'Managed features and tasks, ensuring timely completion ahead of deadlines',
    ],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'Cloudtai',
    duration: 'Dec 2018 - Jul 2021',
    description: [
      'Worked extensively on an asset and template management applications',
      'Designed and implemented a dynamic drag-and-drop form builder for surveys, leveraging JSON queries for automatic form generation',
      'Contributed to the design and implementation of database structures and APIs, ensuring data integrity and performance',
      'Utilized technologies including C#, .NET Core, REST API, Entity Framework Core, LINQ, and MS SQL',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-center mx-auto">Professional Experience</h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/3">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x md:snap-none space-x-4 md:space-x-0 md:space-y-1 pb-4 md:pb-0">
              {experienceData.map((exp) => (
                <button
                  key={exp.id}
                  className={cn(
                    'min-w-[160px] md:min-w-0 snap-start px-4 py-3 rounded-md text-left transition-all duration-300',
                    activeTab === exp.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'hover:bg-secondary text-foreground'
                  )}
                  onClick={() => setActiveTab(exp.id)}
                >
                  <h3 className="font-medium">{exp.company}</h3>
                  <p className="text-sm opacity-80">{exp.role}</p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-2/3">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className={cn(
                  'glass-panel rounded-lg p-6 transition-all duration-500',
                  activeTab === exp.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 absolute -z-10 translate-y-4'
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays size={16} className="mr-1" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex">
                      <ArrowRight size={16} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
