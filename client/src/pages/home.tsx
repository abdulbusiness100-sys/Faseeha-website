import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, Star, PlayCircle } from "lucide-react";

// Image Paths
const IMG_HERO_BG = "attached_assets/Screenshot 2025-01-04 at 19.29.25_1764706859835.png";
const IMG_QURAN_SECTION = "attached_assets/Screenshot 2025-01-22 at 16.07.01_1764706859836.png";
const IMG_ARABIC_SECTION = "attached_assets/Screenshot 2025-01-04 at 19.58.00_1764706859836.png";
const IMG_TESTIMONIAL_BG = "attached_assets/Screenshot 2025-01-04 at 19.50.36_1764706859835.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
             src={IMG_HERO_BG} 
             alt="Muslim woman studying online" 
             className="w-full h-full object-cover object-center opacity-0 animate-in fade-in duration-1000 fill-mode-forwards"
             style={{ animationDelay: '200ms' }}
           />
           <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-1000 fade-in fill-mode-forwards opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="inline-block mb-2">
              <span className="bg-secondary/90 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg backdrop-blur-sm">
                For Sisters Only
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight drop-shadow-md">
              Start your <span className="italic font-arabic px-2">Faseeha</span> <br/> Journey Today
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-sm font-light">
              Connect with the Qur’an and Arabic language through structured, women-only classes taught by native experts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-10 bg-secondary text-primary hover:bg-white hover:text-primary shadow-xl shadow-black/20 transition-all duration-300 transform hover:-translate-y-1 font-serif">
                  Enrol Now
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-lg h-14 px-10 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 font-serif">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Arabic Calligraphy Divider */}
      <div className="bg-background py-8 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <span className="font-arabic text-[200px] leading-none text-primary whitespace-nowrap">اقرأ باسم ربك الذي خلق</span>
        </div>
      </div>

      {/* Who This Is For */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Who We Serve</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-3 text-primary">Is Faseeha Right for You?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Beginners",
                description: "Start from the Arabic alphabet and basic Qur’an reading in a calm, shame‑free environment designed for adult sisters.",
                icon: "🌱"
              },
              {
                title: "Improvers & Fluency",
                description: "Fix long‑standing mistakes, build smooth Qur’an recitation and work towards confident daily reading.",
                icon: "📖"
              },
              {
                title: "Dedicated Learners",
                description: "Follow a clear 4‑level Arabic curriculum that takes you from letters to reading stories of the Prophets in Arabic.",
                icon: "🕌"
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 rounded-2xl bg-white border border-border hover:border-secondary/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-6xl grayscale">
                  {item.icon}
                </div>
                <div className="w-14 h-14 rounded-full bg-primary/5 group-hover:bg-secondary/20 flex items-center justify-center mb-6 text-2xl transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-primary group-hover:text-primary/80 transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programmes */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Education</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-3 text-primary">Our Online Programmes</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Quran Programme */}
            <div className="relative group min-h-[500px] flex flex-col justify-end p-10 lg:p-16 text-white overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src={IMG_QURAN_SECTION} alt="Quran Class" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Qur’an Programme</h3>
                <p className="text-white/90 mb-8 leading-relaxed text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                  Flexible online Qur’an classes covering tajweed, reading fluency and hifdh. Choose one focus area or combine them.
                </p>
                <Link href="/quran-programme">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8">
                    Explore Qur'an
                  </Button>
                </Link>
              </div>
            </div>

            {/* Arabic Programme */}
             <div className="relative group min-h-[500px] flex flex-col justify-end p-10 lg:p-16 text-white overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src={IMG_ARABIC_SECTION} alt="Arabic Class" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Arabic Programme</h3>
                <p className="text-white/90 mb-8 leading-relaxed text-lg font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                  A 4‑level Arabic course starting from absolute foundations to reading stories of the Prophets in Arabic.
                </p>
                <Link href="/arabic-programme">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8">
                    Explore Arabic
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-primary">How Learning Works</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Line connecting steps on desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Enrol Online",
                  text: "Choose your programme and submit details. We accommodate all time zones."
                },
                {
                  step: "02",
                  title: "Assessment",
                  text: "Your teacher assesses your current level and clarifies your unique goals."
                },
                {
                  step: "03",
                  title: "Personalised Plan",
                  text: "We agree on a schedule and milestones for tajweed, fluency, or Arabic."
                },
                {
                  step: "04",
                  title: "Start Journey",
                  text: "Begin your 1-on-1 classes, track progress, and join our sisterhood."
                }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-24 h-24 rounded-full bg-background border-4 border-secondary/20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-secondary transition-colors duration-500 relative z-10">
                    <span className="font-serif text-3xl text-primary font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img src={IMG_TESTIMONIAL_BG} alt="Background" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-serif mt-3">Student Voices</h2>
            </div>
            <Link href="/testimonials">
              <Button variant="link" className="text-white text-lg hover:text-secondary p-0 font-serif italic">Read more stories &rarr;</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I started not knowing the Arabic letters. Within months I could read the Mushaf and I’m now memorising Juz ‘Amma.",
                author: "Qur’an Foundations Student"
              },
              {
                quote: "My teacher is so patient and explains concepts clearly. The lessons are well structured and easy to follow.",
                author: "Arabic Level 1 Student"
              },
              {
                quote: "I love that there’s a focus on practising speaking very early on. It’s one of the best ways to remember new vocabulary.",
                author: "Nina Espiritu"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="flex text-secondary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="text-lg font-serif italic text-white/90 mb-6 leading-relaxed">
                  "{item.quote}"
                </blockquote>
                <cite className="not-italic text-xs font-bold text-secondary tracking-widest uppercase">
                  — {item.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-border rounded-xl px-6 mb-4 shadow-sm bg-white">
                <AccordionTrigger className="text-left text-lg font-medium font-serif py-6 text-primary hover:text-primary/80 no-underline hover:no-underline">Do you offer trial lessons?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  No, we don’t offer trials. Instead, your first lesson is a full assessment where your teacher evaluates your level, sets goals with you and explains how the programme will work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border rounded-xl px-6 mb-4 shadow-sm bg-white">
                <AccordionTrigger className="text-left text-lg font-medium font-serif py-6 text-primary hover:text-primary/80 no-underline hover:no-underline">Do you accommodate all time zones?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  Yes. We have students across the UK, Europe, GCC and North America. We schedule lessons in your local time, including mornings and evenings where possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border rounded-xl px-6 mb-4 shadow-sm bg-white">
                <AccordionTrigger className="text-left text-lg font-medium font-serif py-6 text-primary hover:text-primary/80 no-underline hover:no-underline">Are all teachers native Arabs and female?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  Yes. Every teacher is a native Arabic‑speaking woman, trained in tajweed and/or Arabic teaching.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 text-center pt-8">
              <Link href="/faq">
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">View all FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#57553D 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">Ready to start your journey?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Join a global community of women connecting with the Qur’an and Arabic language.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="rounded-full h-16 px-12 text-xl font-serif shadow-2xl bg-primary text-white hover:bg-primary/90 transform hover:-translate-y-1 transition-all">
              Enrol Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
