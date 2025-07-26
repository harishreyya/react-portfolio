import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "NOVEUM (Magic API)",
      role: "Software Engineer",
      duration: "Oct 2024 – Apr 2025",
      location: "Bangalore, Karnataka",
      website: "https://api.market/",
      achievements: [
        "Migrated search from Algolia to Elasticsearch with real-time indexing",
        "Replaced MagicLink auth with OTP-based login with resend logic",
        "Enhanced billing with detailed analytics and Stripe invoice improvements",
        "Integrated AI APIs like Text-to-Image into production",
        "Automated weekly personalized API recommendation emails",
        "Built internal tools for review moderation, onboarding, and email notifications",
        "Added revenue analytics dashboards and advanced log filtering",
        "Improved error tracking and health checks (Redis, PostgreSQL, Elasticsearch)",
        "Migrated to SendGrid and blocked temp/disposable emails",
        "Integrated Mixpanel and Google Analytics for event tracking"
      ],
      technologies: ["Next.js", "TypeScript", "Elasticsearch", "Stripe", "SendGrid", "Mixpanel", "PostgreSQL", "Redis"]
    },
    {
      company: "RANGDE P2P FINANCIAL SERVICES",
      role: "Web Developer",
      duration: "June 2022 – Mar 2023",
      location: "Bangalore, Karnataka",
      website: "https://rangde.in/",
      achievements: [
        "Developed key pages like Invest, Regions, Individuals, Funds, SI Profiles",
        "Implemented features: Referrals, Dashboard, AboutUs, Login, FAQs",
        "Ensured strong SEO optimization across codebase",
        "Performed testing for performance and functionality assurance"
      ],
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "SEO Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-accent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey building scalable web applications and contributing to innovative projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  
                  <Card className="ml-12 md:ml-20 hover:shadow-portfolio-lg transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-smooth">
                              {exp.company}
                            </h3>
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80 transition-smooth"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <h4 className="text-lg font-semibold text-accent mb-2">{exp.role}</h4>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-primary">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3 text-primary">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="hover:bg-accent hover:text-accent-foreground transition-smooth"
                            >
                              {tech}
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
      </div>
    </section>
  );
};

export default Experience;