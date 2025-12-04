import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  ClipboardCheck, 
  Target, 
  Calendar, 
  Video, 
  MessageCircle, 
  BarChart3, 
  Users,
  ChevronRight,
  ArrowDown
} from "lucide-react";

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
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)' }}>About Faseeha Institute</h1>
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
             <img src={IMG_FOUNDER} loading="lazy" alt="Teaching Philosophy" className="w-full rounded-tr-[80px] rounded-bl-[80px] shadow-xl relative z-10 object-cover aspect-square" />
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
        
        {/* What Happens Next - Visual Journey */}
        <section className="mt-32 py-24 bg-primary -mx-4 px-4 rounded-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#E0DFD9 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10">
            <div className="text-center mb-20">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">Your Journey</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">What Happens Next?</h2>
              <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">After you enrol, here's exactly what your learning journey looks like with Faseeha Institute</p>
            </div>

            {/* Journey Steps - Visual Pathway */}
            <div className="max-w-6xl mx-auto">
              {/* Row 1: Steps 1-4 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    step: "01",
                    icon: Mail,
                    title: "Enrolment Email",
                    text: "After signing up, you'll receive a welcome email with your login details and a form to share your goals, schedule preferences, and learning history."
                  },
                  {
                    step: "02",
                    icon: ClipboardCheck,
                    title: "Teacher Matching",
                    text: "We carefully match you with the perfect teacher based on your goals, time zone, and learning style. You'll be introduced via email within 48 hours."
                  },
                  {
                    step: "03",
                    icon: Calendar,
                    title: "Schedule Your First Lesson",
                    text: "Your teacher reaches out to arrange your first lesson at a time that works for you. We accommodate all time zones across UK, Europe, GCC, and beyond."
                  },
                  {
                    step: "04",
                    icon: Target,
                    title: "Assessment & Goal Setting",
                    text: "Your first lesson is a comprehensive assessment. Your teacher evaluates your level, understands your aspirations, and creates a roadmap just for you."
                  }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-secondary font-bold text-sm">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                    </div>
                    {/* Arrow to next step (hidden on last item and mobile) */}
                    {i < 3 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-secondary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Connecting Arrow Down */}
              <div className="flex justify-center my-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-8 bg-secondary/50"></div>
                  <ArrowDown className="w-6 h-6 text-secondary animate-bounce" />
                  <div className="w-px h-8 bg-secondary/50"></div>
                </div>
              </div>

              {/* Row 2: Steps 5-8 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: "05",
                    icon: Video,
                    title: "Weekly 1-1 Lessons",
                    text: "Start your weekly private lessons via Zoom. Each session is tailored to your pace with live correction, practice, and homework for the week ahead."
                  },
                  {
                    step: "06",
                    icon: MessageCircle,
                    title: "Slack Check-ins",
                    text: "Stay accountable with our Slack community. Your teacher checks in mid-week, you can ask questions, and connect with fellow sisters on the same journey."
                  },
                  {
                    step: "07",
                    icon: BarChart3,
                    title: "Progress Tracking",
                    text: "Access your personal progress tracker updated after each lesson. See your milestones, celebrate wins, and stay motivated with clear visual progress."
                  },
                  {
                    step: "08",
                    icon: Users,
                    title: "Quarterly Reviews & Community",
                    text: "Every 3 months, review your progress and set new goals. Join our global sisterhood, attend exclusive events, and continue growing together."
                  }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-secondary font-bold text-sm">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                    </div>
                    {/* Arrow to next step (hidden on last item and mobile) */}
                    {i < 3 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-secondary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="text-center mt-16 pt-8 border-t border-white/10">
                <p className="text-white/80 mb-6 font-light text-lg">Ready to begin your journey?</p>
                <Link href="/pricing">
                  <Button size="lg" className="rounded-full px-12 h-14 text-lg shadow-xl bg-secondary text-primary hover:bg-white font-serif">
                    Start Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
