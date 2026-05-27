import { Terminal, Database, Cloud, Workflow, Bot } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Database, label: 'Data Pipelines', desc: 'ETL & ELT at PB scale' },
    { icon: Cloud, label: 'Cloud Native', desc: 'Azure & Databricks' },
    { icon: Workflow, label: 'Automation', desc: 'CI/CD & Release Eng.' },
    { icon: Bot, label: 'AI Agents', desc: 'LLM-powered systems' },
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
  "client": "Sephora",
  "experience": "3+ years",
  "focus": [
    "Platform Automation",
    "Agentic AI Systems",
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
                embedded across two simultaneous functions on the Sephora retail data platform —
                L2 production support and active feature development — across{' '}
                <span className="text-primary font-medium">~1,500 active pipelines</span> on a PB-scale lakehouse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most recently I solo-built <span className="text-primary font-medium">ARIA</span> — a production
                agentic AI triage system that reduced L2 pipeline failure investigation from{' '}
                <span className="text-accent font-medium">30–60 minutes to 2–5 minutes</span> per incident,
                orchestrating 23 tools across ADF, Databricks, ServiceNow, and Azure DevOps via a custom LLM agent loop.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I build the systems that make data pipelines reliable, deployable, and maintainable at scale —
                from release engineering and CI/CD automation to cloud cost optimisation driving{' '}
                <span className="text-accent font-medium">~$848K in annual savings</span>.
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
