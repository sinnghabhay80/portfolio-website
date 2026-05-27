import { Github, Database, Workflow, BarChart3, Bot, Activity, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'ARIA — Automated Root-cause Intelligence Agent',
      label: 'PRODUCTION · WORK PROJECT',
      labelColor: 'text-accent',
      badgeBg: 'bg-accent/20 text-accent',
      badgeText: 'LIVE',
      description:
        'A production agentic AI triage system deployed on the Sephora data platform. Given a failed ADF pipeline or a ServiceNow INC number, it runs a multi-step LLM agent loop and produces a structured diagnosis — failure classification, root cause, evidence chain, and remediation steps — in 2–5 minutes vs 30–60 minutes manually.',
      highlights: [
        'Custom OpenAI function-calling loop (up to 15 iterations) orchestrating 23 tools across ServiceNow, ADF, Databricks, Azure DevOps, and Spark SQL',
        'Config-switchable LLM: Azure OpenAI (GPT-4.1-mini) or Databricks-hosted Claude Sonnet — no code changes required',
        '7-class failure taxonomy with HIGH/MEDIUM/LOW confidence and full evidence chain per result',
        'Three job modes: on-demand pipeline triage, INC-triggered triage with automatic ServiceNow write-back, and scheduled auto-scan every 30 min',
        'Delta-backed preservance and caching layer (24h TTL); cross-workspace Azure AD service principal auth',
      ],
      tech: ['Python', 'Azure OpenAI', 'Claude Sonnet', 'Databricks Apps', 'Streamlit', 'Spark Connect', 'Delta Lake', 'ServiceNow SDK', 'Azure DevOps API', 'ADF REST API'],
      architecture: [
        { layer: 'Input', desc: 'Pipeline / INC trigger', icon: Activity },
        { layer: 'Agent Loop', desc: '23 tools, 15 iterations', icon: Bot },
        { layer: 'Output', desc: 'Triage + SN write-back', icon: Shield },
      ],
      github: null,
    },
    {
      title: 'Real-Time Flight Monitoring System',
      label: 'PERSONAL PROJECT',
      labelColor: 'text-primary',
      badgeBg: null,
      badgeText: null,
      description:
        'An end-to-end real-time and batch hybrid data platform ingesting live global flight telemetry from the OpenSky Network API, structured across a Bronze/Silver/Gold Medallion lakehouse with full Airflow orchestration.',
      highlights: [
        'Spark Structured Streaming Silver-layer consumers: null/coordinate/ICAO validation, aircraft-ID + timestamp deduplication, ingestion timestamping',
        'Gold-layer batch enrichment every 5 minutes via Airflow — flight phase flags, UTC timestamps, speed metrics, country/hour aggregations',
        '3 Airflow DAGs orchestrating Bronze ingestion, Silver streaming, and Gold aggregation with process-liveness checks and auto-recovery',
      ],
      tech: ['PySpark', 'Spark Structured Streaming', 'Apache Airflow', 'Delta Lake', 'OpenSky Network API', 'Python'],
      architecture: [
        { layer: 'Bronze', desc: 'Raw API ingestion', icon: Database },
        { layer: 'Silver', desc: 'Streaming validation', icon: Workflow },
        { layer: 'Gold', desc: 'Aggregations & KPIs', icon: BarChart3 },
      ],
      github: 'https://github.com/sinnghabhay80/real-time-flight-monitoring',
    },
    {
      title: 'Retail-360: Multi-Source Retail Analytics Platform',
      label: 'WORK IN PROGRESS',
      labelColor: 'text-primary',
      badgeBg: 'bg-accent/20 text-accent',
      badgeText: 'BUILDING',
      description:
        'A production-architecture event-driven retail analytics platform ingesting transactional, inventory, and customer event streams from heterogeneous sources via Kafka into a Medallion lakehouse on MinIO.',
      highlights: [
        'Full stack containerised with Docker Compose — Kafka, Spark, Airflow, MinIO — for reproducible local and cloud-parity deployments',
        'Schema contract validation between Bronze→Silver and Silver→Gold transitions before each layer promotion',
        'Prometheus + Grafana observability for pipeline health, data freshness tracking, and job runtime alerting across all layers',
      ],
      tech: ['Apache Kafka', 'PySpark', 'Apache Airflow', 'Delta Lake', 'MinIO', 'Docker', 'Prometheus', 'Grafana'],
      architecture: [
        { layer: 'Ingest', desc: 'Kafka event streams', icon: Database },
        { layer: 'Transform', desc: 'Medallion layers', icon: Workflow },
        { layer: 'Observe', desc: 'Prometheus + Grafana', icon: BarChart3 },
      ],
      github: 'https://github.com/sinnghabhay80/multi-source-retail-analytics',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card/50 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Projects</h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.title} className="glass-card overflow-hidden">
                {/* Project Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`font-mono text-sm ${project.labelColor}`}>
                          {project.label}
                        </span>
                        {project.badgeText && (
                          <span className={`px-2 py-0.5 text-xs font-mono rounded ${project.badgeBg}`}>
                            {project.badgeText}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    </div>
                    {project.github ? (
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
                    ) : (
                      <span className="px-3 py-1.5 text-xs font-mono rounded border border-border text-muted-foreground">
                        Internal · Not Public
                      </span>
                    )}
                  </div>
                </div>

                {/* Architecture Diagram */}
                <div className="p-6 bg-muted/30 border-b border-border">
                  <p className="text-xs text-muted-foreground font-mono mb-4">// Architecture</p>
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

                  <div className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-terminal-green mt-0.5 shrink-0">✓</span>
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
