import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Masai School",
      program: "Full Stack Web Development",
      duration: "June 2021 – Mar 2022",
      location: "Bangalore, Karnataka",
      type: "Intensive Bootcamp",
      description: "Comprehensive full-stack development program covering modern web technologies, data structures, algorithms, and real-world project development.",
      skills: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js", "HTML/CSS", "Git", "REST APIs"]
    },
    {
      institution: "N.I.E.T",
      program: "Diploma (Mining Engineering)",
      duration: "2014 – 2017",
      location: "Angul, Odisha",
      type: "Technical Diploma",
      description: "Technical education in mining engineering with focus on industrial processes, safety protocols, and engineering fundamentals.",
      skills: ["Engineering Fundamentals", "Problem Solving", "Technical Documentation", "Project Management"]
    },
    {
      institution: "Sri Chaitanya Jr. College",
      program: "Higher Secondary (Science)",
      duration: "2012 – 2014",
      location: "Visakhapatnam, Andhra Pradesh",
      type: "Higher Education",
      description: "Science stream education with focus on mathematics, physics, and chemistry, building strong analytical and logical thinking skills.",
      skills: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking"]
    }
  ];

  const languages = ["English", "Telugu", "Hindi"];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="text-accent">Languages</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey and continuous learning path in technology and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  
                  <Card className="ml-12 md:ml-20 hover:shadow-portfolio-lg transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-accent/10 rounded-lg text-accent">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-smooth">
                              {edu.institution}
                            </h3>
                          </div>
                          <h4 className="text-lg font-semibold text-accent mb-2">{edu.program}</h4>
                          <Badge variant="outline" className="border-accent text-accent mb-3">
                            {edu.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="font-semibold mb-3 text-primary">Key Skills Developed:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary"
                              className="hover:bg-accent hover:text-accent-foreground transition-smooth"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Languages</h3>
              <div className="flex justify-center gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-3 mx-auto hover:bg-accent/20 transition-smooth">
                      <span className="text-2xl font-bold text-accent">
                        {language.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-primary">{language}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;