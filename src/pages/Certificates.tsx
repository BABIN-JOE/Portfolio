import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Certificates = () => {
  const certificates = [
    // 1. Entrepreneurship IGNITE 3.4
    {
      id: 106,
      title: "Entrepreneurship IGNITE 3.4",
      issuer: "Wadhwani Foundation Global (WFG)",
      date: "2025",
      description: "Entrepreneurship IGNITE 3.4 certificate from WFG.",
      logo: "�",
      credentialUrl: "https://web.certificate.wfglobal.org/en/certificate?certificateId=67fdf5ebeeacc2785e22e106",
      skills: ["Entrepreneurship", "IGNITE", "WFG"]
    },
    {
      id: 101,
      title: "AI in Product Management",
      issuer: "NPTEL",
      date: "2025",
      description: "Certificate for successful completion of NPTEL Management course.",
      logo: "📚",
      credentialUrl: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/110/noc25-mg07/Course/NPTEL25MG07S114320545904675933.pdf",
      skills: ["Management", "AI", "Product Management"]
    },
    // 2. Udemy
    {
      id: 102,
      title: "Python Programming",
      issuer: "Udemy",
      date: "2025",
      description: "Certificate for completing a Udemy course in Python Programming.",
      logo: "💻",
      credentialUrl: "http://ude.my/UC-3f9ebf2f-816d-40b1-9f16-363c179adefa",
      skills: ["Python Programming", "Problem Solving", "Programming"]
    },
    
    // 4. All HackerRank
    {
      id: 201,
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      date: "2025",
      description: "Advanced SQL skills certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/4092c3db66dc",
      skills: ["SQL", "DBMS", "Database"]
    },
    {
      id: 202,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2025",
      description: "Basic SQL skills certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/a0946ea5df64",
      skills: ["SQL", "DBMS", "Database"]
    },
    {
      id: 203,
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      date: "2025",
      description: "Intermediate SQL skills certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/63cff512af72",
      skills: ["SQL", "DBMS", "Database"]
    },
    {
      id: 204,
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "2025",
      description: "Basic problem solving skills certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/72d2273818da",
      skills: ["Problem Solving", "Programming", "Algorithms"]
    },
    {
      id: 205,
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2025",
      description: "Intermediate problem solving skills certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/96999b96e435",
      skills: ["Problem Solving", "Programming", "Algorithms"]
    },
    {
      id: 206,
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "2025",
      description: "Basic Python skills certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/99f826182bb5",
      skills: ["Python", "Problem Solving", "Programming"]
    },
    {
      id: 207,
      title: "Software Engineer",
      issuer: "HackerRank",
      date: "2025",
      description: "Software Engineer certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/f3f29f6c12cd",
      skills: ["Software Engineering", "Programming", "Problem Solving"]
    },
    {
      id: 208,
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      date: "2025",
      description: "Software Engineer Intern certification from HackerRank.",
      logo: "�",
      credentialUrl: "https://www.hackerrank.com/certificates/a729bf6d923b",
      skills: ["Software Engineering", "Problem Solving", "Programming"]
    },
    {
      id: 103,
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "2025",
      description: "Basic Java skills certification from HackerRank.",
      logo: "🐞",
      credentialUrl: "https://www.hackerrank.com/certificates/259ef1278df7",
      skills: ["Java", "Problem Solving", "Programming"]
    },
    // 5. All MathWorks (MATLAB)
    {
      id: 301,
      title: "Computer Vision Onramp",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for completing Computer Vision Onramp course.",
      logo: "👁️",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=413452cf-3d62-4917-88d6-a858cb44fd1c&",
      skills: ["Computer Vision", "MATLAB", "Onramp"]
    },
    {
      id: 302,
      title: "Deep Learning Onramp",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for completing Deep Learning Onramp course.",
      logo: "🧠",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=84c54e50-c383-49f2-a138-4d9e3387b1cb&",
      skills: ["Deep Learning", "MATLAB", "Onramp"]
    },
    {
      id: 303,
      title: "Deep Learning with MATLAB",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for Deep Learning with MATLAB.",
      logo: "🧠",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=9062d202-64fe-43d5-b7a8-e52e3f3c0d94&",
      skills: ["Deep Learning", "MATLAB", "Python"]
    },
    {
      id: 304,
      title: "Machine Learning with MATLAB",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for Machine Learning with MATLAB.",
      logo: "🤖",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=99e0b4ce-02ee-40e0-ae1c-b58e589007ab&",
      skills: ["Machine Learning", "MATLAB", "Python"]
    },
    {
      id: 309,
      title: "MATLAB for Data Processing and Visualization",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for MATLAB for Data Processing and Visualization.",
      logo: "📊",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=dad57220-cbae-4a40-bed4-f1c2db7c002f&",
      skills: ["MATLAB", "Data Processing", "Visualization"]
    },
    {
      id: 310,
      title: "Machine Learning Onramp",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for completing Machine Learning Onramp course.",
      logo: "🤖",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=0744208e-e69e-45d5-beb3-0d9b0a81d7cf&",
      skills: ["Machine Learning", "MATLAB", "Onramp"]
    },
    {
      id: 311,
      title: "Object-Oriented Programming Onramp",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for completing Object-Oriented Programming Onramp course.",
      logo: "🧩",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a2a773d2-ae78-4974-9824-b006eb7ef567&",
      skills: ["Object-Oriented Programming", "MATLAB", "Onramp"]
    },
    {
      id: 312,
      title: "Statistics Onramp",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for completing Statistics Onramp course.",
      logo: "📈",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=8ccf068f-8144-4e28-a6e4-6b8e5586bdb6&",
      skills: ["Statistics", "MATLAB", "Onramp"]
    },
    {
      id: 313,
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for completing MATLAB Onramp course.",
      logo: "🚦",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=59fa30d6-d214-4713-a453-055c3137999f&",
      skills: ["MATLAB", "Onramp", "Programming"]
    },
    {
      id: 308,
      title: "MATLAB Programming Techniques",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for MATLAB Programming Techniques.",
      logo: "💡",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=49141e0f-a2d4-42fb-ab05-0a6d030b1a9f&",
      skills: ["MATLAB", "Programming Techniques", "Programming"]
    },
    {
      id: 301,
      title: "Computer Vision Onramp",
      issuer: "MathWorks",
      date: "2025",
      description: "Certificate for MATLAB Fundamentals.",
      logo: "�",
      credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=35b7488d-fe60-4d4a-ab89-5c43b030a098&",
      skills: ["MATLAB", "Fundamentals"]
    },
    // 6. All Cognitive Class (IBM)
    {
      id: 107,
      title: "Accelerating Deep Learning with GPUs",
      issuer: "Cognitive Class (IBM)",
      date: "2025",
      description: "Certificate for Accelerating Deep Learning with GPUs.",
      logo: "🖥️",
      credentialUrl: "https://courses.cognitiveclass.ai/certificates/541477afc9fa435982d1e72665b0c039",
      skills: ["Deep Learning", "GPUs", "Cognitive Class"]
    },
    {
      id: 108,
      title: "Data Analysis with Python",
      issuer: "Cognitive Class (IBM)",
      date: "2025",
      description: "Certificate for Data Analysis with Python.",
      logo: "📊",
      credentialUrl: "https://courses.cognitiveclass.ai/certificates/b253cd4b535b4122966c7b1b6a2a325b",
      skills: ["Data Analysis", "Python", "Cognitive Class"]
    },
    {
      id: 109,
      title: "Deep Learning with TensorFlow",
      issuer: "Cognitive Class (IBM)",
      date: "2025",
      description: "Certificate for Deep Learning with TensorFlow.",
      logo: "🧠",
      credentialUrl: "https://courses.cognitiveclass.ai/certificates/13218e3f6c714bfda62a15cfff968096",
      skills: ["Deep Learning", "TensorFlow", "Cognitive Class"]
    },
    {
      id: 110,
      title: "Machine Learning - Dimensionality Reduction",
      issuer: "Cognitive Class (IBM)",
      date: "2025",
      description: "Certificate for Machine Learning - Dimensionality Reduction.",
      logo: "📉",
      credentialUrl: "https://courses.cognitiveclass.ai/certificates/b8c11cb0caf14b61937631db1f63df51",
      skills: ["Machine Learning", "Dimensionality Reduction", "Cognitive Class"]
    },
    {
      id: 111,
      title: "R for Data Science",
      issuer: "Cognitive Class (IBM)",
      date: "2025",
      description: "Certificate for R for Data Science.",
      logo: "📈",
      credentialUrl: "https://courses.cognitiveclass.ai/certificates/e4070d14ef034638a54a3a6729d39b46",
      skills: ["R", "Data Science", "Cognitive Class"]
    },
    // 3. Digital 101 Journey (public/certificates/Digital 101 Journey Certificate.pdf)
    {
      id: 405,
      title: "Digital 101 Journey",
      issuer: "Nasscom (futureskills prime)",
      date: "2024",
      description: "Certificate for completing Digital 101 Journey.",
      logo: "💻",
      credentialUrl: "/certificates/Digital 101 Journey Certificate.pdf",
      skills: ["Digital Skills", "Nasscom"]
    },
    // 7. Remaining public/certificates
    {
      id: 401,
      title: "3D Printing",
      issuer: "Makerspace, SCAS",
      date: "2022",
      description: "Certificate for completing 3D Printing workshop.",
      logo: "�️",
      credentialUrl: "/certificates/Babin Joe 3D Printing Certificate.pdf",
      skills: ["3D Printing", "Workshop"]
    },
    {
      id: 403,
      title: "AI Workshop",
      issuer: "NoviTech R&D Pvt. Ltd.",
      date: "2024",
      description: "Certificate for completing 30 days AI Workshop.",
      logo: "🤖",
      credentialUrl: "/certificates/Novitech 30 days AI Workshop Certificate.pdf",
      skills: ["AI", "Workshop"]
    },
    {
      id: 404,
      title: "Drone Workshop",
      issuer: "AIROBO INFINITY",
      date: "2024",
      description: "Certificate for completing Drone Workshop.",
      logo: "�",
      credentialUrl: "/certificates/AIROBO Infinity Workshop Certificate.jpeg",
      skills: ["Drone", "Workshop"]
    },
    
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Certificates & Achievements Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6 gradient-text">
            Certificates & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that showcase my commitment to continuous learning
          </p>
        </div>
        {/* PwC Badges */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-3xl mb-8 text-center gradient-text">PwC Badges</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <a href="https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=36592" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src="/pwc badges/Salesforce.png" alt="Salesforce Badge" className="h-32 rounded shadow-lg mb-2 cursor-pointer" />
              <span className="text-sm text-muted-foreground">Salesforce</span>
            </a>
            <a href="https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=27773" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src="/pwc badges/RDBMS.png" alt="RDBMS Badge" className="h-32 rounded shadow-lg mb-2 cursor-pointer" />
              <span className="text-sm text-muted-foreground">RDBMS</span>
            </a>
            <a href="https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=32227" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src="/pwc badges/Programming Fundamentals.png" alt="Programming Fundamentals Badge" className="h-32 rounded shadow-lg mb-2 cursor-pointer" />
              <span className="text-sm text-muted-foreground">Programming Fundamentals</span>
            </a>
            <a href="https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=25914" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src="/pwc badges/IT Fundamentals.png" alt="IT Fundamentals Badge" className="h-32 rounded shadow-lg mb-2 cursor-pointer" />
              <span className="text-sm text-muted-foreground">IT Fundamentals</span>
            </a>
          </div>
        </section>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="gradient-card p-6 group hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Logo */}
              <div className="text-5xl mb-6 group-hover:animate-float">
                {cert.logo}
              </div>

              {/* Certificate Details */}
              <div className="mb-6">
                <h3 className="font-display font-semibold text-lg mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {cert.date}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Credential Button */}
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full group/btn"
                >
                  <Award className="h-4 w-4 mr-2" />
                  View Credential
                  <ExternalLink className="h-3 w-3 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <section className="mt-20">
          <div className="gradient-card p-12 text-center">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-8">
              Certification Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  {certificates.length}+
                </div>
                <div className="text-muted-foreground">Total Certifications</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  5+
                </div>
                <div className="text-muted-foreground">Technology Areas</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                  2023
                </div>
                <div className="text-muted-foreground">Latest Achievement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-semibold text-2xl mb-4">
              Want to See More?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out my complete portfolio and projects to see these skills in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button className="glow-button w-full">
                  View Projects
                </Button>
              </Link>
              <a href="/resume.pdf" download className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                    Download Resume
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificates;