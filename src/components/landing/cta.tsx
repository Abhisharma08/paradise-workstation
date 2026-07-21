import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="bg-slate-950/95 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 px-8 py-16 text-center shadow-[0_25px_80px_-45px_rgba(15,23,42,0.8)]">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Build Better Workspaces
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Create functional, inspiring offices with workstation solutions designed for comfort, durability, and everyday performance.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 transition hover:bg-secondary/90">
              <Link href="#get-a-quote">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
