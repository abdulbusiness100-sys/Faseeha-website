import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const IMG_QURAN_HERO = "/Screenshot 2025-01-04 at 19.49.30_1764706859836.png";
const IMG_TAJWEED = "/Screenshot 2025-01-22 at 16.06.35_1764706859836.png";
const IMG_FLUENCY = "/Screenshot 2025-01-22 at 16.07.01_1764706859836.png";
const IMG_HIFDH = "/Screenshot 2025-01-04 at 19.47.14_1764706859835.png";

export default function QuranProgramme() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img src={IMG_QURAN_HERO} alt="Quran Open" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-black/30"></div>
         </div>
         
         <div className="container mx-auto px-4 relative z-10 text-center text-white">
           <p className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Women-only · Native Teachers</p>
           <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">Qur’an Programme</h1>
           <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
             Recite, memorise and understand the Qur’an with confidence through personalised 1-1 tuition.
           </p>
           <Link href="/pricing">
             <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl bg-secondary text-primary hover:bg-white hover:text-primary font-serif animate-in fade-in zoom-in duration-1000 delay-300">
               Enrol Now
             </Button>
           </Link>
         </div>
         
         {/* Scroll Indicator */}
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70 flex flex-col items-center gap-2 animate-bounce">
           <span className="text-sm font-light tracking-widest uppercase">Scroll</span>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
         </div>
      </section>

      {/* Focus Areas */}
      <div className="container mx-auto px-4 py-24 space-y-32">
        
        {/* Tajweed */}
        <section id="tajweed" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block">
               <span className="text-6xl text-secondary/20 font-serif font-bold absolute -translate-y-8 -translate-x-4 z-0">01</span>
               <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 relative z-10">Tajweed Mastery</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed font-light border-l-4 border-secondary pl-6 py-2">
              Correct your pronunciation (Makharij) and master the rules of recitation to read the Qur'an exactly as it was revealed.
            </p>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm mt-8">
              <ul className="space-y-4">
                {[
                  "Master makharij and sifaat of every letter.",
                  "Learn rules of noon saakinah, meem saakinah, madd, qalqalah.",
                  "Practise directly from the Qur’an each lesson with live correction."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
             <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
             <img src={IMG_TAJWEED} alt="Tajweed Study" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10" />
          </div>
        </section>

        {/* Fluency */}
        <section id="fluency" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-1 relative group">
             <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
             <img src={IMG_FLUENCY} alt="Reading Fluency" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10" />
          </div>
          <div className="order-2 space-y-6">
            <div className="inline-block">
               <span className="text-6xl text-primary/10 font-serif font-bold absolute -translate-y-8 -translate-x-4 z-0">02</span>
               <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 relative z-10">Reading Fluency</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed font-light border-l-4 border-primary/30 pl-6 py-2">
              For women who can already read but stumble or lack confidence. We help you build a smooth, rhythmic connection with the Mushaf.
            </p>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm mt-8">
              <ul className="space-y-4">
                {[
                  "Increase speed and accuracy without losing tajweed.",
                  "Build confidence reading longer passages.",
                  "Weekly reading targets and feedback on specific mistakes."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary/60 flex-shrink-0 mt-1" />
                    <span className="text-foreground/80 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hifdh */}
        <section id="hifdh" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block">
               <span className="text-6xl text-secondary/20 font-serif font-bold absolute -translate-y-8 -translate-x-4 z-0">03</span>
               <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 relative z-10">Hifdh & Revision</h2>
            </div>
             <p className="text-xl text-muted-foreground leading-relaxed font-light border-l-4 border-secondary pl-6 py-2">
              A structured path to memorisation with a focus on retention (Muraaja'ah). Whether starting Juz Amma or completing the Qur'an.
            </p>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm mt-8">
              <ul className="space-y-4">
                {[
                  "Personalised hifdh plan tailored to your capacity.",
                  "Structured daily revision routine and weekly tests.",
                  "Light tafseer and meaning to support recall."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
             <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
             <img src={IMG_HIFDH} alt="Hifdh Practice" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10" />
          </div>
        </section>
      </div>

      {/* Measurement & Tracking */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E0DFD9 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Structured For Success</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Assessment", desc: "Comprehensive evaluation in your first lesson." },
              { title: "Quarterly Goals", desc: "Personalised milestones set every 3 months." },
              { title: "Shared Tracker", desc: "Online progress document updated each lesson." },
              { title: "Accountability", desc: "Slack check-ins to maintain momentum." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                 <div className="h-12 w-12 rounded-full bg-secondary text-primary font-bold text-xl flex items-center justify-center mb-6 mx-auto font-serif">{i + 1}</div>
                 <h3 className="font-bold text-xl mb-3 text-secondary font-serif">{item.title}</h3>
                 <p className="text-primary-foreground/80 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          
           <div className="mt-16">
              <Link href="/pricing">
                <Button size="lg" className="rounded-full h-16 px-12 text-xl font-serif shadow-2xl bg-white text-primary hover:bg-secondary transition-all">
                  Start Your Journey
                </Button>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
