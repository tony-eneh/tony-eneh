import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tony-eneh.vercel.app"),
  title: "Anthony Uchenna Eneh | Senior Full-Stack Engineer & PhD Researcher",
  description:
    "Personal portfolio of Anthony Uchenna Eneh — senior full-stack engineer, founder, and PhD researcher building polished products and trustworthy systems.",
  openGraph: {
    title: "Anthony Uchenna Eneh | Senior Full-Stack Engineer & PhD Researcher",
    description:
      "A polished portfolio connecting product engineering, research depth, and selected software builds.",
    url: "https://tony-eneh.vercel.app",
    siteName: "Anthony Uchenna Eneh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Uchenna Eneh | Senior Full-Stack Engineer & PhD Researcher",
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
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#f8fafc] text-slate-950">{children}</body>
    </html>
  );
}
