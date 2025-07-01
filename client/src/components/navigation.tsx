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
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Alex Thompson
          </button>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('education')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Blogs
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg rounded-full"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
