import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "GroundZero000",
  description: "GroundZero000 Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
