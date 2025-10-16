import { Card } from "@/components/ui/card";
import { Clock, Shield, DollarSign, Globe, Gauge, Lock, Infinity, Gift } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Hours—Every Week",
    description: "Eliminate repetitive busywork with hundreds of one-click automations. Get your team focused on what matters.",
  },
  {
    icon: Gauge,
    title: "Unified Control",
    description: "Manage devices, onboarding, offboarding, user access, and more from one powerful dashboard.",
  },
  {
    icon: DollarSign,
    title: "Affordability Meets Power",
    description: "All the tools you need, priced for growth-stage businesses and startups. Save $500+/month vs separate tools.",
  },
  {
    icon: Lock,
    title: "Privacy & Security First",
    description: "Robust identity controls, permissions, and compliance built-in. Your data stays protected.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Automate workflows for remote, hybrid, and in-office teams. Seamless collaboration at any scale.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Reliability",
    description: "99.9% uptime SLA, automated backups, and 24/7 monitoring. Built for mission-critical operations.",
  },
  {
    icon: Infinity,
    title: "Lifetime Software",
    description: "Add handpicked lifetime tools that connect seamlessly to your workflows. Try free for a month, then own forever.",
  },
  {
    icon: Gift,
    title: "30+ Free MTP Tools",
    description: "Access a growing suite of free tools bundled with MyTechPassport.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Why Choose MyTechPassport?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to automate your business operations and scale with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="group border-2 p-6 transition-all hover:border-primary hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
