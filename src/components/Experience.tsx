import { Briefcase, Calendar, MapPin, ArrowRight, Users, Zap } from 'lucide-react';

const Experience = () => {
  const projects = [
    {
      title: 'ARIA — Automated Root-cause Intelligence Agent',
      tech: 'Python · Azure OpenAI · Claude Sonnet · Databricks Apps',
      badge: 'AI / Agentic',
      badgeColor: 'bg-accent/20 text-accent',
      points: [
        'Solo-designed and deployed a production agentic AI triage system reducing L2 failure investigation from 30–60 min to 2–5 min per incident.',
        'Custom multi-step LLM agent loop (OpenAI function-calling, up to 15 iterations) orchestrating 23 tools across ServiceNow, ADF, Databricks, Azure DevOps, and Spark SQL.',
        'LLM provider is config-switchable between Azure OpenAI (GPT-4.1-mini) and Databricks-hosted Claude Sonnet — no code changes required.',
        'Supports Pipeline mode and INC mode (ServiceNow INC → LLM extracts pipeline → full triage → automatic SN write-back); scheduled auto-scan job runs every 30 min.',
        '7-class failure taxonomy (CODE_CHANGE, INFRA, DATA_MISSING, DATA_QUALITY, INTERMITTENT, CONFIGURATION, UNKNOWN) with HIGH/MEDIUM/LOW confidence and full evidence chain per result.',
        'Delta-backed preservance and caching layer (24h TTL); cross-workspace auth via Azure AD service principal between support and prod workspaces.',
      ],
    },
    {
      title: 'ADF Multi-Environment Release Pipeline Automation',
      tech: 'Python · Azure DevOps Pipelines · Azure Data Factory · Git · CI/CD',
      badge: 'Release Engineering',
      badgeColor: 'bg-primary/20 text-primary',
      points: [
        'Sole architect and builder of a release engineering overhaul: centralised all ADF pipeline definitions in a single Azure DevOps repo with environment-specific default branches (dev/qa/master).',
        'Built a parameterised Azure DevOps pipeline accepting a release ID and change list (pipelines, triggers, linked services, global parameters) — captures QA state, creates a versioned release branch, and auto-raises a PR.',
        'Replaced manual copy-paste cross-environment releases entirely; every release is now fully auditable via Git history and traceable to a release ID.',
      ],
    },
    {
      title: 'Sales Promotion Ingestion Platform',
      tech: 'Scala · Apache Spark · Delta Lake · Medallion Architecture',
      badge: 'Data Engineering',
      badgeColor: 'bg-secondary text-secondary-foreground',
      points: [
        'Led redesign of a legacy JDBC ingestion process into a distributed Scala + Spark framework over an SFTP-driven Bronze/Silver/Gold Medallion architecture.',
        'Built Delta Lake reconciliation workflows validating 50M+ historical records with zero duplication and full referential integrity.',
        'Developed scalable backfill and comparison jobs supporting incremental loads and controlled schema evolution across environments.',
      ],
    },
    {
      title: 'ADF Pipeline Update Automation',
      tech: 'Python · Azure DevOps REST API · Databricks Notebooks',
      badge: 'Tooling',
      badgeColor: 'bg-secondary text-secondary-foreground',
      points: [
        'Built a Python-based tool using Azure DevOps REST API to programmatically update ADF pipeline JSON definitions, manage branches, and raise PRs — cutting update time by 90% and release cycle by 30%.',
        'JAR-version comparison logic prevents redundant updates and config drift, reducing release defects by 25%.',
        'Conflict-safe branch management (reuse, recreate, push-conflict handling) hardened for concurrent team usage.',
      ],
    },
    {
      title: 'Legacy OPD Data Platform Modernization',
      tech: 'PySpark · Databricks · Delta Lake',
      badge: 'Migration',
      badgeColor: 'bg-secondary text-secondary-foreground',
      points: [
        'Migrated 30+ production tables and pipelines from a legacy source system to an updated schema across Bronze/Silver/Gold layers, maintaining full output parity for all downstream consumers.',
        'Cross-system validation across all 30+ tables before cutover — schema contracts, business rule parity, referential integrity — while eliminating tightly coupled joins, improving query performance by 25%.',
      ],
    },
  ];

  const impacts = [
    { metric: '2–5 min', label: 'ARIA Triage Time (was 30–60 min)' },
    { metric: '$848K', label: 'Annual Cost Savings' },
    { metric: '16+ hrs', label: 'Weekly Time Saved via Automation' },
    { metric: '1,500+', label: 'Active Pipelines Managed' },
  ];

  return (
    <section id="experience" className="py-24 bg-card/50 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">Experience</h2>

          {/* Company Header */}
          <div className="glass-card p-6 mb-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-mono text-sm">CURRENT ROLE</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Data Engineer</h3>
                <p className="text-xl text-muted-foreground mb-3">Xebia IT Architects · Client: Sephora</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-mono">Dual-team: L2 Support (~20 members) + Agile Dev (~15 members)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="font-mono">~1,500 active jobs/pipelines · PB-scale lakehouse</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">Feb 2023 – Present</span>
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
                <div className="text-2xl font-bold gradient-text mb-1">{item.metric}</div>
                <div className="text-xs text-muted-foreground font-mono">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <h3 className="text-lg font-mono text-primary mb-6 flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Key Projects
          </h3>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={project.title} className="glass-card p-6 hover:border-primary/30 transition-all">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-primary font-mono text-sm">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  <span className={`px-2 py-1 text-xs font-mono rounded ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-mono mb-4 pl-8">{project.tech}</p>
                <ul className="space-y-2 pl-8">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-1.5 shrink-0">›</span>
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
