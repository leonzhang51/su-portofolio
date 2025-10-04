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
  title: "AI Integration Engineer | Full-Stack Developer Portfolio",
  description: "Full-Stack AI Integration Engineer specializing in RAG, LLM Fine-Tuning, Next.js, and Python. Building intelligent, data-driven applications with expertise in LangChain, FastAPI, and modern web technologies.",
  keywords: ["AI Integration Engineer", "Full-Stack Developer", "RAG", "LLM Fine-Tuning", "Next.js", "Python", "LangChain", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
