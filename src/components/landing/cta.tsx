import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact">
      <div className="bg-[#313d4d]">
        <div className="container py-24 text-center text-accent-foreground">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Build Better Workspaces
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-accent-foreground/80 md:text-xl">
            Create functional, inspiring offices with workstation solutions 
            designed for comfort, durability, and everyday performance.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
              <Link href="#get-a-quote">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
