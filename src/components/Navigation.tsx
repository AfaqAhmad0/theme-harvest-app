import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-xl font-bold">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">MyTechPassport</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#bundles" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Bundles
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            How It Works
          </a>
          <a href="#software" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Lifetime Software
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium">
            Login
          </Button>
          <Button className="text-sm font-semibold">Get Started Free</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
