import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Git Vercel Deploy",
  description: "A simple app to test Vercel deployment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-full h-screen`}
      >
        <header className="bg-neutral-300 flex justify-center">Header</header>
        <main className="container mx-auto px-2 lg:px-0 flex-1">
          {children}
        </main>
        <footer className="bg-neutral-300 flex justify-center">
          Footer &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
