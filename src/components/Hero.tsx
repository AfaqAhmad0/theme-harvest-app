import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-8 px-6 py-2 text-sm font-medium">
            <span className="mr-2">✨</span>
            10,000+ businesses automated and counting
          </Badge>

          <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Unlock the Power of Effortless Automation to Power Your Business
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Pre-connected templates and customizable workflows to fit your business needs. Start free, scale effortlessly.
          </p>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-base font-semibold">
              Get Started Free →
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold">
              See How It Works
            </Button>
          </div>

          <p className="mb-12 text-sm text-muted-foreground">
            Start with 2 free workflows. No credit card required.
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="mb-1 text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">/5 rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-1 text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">systems automated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-1 text-3xl font-bold text-foreground">500K+</div>
              <div className="text-sm text-muted-foreground">hours saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
