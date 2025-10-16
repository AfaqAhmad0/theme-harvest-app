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
    title: "Scale Anytime",
    description: "Expand workflows and teams on demand—grow without retooling or complex migrations.",
    icon: Workflow,
  },
];

const StepsSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            No technical expertise needed. No weeks of setup. Just instant automation.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center">
                {index < steps.length - 1 && (
                  <div className="absolute left-[60%] top-[80px] hidden h-[2px] w-[calc(100%+1.5rem)] bg-border md:block" />
                )}
                <div className="relative z-10 mb-5 flex h-28 w-28 items-center justify-center rounded-3xl bg-primary shadow-lg">
                  <Icon className="h-14 w-14 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="mb-2 text-sm font-semibold text-primary">STEP {step.number}</p>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Average activation time: <span className="font-bold text-foreground">Under 60 seconds</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
