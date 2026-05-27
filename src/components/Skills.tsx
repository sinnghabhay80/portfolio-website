const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Scala', 'SQL'],
    },
    {
      category: 'Processing & Streaming',
      skills: ['Apache Spark (Core, SQL, Streaming)', 'PySpark', 'Apache Kafka', 'Event-Driven Architecture'],
    },
    {
      category: 'Storage & Lakehouse',
      skills: ['Delta Lake', 'Medallion Architecture (Bronze/Silver/Gold)', 'ADLS Gen2', 'Azure SQL', 'MinIO'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Azure Data Factory', 'Azure Databricks', 'Databricks Notebooks', 'Azure DevOps REST API', 'Docker', 'CI/CD Pipelines'],
    },
    {
      category: 'Orchestration',
      skills: ['Apache Airflow', 'ADF Pipelines'],
    },
    {
      category: 'AI & Agents',
      skills: ['LLM Agent Design', 'OpenAI Function-Calling', 'Azure OpenAI', 'Databricks-hosted LLMs (Claude Sonnet)', 'Agentic Tool Orchestration', 'Streamlit'],
    },
    {
      category: 'Data Quality',
      skills: ['Schema Evolution', 'Data Reconciliation', 'Idempotent Pipelines'],
    },
    {
      category: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana', 'Azure Logic Apps', 'Custom Pipeline Alerting'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Skills</h2>

          <div className="terminal-window mb-8">
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-terminal-green" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">skills.sh</span>
            </div>
            <div className="terminal-body">
              <p className="text-muted-foreground mb-2">
                <span className="text-terminal-green">$</span> cat tech_stack.json | jq
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, catIndex) => (
              <div key={cat.category} className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-mono text-sm">const</span>
                  <span className="text-foreground font-mono font-medium">
                    {cat.category.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}
                  </span>
                  <span className="text-muted-foreground font-mono">=</span>
                  <span className="text-accent font-mono">[</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {cat.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ animationDelay: `${(catIndex * 4 + index) * 0.05}s` }}
                    >
                      "{skill}"
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-accent font-mono">];</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
