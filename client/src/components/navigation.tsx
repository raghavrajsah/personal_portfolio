import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/50 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Alex Thompson
          </button>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('education')}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Blogs
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 bg-muted hover:bg-muted/80 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
