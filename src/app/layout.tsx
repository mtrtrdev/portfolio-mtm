import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTM — Creative Technologist & Engineer",
  description: "Portfolio of MTM. Exploration of interactive computing, creative coding, and robust web architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@300..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#fafafa] selection:bg-[#10b981] selection:text-black">
        {children}
      </body>
    </html>
  );
}
