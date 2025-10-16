import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBySection from "@/components/TrustedBySection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesTableSection from "@/components/FeaturesTableSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BundlesSection from "@/components/BundlesSection";
import DemoSection from "@/components/DemoSection";
import LifetimeSoftwareSection from "@/components/LifetimeSoftwareSection";
import PricingSection from "@/components/PricingSection";
import RecognitionSection from "@/components/RecognitionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustedBySection />
      <BenefitsSection />
      <FeaturesTableSection />
      <StepsSection />
      <PricingSection />
      <BundlesSection />
      <LifetimeSoftwareSection />
      <DemoSection />
      <TestimonialsSection />
      <RecognitionSection />
    </div>
  );
};

export default Index;
