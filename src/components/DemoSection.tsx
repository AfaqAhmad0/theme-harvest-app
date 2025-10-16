import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Calendar, FileText } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            See MyTechPassport in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how easy it is to transform your business operations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="group border-2 p-8 text-center transition-all hover:border-primary hover:shadow-xl animate-fade-in">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
              <Play className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">Watch Video Tour</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              2-minute overview of key features and capabilities
            </p>
            <Button variant="outline" className="w-full hover-scale">
              Watch Now
            </Button>
          </Card>

          <Card className="group border-2 p-8 text-center transition-all hover:border-primary hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
              <Calendar className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">Request Live Demo</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Get a personalized walkthrough from our team
            </p>
            <Button variant="outline" className="w-full hover-scale">
              Schedule Demo
            </Button>
          </Card>

          <Card className="group border-2 border-primary bg-primary/5 p-8 text-center transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">Try 30 Days Free</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Full access to all features, no credit card required
            </p>
            <Button className="w-full hover-scale">
              Start Free Trial
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Join hundreds of teams automating smarter—not harder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
