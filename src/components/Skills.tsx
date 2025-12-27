const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['SQL', 'Python', 'Scala'],
    },
    {
      category: 'Big Data',
      skills: ['Apache Spark (Core, SQL, Streaming)', 'PySpark', 'Apache Kafka', 'Delta Lake'],
    },
    {
      category: 'Cloud & Tools',
      skills: ['Databricks', 'Azure SQL', 'Azure DevOps'],
    },
    {
      category: 'Orchestration',
      skills: ['Azure Data Factory', 'Apache Airflow', 'CI/CD Pipelines'],
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
                  <span className="text-foreground font-mono font-medium">{cat.category.toLowerCase().replace(' & ', '_')}</span>
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
