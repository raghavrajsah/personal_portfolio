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
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-muted rounded-md scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative z-10">Skills</span>
              <span className="absolute inset-0 bg-muted rounded-md scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative z-10">Experience</span>
              <span className="absolute inset-0 bg-muted rounded-md scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute inset-0 bg-muted rounded-md scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-muted rounded-md scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
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
