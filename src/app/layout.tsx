import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className='m-2'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
