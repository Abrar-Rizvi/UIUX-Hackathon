"use client"
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current pathname
  const isHomePage = pathname === '/'; // Check if it's the home page
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header isHomePage={isHomePage}/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
