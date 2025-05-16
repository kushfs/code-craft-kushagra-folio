
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Code } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 pt-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <span className="inline-block text-primary font-medium mb-2 animate-fade-in">
              Hi, I'm Kushagra Sinha
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Aspiring Software</span>
              <span className="block">Engineer & Full Stack</span>
              <span className="block">Developer</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Turning ideas into scalable code. Passionate about DSA, 
              open-source contributions, and building impactful web solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild className="gap-2">
                <a href="#contact">
                  <Mail size={18} />
                  <span>Contact Me</span>
                </a>
              </Button>
              
              <Button variant="outline" asChild className="gap-2">
                <a href="#projects">
                  <span>View Projects</span>
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="https://leetcode.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LeetCode"
              >
                <Code size={22} />
              </a>
              <a 
                href="mailto:email@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-primary/60 opacity-75 blur"></div>
              <div className="relative rounded-xl bg-background p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <code className="font-mono text-sm block text-left">
                  <span className="text-blue-600 dark:text-blue-400">class</span>{" "}
                  <span className="text-green-600 dark:text-green-400">Developer</span> {"{"}
                  <br />
                  <span className="pl-4">
                    <span className="text-purple-600 dark:text-purple-400">constructor</span>() {"{"}
                  </span>
                  <br />
                  <span className="pl-8">
                    <span className="text-muted-foreground">// Initialize properties</span>
                  </span>
                  <br />
                  <span className="pl-8">
                    this.<span className="text-red-600 dark:text-red-400">name</span> ={" "}
                    <span className="text-yellow-600 dark:text-yellow-300">'Kushagra Sinha'</span>;
                  </span>
                  <br />
                  <span className="pl-8">
                    this.<span className="text-red-600 dark:text-red-400">role</span> ={" "}
                    <span className="text-yellow-600 dark:text-yellow-300">'Full Stack Developer'</span>;
                  </span>
                  <br />
                  <span className="pl-8">
                    this.<span className="text-red-600 dark:text-red-400">skills</span> = [
                    <span className="text-yellow-600 dark:text-yellow-300">'JavaScript'</span>,{" "}
                    <span className="text-yellow-600 dark:text-yellow-300">'React'</span>,{" "}
                    <span className="text-yellow-600 dark:text-yellow-300">'Node.js'</span>,{" "}
                    <span className="text-yellow-600 dark:text-yellow-300">'Java'</span>,{" "}
                    <span className="text-yellow-600 dark:text-yellow-300">'MongoDB'</span>];
                  </span>
                  <br />
                  <span className="pl-8">
                    this.<span className="text-red-600 dark:text-red-400">passion</span> ={" "}
                    <span className="text-yellow-600 dark:text-yellow-300">'Building scalable apps'</span>;
                  </span>
                  <br />
                  <span className="pl-4">{"}"}</span>
                  <br />
                  {"}"}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
