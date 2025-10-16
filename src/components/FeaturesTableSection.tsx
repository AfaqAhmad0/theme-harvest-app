import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  {
    category: "Connected Tech Bundles",
    description: "Get pre-built bundles of tools designed to work together from day one.",
    benefits: [
      "Two free workflows included",
      "Ready-to-use bundles for every department",
      "Works with your existing tools or new ones",
      "No setup hassle—just plug and go",
    ],
  },
  {
    category: "Workflow Automation",
    description: "Turn disconnected apps into one seamless system.",
    benefits: [
      "Run 2 free workflows instantly",
      "Just $99/mo for unlimited automation",
      "Custom workflow design available",
      "Integrate any MTP or external tools",
    ],
  },
  {
    category: "AI Tool Finder",
    description: "Discover the best tools for your business in seconds.",
    benefits: [
      "Smart recommendations based on your goals",
      "Compare tools across vendors",
      "Mix and match MTP tools with others you already use",
      "Personalized stack suggestions",
    ],
  },
  
  {
    category: "Simple Credits & Billing",
    description: "Flexible pricing with no hidden fees or contracts.",
    benefits: [
      "Free access to MTP tools",
      "Buy vendor tools using credits ($1 = 1 credit)",
      "Transparent 10% vendor commission",
      "Cancel or recharge anytime",
    ],
  },
];

const FeaturesTableSection = () => {
  return (
    <section className="bg-secondary/50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            How We Help Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A complete platform designed to eliminate manual work and accelerate growth.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={feature.category}
              className="border-2 p-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="mb-2 text-xl font-bold text-foreground">{feature.category}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTableSection;
