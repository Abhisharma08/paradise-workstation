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
            <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="text-secondary">Premium Office Workstations </span> for Smarter Workspaces
            </h1>
            <p className="max-w-xl text-lg text-white lg:mx-0 mx-auto md:text-xl">
            At Paradise Furniture, we design workstations that combine functionality, comfort, and modern aesthetics. Our solutions help businesses create organized, productive, and efficient work environments.
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
