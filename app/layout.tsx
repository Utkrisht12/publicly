import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Publicly: Hire Public Builders",
  description:
    "Hire Public Builders who embed with your team and turn weekly progress into demos, build logs, short videos, and launch momentum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Display: General Sans · Body: Satoshi (Fontshare), per design-system.md. Never Inter. */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* Mono for ALL metadata: JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
