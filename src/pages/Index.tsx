import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StepsSection from "@/components/StepsSection";
import ComparisonSection from "@/components/ComparisonSection";
import BundlesSection from "@/components/BundlesSection";
import LifetimeSoftwareSection from "@/components/LifetimeSoftwareSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StepsSection />
      <ComparisonSection />
      <BundlesSection />
      <LifetimeSoftwareSection />
      <PricingSection />
    </div>
  );
};

export default Index;
