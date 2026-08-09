"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { LangSwitch } from "@/components/site/lang-switch";
import type { Locale } from "@/app/[locale]/layout";
import type { Dictionary } from "@/lib/dictionaries";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}#work`, label: dict.nav.work },
    { href: `/${locale}#capabilities`, label: dict.nav.capabilities },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}/notes`, label: dict.nav.notes },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href={`/${locale}`}
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          alex<span className="text-warm-accent">.</span>fialko
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch
            locale={locale}
            label={dict.langSwitch.label}
            pathname={pathname}
          />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="md:hidden" />}
            >
              <Menu className="size-5" />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="mt-10 flex flex-col gap-6 px-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-lg text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
