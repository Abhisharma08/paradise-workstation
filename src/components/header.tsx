
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";

const navLinks = [
  { href: "#gallery", label: "Product Gallery" },
  { href: "#features", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-12 w-auto" />
            <span className="sr-only"></span>
          </Link>
        </div>


        <nav className="hidden items-center gap-8 text-sm font-medium md:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <Button asChild className="bg-secondary text-accent-foreground hover:bg-accent">
            <a
              href="tel:+919330017569"
              onClick={(e) => {
                if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                  (window as any).gtag_report_conversion('tel:+919330017569');
                }
              }}
            >
              +919330017569
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
