import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  Coffee,
  Database,
  Eye,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Plane,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TypingText from '@/components/TypingText';
import profileImage from '@/assets/profile-babin.jpg';

const Home = () => {
  const typingTexts = [
    "Software Developer",
    "AI & ML Enthusiastic",
    "Robotics Engineer",
    "Drone Developer",
    "Application Builder"
  ];

  const technologies = [
    { name: "Python", icon: Code2 },
    { name: "Java", icon: Coffee },
    { name: "SQL", icon: Database },
    { name: "AI", icon: Brain },
    { name: "ML", icon: Bot },
    { name: "NLP", icon: MessageCircle },
    { name: "CV", icon: Eye },
    { name: "Robotics", icon: Bot },
    { name: "Drone", icon: Plane },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/BABIN-JOE",
      icon: Github,
      text: undefined
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/babin-joe",
      icon: Linkedin,
      text: undefined
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/BABIN_JOE/",
      icon: undefined,
      text: "LC"
    },
    {
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/yo_babin",
      icon: undefined,
      text: "HR"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 bg-primary/20 rounded-full animate-float animate-delay-400"></div>
          <div className="absolute top-[50%] left-[40%] w-1 h-1 bg-primary/40 rounded-full animate-float animate-delay-600"></div>
          <div className="absolute top-[70%] left-[70%] w-2 h-2 bg-primary/10 rounded-full animate-float animate-delay-800"></div>
          <div className="absolute top-[80%] left-[10%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-float animate-delay-1000"></div>
          <div className="absolute top-[20%] left-[80%] w-1 h-1 bg-primary/20 rounded-full animate-float animate-delay-1200"></div>
          <div className="absolute top-[60%] left-[50%] w-2 h-2 bg-primary/10 rounded-full animate-float animate-delay-1400"></div>
          <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-float animate-delay-1600"></div>
          <div className="absolute top-[75%] left-[55%] w-2 h-2 bg-primary/20 rounded-full animate-float animate-delay-1800"></div>
          <div className="absolute top-[15%] left-[65%] w-1 h-1 bg-primary/30 rounded-full animate-float animate-delay-2000"></div>
          <div className="absolute top-[35%] left-[85%] w-1.5 h-1.5 bg-primary/20 rounded-full animate-float animate-delay-2200"></div>
          <div className="absolute top-[55%] left-[15%] w-2 h-2 bg-primary/10 rounded-full animate-float animate-delay-2400"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <img
              src={profileImage}
              alt="Babin Joe"
              className="w-40 h-40 mx-auto object-cover profile-glow hover-scale"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl mb-6 animate-fade-in-up animate-delay-200">
            Hi, I'm{' '}
            <span className="gradient-text">Babin Joe</span>
          </h1>

          {/* Typing Animation */}
          <div className="mb-8 flex min-h-12 items-center justify-center text-xl sm:text-2xl lg:text-3xl animate-fade-in-up animate-delay-400">
            <TypingText texts={typingTexts} />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-600">
            Passionate about creating innovative solutions through code. Specializing in 
            Software Development, AI/ML applications, Full-Stack Development and building robust offline-first applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animate-delay-600">
            <Link to="/projects" className="w-full sm:w-auto">
              <Button className="glow-button w-full group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full hover-scale">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="mb-16 flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-600">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {Icon ? (
                    <Icon className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-bold tracking-wide">{social.text}</span>
                  )}
                </a>
              );
            })}
            <Link
              to="/contact"
              className="social-link"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-4 text-muted-foreground">
            Technologies I Work With
          </h2>
          
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="tech-logo flex min-h-28 flex-col items-center justify-center rounded-lg border border-border/70 bg-card/70 p-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-badge mb-3 h-11 w-11">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center gradient-card p-8 hover-scale">
              <div className="text-3xl font-bold gradient-text mb-2">Fresher</div>
              <div className="text-muted-foreground">Experience</div>
            </div>
            <div className="text-center gradient-card p-8 hover-scale">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center gradient-card p-8 hover-scale">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
