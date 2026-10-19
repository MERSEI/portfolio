import Link from "next/link";
import type { Locale } from "@/app/[locale]/layout";

export function LangSwitch({
  locale,
  label,
  ariaLabel,
  pathname,
}: {
  locale: Locale;
  label: string;
  ariaLabel: string;
  pathname: string;
}) {
  const target: Locale = locale === "ru" ? "en" : "ru";
  const rest = pathname.replace(/^\/(ru|en)/, "");
  const href = `/${target}${rest}`;

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      className="rounded-md px-2 py-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}
