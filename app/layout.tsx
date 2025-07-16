import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ 추가된 import
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comitia",
  description: "AI-powered comic creation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* ✅ 공통 Header와 NavBar 추가 */}
        <Header />
        <NavBar />
        <main className="flex-grow">{children}</main>
        {/* Footer는 나중에 추가 가능 */}
      </body>
    </html>
  );
}

