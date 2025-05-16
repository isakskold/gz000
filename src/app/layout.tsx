"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body className="antialiased flex flex-col relative min-h-screen overflow-x-hidden bg-[#001f33]">
        {/* Base gradient layer */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#001f33] via-[#003f66] to-[#0077aa] opacity-90" />

        {/* Animated gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#00aaff] to-[#0077aa] opacity-20 animate-gradient-x" />

        {/* Grid pattern */}
        <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Radial gradient for depth */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,170,255,0.1),transparent_70%)]" />

        {/* Top gradient fade */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent to-[#001f33] opacity-80" />

        {/* Side gradient accents */}
        <div className="fixed inset-0 bg-gradient-to-r from-[#001f33] via-transparent to-[#001f33] opacity-50" />

        {/* Content */}
        <Header />
        <main className="flex flex-grow pb-6 md:pb-14 px-[10%] pt-16 sm:pt-32 relative z-10">
          {children}
        </main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", (user) => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
