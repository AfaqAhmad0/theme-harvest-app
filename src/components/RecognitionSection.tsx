import { Badge } from "@/components/ui/badge";
import { Award, Star, TrendingUp, Users } from "lucide-react";

const RecognitionSection = () => {
  const recognitions = [
    {
      icon: Star,
      title: "4.9/5 on Capterra",
      description: "Rated #1 in Business Automation",
    },
    {
      icon: Award,
      title: "Editor's Choice",
      description: "SoftwareAdvice 2025",
    },
    {
      icon: TrendingUp,
      title: "Fastest Growing",
      description: "Inc. 5000 List",
    },
    {
      icon: Users,
      title: "10,000+ Teams",
      description: "Trust MyTechPassport",
    },
  ];

  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            RATINGS & RECOGNITION
          </Badge>
        </div>
        
        <div className="grid gap-8 md:grid-cols-4">
          {recognitions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
