import type { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p>
        © {new Date().getFullYear()} {dict.footer.rights}
      </p>
      <p className="font-mono text-xs">{dict.footer.tagline}</p>
    </footer>
  );
}
