
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const galleryItems = [
  {
    title: "Executive Comfort",
    description: "Chairs that reflect leadership — bold silhouettes with premium finish.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1753434307/freepik__the-style-is-candid-image-photography-with-natural__15222_pjhx3z.png",
    hint: "modular workstation",
  },
  {
    title: "Ergo Mesh Task Chairs",
    description: "Support where it matters — breathable backs, full adjustability.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1753434301/freepik__the-style-is-candid-image-photography-with-natural__15221_tkijln.png",
    hint: "premium office chair",
  },
  {
    title: "Collaborative Seating",
    description: "Flexible seating options for fast-moving teams and shared zones.",
    image: "https://res.cloudinary.com/ddqqlfsjp/image/upload/v1753434305/freepik__the-style-is-candid-image-photography-with-natural__15224_udmdj3.png",
    hint: "conference room",
  },

];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
            Products <span className="text-accent">Gallery</span>
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
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <Link href="#get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
