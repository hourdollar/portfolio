import type { Metadata } from "next";
import Navbar from "./components/Navbar";
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
  title: "David Hill-Gray - Full Stack Software Engineer",
  description: "Full Stack Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="flex flex-col">
          <div className="p-4">
            <Navbar />
          </div>
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}
