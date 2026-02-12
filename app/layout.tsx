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
  title: {
    default: "Veritas Analytics & Consultant (VAC)",
    template: "%s | Veritas Analytics & Consultant",
  },
  description:
    "Veritas Analytics & Consultant (VAC) is a premier consulting firm specializing in data analytics, business intelligence, and data engineering solutions.",
  keywords: [
    "Veritas Analytics",
    "Consultant",
    "VAC",
    "Data Analytics",
    "Business Intelligence",
    "Data Engineering",
    "Strategic Consulting",
    "Analytics firm Rwanda",
    "Veritas Analytics & Consultant",
  ],
  authors: [{ name: "Veritas Analytics & Consultant" }],
  creator: "Veritas Analytics & Consultant",
  publisher: "Veritas Analytics & Consultant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Veritas Analytics & Consultant (VAC)",
    description: "Transforming Data into Strategic Decisions.",
    url: "https://vac.rw",
    siteName: "Veritas Analytics & Consultant",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Veritas Analytics & Consultant Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas Analytics & Consultant (VAC)",
    description: "Transforming Data into Strategic Decisions.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
