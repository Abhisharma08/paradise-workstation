
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const galleryItems = [
{
  title: "Linear Workstations",
  description:
    "Ideal for organized individual workspaces with efficient space utilization.",
  image: "YOUR_IMAGE_URL",
  hint: "linear workstation",
},
{
  title: "Cluster Workstations",
  description:
    "Designed to support collaboration while maintaining personal work zones.",
  image: "YOUR_IMAGE_URL",
  hint: "cluster workstation",
},
{
  title: "Modular Workstations",
  description:
    "Flexible workstation systems that adapt to changing workplace requirements.",
  image: "YOUR_IMAGE_URL",
  hint: "modular workstation",
},
{
  title: "Manager Workstations",
  description:
    "Spacious workstation solutions designed for focused work and professional settings.",
  image: "YOUR_IMAGE_URL",
  hint: "manager workstation",
},
{
  title: "Custom Workstations",
  description:
    "Made-to-order workstation solutions tailored to your office layout and workflow.",
  image: "YOUR_IMAGE_URL",
  hint: "custom workstation",
},

];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            Our <span className="text-secondary">Workstation </span>Range
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
           Designed for comfort. Crafted for performance. Explore our best-selling chair collections.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-lg shadow-lg bg-card text-card-foreground flex flex-col">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={item.hint}
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-foreground/80 text-base flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-secondary text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <Link href="#get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
