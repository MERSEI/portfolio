import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/lib/dictionaries";

export function Playbooks({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex items-center gap-3">
          <p className="font-mono text-sm text-warm-accent">{dict.playbooks.eyebrow}</p>
          <Badge variant="secondary" className="font-mono text-[11px] font-normal">
            {dict.playbooks.badge}
          </Badge>
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {dict.playbooks.title}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          {dict.playbooks.body}
        </p>
      </div>
    </section>
  );
}
