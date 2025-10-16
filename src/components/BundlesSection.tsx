import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Briefcase, Users, Code } from "lucide-react";

const bundles = [
  {
    category: "MARKETING",
    title: "Marketing Automation Bundle",
    description: "Launch-ready funnel with CRM, email marketing, landing pages, and analytics—all sharing data instantly.",
    tools: ["CRM", "Email Platform", "Landing Pages", "Analytics"],
    workflows: 12,
    savings: 200,
    icon: TrendingUp,
    iconColor: "bg-purple-500",
    highlighted: false,
  },
  {
    category: "OPERATIONS",
    title: "Operations Excellence Bundle",
    description: "Project management, time tracking, invoicing, and client portals working together seamlessly.",
    tools: ["Project Manager", "Time Tracker", "Invoicing", "Client Portal"],
    workflows: 10,
    savings: 180,
    icon: Briefcase,
    iconColor: "bg-blue-500",
    highlighted: true,
  },
  {
    category: "CONSULTANCY",
    title: "Consultancy Power Bundle",
    description: "Client management, proposals, contracts, and knowledge base integrated for professional services.",
    tools: ["Client CRM", "Proposal Tool", "E-Signature", "Knowledge Base"],
    workflows: 8,
    savings: 150,
    icon: Users,
    iconColor: "bg-green-500",
    highlighted: false,
  },
  {
    category: "TECHNOLOGY",
    title: "Tech Stack Bundle",
    description: "Development tools, version control, deployment, and monitoring working in perfect harmony.",
    tools: ["Code Repository", "CI/CD Pipeline", "Monitoring", "Documentation"],
    workflows: 15,
    savings: 250,
    icon: Code,
    iconColor: "bg-orange-500",
    highlighted: false,
  },
];

const BundlesSection = () => {
  return (
    <section id="bundles" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Department-Specific Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete business systems with pre-integrated tools that work together from day one.
            <br />
            Pick your department and activate in 60 seconds.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {bundles.map((bundle) => {
            const Icon = bundle.icon;
            return (
              <Card
                key={bundle.title}
                className={`border-2 p-8 transition-all hover:shadow-xl ${
                  bundle.highlighted ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${bundle.iconColor}`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-semibold text-muted-foreground">
                    {bundle.category}
                  </Badge>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-foreground">{bundle.title}</h3>
                <p className="mb-6 text-muted-foreground">{bundle.description}</p>

                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">Included Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {bundle.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="bg-card">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6 space-y-2 border-t border-border pt-6">
                  <div className="text-sm">
                    <span className="text-primary font-semibold">{bundle.workflows} pre-connected workflows</span>
                    <span className="text-muted-foreground"> ready to activate</span>
                  </div>
                  <div className="text-sm font-bold text-foreground">
                    Save ${bundle.savings}/month vs. separate tools
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Activate Bundle →
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
