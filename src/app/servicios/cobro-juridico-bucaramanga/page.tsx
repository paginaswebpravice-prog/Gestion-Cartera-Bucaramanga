import type { Metadata } from "next";
import CobroJuridicoBucaramangaContent from "./CobroJuridicoBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Cobro jurídico en Bucaramanga (2026) | Abogados expertos en recuperación de cartera",

  description:
    "¿No le pagan? Recupere su dinero con abogados expertos en cobro jurídico en Bucaramanga. Demandas, embargos y soluciones legales efectivas.",

  keywords: [
    "cobro jurídico Bucaramanga",
    "abogados cobro de cartera Bucaramanga",
    "recuperación de cartera Bucaramanga",
    "demanda por deuda Bucaramanga",
    "embargos Bucaramanga",
  ],

  authors: [{ name: "Tu Empresa o Marca" }],
  creator: "Tu Empresa o Marca",
  publisher: "Tu Empresa o Marca",

  metadataBase: new URL("https://gestion-cartera-bucaramanga-iota.vercel.app/"),

  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/cobro-juridico-bucaramanga",
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

  openGraph: {
    title: "Cobro jurídico en Bucaramanga | Recupere su dinero rápido",
    description:
      "Abogados expertos en cobro jurídico en Bucaramanga. Demandas, embargos y recuperación efectiva de cartera.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/servicios/cobro-juridico-bucaramanga",
    siteName: "Tu Empresa",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://gestion-cartera-bucaramanga-iota.vercel.app/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobro jurídico en Bucaramanga",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cobro jurídico en Bucaramanga",
    description: "Recupere su dinero con abogados expertos en Bucaramanga.",
    images: [
      "https://gestion-cartera-bucaramanga-iota.vercel.app/logo_pravice.png",
    ],
  },

  category: "Legal Services",
};

export default function Page() {
  return <CobroJuridicoBucaramangaContent />;
}
