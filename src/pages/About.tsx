import { Code, Heart, Coffee, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Programming Languages", items: ["Python", "Java", "Robot Programming (KRL, VAL)", "HTML (Markup)", "CSS (Styling)"] },
    { category: "Frameworks & Libraries", items: ["Flask", "Vosk", "Yolo", "Numpy", "Pandas", "Scikit-learn"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenCV", "Natural Language Processing"] },
    { category: "Tools & Platforms", items: ["Git", "Vercel", "Google Colab","GitHub", "VS Code", "Autocad", "SolidWorks", "Tinkercad", "Postman",  "Robodk", "Canva"] },
    { category: "Core Competencies", items: ["Problem Solving", "3D Technology & Printing", "Data Structures & Algorithms (DSA)", "SQL", "DBMS", "Product Design"] }
  ];

  const interests = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable, readable code that stands the test of time" },
    { icon: Zap, title: "Performance", description: "Optimizing applications for speed and efficiency" },
    { icon: Heart, title: "User Experience", description: "Creating intuitive interfaces that users love" },
    { icon: Coffee, title: "Continuous Learning", description: "Always exploring new technologies and methodologies" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6 gradient-text">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate software developer with a love for creating innovative solutions
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="gradient-card p-8 lg:p-12">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-6">
              My Journey
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                From inquisitive clicks to meaningful code, my technological journey has been an ever-evolving ride driven by creativity, curiosity, and determination.
              </p>
              <p>
                It all began with an intense interest in how things work. I wasn't merely using software—I wanted to know the reasoning behind it. This curiosity took me through studying Computer Science with specialism in Cyber Security, where I developed a solid base in both developing and defending computer systems.
              </p>
              <p>
                My university days weren't all about theory. I applied ideas into real-world problems by working on actual projects, experimenting with AI, intelligent document processing, real-time transcription, and creating offline-first apps. With every project, I honed my skills in Python, JavaScript, Flask, React, and others.
              </p>
              <p>
                The more I programmed, the more I understood: wonderful software is not all about syntax—it's about creating solutions that make a difference. That mentality influenced my side projects such as Fluent Edge and NeuroDoc, where I combined machine learning, OCR, and NLP to develop tools that increase productivity and accessibility.
              </p>
              <p>
                In addition to technical development, I developed passion for design and user experience. My portfolio testifies to that: clean, interactive, and a reflection of myself.
              </p>
              <p>
                Now, as a developer, I keep this journey going by building influential work, discovering new tools, and teaching via code. From smarter apps, to open-source collaboration, to discovering the next tech frontier—I'm in.
              </p>
              <p>
                The journey doesn't stop—it's just beginning 🚀
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="gradient-card p-6 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-4 text-primary">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Known Section */}
        <section className="mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 text-center">
            Languages Known
          </h2>
          <div className="gradient-card p-6 hover-scale text-center">
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors">English (Bilingual)</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors">Tamil (Native)</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors">Hindi (Intermediate)</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors">Spanish (Beginner)</span>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 text-center">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.title}
                  className="gradient-card p-6 hover-scale group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{interest.title}</h3>
                      <p className="text-muted-foreground">{interest.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;