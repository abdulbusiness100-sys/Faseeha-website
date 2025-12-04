import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const IMG_ABOUT_HERO = "/5_1764706859836.png";
const IMG_FOUNDER = "/3_1764706859836.png";

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
);

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M4.585 6.836h9.88c1.405 0 2.545 1.14 2.545 2.546v5.73a2.546 2.546 0 0 1-2.546 2.545H4.585A2.545 2.545 0 0 1 2.04 15.11V9.382a2.546 2.546 0 0 1 2.545-2.546zm12.884 3.508l3.99-2.49a.424.424 0 0 1 .648.36v7.5a.424.424 0 0 1-.648.36l-3.99-2.49V10.344z"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const JOURNEY_STEPS = [
  {
    step: "01",
    emoji: "💌",
    title: "Welcome Email",
    text: "After signing up, you'll receive a warm welcome email with your login details and a form to share your goals, schedule preferences, and learning history.",
    icon: GmailIcon,
    iconColor: "text-red-500"
  },
  {
    step: "02",
    emoji: "🤝",
    title: "Teacher Matching",
    text: "We carefully match you with the perfect teacher based on your goals, time zone, and learning style. You'll be introduced via email within 48 hours.",
    icon: null,
    iconColor: ""
  },
  {
    step: "03",
    emoji: "📅",
    title: "Schedule Your First Lesson",
    text: "Your teacher reaches out to arrange your first lesson at a time that works for you. We accommodate all time zones across UK, Europe, GCC, and beyond.",
    icon: null,
    iconColor: ""
  },
  {
    step: "04",
    emoji: "🎯",
    title: "Assessment & Goal Setting",
    text: "Your first lesson is a comprehensive assessment. Your teacher evaluates your level, understands your aspirations, and creates a roadmap just for you.",
    icon: null,
    iconColor: ""
  },
  {
    step: "05",
    emoji: "🎥",
    title: "Weekly 1-1 Lessons",
    text: "Start your weekly private lessons via Zoom. Each session is tailored to your pace with live correction, practice, and homework for the week ahead.",
    icon: ZoomIcon,
    iconColor: "text-blue-500"
  },
  {
    step: "06",
    emoji: "💬",
    title: "Slack Check-ins",
    text: "Stay accountable with our Slack community. Your teacher checks in mid-week, you can ask questions, and connect with fellow sisters on the same journey.",
    icon: SlackIcon,
    iconColor: "text-purple-500"
  },
  {
    step: "07",
    emoji: "📊",
    title: "Progress Tracking",
    text: "Access your personal progress tracker updated after each lesson. See your milestones, celebrate wins, and stay motivated with clear visual progress.",
    icon: null,
    iconColor: ""
  },
  {
    step: "08",
    emoji: "🌟",
    title: "Quarterly Reviews & Community",
    text: "Every 3 months, review your progress and set new goals. Join our global sisterhood, attend exclusive events, and continue growing together.",
    icon: null,
    iconColor: ""
  }
];

function RoadmapStep({ step, index, total }: { step: typeof JOURNEY_STEPS[0]; index: number; total: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 1; // 0-indexed, so index 1, 3, 5, 7 are "even" steps (2, 4, 6, 8)
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative pb-12 last:pb-0"
    >
      <div className={`flex items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
        {/* Content card */}
        <motion.div 
          className={`w-full md:w-[calc(50%-2rem)] rounded-2xl p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl ${
            isEven 
              ? 'bg-primary text-white' 
              : 'bg-white border border-border'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{step.emoji}</span>
              <h3 className={`text-xl font-serif font-bold ${isEven ? 'text-white' : 'text-primary'}`}>{step.title}</h3>
            </div>
            {step.icon && (
              <div className={`${isEven ? 'text-secondary' : step.iconColor} opacity-80`}>
                <step.icon />
              </div>
            )}
          </div>
          <p className={`leading-relaxed ${isEven ? 'text-white/90' : 'text-muted-foreground'}`}>{step.text}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="mt-32 py-24 -mx-4 px-4 rounded-2xl relative overflow-hidden">
      {/* Calligraphy background image - tiled for sharpness */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'url(/calligraphy-bg.jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px auto'
        }}
      ></div>
      {/* Overlay to make content more visible */}
      <div className="absolute inset-0 bg-[#F5F4F0]/85"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-bold tracking-widest uppercase block mb-4 text-[#57513d] text-[15px]">🗺️ Your Journey</span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">What Happens Next?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-semibold">Scroll through your learning journey with Faseeha Institute </p>
        </div>

        {/* Timeline with centered progress bar */}
        <div className="relative">
          {/* Center progress bar - spans full height */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 z-0">
            {/* Background track */}
            <div className="absolute inset-0 bg-primary/10 rounded-full" />
            {/* Animated fill */}
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-secondary via-secondary to-primary rounded-full origin-top"
              style={{ height: progressHeight }}
            />
          </div>

          {/* Steps */}
          <div className="relative z-10">
            {JOURNEY_STEPS.map((step, index) => (
              <RoadmapStep key={step.step} step={step} index={index} total={JOURNEY_STEPS.length} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-6 font-light text-lg">Ready to begin your journey? 🚀</p>
          <Link href="/pricing">
            <Button size="lg" className="rounded-full px-12 h-14 text-lg shadow-xl bg-primary text-white hover:bg-primary/90 font-serif">
              Start Today ✨
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

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
        
        <RoadmapSection />

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
