import { ClipboardCheck, Palette, LayoutTemplate } from "lucide-react";

const highlights = [
  {
    icon: <LayoutTemplate className="h-6 w-6 text-secondary/80" />,
    title: "Tailored Layouts",
  },
  {
    icon: <Palette className="h-6 w-6 text-secondary/80" />,
    title: "Custom Finishes",
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-secondary/80" />,
    title: "Workspace Planning",
  },
];

export function CustomWorkspaceSection() {
  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl border bg-card p-6 sm:p-8 md:p-12 text-center shadow-lg">

          <h2 className="mt-2 sm:mt-4 font-headline text-3xl font-bold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
            Customized for Your Workspace
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-foreground/80">
            Every business works differently. We help you choose workstation
            layouts, finishes, and configurations that perfectly fit your
            workspace, team size, and day-to-day operations—creating an office
            that's both functional and visually impressive.
          </p>

          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl sm:rounded-2xl border bg-background p-4 sm:p-6 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-accent/10">
                  {item.icon}
                </div>

                <h3 className="mt-3 sm:mt-5 text-base sm:text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}