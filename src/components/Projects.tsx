import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ExternalLink,
  Github,
  Bot,
  Image as ImageIcon,
  Shield,
  Cloud,
} from "lucide-react";

const Projects = () => {
  const project = {
    title: "AskAny – AI Chatbot and Text-to-Image App",
    year: "2025",
    description:
      "A comprehensive AI-powered application featuring intelligent chatbot conversations with contextual memory and advanced text-to-image generation capabilities.",
    demoLink: "https://chat-bot-rho-sooty.vercel.app/",
    githubLink: "https://github.com/harishreyya/chatBot",
    features: [
      {
        icon: <Bot className="w-5 h-5" />,
        title: "AI Chatbot",
        description:
          "Real-time conversations with contextual memory for seamless user interactions",
      },
      {
        icon: <ImageIcon className="w-5 h-5" />,
        title: "Text-to-Image Generator",
        description:
          "Advanced AI-powered image generation from natural language prompts",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "OTP Authentication",
        description: "Secure OTP-based authentication system using NextAuth",
      },
      {
        icon: <Cloud className="w-5 h-5" />,
        title: "Cloud Integration",
        description:
          "Cloudinary integration for dynamic image storage and retrieval",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
      "NextAuth",
      "Cloudinary",
    ],
    type: "Personal Project",
  };

  return (
    <section id="projects" className="py-20 bg-background relative z-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/duoqzn6tv/image/upload/v1748798505/text-to-image/xyy8kd6nwxhpvf9olfnh.png"
          alt="Blurred Background"
          className="w-full h-full object-cover blur-md opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-accent">Project</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and
            best practices
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-portfolio-lg transition-smooth group animate-fade-up">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative p-8 flex items-center justify-center bg-portfolio-gradient-subtle overflow-hidden">
                <img
                  src="https://res.cloudinary.com/duoqzn6tv/image/upload/v1753552336/chatbot-dp_uqq6wl.png"
                  alt="Project Preview"
                  className="w-full max-w-md rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute bottom-6 left-6 z-10 text-left">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-accent text-accent"
                  >
                    {project.type}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/5 rounded-full blur-lg"></div>
              </div>

              <div className="p-8 bg-background/80 backdrop-blur-sm">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl text-primary">
                      {project.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 text-primary">
                      Key Features:
                    </h4>
                    <div className="grid gap-4">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="p-2 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h5 className="font-medium text-primary mb-1">
                              {feature.title}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-primary">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="hover:bg-accent hover:text-accent-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;

