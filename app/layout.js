import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trimsy – Smart & Simple URL Shortener",
  description: "Trimsy makes sharing easier. Shorten long links into clean, simple URLs that are fast, reliable, and easy to remember. Perfect for personal use, businesses, and social media.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#e0fbfc]`}
      >
        {/* step2: included navbar here before content "children" of the page */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
