import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
export const metadata: Metadata = {
  title: "Veritas Analytics & Consultants firm",
  description:
    "Consulting firm for data analytics, business intelligence, and data engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
