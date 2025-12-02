import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Pricing & Enrolment</h1>
          <p className="text-lg text-muted-foreground">
            All plans include women-only classes with native Arab teachers, progress tracking and flexible scheduling across time zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Foundations Plan */}
          <div className="bg-white rounded-2xl border border-border p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-primary">Foundations</h3>
              <p className="text-sm text-muted-foreground mt-2">Best for complete beginners building reading or Level 1 Arabic.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-primary">£XX</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["2 lessons per week", "45 minutes each", "Qur’an or Arabic", "Personalised Feedback"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://www.faseehainstitute.com/pricing/payment/eyJwbGFuSWQiOiI2MDJmNWVmOC04MzJiLTQ3ODYtYjZmNy1kNGUwMTMyOTU4OTEiLCJpbnRlZ3JhdGlvbkRhdGEiOnt9LCJjaGVja291dEZsb3dJZCI6ImMwYmZlMzdjLWVlMzItNGEzNC05ZDJjLTgxMDhmZDBlYTZjZiJ9" target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-full" variant="outline">Enrol in Foundations</Button>
            </a>
          </div>

          {/* Standard Plan (Highlighted) */}
          <div className="bg-primary rounded-2xl border border-primary p-8 flex flex-col shadow-xl transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-primary-foreground">Standard</h3>
              <p className="text-sm text-primary-foreground/70 mt-2">Ideal for steady progress in Tajweed, Hifdh or Arabic Levels.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-primary-foreground">£XX</span>
              <span className="text-primary-foreground/70">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["3 lessons per week", "45 minutes each", "Qur’an or Arabic", "Dedicated Slack Support", "Weekly Progress Reports"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <Check className="w-4 h-4 text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://www.faseehainstitute.com/pricing/payment/eyJwbGFuSWQiOiI2MDJmNWVmOC04MzJiLTQ3ODYtYjZmNy1kNGUwMTMyOTU4OTEiLCJpbnRlZ3JhdGlvbkRhdGEiOnt9LCJjaGVja291dEZsb3dJZCI6ImMwYmZlMzdjLWVlMzItNGEzNC05ZDJjLTgxMDhmZDBlYTZjZiJ9" target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-full bg-secondary text-primary hover:bg-secondary/90">Enrol in Standard</Button>
            </a>
          </div>

          {/* Intensive Plan */}
          <div className="bg-white rounded-2xl border border-border p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-primary">Intensive</h3>
              <p className="text-sm text-muted-foreground mt-2">Accelerated learning for Hifdh completion or rapid Arabic fluency.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-primary">£XX</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["5 lessons per week", "45 minutes each", "Combine Qur'an & Arabic", "Priority Scheduling", "Direct Teacher Access"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://www.faseehainstitute.com/pricing/payment/eyJwbGFuSWQiOiI2MDJmNWVmOC04MzJiLTQ3ODYtYjZmNy1kNGUwMTMyOTU4OTEiLCJpbnRlZ3JhdGlvbkRhdGEiOnt9LCJjaGVja291dEZsb3dJZCI6ImMwYmZlMzdjLWVlMzItNGEzNC05ZDJjLTgxMDhmZDBlYTZjZiJ9" target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-full" variant="outline">Enrol in Intensive</Button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
