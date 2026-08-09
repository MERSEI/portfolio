import Link from "next/link";
import { Code2, Mail, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/lib/dictionaries";

const EMAIL = "aleksfialko15@gmail.com";
const GITHUB_URL = "https://github.com/MERSEI";
const TELEGRAM_URL = "https://t.me/f1_owe";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-sm text-warm-accent">{dict.contact.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.contact.title}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          {dict.contact.body}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border/70 bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-warm-accent/50"
          >
            <Send className="size-4 text-warm-accent" />
            {dict.contact.telegramLabel}
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 rounded-lg border border-border/70 bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-warm-accent/50"
          >
            <Mail className="size-4 text-warm-accent" />
            {dict.contact.emailLabel}
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border/70 bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-warm-accent/50"
          >
            <Code2 className="size-4 text-warm-accent" />
            {dict.contact.githubLabel}
          </Link>
        </div>

        <div className="mt-14 max-w-md rounded-lg border border-border/70 bg-card p-6">
          <div className="flex items-center gap-3">
            <h3 className="font-medium text-foreground">{dict.contact.newsletterTitle}</h3>
            <Badge variant="secondary" className="font-mono text-[11px] font-normal">
              {dict.playbooks.badge}
            </Badge>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {dict.contact.newsletterBody}
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              disabled
              placeholder={dict.contact.newsletterPlaceholder}
              className="flex-1 rounded-md border border-border/70 bg-background px-3 py-2 text-sm text-muted-foreground placeholder:text-muted-foreground/70 disabled:cursor-not-allowed"
            />
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-md bg-warm-accent/40 px-4 py-2 text-sm font-medium text-[#140F0A]/60"
            >
              {dict.contact.newsletterCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
