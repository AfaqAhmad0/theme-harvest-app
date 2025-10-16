import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MyTechPassport helped us automate onboarding, so our new hires are productive in minutes instead of days. It's been a game-changer for our team.",
    author: "Sarah Chen",
    role: "CEO, Growth Company",
    company: "TechStart Inc.",
  },
  {
    quote: "We cut our operational costs by 40% and saved over 20 hours per week. The ROI was immediate and the team adoption was seamless.",
    author: "Michael Rodriguez",
    role: "Operations Director",
    company: "Digital Agency Co",
  },
  {
    quote: "The unified platform approach means we're not juggling multiple tools anymore. Everything just works together, and our productivity has skyrocketed.",
    author: "Emily Thompson",
    role: "Head of IT",
    company: "Innovation Hub",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            See why businesses are switching to MyTechPassport to move faster—securely.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="border-2 p-6 animate-fade-in hover:border-primary transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="mb-3 h-10 w-10 text-primary/20" />
              <p className="mb-5 text-foreground leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
