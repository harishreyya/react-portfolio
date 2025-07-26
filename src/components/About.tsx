import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, Database, Globe, Settings, Users, Wrench } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      title: "Languages",
      skills: ["JavaScript", "TypeScript"],
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "Frontend",
      skills: ["Next.js", "React.js", "Tailwind CSS"],
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-500" />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "Next.js API Routes"],
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
    },
     {
      icon: <Wrench className="w-6 h-6 text-red-500" />,
      title: "Tools & APIs",
      skills: [
    "Elasticsearch", "Stripe", "SendGrid", "Mixpanel", 
    "Google Analytics", "Vercel"
  ],
    },
     {
      icon: <Users className="w-6 h-6 text-pink-500" />,
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Adaptability"],
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a <span className="text-accent font-semibold">Full Stack Developer</span> with 
                <span className="text-accent font-semibold"> around 2 years of experience</span>, I specialize in 
                building scalable and high-performance web applications that deliver exceptional user experiences.
              </p>
              <p>
                My journey in technology has been driven by a passion for clean code and innovative solutions. 
                I have hands-on experience with modern frameworks like <span className="text-accent font-semibold">Next.js</span>, 
                <span className="text-accent font-semibold"> React.js</span>, and <span className="text-accent font-semibold">TypeScript</span>, 
                combined with expertise in backend development and database management.
              </p>
              <p>
                I've successfully integrated complex tools and services including 
                <span className="text-accent font-semibold"> Elasticsearch</span>, 
                <span className="text-accent font-semibold"> Stripe</span>, 
                <span className="text-accent font-semibold"> SendGrid</span>, and 
                <span className="text-accent font-semibold"> Mixpanel</span>, 
                enabling businesses to achieve their technical goals while maintaining code quality and performance.
              </p>
            </div>
          </div>

          <div className="animate-fade-up delay-300">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {skillCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-portfolio transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {category.icon}
                      </div>
                      <h4 className="font-semibold">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;