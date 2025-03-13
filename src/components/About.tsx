
import { Code, Server, Database, Layout, ChartBar, Workflow, Text } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Angular', 'React & React Native']
    },
    {
      category: 'Backend',
      items: ['C, C++, C#', 'Python', '.NET Core', 'ASP.NET MVC', 'Entity Framework']
    },
    {
      category: 'Database',
      items: ['MSSQL,MySQL', 'PostgreSQL', 'MongoDB','Firebase']
    },
    
    {
      category: 'Analytics',
      items: ['Excel', 'PowerBI', 'SQL']
    },
    {
      category: 'PMT',
      items: ['Azure DevOps', 'JIRA', 'GitLab', 'Asana']
    },
    {
      category: 'IDE',
      items: ['Visual Studio', 'Visual Studio Code', 'Sublime Text', 'Notepada ++']
    },

  ];

  const skillIcons = {
    Frontend: <Layout className="h-4 w-4" />,
    Backend: <Server className="h-6 w-6" />,
    Database: <Database className="h-6 w-6" />,
    Analytics: <ChartBar className="h-6 w-6" />,
    PMT : <Workflow className="h-6 w-6" />,
    IDE :<Text className="h-6 w-6" />,
  };

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-center mx-auto">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-md">
              I'm a committed full-stack developer with over three years of experience in building web applications, business solutions, and data analysis. My core expertise lies in web application software development, C#, ASP.NET, Python, database systems, and data analytics using Excel, Power BI, and SQL.
            </p>
            <p className="text-md">
            Currently pursuing my Master's in Information and Communication Technology at the University of Sunshine Coast, I'm expanding my knowledge while applying my skills to real-world problems. Throughout my studies, I have gained expertise in Data Visualization, Databases, Python Programming, Machine Learning, Cryptography, Blockchain, Cybersecurity, device and network Security.            </p>
            <p className="text-md">
              My experience includes developing business applications, designing data access layers, optimizing database performance, and crafting responsive user interfaces. I have hands-on experience with C#, .NET, MSSQL, PostgreSQL, JavaScript, React, and Angular. Additionally, I specialize in data analytics using Excel, Power BI, and SQL. I'm passionate about learning new technologies and finding innovative solutions to complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.category} className="glass-panel rounded-lg p-4 card-hover" style={{backgroundColor:'#F9F5F6'}}>
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-primary">
                    {skillIcons[skill.category as keyof typeof skillIcons]}
                  </div>
                  <h3 className="font-display font-medium text-md">{skill.category =='PMT'? 'Project Management Tools': skill.category =='IDE'? 'IDE Tools' :  skill.category}</h3>
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
