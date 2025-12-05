import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, BookOpen } from "lucide-react";

const IMG_ARABIC_HERO = "/Screenshot 2025-01-21 at 15.00.11_1764706859835.png";
const IMG_LEVEL_PATH = "/4_1764706859836.png";
const IMG_SPEAKING = "/2_1764706859836.png";

export default function ArabicProgramme() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img src={IMG_ARABIC_HERO} alt="Arabic Writing" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-black/20"></div>
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center text-white">
           <p className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Structured · Interactive · Comprehensive</p>
           <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 text-[#998a68]">Arabic Programme</h1>
           <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              A 4‑level course taking you from absolute foundations to reading stories of the Prophets in Arabic.
           </p>
           <Link href="/pricing">
             <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl bg-secondary text-primary hover:bg-white hover:text-primary font-serif animate-in fade-in zoom-in duration-1000 delay-300">
               Enrol Now
             </Button>
           </Link>
         </div>
      </section>
      {/* Level Roadmap */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Curriculum</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-3 text-primary">A 4‑Level Roadmap</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                level: "01",
                title: "Absolute Foundations",
                desc: "Learn the Arabic letters, reading and correct pronunciation. Build your first 100+ words and form simple sentences.",
                color: "bg-secondary/20"
              },
              {
                level: "02",
                title: "Core Arabic",
                desc: "Talk about family, daily routine, time, weather, health and worship. Read short hadiths that use your vocabulary.",
                color: "bg-primary/10"
              },
              {
                level: "03",
                title: "Stories of the Prophets",
                desc: "Study adapted stories of the Prophets in Arabic. Focus on vocabulary, comprehension and reading fluency.",
                color: "bg-secondary/30"
              },
              {
                level: "04",
                title: "Advanced & Qur'anic Texts",
                desc: "Engage with more complex grammar, deeper Qur'anic texts, and discussion-based lessons to refine expression.",
                color: "bg-primary/20"
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white border border-border p-10 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                 <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${item.color} opacity-50 transition-transform duration-500 group-hover:scale-150`}></div>
                 <span className="relative z-10 font-serif text-5xl font-bold text-primary/20 mb-6 block group-hover:text-primary transition-colors duration-300">{item.level}</span>
                 <h3 className="relative z-10 text-2xl md:text-3xl font-serif text-primary mb-4">{item.title}</h3>
                 <p className="relative z-10 text-muted-foreground leading-relaxed text-lg font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Visual Break */}
      <section className="h-[400px] bg-fixed bg-center bg-cover relative" style={{ backgroundImage: `url("${IMG_LEVEL_PATH}")` }}>
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <p className="text-white font-serif text-3xl md:text-5xl text-center px-4 leading-normal drop-shadow-lg italic max-w-3xl">
             "The Arabic language is part of the religion, and knowing it is an obligation."
           </p>
        </div>
      </section>
      {/* Speaking & Quran Connection */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">Arabic You Can Use & <br/> Connect to the Qur’an</h2>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-primary mb-2">Speaking from Day One</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">
                    We don't just teach grammar rules. You'll start speaking simple sentences from your very first lesson, building confidence immediately.
                  </p>
                </div>
              </div>
               <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-primary mb-2">Qur'anic Integration</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">
                    We draw vocabulary from both everyday life and Qur’anic texts. As you progress, we integrate short ayaat and hadith directly into your lessons.
                  </p>
                </div>
              </div>
            </div>
            
             <div className="mt-12">
              <Link href="/pricing">
                <Button size="lg" className="rounded-full h-14 px-10 text-lg font-serif shadow-lg bg-primary text-white hover:bg-primary/90">
                  Start Learning Arabic
                </Button>
              </Link>
           </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
             <img src={IMG_SPEAKING} loading="lazy" alt="Student Speaking" className="rounded-2xl shadow-2xl w-full object-cover relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </div>
  );
}
