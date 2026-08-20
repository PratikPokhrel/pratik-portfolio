
import { Database, ShieldCheck, BookOpen, ChartBar, Workflow, Code } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Governance, Metadata & Protection',
      items: ['Microsoft Purview', 'Data Scanning & Cataloguing', 'Data Enrichment & Curation',
         'Data Lineage', 
         'SITs & PII Discovery', 
          'Data dictionaries & Business Glossaries',
         'Master Data Management (MDM)']
    },
    {
      category: 'Domain Architecture & Stewardship',
      items: ['Data Domain Design', 'Ownership & Stewardship Models', 'Critical Data Element (CDE) Identification', 'MortarCAPS Canonical Mapping', 'Canonical Mapping', 'Conceptual, Logical and Physical Data Model Design']
    },
    {
      category: 'Data Quality & Remediation',
      items: ['DQ Rules & Rule Authoring', 'Automated Profiling & Validation', 'Root Cause Analysis', 'Remediation Workflows']
    },

    {
      category: 'BI & Data Engineering',
      items: ['Azure Synapse DW, Databricks', 'Advanced SQL & DAX', 'SQL Server', 'Stored Procedures', 'Query Optimization','Python']
    },
    {
      category: 'Software Engineering',
      items: ['C# .NET', 'C++', 'REST APIs', 'ReactJS', ]
    },
    {
      category: 'Frameworks & Security Policies',
      items: ['DAMA-DMBOK', 'CAUDIT', 'MortarCAPS Data Standards', 'Security & Classification Policies']
    },

  ];

  const skillIcons = {
    'Governance, Metadata & Protection': <ShieldCheck className="h-6 w-6" />,
    'Domain Architecture & Stewardship': <Workflow className="h-6 w-6" />,
    'Data Quality & Remediation': <ChartBar className="h-6 w-6" />,
    'BI & Data Engineering': <Database className="h-6 w-6" />,
    'Software Engineering': <Code className="h-6 w-6" />,
    'Frameworks & Security Policies': <BookOpen className="h-6 w-6" />,
  };

  return (
    <section id="about" className="py-20 bg-[#f7f3ea]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">01 / Governance practice</p>
            <h2 className="section-heading mb-0">The operating layer for trusted data</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-md">
I am a Data Governance and BI Specialist dedicated to making enterprise data secure, trusted, and decision-ready. Guided by DAMA-DMBOK principles, I build the operational backbone for data trust, leading initiatives across governance policy, metadata management, classification, data dictionaries, business glossaries, CDEs, automated quality rules, and lineage mapping.

Backed by a Master of ICT and a software engineering foundation across Python, SQL, C# .NET, ReactJS, Azure, Synapse, and Databricks, I bridge high-level governance strategy with hands-on automation, secure pipelines, and reliable analytics.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.category} className="glass-panel rounded-lg p-4 card-hover">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-primary">
                    {skillIcons[skill.category as keyof typeof skillIcons]}
                  </div>
                  <h3 className="font-display font-medium text-md">{skill.category}</h3>
                  <hr className="border-t-2 border-gray-300 my-4"></hr>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 text-sm"></span>
                      <span className='text-sm'>{item}</span>
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

export default About;
