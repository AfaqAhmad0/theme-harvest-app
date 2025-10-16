const TrustedBySection = () => {
  const companies = [
    "TechStart Inc.",
    "Digital Agency Co",
    "Growth Labs",
    "Innovation Hub",
    "CloudScale",
    "Future Systems",
  ];

  return (
    <section className="border-y border-border bg-card py-6">
      <div className="container mx-auto px-4">
        <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
          TRUSTED BY LEADING STARTUPS AND AGENCIES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {companies.map((company, index) => (
            <div
              key={company}
              className="animate-fade-in text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
