import { Mail, Github, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'writetoabhaysingh21@gmail.com',
      href: 'mailto:writetoabhaysingh21@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9910356085',
      href: 'tel:+919910356085',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurugram, India',
      href: null,
    },
  ];

  const socials = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sinnghabhay80',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abhay-singh-bb8441202/',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card/50 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Message */}
            <div>
              <div className="terminal-window mb-6">
                <div className="terminal-header">
                  <div className="terminal-dot bg-destructive" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-terminal-green" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">contact.sh</span>
                </div>
                <div className="terminal-body">
                  <p className="text-muted-foreground mb-2">
                    <span className="text-terminal-green">$</span> echo "Let's build something great"
                  </p>
                  <p className="text-primary">Let's build something great</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, data engineering challenges, 
                or opportunities to be part of your team. Feel free to reach out!
              </p>

              <Button 
                size="lg"
                className="glow-primary font-mono w-full md:w-auto"
                asChild
              >
                <a href="mailto:writetoabhaysingh21@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </div>

            {/* Right side - Contact Info */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="glass-card p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono uppercase">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex-1 flex items-center justify-center gap-2 hover:border-primary/50 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container px-4 mt-16">
        <div className="max-w-4xl mx-auto pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-mono">
              <span className="text-primary">{'>'}</span> Built with React & Tailwind
            </p>
            <p className="font-mono">
              © {new Date().getFullYear()} Abhay Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
