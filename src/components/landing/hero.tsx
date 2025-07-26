import { QuoteForm } from "./quote-form";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1753434922/image_vfgr5b.png"
        alt="Office furniture"
        fill
        className="object-cover"
        priority
      />
      <div className="container relative z-20 py-24 lg:py-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              <span className="text-accent">Ergonomic Office Chairs</span> for Every Workspace
            </h1>
            <p className="max-w-xl text-lg text-white lg:mx-0 mx-auto md:text-xl">
           At Urban Grey, we design office chairs that do more than just support you — they elevate how you sit, move, and work. From executive cabins to collaborative setups, our chairs combine form, function, and long-lasting comfort.
            </p>
          </div>
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
