import { ImageResponse } from "next/og";
import type { Locale } from "@/app/[locale]/layout";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isRu = locale === "ru";

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
        <div style={{ display: "flex", fontSize: 32, color: "#E8863C", fontFamily: "monospace" }}>
          alex<span>.</span>fialko
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 64, fontWeight: 600, letterSpacing: -1 }}>
          Alex Fialko
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 34, color: "#9C9385" }}>
          {isRu
            ? "Full-Stack & AI Engineer из Праги"
            : "Full-Stack & AI Engineer based in Prague"}
        </div>
        <div style={{ display: "flex", marginTop: 44, gap: 12 }}>
          {["AI Agents", "Automation", "Telegram Bots", "MVPs"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 22,
                fontFamily: "monospace",
                color: "#F5F1E8",
                border: "1px solid rgba(197,181,155,0.3)",
                borderRadius: 8,
                padding: "8px 16px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
