
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      duration: "2020 - 2024",
      description: "Specializing in software engineering and web development. Coursework includes Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Web Development.",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      gpa: "8.6 CGPA",
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "Escorts World School",
      duration: "2019 - 2020",
      description: "Completed senior secondary education with PCM (Physics, Chemistry, Mathematics) stream. Participated in various coding competitions and hackathons.",
      icon: <School className="h-10 w-10 text-primary" />,
      gpa: "92%",
    },
    {
      degree: "Class X (Secondary)",
      institution: "Escorts World School",
      duration: "2017 - 2018",
      description: "Completed secondary education with distinction. Developed strong foundation in mathematics and science. First introduction to programming and computer science concepts.",
      icon: <School className="h-10 w-10 text-primary" />,
      gpa: "94%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-8 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted md:left-1/2 md:-ml-0.5"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                
                <div className={`md:grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Empty column for alignment on odd items */}
                  <div className={`hidden md:block ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 !== 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <Card className="shadow-custom border-none overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="bg-primary/10 p-3 rounded-full hidden md:block">
                            {item.icon}
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold">{item.degree}</h3>
                            <div className="space-y-1">
                              <div className="text-lg font-medium">{item.institution}</div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{item.duration}</span>
                              </div>
                              <div className="font-medium text-primary">{item.gpa}</div>
                            </div>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
