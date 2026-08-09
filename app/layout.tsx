import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://limbahmangkujaya.com"),

  title: {
    default: "UD Limbah Mangku Jaya",
    template: "%s | UD Limbah Mangku Jaya",
  },

  description:
    "Jasa borongan barang bekas, scrap logam, mesin industri dan likuidasi aset profesional.",

  authors: [
    {
      name: "UD Limbah Mangku Jaya",
    },
  ],

  creator: "UD Limbah Mangku Jaya",

  openGraph: {
    title: "UD Limbah Mangku Jaya",
    description:
      "Solusi profesional untuk barang bekas, scrap dan likuidasi aset.",
    type: "website",
    locale: "id_ID",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
