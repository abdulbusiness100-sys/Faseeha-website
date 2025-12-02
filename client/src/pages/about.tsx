import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">About Faseeha Institute</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            We are a women-only educational institute dedicated to reconnecting sisters with the Book of Allah through structured, compassionate, and professional teaching.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl space-y-20">
        <section>
          <h2 className="text-3xl font-serif text-primary mb-6">Our Story</h2>
          <div className="prose prose-lg text-muted-foreground">
            <p>
              Faseeha Institute was born out of a need for high-quality, accessible, and supportive Islamic education specifically tailored for women. We recognised that many sisters struggle to find female teachers who are not only qualified but also understand the unique challenges of balancing study with life, work, and family.
            </p>
            <p className="mt-4">
              Our goal was simple: to create a sanctuary of learning where sisters can pursue excellence in Qur'an and Arabic without compromising on their comfort or dignity.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-primary mb-4">Teaching Philosophy</h3>
              <p className="text-muted-foreground">
                We believe in "Ihsan" (excellence) coupled with "Rahma" (mercy). Our structured curriculum ensures steady progress, while our teachers' compassionate approach ensures no student feels left behind or overwhelmed.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-none shadow-sm">
             <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-primary mb-4">Our Teachers</h3>
              <p className="text-muted-foreground">
                Every teacher at Faseeha is a native Arabic-speaking woman, rigorously vetted for both her knowledge (Tajweed/Arabic) and her ability to teach effectively online. They are mentors, not just instructors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
