import { Card } from "@/components/ui/card";
import { XCircle, CheckCircle2 } from "lucide-react";

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
          <Card className="border-2 bg-red-50/50 p-8 dark:bg-red-950/20">
            <div className="mb-6 flex items-center gap-3">
              <XCircle className="h-10 w-10 text-red-500" />
              <h3 className="text-2xl font-bold text-foreground">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                <span>Buy 5 different tools at "great prices"</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                <span>Each tool sits alone in its own dashboard</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                <span>Spend weeks learning API integrations</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                <span>Data doesn't sync, workflows break</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <XCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                <span>Tools collect dust while you do everything manually</span>
              </li>
            </ul>
          </Card>

          <Card className="border-2 border-primary bg-primary/5 p-8 shadow-lg dark:bg-primary/10">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">The MyTechPassport Way</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Buy a bundle with all tools included</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Tools are <strong>pre-connected</strong> and talking to each other</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Click "Activate" and <strong>start working immediately</strong></span>
              </li>
              <li className="flex gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Data flows automatically between all your tools</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
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
