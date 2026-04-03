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
  metadataBase: new URL("https://tony-eneh.vercel.app"),
  title: "Tony Eneh | Senior Full-Stack Engineer & Researcher",
  description:
    "Portfolio of Tony Eneh — frontend-focused senior full-stack engineer, founder, and applied systems researcher building modern web, blockchain, and research-grade products.",
  openGraph: {
    title: "Tony Eneh | Senior Full-Stack Engineer & Researcher",
    description:
      "Frontend-focused senior full-stack engineer and applied systems researcher building modern web, blockchain, and verifiable systems.",
    url: "https://tony-eneh.vercel.app",
    siteName: "Tony Eneh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Eneh | Senior Full-Stack Engineer & Researcher",
    description:
      "Frontend-focused senior full-stack engineer and applied systems researcher building modern web, blockchain, and verifiable systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#020617] font-sans text-white">{children}</body>
    </html>
  );
}
