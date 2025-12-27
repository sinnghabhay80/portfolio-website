import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience = () => {
  const projects = [
    {
      title: 'Sales Promotion Data Migration',
      tech: 'Scala & Spark',
      points: [
        'Designed Scala-based ingestion framework migrating from legacy JDBC to SFTP pipeline',
        'Built reconciliation logic in Databricks using Spark and Delta Lake',
        'Validated 50M+ records ensuring zero duplication and full referential integrity',
        'Resolved data mismatches from divergent transformation logic across platforms',
      ],
    },
    {
      title: 'Legacy OPD Data Modernization',
      tech: 'PySpark',
      points: [
        'Migrated reporting datasets from legacy tables to standardized structures',
        'Built modular PySpark modules supporting incremental updates and schema evolution',
        'Refactored joins and harmonized business rules eliminating redundant pipelines',
      ],
    },
    {
      title: 'ADF Pipeline Update Automation',
      tech: 'Python & Azure DevOps',
      points: [
        'Reduced ADF release cycle time by 30%',
        'Eliminated manual JAR deployments, reducing update time by 90%',
        'Integrated Azure DevOps REST APIs for automated Git operations',
        'Achieved 25% reduction in release bugs through validation checks',
      ],
    },
  ];

  const impacts = [
    { metric: '25%', label: 'Pipeline Performance Improvement' },
    { metric: '$848K', label: 'Cost Savings Achieved' },
    { metric: '16+ hrs', label: 'Weekly Time Saved via Automation' },
    { metric: '15%', label: 'Platform Reliability Increase' },
  ];

  return (
    <section id="experience" className="py-24 bg-card/50 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">Experience</h2>

          {/* Company Header */}
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-mono text-sm">CURRENT ROLE</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Data Engineer</h3>
                <p className="text-xl text-muted-foreground">Xebia IT Architects</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">Feb 2023 - Present</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="font-mono text-sm">Gurugram, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {impacts.map((item) => (
              <div key={item.label} className="glass-card p-4 text-center hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold gradient-text mb-1">{item.metric}</div>
                <div className="text-xs text-muted-foreground font-mono">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <h3 className="text-lg font-mono text-primary mb-6 flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Key Development Projects
          </h3>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={project.title} className="glass-card p-6 hover:border-primary/30 transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-primary font-mono text-sm">0{index + 1}.</span>
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded">
                    {project.tech}
                  </span>
                </div>
                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-1.5">›</span>
                      <span>{point}</span>
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
