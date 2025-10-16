import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-8 animate-fade-in px-6 py-2 text-sm font-medium">
            <Zap className="mr-2 h-4 w-4" />
            Trusted by 10,000+ businesses worldwide
          </Badge>

          <h1 className="mb-6 max-w-5xl animate-fade-in text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Transform Your Business Operations with All-in-One Automation
          </h1>

          <p className="mb-10 max-w-2xl animate-fade-in text-lg text-muted-foreground md:text-xl">
            Automate workflows, cut costs, and empower your team to do more—faster. 
            Manage IT, HR, and workplace operations from one powerful platform.
          </p>

          <div className="mb-6 flex flex-col gap-4 animate-fade-in sm:flex-row">
            <Button size="lg" className="text-base font-semibold shadow-lg hover-scale">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold hover-scale">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <p className="mb-12 text-sm text-muted-foreground">
            Free 30-day trial • No credit card required • 2 workflows free forever
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center hover-scale">
              <div className="mb-1 text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Capterra Rating</div>
            </div>
            <div className="flex flex-col items-center hover-scale">
              <div className="mb-1 text-3xl font-bold text-foreground">500K+</div>
              <div className="text-sm text-muted-foreground">Hours Saved</div>
            </div>
            <div className="flex flex-col items-center hover-scale">
              <div className="mb-1 text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
