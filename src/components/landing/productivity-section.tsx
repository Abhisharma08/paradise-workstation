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
    <section className="py-8 sm:py-16 lg:py-24 bg-card">
      <div className="container">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
              <Image
                src="https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784612164/IMG_2024.JPG_wpra93.jpg"
                alt="Modern Office Interior"
                width={700}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Designed Around <span className="text-secondary">Productivity</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-foreground/80">
              Every workstation is thoughtfully designed to improve efficiency,
              organization, and employee comfort while maximizing your available
              office space.
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2">
              {productivityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 sm:gap-4 rounded-xl border bg-background p-3.5 sm:p-4 transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    {feature.icon}
                  </div>

                  <span className="font-medium text-sm sm:text-base text-foreground">
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