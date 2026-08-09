import Link from "next/link";
import type { Locale } from "@/app/[locale]/layout";

export function LangSwitch({
  locale,
  label,
  pathname,
}: {
  locale: Locale;
  label: string;
  pathname: string;
}) {
  const target: Locale = locale === "ru" ? "en" : "ru";
  const rest = pathname.replace(/^\/(ru|en)/, "");
  const href = `/${target}${rest}`;

  return (
    <Link
      href={href}
      className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}
