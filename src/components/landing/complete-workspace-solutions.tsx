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
    <section className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div className="text-center">

          <h2 className="mt-3 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Complete <span className="text-secondary"> Workspace </span> Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-foreground/80">
            Beyond workstations, Paradise Furniture offers executive tables,
            office chairs, conference tables, reception desks, storage
            solutions, waiting area seating, and more to create a complete,
            functional, and professional office environment.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="group flex items-center justify-between rounded-2xl border bg-background p-6 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>

              <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}