
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PhysioPath",
      description:
        "A comprehensive physiotherapy booking website that connects patients with certified physiotherapists. Features include appointment scheduling, patient records, and treatment tracking.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Bootstrap",
        "JWT Authentication",
      ],
      github: "https://github.com/",
      live: "https://physiopath.netlify.app/",
    },
    {
      title: "Real-Time Stock Market Prediction",
      description:
        "A web application that uses machine learning algorithms to predict stock market trends in real-time. Visualizes data using interactive charts and provides investment recommendations.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070",
      tech: ["Python", "TensorFlow", "React.js", "Flask API", "Chart.js", "REST API"],
      github: "https://github.com/",
      live: "https://stockwayy.vercel.app",
    },
    {
      title: "Plone API Open Source Contribution",
      description:
        "Contributed to the Plone CMS API by developing new endpoints, improving documentation, and fixing bugs. Enhanced the content management system's capabilities for developers.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070",
      tech: ["Python", "RESTful API", "Documentation", "Open Source", "Git"],
      github: "https://github.com/plone/",
      live: "https://api.plone.org/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-custom card-hover h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-primary/10">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="bg-primary/5">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="gap-4">
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild className="gap-2">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
