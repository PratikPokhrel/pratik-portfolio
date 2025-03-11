
import { Code, Server, Database, Layout, ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Angular', 'React & React Native'] 
    },
    { 
      category: 'Backend', 
      items: ['C#', 'Python', '.NET Core', 'ASP.NET MVC', 'Entity Framework'] 
    },
    { 
      category: 'Database', 
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB',] 
    },
    { 
      category: 'DevOps', 
      items: ['Git', 'Azure DevOps', 'SVN',] 
    },
    { 
      category: 'Analytics', 
      items: ['Excel', 'PowerBI', 'SQL'] 
    },


  ];

  const skillIcons = {
    Frontend: <Layout className="h-4 w-4" />,
    Backend: <Server className="h-6 w-6" />,
    Database: <Database className="h-6 w-6" />,
    DevOps: <Code className="h-6 w-6" />,
    Analytics: <ChartBar className="h-6 w-6" />,
  };

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-heading text-center mx-auto">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-md">
            I'm a committed full-stack developer with over three years of experience in building web applications, business solutions, and data analysis. My core expertise lies in web application software development, C#, ASP.NET, database systems, and data analytics using Excel, Power BI, and SQL, enabling me to develop efficient, scalable, and maintainable applications.
</p>
            <p className="text-md">
              Currently pursuing my Master's in Information and Communication Technology at the University of Sunshine Coast, I'm expanding my knowledge while applying my skills to real-world problems.
            </p>
            <p className="text-md">
            My experience includes developing business applications, designing data access layers, optimizing database performance, and crafting responsive user interfaces. I have hands-on experience with C#, .NET, MSSQL, PostgreSQL, JavaScript, React, and Angular. Additionally, I specialize in data analytics using Excel, Power BI, and SQL. I'm passionate about learning new technologies and finding innovative solutions to complex problems.
</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.category} className="glass-panel rounded-lg p-4 card-hover">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-primary">
                    {skillIcons[skill.category as keyof typeof skillIcons]}
                  </div>
                  <h3 className="font-display font-medium text-sm">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {item}
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
