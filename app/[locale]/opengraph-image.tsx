import { ImageResponse } from "next/og";

export const alt = "Alex Fialko — Full-Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0B0A",
          color: "#F3F1EA",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#CFF53D", letterSpacing: 2 }}>
          PRAGUE · FULL-STACK & AI ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>
            Alex Fialko
          </div>
          <div style={{ fontSize: 36, marginTop: 28, color: "#A8AC9C", maxWidth: 900 }}>
            AI agents, Telegram bots and full-stack products that reach production.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#CFF53D" }}>alexfialko.vercel.app</div>
      </div>
    ),
    size
  );
}
