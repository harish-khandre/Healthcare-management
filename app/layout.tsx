import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import ContactSection from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health Care",
  description: "Best website for health care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Toaster />
        <NavBar />
        {children}
        <ContactSection />
      </body>
    </html>
  );
}
