import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";

const LOGO_PATH = "/Logo  (1)_1764706801942.jpeg";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Qur'an Programme", href: "/quran-programme" },
  { label: "Arabic Programme", href: "/arabic-programme" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

const SOCIALS = {
  tiktok: "https://www.tiktok.com/@faseehainstitute",
  instagram: "https://www.instagram.com/faseehainstitute?igsh=dmpzbDRxM3Vlamp2&utm_source=qr"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-secondary selection:text-primary-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <img 
                src={LOGO_PATH} 
                alt="Faseeha Institute Logo" 
                className="h-12 w-auto object-contain mix-blend-multiply" 
              />
              <div className="flex flex-col">
                <span className="font-arabic text-2xl leading-none text-primary group-hover:text-primary/80 transition-colors mt-1">فصيحة</span>
                <span className="font-serif text-[10px] tracking-[0.2em] text-primary/80 uppercase group-hover:text-primary transition-colors">Faseeha Institute</span>
              </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium tracking-wide hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full cursor-pointer ${
                  location === item.href ? "text-primary after:w-full" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
               <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              {/* TikTok Icon */}
              <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
            </div>
            
            <Link href="/pricing">
              <Button size="sm" className="hidden sm:inline-flex rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-lg cursor-pointer font-serif tracking-wide">
                Enrol Now
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-border w-[300px]">
                <SheetTrigger asChild>
                  <div className="flex flex-col gap-8 mt-6">
                    <div className="flex justify-center">
                      <img 
                        src={LOGO_PATH} 
                        alt="Faseeha Institute Logo" 
                        className="h-24 w-auto object-contain mix-blend-multiply" 
                      />
                    </div>
                    <nav className="flex flex-col gap-4 text-center">
                      {NAV_ITEMS.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className={`text-lg font-medium font-serif ${location === item.href ? "text-primary" : "text-muted-foreground"} hover:text-primary transition-colors block`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="flex flex-col gap-4 mt-4">
                      <Link href="/pricing">
                        <Button className="w-full rounded-full font-serif text-lg py-6">Enrol Now</Button>
                      </Link>
                      <div className="flex items-center justify-center gap-6 mt-4">
                        <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Instagram className="w-6 h-6" />
                        </a>
                        <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SheetTrigger>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-20 pb-10 relative overflow-hidden">
         {/* Background Pattern for Footer */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E0DFD9 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 pr-8">
              <div className="flex items-center gap-3 mb-6">
                 <img 
                    src={LOGO_PATH} 
                    alt="Faseeha Institute Logo" 
                    className="h-12 w-auto object-contain brightness-0 invert opacity-90" 
                  />
                  <h3 className="font-arabic text-3xl text-primary-foreground">فصيحة</h3>
              </div>
              
              <p className="text-primary-foreground/80 max-w-md leading-relaxed mb-8 font-light">
                Faseeha Institute is a women-only online institute with native Arab female teachers, structured levels and personalised goals — so you can recite, memorise and understand the Qur’an with confidence.
              </p>
              <div className="flex gap-4">
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-secondary">Programmes</h4>
              <ul className="space-y-4">
                <li><Link href="/quran-programme" className="text-primary-foreground/70 hover:text-secondary transition-colors block text-sm tracking-wide uppercase">Qur'an Programme</Link></li>
                <li><Link href="/arabic-programme" className="text-primary-foreground/70 hover:text-secondary transition-colors block text-sm tracking-wide uppercase">Arabic Programme</Link></li>
                <li><Link href="/pricing" className="text-primary-foreground/70 hover:text-secondary transition-colors block text-sm tracking-wide uppercase">Pricing & Enrolment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6 text-secondary">Institute</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-primary-foreground/70 hover:text-secondary transition-colors block text-sm tracking-wide uppercase">About Us</Link></li>
                <li><Link href="/testimonials" className="text-primary-foreground/70 hover:text-secondary transition-colors block text-sm tracking-wide uppercase">Student Success</Link></li>
                <li><Link href="/faq" className="text-primary-foreground/70 hover:text-secondary transition-colors block text-sm tracking-wide uppercase">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Faseeha Institute. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
