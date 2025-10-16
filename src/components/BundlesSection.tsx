import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bundles = [
  {
    category: "MARKETING",
    title: "Marketing Automation Bundle",
    description: "Launch-ready funnel with CRM, email marketing, landing pages, and analytics—all sharing data instantly.",
    tools: ["CRM", "Email Platform", "Landing Pages", "Analytics"],
    workflows: 12,
    savings: 200,
  },
  {
    category: "OPERATIONS",
    title: "Operations Excellence Bundle",
    description: "Project management, time tracking, invoicing, and client portals working together seamlessly.",
    tools: ["Project Manager", "Time Tracker", "Invoicing", "Client Portal"],
    workflows: 10,
    savings: 180,
  },
  {
    category: "CONSULTANCY",
    title: "Consultancy Power Bundle",
    description: "Client management, proposals, contracts, and knowledge base integrated for professional services.",
    tools: ["Client CRM", "Proposal Tool", "E-Signature", "Knowledge Base"],
    workflows: 8,
    savings: 150,
  },
  {
    category: "TECHNOLOGY",
    title: "Tech Stack Bundle",
    description: "Development tools, version control, deployment, and monitoring working in perfect harmony.",
    tools: ["Code Repository", "CI/CD Pipeline", "Monitoring", "Documentation"],
    workflows: 15,
    savings: 250,
  },
];

const BundlesSection = () => {
  return (
    <section id="bundles" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Choose Your Bundle
          </h2>
          <p className="text-lg text-muted-foreground">
            Each bundle is a complete business system with tools that work together from day one.
            <br />
            Pick your department and start automating immediately.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {bundles.map((bundle) => (
            <Card key={bundle.title} className="border-2 p-8 transition-all hover:border-primary hover:shadow-xl">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                {bundle.category}
              </Badge>
              
              <h3 className="mb-3 text-2xl font-bold text-foreground">{bundle.title}</h3>
              <p className="mb-6 text-muted-foreground">{bundle.description}</p>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold text-foreground">Included Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {bundle.tools.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6 space-y-2 border-t border-border pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{bundle.workflows} pre-connected workflows ready to activate</span>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-primary">Save ${bundle.savings}/month vs. separate tools</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Activate Bundle
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
