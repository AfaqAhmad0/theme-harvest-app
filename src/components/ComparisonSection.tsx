import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why Most Software Sits Unused
          </h2>
          <p className="text-lg text-muted-foreground">
            You buy tools with great intentions, but connecting them becomes your full-time job.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-2 border-destructive/20 bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <span>•</span>
                <span>Buy 5 different tools at "great prices"</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span>•</span>
                <span>Each tool sits alone in its own dashboard</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span>•</span>
                <span>Spend weeks learning API integrations</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span>•</span>
                <span>Data doesn't sync, workflows break</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span>•</span>
                <span>Tools collect dust while you do everything manually</span>
              </li>
            </ul>
          </Card>

          <Card className="border-2 border-primary/30 bg-card p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The MyTechPassport Way</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-foreground">
                <span className="text-primary">✓</span>
                <span>Buy a bundle with all tools included</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <span className="text-primary">✓</span>
                <span>Tools are pre-connected and talking to each other</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <span className="text-primary">✓</span>
                <span>Click "Activate" and start working immediately</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <span className="text-primary">✓</span>
                <span>Data flows automatically between all your tools</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <span className="text-primary">✓</span>
                <span>Focus on growth while automation handles the rest</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-foreground">
            Stop wasting time on integration. Start with bundles that just work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
