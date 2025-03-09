import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "../components/layout";
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
  title: "BT Elevator - Modern Elevator Company",
  description: "Leading manufacturer of elevator control systems, electronic cards, and software solutions.",
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
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
