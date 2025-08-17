import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      specialization: "Artificial Intelligence and Robotics.",
      institution: "Sathyabama Institute of Science and Technology",
      location: "Chennai, India",
      duration: "2022 - 2026",
      grade: "8.4 CGPA",
      description: "Focused on Artificial Intelligence and Robotics, with hands-on experience in building intelligent systems, autonomous robots, and real-world applications. Developed strong foundations in computer science, programming, and engineering principles, while leading and collaborating on innovative projects and technical events.",
      achievements: [
        "Technical Team Head @ SIST Experiment Hub",
        "Project Lead",
        "Event Coordinator and Organizer",
        "Open Source Contributor"
      ],
      courses: [
        "Data Structures and Algorithm",
        "Software Engineering",
        "Artificial Intelligence",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Database System",
        "SQL",
        "Web Development",
        "3D Technology"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      specialization: "Physics, Chemistry, Mathematics and Biology",
      institution: "Holy Spirit",
      location: "Kalayarkovil, Tamilnadu, India",
      duration: "2020 - 2022",
      grade: "88.5%",
      description: "Completed higher secondary education with focus on Physics, Chemistry, Mathematics and Biology. Developed strong analytical and problem-solving skills that form the foundation of my technical journey.",
      achievements: [
        "Academic Topper",
        "Captain of Volleyball Team",
        "Volunteer for Sports Events",
        "Karate Club"
      ],
      courses: [
        "Physics",
        "Chemistry", 
        "Mathematics",
        "Biology",
        "English"
      ]
    }
  ];

  const skills = [
    "Problem Solving",
    "Analytical Thinking",
    "Research & Development",
    "Team Leadership",
    "Communication",
    "Multi-tasking"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6 gradient-text">
            Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and the foundation of my technical expertise
          </p>
        </div>
            <section className="mb-20">
              <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="relative pl-8 md:pl-12"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 shadow-lg shadow-primary/50"></div>

                {/* Education Card */}
                <div className="gradient-card p-8 hover-scale">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-xl mb-2">
                          {edu.degree}
                        </h3>
                        {edu.specialization && (
                          <p className="text-primary font-medium mb-2">
                            Specialization: {edu.specialization}
                          </p>
                        )}
                        <p className="text-lg font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-primary font-semibold">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Courses */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
              </div>
            </section>

        {/* Skills Developed */}
        <section className="mb-20">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-12 text-center">
            Skills Developed Through Education
          </h2>
          <div className="gradient-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Philosophy */}
        <section>
          <div className="gradient-card p-12 text-center">
            <h2 className="font-display font-semibold text-2xl mb-6">
              My Learning Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Education is not just about acquiring knowledge, but about developing the ability to 
              think critically, solve complex problems, and adapt to an ever-changing technological 
              landscape. My academic journey has instilled in me a passion for continuous learning 
              and innovation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;