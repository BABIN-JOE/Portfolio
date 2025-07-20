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
  { name: "AI", logo: "🧠" },
  { name: "ML", logo: "�" },
  { name: "NLP", logo: "🗣️" },
  { name: "CV", logo: "�️" },
  { name: "Robotics", logo: "🤖" },
  { name: "Drone", logo: "�" },
  { name: "HTML", logo: "🌐" },
  { name: "CSS", logo: "🎨" }
];


  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-green-500/30 rounded-full animate-float"></div>
          <div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 bg-green-500/20 rounded-full animate-float animate-delay-400"></div>
          <div className="absolute top-[50%] left-[40%] w-1 h-1 bg-green-500/40 rounded-full animate-float animate-delay-600"></div>
          <div className="absolute top-[70%] left-[70%] w-2 h-2 bg-green-500/10 rounded-full animate-float animate-delay-800"></div>
          <div className="absolute top-[80%] left-[10%] w-1.5 h-1.5 bg-green-500/30 rounded-full animate-float animate-delay-1000"></div>
          <div className="absolute top-[20%] left-[80%] w-1 h-1 bg-green-500/20 rounded-full animate-float animate-delay-1200"></div>
          <div className="absolute top-[60%] left-[50%] w-2 h-2 bg-green-500/10 rounded-full animate-float animate-delay-1400"></div>
          <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-green-500/30 rounded-full animate-float animate-delay-1600"></div>
          <div className="absolute top-[75%] left-[55%] w-2 h-2 bg-green-500/20 rounded-full animate-float animate-delay-1800"></div>
          <div className="absolute top-[15%] left-[65%] w-1 h-1 bg-green-500/30 rounded-full animate-float animate-delay-2000"></div>
          <div className="absolute top-[35%] left-[85%] w-1.5 h-1.5 bg-green-500/20 rounded-full animate-float animate-delay-2200"></div>
          <div className="absolute top-[55%] left-[15%] w-2 h-2 bg-green-500/10 rounded-full animate-float animate-delay-2400"></div>
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
              {/* Official GitHub Brand Icon - white fill for dark backgrounds */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="#fff" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/babin-joe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              {/* Official LinkedIn Brand Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.069 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.143-.925 2.069-2.069 2.069zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/BABIN_JOE/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              {/* LeetCode SVG icon */}
              {/* Official LeetCode Brand Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-6 w-6">
                <path fill="#FFA116" d="M19.5 36.5c-1.1 0-2.1-.4-2.9-1.2l-8.8-8.8c-1.6-1.6-1.6-4.2 0-5.8l8.8-8.8c1.6-1.6 4.2-1.6 5.8 0l3.2 3.2c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0l-3.2-3.2c-.4-.4-1-.4-1.4 0l-8.8 8.8c-.4.4-.4 1 0 1.4l8.8 8.8c.4.4 1 .4 1.4 0l3.2-3.2c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9l-3.2 3.2c-.8.8-1.8 1.2-2.9 1.2z"/>
                <path fill="#000" d="M30.5 36.5c-1.1 0-2.1-.4-2.9-1.2l-3.2-3.2c-.8-.8-.8-2.1 0-2.9.8-.8 2.1-.8 2.9 0l3.2 3.2c.4.4 1 .4 1.4 0l8.8-8.8c.4-.4.4-1 0-1.4l-8.8-8.8c-.4-.4-1-.4-1.4 0l-3.2 3.2c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l3.2-3.2c1.6-1.6 4.2-1.6 5.8 0l8.8 8.8c1.6 1.6 1.6 4.2 0 5.8l-8.8 8.8c-.8.8-1.8 1.2-2.9 1.2z"/>
              </svg>
            </a>
            <a
              href="https://www.hackerrank.com/profile/yo_babin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              {/* HackerRank SVG icon */}
              {/* Official HackerRank Brand Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-6 w-6">
                <circle cx="25" cy="25" r="23" fill="#2EC866" />
                <text x="25" y="32" textAnchor="middle" fontSize="24" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">H</text>
              </svg>
            </a>
            <Link
              to="/contact"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors hover-scale"
            >
              {/* Official Email Brand Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="#EA4335" d="M12 13.065L2.4 6.6A1.2 1.2 0 0 1 3.2 4.8h17.6a1.2 1.2 0 0 1 .8 1.8l-9.6 6.465z"/>
                <path fill="#34A853" d="M21.6 6.6l-9.6 6.465L2.4 6.6V19.2a1.2 1.2 0 0 0 1.2 1.2h17.6a1.2 1.2 0 0 0 1.2-1.2V6.6z"/>
              </svg>
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