import { Award, GraduationCap, Trophy, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Databricks Certified Data Engineer Professional',
      issuer: 'Databricks',
      date: 'Jun 2026 – Jun 2028',
      badge: 'PROFESSIONAL',
      badgeColor: 'bg-accent/20 text-accent',
      href: 'https://credentials.databricks.com/6de1b80b-e707-484a-ae55-1792aabcc80c',
    },
    {
      title: 'Databricks Certified Data Engineer Associate',
      issuer: 'Databricks',
      date: 'Nov 2023 – Jan 2028',
      badge: 'ACTIVE',
      badgeColor: 'bg-terminal-green/20 text-terminal-green',
      href: 'https://credentials.databricks.com/f4c6e0d9-0b24-4640-92f6-ad1896e253f2',
    },
    {
      title: 'Databricks Lakehouse Fundamentals',
      issuer: 'Databricks',
      date: 'Jan 2025 – Jan 2026',
      badge: 'ACTIVE',
      badgeColor: 'bg-terminal-green/20 text-terminal-green',
      href: 'https://credentials.databricks.com/7cb0a9dd-b05a-4a98-9c56-2f51003409c2',
    },
  ];

  const awards = [
    {
      title: 'Galaxy Best Project Team (Taurus) Award',
      issuer: 'Xebia IT Architects',
    },
    {
      title: 'GEM Award (×4)',
      issuer: 'Xebia IT Architects',
    },
  ];

  const education = {
    degree: 'B.Tech. CSE — Specialization in AI & ML',
    institution: 'Sushant University',
    location: 'Gurgaon, India',
    period: '2019 – 2023',
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
                  <a
                    key={cert.title}
                    href={cert.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block group"
                  >
                    <div className="glass-card p-4 hover:border-primary/40 transition-all duration-200">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {cert.title}
                            </h4>
                            <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                        </div>
                        <span className={`px-2 py-0.5 text-xs font-mono rounded shrink-0 ${cert.badgeColor}`}>
                          {cert.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span className="font-mono">{cert.date}</span>
                      </div>
                    </div>
                  </a>
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
                    <div
                      key={award.title}
                      className="glass-card p-4 hover:border-accent/30 transition-all"
                    >
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