import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aysha P.",
    comment: "Alhamdulillah it was good, she is so kind & such a good teacher MashAllah. She stayed on an extra hour in the first lesson to explain everything in detail and continues to go over and beyond in each lesson. I really appreciate her dedication and commitment to helping me succeed 🤍"
  },
  {
    name: "Azmitha C.",
    comment: "Assalamualykum! I just wanted to provide feedback on the course. الحمدلله it's been an amazing journey so far. My ustada Fatma is such an amazing teacher!! I look forward to our classes and really enjoy how interactive it is. My ustada is also very patient with me and so good at teaching rules etc. I've been trying to find a good institute/teacher to study Arabic over the last few years but الحمدلله now I've found Faseeha."
  },
  {
    name: "Nimrah K.",
    comment: "Wsalaam. Jazkallah Khair for allowing this institute to be a means of guidance and learning! I am loving my lessons so far. Alhamdulillah my teacher is very welcoming and supportive and always boosts my confidence when she knows I need it."
  },
  {
    name: "Matab Y.",
    comment: "Salaam Alaykum! Alhamdulilah I had my first lesson on Sunday and it was great! It was challenging in a good way and I really enjoyed it. My instructor is very knowledgeable and knows how to reel me back in if I'm getting frustrated with myself. I really appreciate her style so far."
  },
  {
    name: "Zia H.",
    comment: "First of all I wanted to say thank you so much for creating Faseeha, it has truly changed my life in such a significant way. May الله bless all those involved and grant them with goodness."
  },
  {
    name: "Aliyah K.",
    comment: "The Arabic course is amazing it's not just learning Arabic but it's also stories and all. May Allah always grant u success in this business. It's really helping a lot of women out there ❤️"
  },
  {
    name: "Hiba S.",
    comment: "Alhamdulillah I am well, I have had 3 lessons so far with Ustadha Amira. I have had a lovely experience with the lessons being well organised and the teaching is fantastic Allahumma baarik. InShaaAllah I look forward to continuing my Arabic education with Faseeha Institute"
  },
  {
    name: "Kaleh A.",
    comment: "Shaimaa has been an excellent teacher. She explains concepts clearly, makes lessons engaging, and has really helped me build confidence and make progress in Arabic in the short time that I have started the lessons."
  },
  {
    name: "Tanwira A.",
    comment: "I've really enjoyed the way Amira explains the hadiths we learn each lesson and the way to reiterates all of the important rules recapping previous ones when relevant. I genuinely can't think of any improvement points for Amira, she's so lovely, has lots of energy, really patient and a great teacher!"
  },
  {
    name: "Hamda O.",
    comment: "One thing I enjoyed about this program is the Clear explanations and structured progression. I've learned a lot from ustadah Shayma. She makes the class engaging, and I really appreciate her patience and constructive feedback. Concepts are explained step-by-step with a logical progression."
  },
  {
    name: "Ruqayyah A.",
    comment: "Salaam, I've really enjoyed this program — it's honestly been the best Arabic course and teacher I've had so far. I feel like I've been able to gain a much deeper understanding of the Arabic language, and I truly appreciate how patient my teacher is with me, especially since I have ADHD and my mind can wander at times. The pace of the lessons has also been great — steady and supportive without feeling rushed."
  }
];

export default function Testimonials() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Student Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from sisters who have transformed their relationship with the Qur'an and Arabic language through Faseeha Institute.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS.map((item, i) => (
            <Card key={i} className="bg-white border border-[#57553D]/20 shadow-sm break-inside-avoid hover:border-[#57553D]/40 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex text-secondary mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-primary/80 italic mb-4 leading-relaxed text-sm md:text-base">
                  "{item.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <span className="font-bold text-sm text-primary uppercase tracking-wide">{item.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
