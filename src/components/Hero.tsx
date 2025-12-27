import { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Data Engineer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden data-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full animate-glow-pulse" style={{ animationDelay: '-1s' }} />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="terminal-window mb-8 max-w-md mx-auto animate-slide-up">
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-terminal-green" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">~/portfolio</span>
            </div>
            <div className="terminal-body">
              <p className="text-muted-foreground">
                <span className="text-terminal-green">$</span> whoami
              </p>
              <p className="text-primary mt-1">abhay.singh</p>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Abhay</span>{' '}
            <span className="gradient-text">Singh</span>
          </h1>

          {/* Typing effect title */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-2xl md:text-3xl font-mono text-muted-foreground">{'>'}</span>
            <span className="text-2xl md:text-3xl font-mono text-primary">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <MapPin className="w-4 h-4" />
            <span className="font-mono text-sm">Gurugram, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="glow-primary font-mono"
              asChild
            >
              <a href="mailto:writetoabhaysingh21@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-mono border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="/Abhay-Singh-Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-mono border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="https://github.com/sinnghabhay80" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-mono border-border hover:border-accent hover:text-accent"
              asChild
            >
              <a href="https://www.linkedin.com/in/abhay-singh-bb8441202/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-float cursor-pointer animate-slide-up"
            style={{ animationDelay: '0.8s' }}
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
