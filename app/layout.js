import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      {/* ADDED FAVICON IN A HEAD TAG HERE ON LAYOUT.JS , SO THAT IT APPLIES TO ALL THE WEBPAGES IN THE WEBSITE THERE THUS, HERE BELOW. */}
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#e0fbfc]`}
      >
        {/* step2: included navbar here before content "children" of the page */}
        <Navbar />
        {children}
        {/* included footer here now , here below after children i.e. after the main content of each page in the website thus , here below . */}
        <Footer/>
      </body>
    </html>
  );
}
