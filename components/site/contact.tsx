import Link from "next/link";
import { ArrowUpRight, Code2, Mail, Send } from "lucide-react";
import { CONTACT } from "@/lib/site";
import type { Dictionary } from "@/lib/dictionaries";

export function Contact({ dict }: { dict: Dictionary }) {
  const items = [
    { href: CONTACT.telegram, label: dict.contact.telegramLabel, hint: "@f1_owe", Icon: Send, external: true },
    { href: `mailto:${CONTACT.email}`, label: dict.contact.emailLabel, hint: CONTACT.email, Icon: Mail, external: false },
    { href: CONTACT.github, label: dict.contact.githubLabel, hint: "github.com/MERSEI", Icon: Code2, external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div data-reveal>
          <p className="font-mono text-sm text-warm-accent">{dict.contact.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight sm:text-5xl">
            {dict.contact.title}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{dict.contact.body}</p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {items.map(({ href, label, hint, Icon, external }) => (
            <li key={label} className="bg-background">
              <Link
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full items-start justify-between gap-4 p-6 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span>
                  <Icon className="size-5 text-warm-accent transition-colors group-hover:text-primary-foreground" />
                  <span className="mt-5 block font-display text-lg font-medium">{label}</span>
                  <span className="mt-1 block break-all font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                    {hint}
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
