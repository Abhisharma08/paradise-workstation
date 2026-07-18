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
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-card p-8 md:p-12 text-center shadow-lg">

          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
            Customized for Your Workspace
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-foreground/80">
            Every business works differently. We help you choose workstation
            layouts, finishes, and configurations that perfectly fit your
            workspace, team size, and day-to-day operations—creating an office
            that's both functional and visually impressive.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-background p-6 transition-all hover:border-accent hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
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