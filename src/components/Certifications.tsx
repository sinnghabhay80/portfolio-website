import { Award, GraduationCap, Trophy, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Databricks Certified Data Engineer Associate',
      issuer: 'Databricks',
      date: 'Nov 2023 - Nov 2025',
      active: false,
    },
    {
      title: 'Databricks Lakehouse Fundamentals',
      issuer: 'Databricks',
      date: 'Jan 2025 - Jan 2026',
      active: true,
    },
  ];

  const awards = [
    {
      title: 'Galaxy Best Project Team (Tauras) Award',
      issuer: 'Xebia IT Architects',
    },
    {
      title: 'GEM Award (3x)',
      issuer: 'Xebia IT Architects',
    },
  ];

  const education = {
    degree: 'B.Tech. CSE specialization in AIML',
    institution: 'Sushant University',
    location: 'Gurgaon, India',
    period: '2019 - 2023',
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Credentials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-mono text-primary mb-4">
                <Award className="w-5 h-5" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.title} className="glass-card p-4 hover:border-primary/30 transition-all">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      {cert.active && (
                        <span className="px-2 py-0.5 bg-terminal-green/20 text-terminal-green text-xs font-mono rounded">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span className="font-mono">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Education */}
            <div className="space-y-8">
              {/* Awards */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-mono text-accent mb-4">
                  <Trophy className="w-5 h-5" />
                  Awards
                </h3>
                <div className="space-y-3">
                  {awards.map((award) => (
                    <div key={award.title} className="glass-card p-4 hover:border-accent/30 transition-all">
                      <h4 className="font-medium text-foreground mb-1">{award.title}</h4>
                      <p className="text-sm text-muted-foreground">{award.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-mono text-terminal-cyan mb-4">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h3>
                <div className="glass-card p-4">
                  <h4 className="font-medium text-foreground mb-1">{education.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{education.institution}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                    <span>{education.location}</span>
                    <span>|</span>
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
