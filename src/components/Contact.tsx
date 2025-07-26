import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "harishrebel0@gmail.com",
      href: "mailto:harishrebel0@gmail.com",
      description: "Drop me an email for any inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-70020 92915",
      href: "tel:+917002092915",
      description: "Call me for direct communication"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Palasa, Andhra Pradesh",
      href: "https://www.google.com/maps/search/?api=1&query=Palasa,+Andhra+Pradesh",
      description: "Currently based in India"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/harishreyya",
      description: "Check out my repositories"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/r-harish-832793218/",
      description: "Connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm always open to discussing new opportunities and interesting challenges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-up">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover:shadow-portfolio transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{contact.label}</h4>
                        <a
                          href={contact.href}
                          className="text-accent hover:text-accent/80 transition-smooth block mb-2"
                          {...(contact.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {contact.value}
                        </a>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="animate-fade-up delay-300">
              <Card className="h-full bg-portfolio-gradient-subtle border-accent/20">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Ready to Work Together?</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I'm currently available for full-time opportunities and freelance projects. 
                      Let's discuss how we can bring your ideas to life with clean, scalable code.
                    </p>
                    <div className="space-y-4">
                      <Button 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-portfolio hover:shadow-portfolio-lg transition-smooth"
                        onClick={() => window.open('mailto:harishrebel0@gmail.com?subject=Let\'s Work Together&body=Hi Reyya, I would like to discuss a project opportunity with you.', '_blank')}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open('tel:+917002092915', '_blank')}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center animate-fade-up">
            <h3 className="text-xl font-semibold text-primary mb-6">Follow Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="hover:shadow-portfolio-lg transition-smooth">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="p-4 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth mx-auto w-fit mb-3">
                          {social.icon}
                        </div>
                        <h4 className="font-semibold text-primary mb-1">{social.label}</h4>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;