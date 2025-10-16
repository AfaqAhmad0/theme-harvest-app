import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  {
    category: "IT Automation",
    description: "Onboard/offboard users, manage devices, apps, and access—all from one dashboard.",
    benefits: ["Automated user provisioning", "Device management", "App deployment", "Access control"],
  },
  {
    category: "Workflow Studio",
    description: "Hundreds of pre-built templates for HR, operations, marketing, and more.",
    benefits: ["500+ workflow templates", "Drag-and-drop builder", "Custom integrations", "Real-time sync"],
  },
  {
    category: "Team Analytics",
    description: "Get insights on productivity, process bottlenecks, and optimization opportunities.",
    benefits: ["Performance dashboards", "Process analytics", "Custom reports", "Predictive insights"],
  },
  {
    category: "Unified Billing",
    description: "One subscription includes everything. No hidden fees, no surprise charges.",
    benefits: ["All bundles included", "Predictable pricing", "Volume discounts", "Cancel anytime"],
  },
];

const FeaturesTableSection = () => {
  return (
    <section className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            How We Help Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A complete platform designed to eliminate manual work and accelerate growth.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={feature.category}
              className="border-2 p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="mb-3 text-2xl font-bold text-foreground">{feature.category}</h3>
              <p className="mb-6 text-muted-foreground">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
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
