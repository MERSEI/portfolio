import type { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p>
        © {new Date().getFullYear()} {dict.footer.rights}
      </p>
      <p className="flex items-center gap-4 font-mono text-xs">
        <span>{dict.footer.tagline}</span>
        <a href="#top" className="text-foreground underline-offset-4 hover:underline">
          {dict.footer.top} ↑
        </a>
      </p>
    </footer>
  );
}
