import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function ArabicProgramme() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Structured · Interactive · Comprehensive</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6">Online Arabic Programme for Women</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
             A 4‑level Arabic course for sisters that starts from absolute foundations and builds to reading stories of the Prophets in Arabic.
          </p>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Enrol in Arabic Programme
            </Button>
          </Link>
        </div>
      </section>

      {/* Level Roadmap */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-primary">A 4‑Level Arabic Course Built for Sisters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                level: "Level 1",
                title: "Absolute Foundations",
                desc: "Learn the Arabic letters, reading and correct pronunciation. Build your first 100+ words and form simple sentences."
              },
              {
                level: "Level 2",
                title: "Core Arabic",
                desc: "Talk about family, daily routine, time, weather, health and worship. Read short ayaat and hadith that use your vocabulary."
              },
              {
                level: "Level 3",
                title: "Stories of the Prophets",
                desc: "Study adapted stories of the Prophets in Arabic. Focus on vocabulary, comprehension and reading fluency."
              },
              {
                level: "Level 4",
                title: "Advanced & Qur'anic Texts",
                desc: "Engage with more complex grammar, deeper Qur'anic texts, and discussion-based lessons to refine expression."
              }
            ].map((item, i) => (
              <Card key={i} className="border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md bg-white">
                <CardContent className="p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wide uppercase mb-4">
                    {item.level}
                  </span>
                  <h3 className="text-2xl font-serif text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Quran Connection */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Arabic You Can Use and Connect to the Qur’an</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Speaking from Day One</h3>
                  <p className="text-muted-foreground">Speaking practice starts from your first lesson, even in Level 1, building confidence immediately.</p>
                </div>
              </li>
               <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary shrink-0">
                  <span className="font-serif text-xl font-bold">Q</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">Qur'anic Integration</h3>
                  <p className="text-muted-foreground">We draw vocabulary from both everyday life and Qur’anic texts, integrating short ayaat and hadith.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-border shadow-lg rotate-3 transform hover:rotate-0 transition-transform duration-500">
             <div className="aspect-[4/3] bg-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
                 {/* Placeholder Image */}
                 <p className="text-primary/40 font-serif text-2xl p-8 text-center">"To learn a language is to have one more window from which to look at the world."</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
