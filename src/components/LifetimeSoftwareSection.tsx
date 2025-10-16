import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const softwareDeals = [
  {
    category: "Automation",
    name: "AutomateIntel",
    description: "AI-powered automation for chat, email, and workflows",
    price: 79,
    originalPrice: 790,
    badge: "Automation",
  },
  {
    category: "Analytics",
    name: "StackEasy",
    description: "Unified subscription intelligence dashboard",
    price: 59,
    originalPrice: 590,
    badge: "Analytics",
  },
  {
    category: "Integration",
    name: "DataFlow",
    description: "Seamless data migration and synchronization",
    price: 89,
    originalPrice: 890,
    badge: "Integration",
    highlighted: true,
  },
];

const LifetimeSoftwareSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-3 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Discover More
          </Badge>
        </div>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Plus: Lifetime Software Deals
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Every bundle includes curated tools, but you can also add individual lifetime software at unbeatable prices.
            Pay once, own forever, and connect them to any workflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {softwareDeals.map((deal) => (
            <Card
              key={deal.name}
              className={`border-2 p-6 transition-all hover:shadow-xl ${
                deal.highlighted ? "border-primary" : "border-border"
              }`}
            >
              <Badge variant="secondary" className="mb-3 bg-primary text-primary-foreground">
                {deal.badge}
              </Badge>

              <h3 className="mb-2 text-2xl font-bold text-foreground">{deal.name}</h3>
              <p className="mb-5 text-sm text-muted-foreground">{deal.description}</p>

              <div className="mb-6">
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">${deal.price}</span>
                  <span className="text-sm text-muted-foreground line-through">${deal.originalPrice}/year</span>
                </div>
                <p className="text-sm text-primary">Lifetime license • One-time payment</p>
              </div>

              <Button
                variant={deal.highlighted ? "default" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Lifetime Access
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg">See more</Button>
        </div>
      </div>
    </section>
  );
};

export default LifetimeSoftwareSection;
