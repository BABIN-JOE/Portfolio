import { Download, Eye, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Resume = () => {

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Download Resume Button */}
        <div className="flex justify-center mb-8 gap-4">
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
            <Button className="glow-button flex items-center gap-2" size="lg">
              <Download className="h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2" size="lg">
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
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <span>📧 babinjoe2945@gmail.com</span>
              <span>📱 +91 9489500524</span>
              <span>📍 Chennai, India</span>
              <span>🌐 github.com/BABIN-JOE</span>
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

          {/* Work Experience */}
          <section className="mb-12">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/20 pl-6">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">UAV Flight Navigation Engineer Intern</h4>
                    <p className="text-muted-foreground mb-1">MachCent Aerospace Pvt Ltd.</p>
                    <span className="text-xs text-muted-foreground">Mar 2025 - Jun 2025</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Developed a software application to control the flight controller and integrate RTOS.</li>
                  <li>Created a navigation control system to track UAV movement and location, and to mark waypoints.</li>
                  <li>Trained a computer vision model for real-time human movement tracking.</li>
                  <li>Engaged in integrating and connecting sensors with the flight controller.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* University Projects */}
          <section className="mb-12">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              University Projects
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-1">Fluent Edge</h4>
                <p className="text-muted-foreground mb-2">AI-powered web application using Flask and NLP tools that converts live speech to text, restores punctuation, detects grammatical errors, and analyzes accuracy percentage.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">NeuroDoc</h4>
                <p className="text-muted-foreground mb-2">Offline AI application that extracts and summarizes PDF and scanned document content using OCR, NLP, and layout analysis. Provides structured overview, document categorization, and key points without internet access.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Healynx</h4>
                <p className="text-muted-foreground mb-2">Healynx is an AI-powered clinical platform that uses a patient's medical history to create personalized recovery plans and predict health risks. It also stores the patient’s entire lifetime medical histories, for emergency uses and these histories can be accessed by Hospitals and Doctors.</p>
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
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Python</li>
                  <li>Java</li>
                  <li>Robot Programming (VAL, KRL)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Core Competencies</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Problem Solving</li>
                  <li>DSA</li>
                  <li>SQL</li>
                  <li>DBMS</li>
                  <li>3D Technology and Printing</li>
                  <li>Product Design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Artificial Intelligence</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Machine Learning</li>
                  <li>Deep Learning</li>
                  <li>NLP</li>
                  <li>CV</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Tools and Platforms</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Git, GitHub, VSCode, Eclipse, Postman</li>
                  <li>CAD, SolidWorks, Robodk, Canva</li>
                  <li>Arduino IDE, Tinkercad</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Other Skills</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Communication</li>
                  <li>Adaptability</li>
                  <li>Multi-tasking</li>
                  <li>Teamwork and Collaboration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Frameworks and Libraries</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Flask, Vosk, Yolo, TensorFlow, PyTorch, Scikit-learn, OpenCV, Numpy, Pandas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Languages</h4>
                <ul className="list-disc list-inside text-muted-foreground">
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
