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
      <body className="antialiased flex flex-col relative min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex flex-grow pb-6 md:pb-14 px-[10%] pt-16 sm:pt-32 bg-gradient-to-br from-[#001f33] via-[#003f66] to-[#0077aa] h-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
