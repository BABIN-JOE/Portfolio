import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
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
    { name: "Python", logo: "🐍" },
    { name: "Java", logo: "☕" },
    { name: "SQL", logo: "�️" },
    { name: "AI", logo: "🤖" },
    { name: "ML", logo: "🧠" },
    { name: "NLP", logo: "🗣️" },
    { name: "CV", logo: "�️" },
    { name: "Robotics", logo: "🦾" },
    { name: "Drone", logo: "🛸" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/60 rounded-full animate-float animate-delay-400"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float animate-delay-600"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <img
              src={profileImage}
              alt="Babin Joe"
              className="w-40 h-40 mx-auto profile-glow hover-scale"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl mb-6 animate-fade-in-up animate-delay-200">
            Hi, I'm{' '}
            <span className="gradient-text">Babin Joe</span>
          </h1>

          {/* Typing Animation */}
          <div className="text-xl sm:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center animate-fade-in-up animate-delay-400">
            <TypingText texts={typingTexts} />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-600">
            Passionate about creating innovative solutions through code. Specializing in 
            Software Development, AI/ML applications, Full-Stack Development and building robust offline-first applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animate-delay-600">
            <Link to="/projects">
              <Button className="glow-button group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="outline" className="hover-scale">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up animate-delay-600">
            <a
              href="https://github.com/BABIN-JOE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/babin-joe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/BABIN_JOE/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              {/* LeetCode SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6">
                <path d="M23.6 17.1c-.5-.5-1.3-.5-1.8 0-.5.5-.5 1.3 0 1.8l3.2 3.2c.5.5.5 1.3 0 1.8l-6.2 6.2c-.5.5-1.3.5-1.8 0l-11-11c-.5-.5-.5-1.3 0-1.8l6.2-6.2c.5-.5 1.3-.5 1.8 0l3.2 3.2c.5.5 1.3.5 1.8 0 .5-.5.5-1.3 0-1.8l-3.2-3.2c-1.5-1.5-3.9-1.5-5.4 0l-6.2 6.2c-1.5 1.5-1.5 3.9 0 5.4l11 11c1.5 1.5 3.9 1.5 5.4 0l6.2-6.2c1.5-1.5 1.5-3.9 0-5.4l-3.2-3.2z"/>
              </svg>
            </a>
            <a
              href="https://www.hackerrank.com/profile/yo_babin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              {/* HackerRank SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6">
                <path d="M16 2l13.856 8v12L16 30 2.144 22V10z"/>
                <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff">H</text>
              </svg>
            </a>
            <Link
              to="/contact"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              <Mail className="h-6 w-6" />
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
          
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-8 mt-12">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-logo flex flex-col items-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2 transition-transform group-hover:scale-125">
                  {tech.logo}
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center gradient-card p-8 hover-scale">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center gradient-card p-8 hover-scale">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
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