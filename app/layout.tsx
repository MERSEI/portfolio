import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex (Flowe) - AI-Augmented Product Engineer",
  description: "Building production-grade applications in hours using AI-augmented development. Portfolio showcasing TypeScript, React, Python, and modern infrastructure.",
  keywords: "Product Engineer, Full-Stack Developer, AI, React, Python, TypeScript",
  authors: [{ name: "Alex (Flowe)" }],
  openGraph: {
    title: "Alex (Flowe) - AI-Augmented Product Engineer",
    description: "Building features in hours that traditionally take weeks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </body>
    </html>
  );
}
