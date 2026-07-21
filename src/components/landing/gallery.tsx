
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const galleryItems = [
{
  title: "Linear Workstations",
  description:
    "Ideal for organized individual workspaces with efficient space utilization.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784612164/IMG_2024.JPG_wpra93.jpg",
  hint: "linear workstation",
},
{
  title: "Cluster Workstations",
  description:
    "Designed to support collaboration while maintaining personal work zones.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784613822/IMG_2064_ihgmhv.png",
  hint: "cluster workstation",
},
{
  title: "Modular Workstations",
  description:
    "Flexible workstation systems that adapt to changing workplace requirements.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784612158/IMG_2020.JPG_qlxgoj.jpg",
  hint: "modular workstation",
},
{
  title: "Manager Workstations",
  description:
    "Spacious workstation solutions designed for focused work and professional settings.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784612188/IMG_2027_dsed7l.png",
  hint: "manager workstation",
},
{
  title: "Custom Workstations",
  description:
    "Made-to-order workstation solutions tailored to your office layout and workflow.",
  image: "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1784612195/IMG_2028_prqfmt.png",
  hint: "custom workstation",
},

];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-8 sm:py-16 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Our <span className="text-secondary">Workstation </span>Range
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-foreground/80 md:text-xl">
           Designed for comfort. Crafted for performance. Explore our best-selling chair collections.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <h3 className="font-headline text-lg sm:text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-foreground/80 text-sm sm:text-base flex-grow">{item.description}</p>
                  <div className="mt-4">
                    <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                      <Link href="#get-a-quote">Enquire Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <Button asChild size="lg" className="bg-secondary text-accent-foreground hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
            <Link href="#get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
