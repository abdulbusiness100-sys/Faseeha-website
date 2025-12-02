import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const IMG_ABOUT_HERO = "/5_1764706859836.png";
const IMG_FOUNDER = "/3_1764706859836.png";

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMG_ABOUT_HERO} alt="Faseeha Classroom" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10 text-white animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="text-4xl md:text-6xl font-serif mb-8">About Faseeha Institute</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            A sanctuary for sisters to reconnect with the Book of Allah through structured, compassionate, and professional teaching.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        
        {/* Our Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="prose prose-lg text-muted-foreground font-light">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Why We Started</h2>
            <p className="mb-6">
              Faseeha Institute was born out of a need for high-quality, accessible, and supportive Islamic education specifically tailored for women. We recognised that many sisters struggle to find female teachers who are not only qualified but also understand the unique challenges of balancing study with life, work, and family.
            </p>
            <p>
              Our goal was simple: to create a sanctuary of learning where sisters can pursue excellence in Qur'an and Arabic without compromising on their comfort or dignity.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-secondary/20 rounded-tr-[80px] rounded-bl-[80px] transform translate-x-4 translate-y-4"></div>
             <img src={IMG_FOUNDER} alt="Teaching Philosophy" className="w-full rounded-tr-[80px] rounded-bl-[80px] shadow-xl relative z-10 object-cover aspect-square" />
          </div>
        </section>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#F9F9F8] border-none shadow-none hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-10">
              <h3 className="text-2xl font-serif text-primary mb-4">Teaching Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                We believe in "Ihsan" (excellence) coupled with "Rahma" (mercy). Our structured curriculum ensures steady progress, while our teachers' compassionate approach ensures no student feels left behind or overwhelmed.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#F9F9F8] border-none shadow-none hover:shadow-md transition-shadow duration-300">
             <CardContent className="p-10">
              <h3 className="text-2xl font-serif text-primary mb-4">Our Teachers</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Every teacher at Faseeha is a native Arabic-speaking woman, rigorously vetted for both her knowledge (Tajweed/Arabic) and her ability to teach effectively online. They are mentors, not just instructors.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-serif text-primary mb-8">Join our sisterhood of learners</h2>
          <Link href="/pricing">
             <Button size="lg" className="rounded-full px-12 h-14 text-lg shadow-lg bg-primary text-white hover:bg-primary/90 font-serif">
               Start Your Journey
             </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
