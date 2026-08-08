import type { Metadata } from "next";
import LandingPage from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Limbah Mangku Jaya | Jasa Borongan & Likuidasi Aset Profesional",
  description:
    "UD Limbah Mangku Jaya melayani jasa borongan barang bekas, scrap logam, komputer, AC, mesin industri, pembongkaran gudang dan likuidasi aset di Pebayuran dan sekitarnya.",
  keywords: [
    "jasa borongan",
    "barang bekas",
    "scrap logam",
    "likuidasi aset",
    "bongkar gudang",
    "jual barang bekas",
    "jasa Pebayuran",
    "Sekawan Teknik",
  ],
  openGraph: {
    title: "Limbah Mangku Jaya | Jasa Borongan & Likuidasi Aset",
    description:
      "Solusi profesional untuk pembelian barang bekas, scrap, mesin industri dan likuidasi aset.",
    type: "website",
    locale: "id_ID",
  },
};

export default function Page() {
  return <LandingPage />;
}