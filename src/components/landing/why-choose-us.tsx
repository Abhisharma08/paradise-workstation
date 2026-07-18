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
    <section id="features" className="bg-card py-20 sm:py-28 border-y">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            Why Choose <span className="text-secondary">Paradise Furniture</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            We're more than just furniture. We're your partners in creating a productive and inspiring workspace.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                {feature.icon}
              </div>
              <h3 className="mt-6 font-headline text-xl font-semibold text-foreground">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
