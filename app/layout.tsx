import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Rocky's Portfolio",
  description: "Rocky's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-16 md:pb-0 md:pt-16">
        <Header />
        {children}
      </body>
    </html>
  );
}
