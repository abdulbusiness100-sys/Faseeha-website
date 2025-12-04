import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Start your Faseeha <br/> Journey Today</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* 1-1 Arabic Class */}
          <div className="bg-[#F2F1EE] rounded-sm p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary/30">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6 font-serif">1-1 Arabic Class</h3>
              <div className="flex items-baseline justify-center mb-2 font-serif">
                <span className="text-2xl text-primary font-bold">£</span>
                <span className="text-6xl font-bold text-primary">59.99</span>
              </div>
              <span className="text-muted-foreground text-sm uppercase tracking-widest">Every month</span>
            </div>
            
            <p className="text-primary/80 mb-10 leading-relaxed max-w-xs mx-auto font-light">
              Perfect for those seeking a tailored Arabic learning experience at their own pace.
            </p>

            <div className="mt-auto w-full max-w-xs">
              <a href="https://www.faseehainstitute.com/pricing/payment/eyJwbGFuSWQiOiI2MDJmNWVmOC04MzJiLTQ3ODYtYjZmNy1kNGUwMTMyOTU4OTEiLCJpbnRlZ3JhdGlvbkRhdGEiOnt9LCJjaGVja291dEZsb3dJZCI6ImMwYmZlMzdjLWVlMzItNGEzNC05ZDJjLTgxMDhmZDBlYTZjZiJ9" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full bg-[#9A9B89] hover:bg-[#8A8B79] text-white h-12 text-lg font-serif shadow-md hover:shadow-lg transition-all">
                  Select
                </Button>
              </a>
            </div>
          </div>

           {/* 1-1 Qur'an Class */}
           <div className="bg-[#F2F1EE] rounded-sm p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary/30">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6 font-serif">1-1 Qur'an Class</h3>
              <div className="flex items-baseline justify-center mb-2 font-serif">
                <span className="text-2xl text-primary font-bold">£</span>
                <span className="text-6xl font-bold text-primary">59.99</span>
              </div>
              <span className="text-muted-foreground text-sm uppercase tracking-widest">Every month</span>
            </div>
            
            <p className="text-primary/80 mb-10 leading-relaxed max-w-xs mx-auto font-light">
              Achieve your Qur'anic goals with personalised 1-1 classes at Faseeha. Whether memorising a juz or perfecting your tajweed.
            </p>

            <div className="mt-auto w-full max-w-xs">
              <a href="https://www.faseehainstitute.com/pricing/payment/eyJpbnRlZ3JhdGlvbkRhdGEiOnt9LCJwbGFuSWQiOiJlZWJiY2U4NC05ZWNhLTQ5NjMtOGFkYi1lZTVhOTdmNjA1YzMiLCJjaGVja291dEZsb3dJZCI6ImEwZWRjNzk2LTRlYzItNGM1Zi04MmE5LWE3ZDkwZGRiODcyYSJ9" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full bg-[#9A9B89] hover:bg-[#8A8B79] text-white h-12 text-lg font-serif shadow-md hover:shadow-lg transition-all">
                  Select
                </Button>
              </a>
            </div>
          </div>

        </div>
        
        <div className="text-center mt-16 max-w-2xl mx-auto">
           <p className="text-muted-foreground text-sm italic">
             * All plans include access to our student portal, progress tracking, and dedicated support. Flexible scheduling available.
           </p>
        </div>
      </div>
    </div>
  );
}
