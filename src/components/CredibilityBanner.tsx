import { Award, Building2, Users, ShieldCheck } from "lucide-react";

const credibilityItems = [
  {
    icon: Award,
    value: "25+",
    label: "Years of Experience"
  },
  {
    icon: Building2,
    value: "500+",
    label: "Completed Projects"
  },
  {
    icon: Users,
    value: "100+",
    label: "Skilled Workforce"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Safety Compliance"
  }
];

const CredibilityBanner = () => {
  return (
    <section className="bg-background py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credibilityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-foreground mb-2">{item.value}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBanner;