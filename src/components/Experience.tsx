
import { useState } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const experienceData = [
  {
    id: 1,
    role: 'Data Governance Specialist',
    company: 'University of the Sunshine Coast (UniSC)',
    duration: 'Jul 2025 - Present',
    description: [
      'Developed and implemented data governance policies, standards, and operating practices aligned with DAMA-DMBOK principles to strengthen data ownership, stewardship, and accountability across the enterprise.',
      'Led metadata harvesting and cataloguing in Microsoft Purview, including metadata scanning, curation, business glossary development, data dictionary maintenance, and end-to-end data lineage tracking across the Enterprise Data Warehouse.',
      'Designed data domain conceptual architecture and ownership models, identifying Critical Data Elements (CDEs) and supporting data democratisation through distributed ownership.',
      'Applied canonical mapping and data entity modelling using MortarCAPS principles to standardise data definitions, improve interoperability, and align enterprise data with agreed data standards.',
      'Designed and authored data quality rules, automated profiling and validation checks, and remediation workflows; performed root-cause analysis with business and technical stakeholders to resolve data quality issues at source.',
      'Supported data classification, Sensitive Information Type configuration, PII discovery, and Master Data Management initiatives while building stakeholder capability and governance adoption.'
    ],
  },
  {
    id: 2,
    role: 'Internship, Insights & Analytics Unit',
    company: 'University of the Sunshine Coast (UniSC)',
    duration: 'Apr 2025 - Jun 2025',
    description: [
      'Developed a data catalogue and business glossary web application using C# .NET Core, ReactJS, SQL Server, and Azure services.',
      'Designed features supporting data lineage, data quality management, and data stewardship, inspired by Microsoft Purview capabilities.',
      'Created interactive visuals and metadata-driven analytics to improve data discovery and support informed organisational decision-making.'
    ],
  },
  {
    id: 3,
    role: 'Full-Stack Developer',
    company: 'Rigo Technologies Nepal',
    duration: 'Aug 2022 - Mar 2023',
    description: [
      'Designed and built end-to-end web applications using ReactJS, C# .NET, and Databricks for scalable business solutions.',
      'Developed API-based distributed microservice architectures integrating ERP, Finance, and HRMS platforms.',
      'Built RESTful APIs and SQL-backed stores in MSSQL, improving resource sharing and reducing overall development costs by 10%.'
    ],
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'Verisk Nepal',
    duration: 'Jul 2021 - Mar 2022',
    description: [
      'Developed and maintained ASP.NET Core Web APIs following RESTful principles for a major U.S.-based healthcare provider.',
      'Wrote and optimised complex SQL queries, stored procedures, and functions for large-scale relational databases.',
      'Designed reusable backend systems using the Repository pattern to improve engineering consistency and delivery speed.'
    ],
  },
  {
    id: 5,
    role: 'Full-Stack Developer',
    company: 'Cloudtai Nepal',
    duration: 'Dec 2018 - Jul 2021',
    description: [
      'Designed a dynamic drag-and-drop form builder using JSON-based automatic generation to improve the data collection experience.',
      'Migrated databases from MS SQL to PostgreSQL, improving backend query performance and long-term cost-effectiveness.',
      'Maintained asset and template management applications while delivering core features across competing priorities.'
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experienceData[0].id);

  return (
    <section id="experience" className="py-20 bg-[#e9eee9]">
      <div className="container mx-auto px-6 md:px-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">02 / Delivery record</p>
        <h2 className="section-heading">From policy to platform</h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/3">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x md:snap-none gap-2 pb-4 md:pb-0 rounded-xl border border-border bg-card p-2 shadow-[0_10px_30px_rgba(16,34,48,0.08)]">
              {experienceData.map((exp) => (
                <button
                  key={exp.id}
                  className={cn(
                    'min-w-[220px] md:min-w-0 snap-start rounded-lg px-4 py-4 border-l-4 text-left transition-all duration-300',
                    activeTab === exp.id
                      ? 'border-primary bg-[#f7f3ea] text-foreground shadow-sm'
                      : 'border-transparent hover:border-border hover:bg-muted/40 text-foreground'
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
                  'glass-panel rounded-xl p-6 md:p-8 transition-all duration-500',
                  activeTab === exp.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 absolute -z-10 translate-y-4'
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    {/* <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">Active assignment</p> */}
                    <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-muted-foreground self-start">
                    <CalendarDays size={16} />
                    <span className="text-sm whitespace-nowrap">{exp.duration}</span>
                  </div>
                </div>

                <ul className="divide-y divide-border">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex gap-3 py-3 first:pt-0 last:pb-0 text-sm leading-relaxed rounded-md transition-colors duration-200 hover:bg-muted/30 px-2 -mx-2">
                      <ArrowRight size={16} className="mt-0.5 flex-shrink-0 text-primary" />
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
