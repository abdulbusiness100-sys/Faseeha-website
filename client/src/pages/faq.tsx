import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about learning with Faseeha Institute.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-serif text-secondary mb-4">General & Scheduling</h2>
            <div className="bg-white rounded-2xl border border-border p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="trial">
                  <AccordionTrigger className="text-lg font-medium text-primary">Do you offer trial lessons?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, we don’t offer trials. We believe in committing to a proper assessment. Your first lesson is a comprehensive evaluation where your teacher assesses your level, understands your goals, and builds a personalised roadmap for you. This ensures your journey starts on solid ground.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="timezone">
                  <AccordionTrigger className="text-lg font-medium text-primary">Do you accommodate all time zones?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! We have a global student base. Our teachers are based in various locations and we schedule lessons according to your local time, offering slots in mornings, evenings, and weekends to fit your life.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reschedule">
                   <AccordionTrigger className="text-lg font-medium text-primary">Can I reschedule lessons?</AccordionTrigger>
                   <AccordionContent className="text-muted-foreground">
                     Yes, we understand life happens. We have a flexible rescheduling policy provided you give notice in advance, allowing you to maintain your progress without stress.
                   </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-secondary mb-4">Teachers & Learning</h2>
            <div className="bg-white rounded-2xl border border-border p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="teachers">
                  <AccordionTrigger className="text-lg font-medium text-primary">Are all teachers native Arabs?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, 100%. Every single teacher at Faseeha Institute is a native Arabic speaker. This is crucial for learning correct pronunciation (Makharij) and natural Arabic conversation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="levels">
                  <AccordionTrigger className="text-lg font-medium text-primary">We accommodate students at all levels</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Whether you don't know the alphabet or you are advanced in Hifdh, we have a place for you. Our curriculum is tiered from absolute beginner (Level 1) to advanced, and our Qur'an programme is tailored individually.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="female">
                  <AccordionTrigger className="text-lg font-medium text-primary">Are the classes women-only?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, Faseeha Institute is strictly for women, taught by women. We create a safe, comfortable environment where you can learn without hesitation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
