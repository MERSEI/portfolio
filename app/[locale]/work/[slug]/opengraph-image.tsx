import { ImageResponse } from "next/og";
import { getCase } from "@/lib/cases";
import type { Locale } from "@/app/[locale]/layout";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const c = getCase(slug);
  const copy = c ? c[locale] : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0908",
          color: "#F5F1E8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#E8863C", fontFamily: "monospace" }}>
          alex<span>.</span>fialko
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 60, fontWeight: 600, letterSpacing: -1 }}>
          {c?.title ?? "Case study"}
        </div>
        {copy && (
          <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#9C9385", maxWidth: 980 }}>
            {copy.tagline}
          </div>
        )}
        {c && (
          <div style={{ display: "flex", marginTop: 44, gap: 12, flexWrap: "wrap" }}>
            {c.stack.slice(0, 4).map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontFamily: "monospace",
                  color: "#F5F1E8",
                  border: "1px solid rgba(197,181,155,0.3)",
                  borderRadius: 8,
                  padding: "8px 16px",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
