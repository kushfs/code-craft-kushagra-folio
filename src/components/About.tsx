
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg">
              I'm an aspiring software engineer and full-stack developer currently pursuing my B.Tech in Computer Science from KIIT, Bhubaneswar. With a passion for coding and problem-solving, I enjoy tackling complex challenges and turning ideas into functional, user-friendly applications.
            </p>
            
            <p>
              My journey began at Escorts World School, where I developed a strong foundation in mathematics and logical thinking. This foundation has served me well in my pursuit of computer science, where I've excelled in data structures and algorithms, web development, and software engineering principles.
            </p>
            
            <p>
              I believe in continuous learning and growth, which is why I actively contribute to open-source projects and solve DSA problems on platforms like LeetCode. Beyond technical skills, I value effective communication, teamwork, and delivering solutions that make a positive impact.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">What Drives Me</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Problem Solving</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Clean Code</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Learning</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Innovation</Badge>
                <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">Open Source</Badge>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-medium min-w-28">Name:</span>
                    <span>Kushagra Sinha</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-28">Education:</span>
                    <span>B.Tech in Computer Science, KIIT</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-28">Email:</span>
                    <a href="kushagrasinha140.com" className="text-primary hover:underline">
                      kushagrasinha140@gmail
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-28">Location:</span>
                    <span>India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-28">Interests:</span>
                    <span>Coding, DSA, Open-source, Web Development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
