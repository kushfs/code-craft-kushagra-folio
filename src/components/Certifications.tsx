
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Award, Code, Database, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      name: "LeetCode Problem Solving",
      issuer: "LeetCode",
      date: "2023",
      icon: <Code className="w-10 h-10 text-primary" />,
      description: "Solved over 200+ DSA problems on LeetCode, covering arrays, linked lists, trees, graphs, dynamic programming, and more.",
      link: "https://leetcode.com/",
    },
    {
      name: "SQL Certification",
      issuer: "HackerRank",
      date: "2022",
      icon: <Database className="w-10 h-10 text-primary" />,
      description: "Advanced SQL certification covering complex queries, joins, subqueries, window functions, and database optimization techniques.",
      
    },
    {
      name: "Web Development",
      issuer: "freecodecamp",
      date: "2022",
      icon: <FileCheck className="w-10 h-10 text-primary" />,
      description: "Comprehensive certification covering HTML5, CSS3, JavaScript, React.js, and responsive web design principles.",
      // link: "https://www.freecodecamp.org/certification/",
    },
    {
      name: "AWS Cloud Computing",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: <Award className="w-10 h-10 text-primary" />,
      description: "Cloud computing fundamentals including EC2, S3, Lambda, CloudFront, and best practices for cloud architecture.",
      // link: "https://aws.amazon.com/certification/",
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="overflow-hidden border shadow-custom card-hover h-full flex flex-col"
            >
              <CardContent className="pt-6 flex-grow">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span className="text-xs">•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild size="sm">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Certification
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

export default Certifications;
