import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manjunath Bhandari | Full Stack Developer",
  description: "Portfolio of Manjunath Bhandari",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-jetbrains"
      >
        <Navbar/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
