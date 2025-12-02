import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function QuranProgramme() {
  return (
    <div className="bg-background min-h-screen">
      {/* Sticky Header / Intro */}
      <section className="bg-secondary/10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Women-only · Native Arab teachers · All levels</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6">Online Qur’an Programme for Women</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Choose between tajweed, reading fluency and hifdh – or combine them in a personalised online Qur’an plan.
            Designed specifically for sisters who want structured, gentle but accountable learning.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg">Enrol in Qur’an Programme</Button>
          </Link>
        </div>
      </section>

      {/* Focus Areas */}
      <div className="container mx-auto px-4 py-20 space-y-24">
        
        {/* Tajweed */}
        <section id="tajweed" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm">
            <h2 className="text-3xl font-serif text-primary mb-4">Tajweed: Qur’anic Reading Mastery</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For sisters who want to learn to read the Qur’an correctly from the Mushaf, starting from their current level.
            </p>
            <ul className="space-y-4">
              {[
                "Master makharij and sifaat of every letter.",
                "Learn rules of noon saakinah, meem saakinah, madd, qalqalah and stopping/starting.",
                "Practise directly from the Qur’an each lesson with live correction."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 bg-accent/20 rounded-2xl h-64 md:h-full min-h-[300px] relative overflow-hidden">
             {/* Placeholder for Tajweed Image */}
             <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-serif text-4xl italic">
               Tajweed Mastery
             </div>
          </div>
        </section>

        {/* Fluency */}
        <section id="fluency" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="order-1 bg-secondary/20 rounded-2xl h-64 md:h-full min-h-[300px] relative overflow-hidden">
             {/* Placeholder for Fluency Image */}
             <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-serif text-4xl italic">
               Reading Fluency
             </div>
          </div>
          <div className="order-2 bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm">
            <h2 className="text-3xl font-serif text-primary mb-4">Reading Fluency Programme</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For women who can already read but want smoother, more confident Qur’an recitation.
            </p>
            <ul className="space-y-4">
              {[
                "Increase speed and accuracy without losing tajweed.",
                "Build confidence reading longer passages.",
                "Weekly reading targets and feedback on specific mistakes."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Hifdh */}
        <section id="hifdh" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm">
            <h2 className="text-3xl font-serif text-primary mb-4">Hifdh & Revision for Sisters</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For sisters who are starting or restarting Qur’an memorisation, with realistic, sustainable goals.
            </p>
            <ul className="space-y-4">
              {[
                "Personalised hifdh plan (Juz ‘Amma, selected surahs or full Qur’an).",
                "Structured daily revision routine and weekly tests.",
                "Light tafseer and meaning to support recall."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 bg-primary/5 rounded-2xl h-64 md:h-full min-h-[300px] relative overflow-hidden">
             {/* Placeholder for Hifdh Image */}
             <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-serif text-4xl italic">
               Hifdh & Revision
             </div>
          </div>
        </section>
      </div>

      {/* Measurement & Tracking */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">How We Track Your Qur’an Progress</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="font-bold text-lg mb-2 text-secondary">Initial Assessment</h3>
              <p className="text-primary-foreground/80 text-sm">Comprehensive evaluation in your first lesson to understand your starting point.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
               <h3 className="font-bold text-lg mb-2 text-secondary">Quarterly Goals</h3>
               <p className="text-primary-foreground/80 text-sm">Personalised milestones set every 3 months to keep you motivated.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
               <h3 className="font-bold text-lg mb-2 text-secondary">Shared Tracker</h3>
               <p className="text-primary-foreground/80 text-sm">Online progress document updated each lesson by your teacher.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
               <h3 className="font-bold text-lg mb-2 text-secondary">Accountability</h3>
               <p className="text-primary-foreground/80 text-sm">Slack check-ins between classes to maintain momentum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
