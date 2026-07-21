import Image from "next/image";
import {
  Building2,
  Briefcase,
  Users,
  GraduationCap,
  HeartPulse,
  Landmark,
  Building,
} from "lucide-react";

const workspaces = [
  {
    icon: <Building2 className="h-6 w-6 text-secondary/80" />,
    title: "Corporate Offices",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-secondary/80" />,
    title: "Startups",
  },
  {
    icon: <Users className="h-6 w-6 text-secondary/80" />,
    title: "Co-working Spaces",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-secondary/80" />,
    title: "Educational Institutions",
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-secondary/80" />,
    title: "Healthcare Facilities",
  },
  {
    icon: <Landmark className="h-6 w-6 text-secondary/80" />,
    title: "Government Offices",
  },
  {
    icon: <Building className="h-6 w-6 text-secondary/80" />,
    title: "Commercial Offices",
  },
];

export function WorkspaceSolutions() {
  return (
    <section className="py-10 sm:py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>

            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-secondary">Perfect</span> for Every Workspace
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-foreground/80">
              From modern corporate offices to educational institutions and
              healthcare facilities, our office furniture solutions are designed
              to enhance productivity, comfort, and efficient space utilization.
            </p>

            <div className="mt-6 sm:mt-8 lg:mt-10 grid gap-4 sm:grid-cols-2">
              {workspaces.map((workspace) => (
                <div
                  key={workspace.title}
                  className="flex items-center gap-3 sm:gap-4 rounded-xl border bg-card p-3.5 sm:p-4 transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    {workspace.icon}
                  </div>

                  <span className="font-medium text-sm sm:text-base text-foreground">
                    {workspace.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-4 lg:mt-0">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Office Workspace"
                width={700}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}