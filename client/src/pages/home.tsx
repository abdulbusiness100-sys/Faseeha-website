import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#57553D 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary leading-tight">
              Online Qur’an & Arabic Programmes for Women
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Faseeha Institute is a women-only online institute with native Arab female teachers,
              structured levels and personalised goals — so you can recite, memorise and
              understand the Qur’an with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quran-programme">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-12 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/10">
                  Explore Qur’an Programme
                </Button>
              </Link>
              <Link href="/arabic-programme">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-lg h-12 px-8 border-primary/20 hover:bg-primary/5 text-primary">
                  Explore Arabic Programme
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground/80 font-medium tracking-wide uppercase pt-4">
              Serving sisters worldwide · All time zones · From complete beginners to advanced
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3">Is Faseeha Right for You?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Beginners",
                description: "Start from the Arabic alphabet and basic Qur’an reading in a calm, shame‑free environment designed for adult sisters."
              },
              {
                title: "Improving Tajweed & Fluency",
                description: "Fix long‑standing mistakes, build smooth Qur’an recitation and work towards confident daily reading."
              },
              {
                title: "Learning Arabic for Qur’an",
                description: "Follow a clear 4‑level Arabic curriculum that takes you from letters to reading stories of the Prophets in Arabic."
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm bg-card hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-8 pb-8 px-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programmes */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Education</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3">Our Online Programmes</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Quran Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 lg:p-12 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              
              <h3 className="text-2xl md:text-3xl font-serif mb-4 relative z-10">Qur’an Programme</h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed relative z-10 text-lg">
                Flexible online Qur’an classes for women covering tajweed, reading fluency and hifdh.
                Choose one focus area or combine them.
              </p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                {["Tajweed – Qur’anic reading mastery", "Reading fluency from the Mushaf", "Hifdh & structured revision plans"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto relative z-10">
                 <Link href="/quran-programme">
                  <Button variant="secondary" className="w-full sm:w-auto gap-2">
                    View Qur’an Programme <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Arabic Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-border p-8 lg:p-12 flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              
              <h3 className="text-2xl md:text-3xl font-serif mb-4 relative z-10 text-primary">Arabic Programme</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed relative z-10 text-lg">
                A 4‑level Arabic course for sisters that starts from absolute foundations and builds to reading
                stories of the Prophets in Arabic.
              </p>
              
              <ul className="space-y-3 mb-8 relative z-10">
                {["Level 1 – Alphabet, reading & pronunciation", "Level 2 – Core everyday & worship language", "Level 3 – Stories of the Prophets", "Level 4 – Advanced Qur’anic Texts"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto relative z-10">
                 <Link href="/arabic-programme">
                  <Button variant="outline" className="w-full sm:w-auto gap-2 hover:bg-secondary/10 hover:text-primary border-primary/20">
                    View Arabic Programme <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif">How Learning Works</h2>
          </div>

          <div className="relative">
            {/* Line connecting steps on desktop */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-primary/10 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Enrol Online",
                  text: "Choose the Qur’an or Arabic programme and submit your details. We accommodate all time zones."
                },
                {
                  step: "02",
                  title: "Assessment",
                  text: "Your female teacher assesses your current level and clarifies your Qur’an or Arabic goals."
                },
                {
                  step: "03",
                  title: "Personalised Plan",
                  text: "We agree on a schedule, quarterly goals and whether you’ll focus on tajweed, fluency, or Arabic."
                },
                {
                  step: "04",
                  title: "Track Progress",
                  text: "Track your progress via shared tracker and regular check‑ins on Slack/WhatsApp."
                }
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 rounded-xl shadow-sm border border-border/50 relative">
                  <span className="text-5xl font-serif text-secondary/20 absolute top-4 right-4">{item.step}</span>
                  <h3 className="text-xl font-bold mb-3 pt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-serif mt-3">What Our Students Say</h2>
            </div>
            <Link href="/testimonials">
              <a className="text-primary font-medium border-b border-primary pb-1 hover:text-primary/80 hover:border-primary/50 transition-colors">Read more stories</a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-border/50 flex flex-col">
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="text-lg font-serif italic text-primary/80 mb-6 flex-grow leading-relaxed">
                  "{item.quote}"
                </blockquote>
                <cite className="not-italic text-sm font-bold text-muted-foreground tracking-wide uppercase">
                  — {item.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif">Frequently Asked Questions</h2>
          </div>
          
          <div className="bg-background rounded-2xl shadow-sm border border-border p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium font-serif">Do you offer trial lessons?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No, we don’t offer trials. Instead, your first lesson is a full assessment where your teacher evaluates your level, sets goals with you and explains how the programme will work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium font-serif">Do you accommodate all time zones?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. We have students across the UK, Europe, GCC and North America. We schedule lessons in your local time, including mornings and evenings where possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium font-serif">Are all teachers native Arabs and female?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. Every teacher is a native Arabic‑speaking woman, trained in tajweed and/or Arabic teaching.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 text-center">
              <Link href="/faq">
                <Button variant="link" className="text-primary">View all FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Ready to start your Qur’an or Arabic journey?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join women from around the world learning Qur’an and Arabic with native Arab female teachers.
          </p>
          <Link href="/pricing">
            <Button size="lg" variant="secondary" className="rounded-full h-14 px-10 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Enrol Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
