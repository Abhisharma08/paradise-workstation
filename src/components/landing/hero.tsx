import { QuoteForm } from "./quote-form";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-black/80 z-10" />
      <Image
        src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1753434922/image_vfgr5b.png"
        alt="Office furniture"
        fill
        className="object-cover"
        priority
      />
      <div className="container relative z-20 py-8 sm:py-16 lg:py-36">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              <span className="text-secondary">Premium Office Workstations </span> for Smarter Workspaces
            </h1>
            <p className="max-w-xl text-base text-white lg:mx-0 mx-auto md:text-xl">
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
