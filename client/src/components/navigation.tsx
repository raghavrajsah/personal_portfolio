import { useTheme } from "./theme-provider";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMenuOpen(false); // close menu on navigation
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
            Raghav R. Sah
          </button>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('education')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('certifications')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</button>
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2 bg-muted hover:bg-muted/80 transition-colors">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
          {/* Mobile nav */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-background rounded-lg shadow-lg border border-border py-4 px-6 flex flex-col space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('education')} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors text-left">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors text-left">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors text-left">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors text-left">Projects</button>
            <button onClick={() => scrollToSection('certifications')} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors text-left">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors text-left">Contact</button>
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2 bg-muted hover:bg-muted/80 transition-colors w-fit mx-auto">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
