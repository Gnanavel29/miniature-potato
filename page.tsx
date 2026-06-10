import {
  Navbar,
  Hero,
  WhySection,
  PillarsSection,
  QuoteSection,
  ImpactSection,
  CtaSection,
  Footer
} from "../components/sections";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <PillarsSection />
        <QuoteSection />
        <ImpactSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
