import { Switch, Route } from "wouter";
import { AnimatePresence } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import Home from "@/pages/home";
import QuranProgramme from "@/pages/quran-programme";
import ArabicProgramme from "@/pages/arabic-programme";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import Testimonials from "@/pages/testimonials";
import FAQ from "@/pages/faq";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={() => <PageTransition><Home /></PageTransition>} />
          <Route path="/quran-programme" component={() => <PageTransition><QuranProgramme /></PageTransition>} />
          <Route path="/arabic-programme" component={() => <PageTransition><ArabicProgramme /></PageTransition>} />
          <Route path="/pricing" component={() => <PageTransition><Pricing /></PageTransition>} />
          <Route path="/about" component={() => <PageTransition><About /></PageTransition>} />
          <Route path="/testimonials" component={() => <PageTransition><Testimonials /></PageTransition>} />
          <Route path="/faq" component={() => <PageTransition><FAQ /></PageTransition>} />
          <Route component={() => <PageTransition><NotFound /></PageTransition>} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
