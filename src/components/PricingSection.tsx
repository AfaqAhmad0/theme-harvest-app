import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-secondary/30 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
          Start free with two pre-connected workflows. Upgrade anytime to unlock unlimited automation and full access to every bundle.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="border-2 p-8">
            <h3 className="mb-2 text-3xl font-bold text-foreground">Free Forever</h3>
            <p className="mb-6 text-muted-foreground">Perfect for getting started and exploring how My Tech Passport works</p>

            <div className="mb-8">
              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">
                  <strong>2 pre-connected workflows</strong> for lifetime
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">Choose your department on signup</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">Access to workflow template directory</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">Connect any MyTechPassport tools</span>
              </li>
              <li className="flex gap-3 opacity-50">
                <Check className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">Third-party tools (pay per tool to add)</span>
              </li>
            </ul>

            <Button variant="outline" size="lg" className="w-full">
              Get Started Free
            </Button>
          </Card>

          <Card className="relative border-2 border-primary bg-primary/5 p-8 shadow-xl">
            <Badge className="absolute -top-3 right-8 bg-primary">Most Popular</Badge>

            <h3 className="mb-2 text-3xl font-bold text-foreground">All Bundles</h3>
            <p className="mb-6 text-muted-foreground">Everything your business needs to automate and connect every tool</p>

            <div className="mb-2">
              <div className="mb-1 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm font-semibold text-primary">Save $500+/month vs. buying tools separately</p>
            </div>

            <ul className="mb-8 mt-8 space-y-4">
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">
                  <strong>ALL department bundles</strong> included
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">
                  <strong>Unlimited workflows</strong> with one-click connection
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">Create custom workflows with Flowise</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">Access to all workflow templates</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground">Priority support and onboarding</span>
              </li>
            </ul>

            <Button size="lg" className="w-full">
              Start 7-Day Free Trial
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
