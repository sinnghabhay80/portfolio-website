import { Terminal, Database, Cloud, Workflow } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Database, label: 'Data Pipelines', desc: 'ETL & ELT workflows' },
    { icon: Cloud, label: 'Cloud Native', desc: 'Azure & Databricks' },
    { icon: Workflow, label: 'Automation', desc: 'CI/CD & DevOps' },
    { icon: Terminal, label: 'Big Data', desc: 'Spark & Kafka' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-destructive" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-terminal-green" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">about.json</span>
                </div>
                <div className="terminal-body text-sm">
                  <pre className="text-muted-foreground">
{`{
  "name": "Abhay Singh",
  "role": "Data Engineer",
  "company": "Xebia IT Architects",
  "experience": "2+ years",
  "focus": [
    "Data Pipeline Development",
    "Big Data Engineering",
    "Cloud Architecture"
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Data Engineer at <span className="text-primary font-medium">Xebia IT Architects</span>, 
                passionate about building scalable data pipelines and architecting robust data solutions. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in <span className="text-primary">Spark</span>, <span className="text-primary">Databricks</span>, 
                and <span className="text-primary">Azure</span>, I develop end-to-end data platforms that power analytics 
                and drive <span className="text-accent font-medium">$848K in business value</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive on building automation tools and CI/CD pipelines that accelerate development cycles 
                and enable teams to ship faster.
              </p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={item.label}
                className="glass-card p-4 text-center hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
