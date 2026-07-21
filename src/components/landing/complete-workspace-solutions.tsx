import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  Armchair,
  Presentation,
  ConciergeBell,
  Archive,
  Sofa,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: <BriefcaseBusiness className="h-6 w-6 text-secondary/80" />,
    title: "Executive Tables",
  },
  {
    icon: <Armchair className="h-6 w-6 text-secondary/80" />,
    title: "Office Chairs",
  },
  {
    icon: <Presentation className="h-6 w-6 text-secondary/80" />,
    title: "Conference Tables",
  },
  {
    icon: <ConciergeBell className="h-6 w-6 text-secondary/80" />,
    title: "Reception Desks",
  },
  {
    icon: <Archive className="h-6 w-6 text-secondary/80" />,
    title: "Storage Solutions",
  },
  {
    icon: <Sofa className="h-6 w-6 text-secondary/80" />,
    title: "Waiting Area Seating",
  },
];

export function CompleteWorkspaceSolutions() {
  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-card">
      <div className="container">
        <div className="text-center">

          <h2 className="mt-2 sm:mt-3 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Complete <span className="text-secondary"> Workspace </span> Solutions
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-foreground/80">
            Beyond workstations, Paradise Furniture offers executive tables,
            office chairs, conference tables, reception desks, storage
            solutions, waiting area seating, and more to create a complete,
            functional, and professional office environment.
          </p>
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <Button asChild size="lg" className="rounded-full bg-secondary px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-secondary-foreground hover:bg-secondary/90">
              <Link href="#get-a-quote">Contact Us Today</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group flex items-center justify-between rounded-xl sm:rounded-2xl border bg-background p-4 sm:p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>

              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-accent transition-transform group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}