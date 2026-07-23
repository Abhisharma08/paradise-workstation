import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const galleryItems = [
  {
    title: "Linear Workstations",
    description:
      "Ideal for organized individual workspaces with efficient space utilization.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784784679/linear_workstation_pkol2m.jpg",
    hint: "linear workstation",
  },
  {
    title: "Cluster Workstations",
    description:
      "Designed to support collaboration while maintaining personal work zones.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784784663/cluster_workstation_cz5uci.jpg",
    hint: "cluster workstation",
  },
  {
    title: "Modular Workstations",
    description:
      "Flexible workstation systems that adapt to changing workplace requirements.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784784682/custom-modular_workstation_l5obpq.jpg",
    hint: "modular workstation",
  },
  {
    title: "Partition Workstations",
    description:
      "Spacious workstation solutions designed for focused work and professional settings.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784784662/partition_workstations_instead_of_category_manager_oofsny.jpg",
    hint: "partition workstation",
  },
  {
    title: "Custom Workstations",
    description:
      "Made-to-order workstation solutions tailored to your office layout and workflow.",
    image:
      "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784784664/cluster_workstations_tbpnar.jpg",
    hint: "custom workstation",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-background py-10 sm:py-20 lg:py-28"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Our <span className="text-secondary">Workstation </span>Range
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-foreground/80">
            Designed for comfort. Crafted for performance. Explore our
            best-selling workstation collections.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-xl bg-card text-card-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                {/* Fixed Image Container */}
                <div className="relative w-full h-64 overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    data-ai-hint={item.hint}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-foreground/80 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base sm:text-lg"
          >
            <Link href="#get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}