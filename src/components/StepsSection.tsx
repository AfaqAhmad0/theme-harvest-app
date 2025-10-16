import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Choose Your Department",
    description: "Select the bundle that matches your business needs—Marketing, Operations, Consultancy, or Technology.",
  },
  {
    number: "2",
    title: "One-Click Activation",
    description: "Hit 'Activate' and watch all tools connect automatically. No setup wizards, no API keys, no headaches.",
  },
  {
    number: "3",
    title: "Start Creating Workflows",
    description: "Use pre-built workflow templates or create unlimited custom workflows with your bundle's tools.",
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

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="relative overflow-hidden border-2 p-8 transition-all hover:shadow-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <span className="text-2xl font-bold text-primary">STEP {step.number}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
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
