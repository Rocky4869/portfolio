import type { Metadata } from "next";
import "./globals.css";
import StarsCanvas from "@/components/StarsBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            backgroundColor: "#1a103a",
            border: "1px solid #7c3aed",
            color: "#ffffff",
          }}
        />
      </body>
    </html>
  );
}
