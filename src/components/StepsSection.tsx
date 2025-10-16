import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Workflow } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Choose Your Department",
    description: "Select the bundle that matches your business needs—Marketing, Operations, Consultancy, or Technology.",
    icon: CheckCircle,
  },
  {
    number: "2",
    title: "One-Click Activation",
    description: "Hit 'Activate' and watch all tools connect automatically. No setup wizards, no API keys, no headaches.",
    icon: Zap,
  },
  {
    number: "3",
    title: "Start Creating Workflows",
    description: "Use pre-built workflow templates or create unlimited custom workflows with your bundle's tools.",
    icon: Workflow,
  },
];

const StepsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            From Bundle to Business in 3 Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            No technical expertise needed. No weeks of setup. Just instant automation.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center">
                {index < steps.length - 1 && (
                  <div className="absolute left-[60%] top-[80px] hidden h-[2px] w-[calc(100%+2rem)] bg-border md:block" />
                )}
                <div className="relative z-10 mb-6 flex h-32 w-32 items-center justify-center rounded-3xl bg-primary shadow-lg">
                  <Icon className="h-16 w-16 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="mb-2 text-sm font-semibold text-primary">STEP {step.number}</p>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Average activation time: <span className="font-bold text-foreground">Under 60 seconds</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
