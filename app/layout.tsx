import type { Metadata } from "next";
import "./globals.css";
import StarsCanvas from "@/components/StarsBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rocky's Portfolio",
  description: "Rocky's Portfolio",
  icons: {
    icon: "/images/snoppy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
