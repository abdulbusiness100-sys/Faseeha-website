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
            <div className="bg-white rounded-2xl border border-[#57553D]/20 p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="online">
                  <AccordionTrigger className="text-lg font-medium text-primary">Are the sessions online?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, all sessions are conducted online via Zoom, allowing you to learn from the comfort of your home anywhere in the world.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="timezone">
                  <AccordionTrigger className="text-lg font-medium text-primary">Do you accommodate all time zones?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! We have a global student base. Our teachers are based in various locations and we schedule lessons according to your local time, offering slots in mornings, evenings, and weekends to fit your life.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="after-payment">
                  <AccordionTrigger className="text-lg font-medium text-primary">What happens after I pay?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After payment, your enrolment will be processed within 2-3 days. You'll receive a list of available time slots and choose a fixed day and time that works for you. Your sessions will be held at the same time each week. You'll then be invited to Slack to communicate with your teacher, ask questions, and track your progress. You'll also receive a personal progress tracker to help you and your teacher monitor your learning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reschedule">
                   <AccordionTrigger className="text-lg font-medium text-primary">Can I reschedule lessons?</AccordionTrigger>
                   <AccordionContent className="text-muted-foreground">
                     Yes, we understand life happens. We have a flexible rescheduling policy provided you give notice in advance, allowing you to maintain your progress without stress.
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

          <section>
            <h2 className="text-2xl font-serif text-secondary mb-4">Teachers & Learning</h2>
            <div className="bg-white rounded-2xl border border-[#57553D]/20 p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="teachers">
                  <AccordionTrigger className="text-lg font-medium text-primary">Who are the teachers?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    All of our instructors are highly qualified, English-speaking, female educators from Egypt, with a deep understanding of Arabic and Islamic teachings. Every single teacher at Faseeha Institute is a native Arabic speaker, which is crucial for learning correct pronunciation (Makharij) and natural Arabic conversation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="structure">
                  <AccordionTrigger className="text-lg font-medium text-primary">How is the Arabic course structured?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our 1-1 Arabic class offers four one-hour sessions per month (1 lesson a week), focused on learning Arabic through the stories of the Prophets. We focus on Fusha (Classical Arabic).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="beginners">
                  <AccordionTrigger className="text-lg font-medium text-primary">Is this course suitable for beginners?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Our course is designed to accommodate students at beginner, intermediate, and advanced levels. Whether you don't know the alphabet or you are advanced in Hifdh, we have a place for you. Our teachers assess your proficiency and tailor the lessons to meet your individual needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="intermediate">
                  <AccordionTrigger className="text-lg font-medium text-primary">I'm at an intermediate level. Is this course suitable for me?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Our sessions are tailored to your level. Whether you are beginner or intermediate, your teacher will adjust the material to match your skills and help you progress further.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="speaking">
                  <AccordionTrigger className="text-lg font-medium text-primary">When will I start speaking Arabic?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Speaking practice starts from Day 1. The sessions emphasize practical speaking from the very beginning.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="duration">
                  <AccordionTrigger className="text-lg font-medium text-primary">How long will the course take to complete?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Progress depends on the student's effort and consistency. We do not guarantee specific timelines for fluency, as every student learns at their own pace. Our curriculum is tiered from absolute beginner (Level 1) to advanced.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-secondary mb-4">Payments & Policies</h2>
            <div className="bg-white rounded-2xl border border-[#57553D]/20 p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="trial">
                  <AccordionTrigger className="text-lg font-medium text-primary">Do you offer trial lessons?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, we don't offer free trials. We believe in committing to a proper assessment. Your first lesson is a comprehensive evaluation where your teacher assesses your level, understands your goals, and builds a personalised roadmap for you. However, you can cancel your subscription if you decide not to continue.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="cancellation">
                  <AccordionTrigger className="text-lg font-medium text-primary">What is the cancellation/refund policy?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can cancel your subscription at any time. Your subscription will remain active until the end of the current billing period. If you cancel, your subscription will end immediately and you will not be charged for the next billing cycle. We do not issue refunds for any remaining time in your subscription.
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
