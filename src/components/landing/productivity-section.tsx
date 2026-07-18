import Image from "next/image";
import {
  Archive,
  Cable,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Maximize,
} from "lucide-react";

const productivityFeatures = [
  {
    icon: <Archive className="h-6 w-6 text-secondary/80" />,
    title: "Smart Storage Solutions",
  },
  {
    icon: <Cable className="h-6 w-6 text-secondary/80" />,
    title: "Cable Management Options",
  },
  {
    icon: <PanelsTopLeft className="h-6 w-6 text-secondary/80" />,
    title: "Privacy Partitions",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-secondary/80" />,
    title: "Durable Finishes",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-secondary/80" />,
    title: "Easy Maintenance",
  },
  {
    icon: <Maximize className="h-6 w-6 text-secondary/80" />,
    title: "Space-Efficient Layouts",
  },
];

export function ProductivitySection() {
  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Office Interior"
                width={700}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mt-3 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Designed Around <span className="text-secondary">Productivity</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Every workstation is thoughtfully designed to improve efficiency,
              organization, and employee comfort while maximizing your available
              office space.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {productivityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 rounded-xl border bg-background p-4 transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    {feature.icon}
                  </div>

                  <span className="font-medium text-foreground">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}