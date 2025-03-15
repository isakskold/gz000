import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <body className="antialiased flex flex-col relative min-h-screen">
        <Header />
        <main className="flex-grow pt-16 sm:pt-32 bg-indigo-400 h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
