import { ExternalLink, Github, Database, Workflow, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Flight Monitoring System',
      description: 'A comprehensive real-time data pipeline for processing and analyzing flight data from the OpenSky API.',
      highlights: [
        'Processes 1M+ daily flight records using Apache Spark and Delta Lake',
        'Bronze-Silver-Gold data architecture with modular transformations',
        '3 Airflow DAGs orchestrating ingestion, processing, and aggregation',
        'Real-time KPIs: velocity, altitude, and flight phase distributions',
      ],
      tech: ['PySpark', 'Python', 'SQL', 'Delta Lake', 'Apache Airflow', 'OpenSky API'],
      architecture: [
        { layer: 'Bronze', desc: 'Raw ingestion from API', icon: Database },
        { layer: 'Silver', desc: 'Cleaning & deduplication', icon: Workflow },
        { layer: 'Gold', desc: 'Aggregations & KPIs', icon: BarChart3 },
      ],
      github: 'https://github.com/sinnghabhay80/real-time-flight-monitoring',
    },
    {
      title: 'Retail360 - Multi-Source Retail Analytics',
      description: 'An end-to-end retail analytics platform integrating data from multiple sources for unified business insights.',
      highlights: [
        'Multi-source data integration with Python and Docker',
        'Configurable ETL pipelines with YAML-based configs',
        'SQL-based transformations and analytics layer',
        'Containerized deployment with Docker for portability',
      ],
      tech: ['PySpark', 'Python', 'SQL', 'Apache Kafka', 'Docker', 'ETL Pipelines'],
      architecture: [
        { layer: 'Ingest', desc: 'Multi-source extraction', icon: Database },
        { layer: 'Transform', desc: 'Python & SQL processing', icon: Workflow },
        { layer: 'Analytics', desc: 'Business insights', icon: BarChart3 },
      ],
      github: 'https://github.com/sinnghabhay80/multi-source-retail-analytics',
      wip: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card/50 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Projects</h2>

          <div className="space-y-8">
            {projects.map((project, projectIndex) => (
              <div key={project.title} className="glass-card overflow-hidden">
                {/* Project Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <span className="font-mono text-sm">
                          {project.wip ? 'WORK IN PROGRESS' : 'FEATURED PROJECT'}
                        </span>
                        {project.wip && (
                          <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-mono rounded">
                            BUILDING
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="font-mono border-border hover:border-primary hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Architecture Diagram */}
                <div className="p-6 bg-muted/30 border-b border-border">
                  <p className="text-xs text-muted-foreground font-mono mb-4">// Data Architecture</p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {project.architecture.map((layer, index) => (
                      <div key={layer.layer} className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-lg bg-secondary border border-border flex items-center justify-center mb-2 group hover:border-primary transition-colors">
                            <layer.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="font-mono text-sm text-foreground">{layer.layer}</div>
                          <div className="text-xs text-muted-foreground">{layer.desc}</div>
                        </div>
                        {index < project.architecture.length - 1 && (
                          <div className="text-primary font-mono hidden sm:block">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-terminal-green mt-0.5">✓</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
