import { Award, Rocket, Users, Gem, Armchair, LayoutGrid, SlidersHorizontal, ShieldCheck, Ruler, Wrench, BadgeCheck,} from "lucide-react";

const features = [
 {
    icon: <Gem className="h-10 w-10 text-accent" />,
    title: "Premium Quality Materials",
  },
  {
    icon: <Armchair className="h-10 w-10 text-accent" />,
    title: "Ergonomic Workstation Designs",
  },
  {
    icon: <LayoutGrid className="h-10 w-10 text-accent" />,
    title: "Modern Modular Solutions",
  },
  {
    icon: <SlidersHorizontal className="h-10 w-10 text-accent" />,
    title: "Customizable Configurations",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Durable Construction",
  },
  {
    icon: <Ruler className="h-10 w-10 text-accent" />,
    title: "Smart Space Planning",
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: "Professional Installation",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-accent" />,
    title: "Lasting Performance",
  },
];

export function WhyChooseUs() {
  return (
    <section id="features" className="bg-card py-10 sm:py-20 lg:py-28 border-y">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Why Choose <span className="text-secondary">Paradise Furniture</span>?
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-foreground/80 md:text-xl">
            We're more than just furniture. We're your partners in creating a productive and inspiring workspace.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-accent/10">
                {feature.icon}
              </div>
              <h3 className="mt-4 sm:mt-6 font-headline text-base sm:text-xl font-semibold text-foreground">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
