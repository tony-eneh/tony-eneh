import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tony-eneh.vercel.app"),
  title: "Anthony Uchenna Eneh | Senior Full-Stack Engineer • PhD Researcher",
  description:
    "Personal portfolio of Anthony Uchenna Eneh — senior full-stack engineer, founder, and PhD researcher building web, mobile, blockchain, and AI systems from South Korea.",
  openGraph: {
    title: "Anthony Uchenna Eneh | Senior Full-Stack Engineer • PhD Researcher",
    description:
      "A personal portfolio blending engineering depth, research work, and selected product builds.",
    url: "https://tony-eneh.vercel.app",
    siteName: "Anthony Uchenna Eneh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Uchenna Eneh | Senior Full-Stack Engineer • PhD Researcher",
    description:
      "Senior full-stack engineer and PhD researcher building thoughtful products and trustworthy systems.",
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
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#08111f] font-sans text-[#f7f2e8]">{children}</body>
    </html>
  );
}
