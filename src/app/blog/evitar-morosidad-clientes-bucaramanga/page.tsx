import { Metadata } from "next";
import EvitarMorosidadClientesBucaramangaContent from "./EvitarMorosidadClientesBucaramangaContent";

export const metadata: Metadata = {
  title: "Cómo evitar la morosidad en clientes empresariales en Bucaramanga",
  description:
    "Aprende cómo evitar la morosidad en clientes empresariales en Bucaramanga con estrategias preventivas que mejoran tu flujo de caja y reducen riesgos.",
  keywords: [
    "evitar morosidad clientes Bucaramanga",
    "reducir cartera vencida Bucaramanga",
    "prevención de morosidad empresas",
    "gestión de cartera Bucaramanga",
    "clientes morosos Colombia",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/evitar-morosidad-clientes-bucaramanga",
  },
  openGraph: {
    title: "Cómo evitar la morosidad en clientes empresariales",
    description:
      "Estrategias efectivas para reducir clientes morosos en Bucaramanga.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/evitar-morosidad-clientes-bucaramanga",
    siteName: "Pravice Gestión de Cartera",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evitar morosidad en clientes empresariales",
    description: "Reduce la mora y mejora tu flujo de caja.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo evitar la morosidad en clientes empresariales en Bucaramanga",
    description: "Guía completa para prevenir la morosidad en empresas.",
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice",
    },
    mainEntityOfPage:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/evitar-morosidad-clientes-bucaramanga",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Gestión de Cartera",
    areaServed: "Bucaramanga, Colombia",
    serviceType: "Cobranza y recuperación de cartera",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schema, localBusiness]),
        }}
      />

      <EvitarMorosidadClientesBucaramangaContent />
    </>
  );
}
