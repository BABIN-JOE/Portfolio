import { Code, Heart, Coffee, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "Django", "PostgreSQL"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenCV", "Natural Language Processing"] },
    { category: "Tools", items: ["Docker", "AWS", "Git", "MongoDB", "Redis"] }
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
                My journey into software development began during my college years when I first 
                encountered the magic of turning ideas into working applications. What started as 
                curiosity quickly evolved into a deep passion for problem-solving through code.
              </p>
              <p>
                Over the years, I've specialized in full-stack development with a particular focus 
                on AI/ML applications and document processing systems. I believe in writing clean, 
                maintainable code and creating user experiences that are both functional and delightful.
              </p>
              <p>
                When I'm not coding, I'm usually exploring new technologies, contributing to open-source 
                projects, or learning about the latest developments in artificial intelligence and 
                machine learning. I'm particularly interested in offline-first applications and 
                edge computing solutions.
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