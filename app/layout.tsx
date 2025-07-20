// import type { Metadata } from "next";
// import "./globals.css";

// import Header from "@/components/ui/Header";
// import Footer from "@/components/ui/Footer";
// export const metadata: Metadata = {
//   title: "Veritas Analytics & Consultants firm",
//   description:
//     "Consulting firm for data analytics, business intelligence, and data engineering.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

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
      <body className="flex min-h-screen flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
