import { ClipboardList, ExternalLink, FileText, Github, HeartPulse, Mic2, Pill, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Healynx",
      description: "Healynx is a privacy-first healthcare platform designed to manage electronic health records using encryption, role-based access control, and AI-driven summarization, enabling secure data sharing and efficient, informed clinical decision-making.",
      icon: HeartPulse,
      technologies: ["Python (FastAPI)", "React", "PostgreSQL", "AI"],
      githubUrl: "https://github.com/BABIN-JOE/Healynx",
      liveUrl: "https://healynx-med.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Fluent Edge",
      description: "AI-powered web application using Flask and NLP tools that converts live speech to text, restores punctuation, detects grammatical errors, and analyzes accuracy percentage.",
      icon: Mic2,
      technologies: ["Flask", "NLP", "Speech Recognition", "Python", "Tailwind CSS"],
      githubUrl: "https://github.com/BABIN-JOE/FLUENT-EDGE",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "NeuroDoc",
      description: "AI application that extracts and summarizes PDF and scanned document content using OCR, NLP, and layout analysis. Provides structured overview, document categorization, and key points without internet access.",
      icon: FileText,
      technologies: ["OCR", "NLP", "Python", "Document Analysis"],
      githubUrl: "https://github.com/BABIN-JOE/NeuroDoc",
      liveUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Attendance Management System",
      description: "A comprehensive system for tracking and managing student attendance, featuring user authentication, attendance reports, and easy integration for educational institutions. Built with Java and MySQL.",
      icon: ClipboardList,
      technologies: ["HTML", "CSS", "JS"],
      githubUrl: "https://github.com/BABIN-JOE/Attendance-Management-System",
      liveUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Pharmacy Management System",
      description: "A desktop application for managing pharmacy inventory, sales, and billing. Includes modules for medicine stock, customer management, and transaction history. Developed using Java and MySQL.",
      icon: Pill,
      technologies: ["Python", "Tkinter"],
      githubUrl: "https://github.com/BABIN-JOE/Pharmacy-Management-System",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6 gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 flex items-center">
            <Star className="h-8 w-8 text-primary mr-3" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";

              return (
                <div
                  key={project.id}
                  className="gradient-card group flex h-full flex-col p-8 hover-scale"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="icon-badge mb-6 h-16 w-16 group-hover:animate-float">
                    <Icon className="h-8 w-8" />
                  </div>
                <h3 className="font-display font-semibold text-xl mb-4">
                  {project.title}
                </h3>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="sm" className="group/btn">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                      <ExternalLink className="h-3 w-3 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Button>
                  </a>
                  {hasLiveDemo ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      Demo Soon
                    </Button>
                  )}
                </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";

              return (
                <div
                  key={project.id}
                  className="gradient-card group flex h-full flex-col p-6 hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-badge mb-4 h-12 w-12 group-hover:animate-float">
                    <Icon className="h-6 w-6" />
                  </div>
                <h3 className="font-semibold text-lg mb-3">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="sm" variant="ghost" className="p-2" aria-label={`${project.title} code`}>
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  {hasLiveDemo && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button size="sm" variant="ghost" className="p-2" aria-label={`${project.title} live demo`}>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="gradient-card p-12">
            <h2 className="font-display font-semibold text-2xl mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="glow-button w-full" size="sm">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Projects;
