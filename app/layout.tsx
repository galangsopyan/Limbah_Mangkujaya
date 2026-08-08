import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://limbahmangkujaya.com"),

  title: {
    default: "UD Sekawan Teknik",
    template: "%s | UD Sekawan Teknik",
  },

  description:
    "Jasa borongan barang bekas, scrap logam, mesin industri dan likuidasi aset profesional.",

  authors: [
    {
      name: "UD Sekawan Teknik",
    },
  ],

  creator: "UD Sekawan Teknik",

  openGraph: {
    title: "UD Sekawan Teknik",
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
