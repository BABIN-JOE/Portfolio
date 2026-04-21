import { Award, Briefcase, Download, Eye, FileText, Github, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Resume = () => {
  const contactItems = [
    { icon: Mail, label: "Email", value: "babinjoe2945@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9489500524" },
    { icon: MapPin, label: "Location", value: "Chennai, India" },
    { icon: Github, label: "GitHub", value: "github.com/BABIN-JOE" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Download Resume Button */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="glow-button flex w-full items-center gap-2" size="lg">
              <Download className="h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" className="flex w-full items-center gap-2" size="lg">
              <Eye className="h-5 w-5" />
              View Resume
            </Button>
          </a>
        </div>
        {/* Header */}
        <div className="gradient-card p-8 lg:p-12 mb-20">
          {/* Personal Info */}
          <div className="text-center mb-12 pb-8 border-b border-border">
            <h2 className="font-display font-bold text-3xl mb-2">Babin Joe J</h2>
            <p className="text-xl text-primary mb-4">Software Developer</p>
            <div className="flex flex-wrap justify-center gap-3 text-muted-foreground">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label} className="inline-flex items-center gap-2 rounded-md border border-border bg-muted/60 px-3 py-2 text-sm">
                    <Icon className="h-4 w-4 text-primary" />
                    {item.value}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Profile Summary */}
          <section className="mb-12">
            <h3 className="font-display font-semibold text-xl mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Profile
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Innovative professional with strong experience in AI, software development, and robotics. Experienced in machine learning, web development, hardware interfacing, and languages such as Python, Java. Familiar with flight controllers, drone operations, with proven ability to solve challenging problems and drive progress in automation, autonomy, and smart systems. Committed to delivering optimized, scalable solutions through current, high-performance technologies.
            </p>
          </section>

          {/* University Projects */}
          <section className="mb-12">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              University Projects
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-1">Healynx</h4>
                <p className="text-muted-foreground mb-2">Healynx is a privacy-first healthcare platform designed to manage electronic health records using encryption, role-based access control, and AI-driven summarization, enabling secure data sharing and efficient, informed clinical decision-making.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Fluent Edge</h4>
                <p className="text-muted-foreground mb-2">AI-powered web application using Flask and NLP tools that converts live speech to text, restores punctuation, detects grammatical errors, and analyzes accuracy percentage.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">NeuroDoc</h4>
                <p className="text-muted-foreground mb-2">Offline AI application that extracts and summarizes PDF and scanned document content using OCR, NLP, and layout analysis. Provides structured overview, document categorization, and key points without internet access.</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-1">Bachelor of Engineering</h4>
                <p className="text-muted-foreground mb-1">Sathyabama Institute of Science and Technology, Chennai, India</p>
                <span className="text-xs text-muted-foreground">Jun 2022 - Apr 2026</span>
                <p className="text-muted-foreground mb-1">Major: Computer Science and Engineering</p>
                <p className="text-muted-foreground mb-1">Minor: Artificial Intelligence and Robotics</p>
                <span className="text-xs text-muted-foreground">CGPA: 8.4</span>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Higher Secondary Education</h4>
                <p className="text-muted-foreground mb-1">Holy Spirit School, Kalayarkovil, Tamilnadu, India</p>
                <span className="text-xs text-muted-foreground">Jun 2021 - Mar 2022</span>
                <p className="text-muted-foreground mb-1">Physics, Chemistry, Mathematics, Biology</p>
                <span className="text-xs text-muted-foreground">Percentage: 88.5%</span>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-2">Programming Languages</h4>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Tools and Platforms</h4>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  <li>Git, GitHub, VSCode</li>
                  <li>CAD, SolidWorks, Robodk, Canva</li>
                  <li>Arduino IDE, Tinkercad</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Core Competencies</h4>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  <li>Problem Solving</li>
                  <li>DSA</li>
                  <li>SQL</li>
                  <li>DBMS</li>
                  <li>AI</li>
                  <li>ML</li>
                  <li>NLP</li>
                  <li>3D Technology and Printing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Other Skills</h4>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  <li>Communication</li>
                  <li>Adaptability</li>
                  <li>Multi-tasking</li>
                  <li>Teamwork and Collaboration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Languages</h4>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  <li>English (Bilingual)</li>
                  <li>Tamil (Native)</li>
                  <li>Hindi (Intermediate)</li>
                  <li>Spanish (Beginner)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Club Activities and Awards */}
        </div>

        {/* Call to Action */}
        <section className="text-center">
          <div className="gradient-card p-12">
            <h2 className="font-display font-semibold text-2xl mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and explore how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="glow-button w-full">
                  Contact Me
                </Button>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
