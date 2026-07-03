import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import WhatIsAPublicBuilder from "@/components/what-is-a-public-builder";
import FeaturedBuilders from "@/components/featured-builders";
import HowItWorks from "@/components/how-it-works";
import SprintTimeline from "@/components/sprint-timeline";
import Pricing from "@/components/pricing";
import StartupWaitlist from "@/components/startup-waitlist";
import BuilderApplication from "@/components/builder-application";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <WhatIsAPublicBuilder />
        <FeaturedBuilders />
        <HowItWorks />
        <SprintTimeline />
        <Pricing />
        <StartupWaitlist />
        <BuilderApplication />
      </main>
      <Footer />
    </>
  );
}
