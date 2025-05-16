
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Code, Database, Laptop, Terminal, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      label: "Languages",
      icon: <Terminal size={18} />,
      skills: ["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
    },
    {
      id: "frameworks",
      label: "Frameworks & Tools",
      icon: <Laptop size={18} />,
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Docker",
      ],
    },
    {
      id: "concepts",
      label: "Concepts",
      icon: <Code size={18} />,
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
        "RESTful APIs",
        "Responsive Design",
        "CI/CD",
        "Testing",
        "MVC Architecture",
      ],
    },
    {
      id: "soft",
      label: "Soft Skills",
      icon: <Users size={18} />,
      skills: [
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
      ],
    },
    {
      id: "database",
      label: "Database",
      icon: <Database size={18} />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="mt-6">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="flex flex-wrap gap-2 mb-6">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span>{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <Card className="border-none shadow-custom">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="bg-muted rounded-lg p-4 text-center hover:bg-muted/80 transition-colors hover:border-primary border-2 border-transparent"
                        >
                          <span className="block font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
