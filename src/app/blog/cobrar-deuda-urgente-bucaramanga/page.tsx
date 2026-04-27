import { Metadata } from "next";
import CobrarDeudaUrgenteBucaramangaContent from "./CobrarDeudaUrgenteBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Cómo cobrar una deuda urgente en Bucaramanga | Recupera dinero rápido",
  description:
    "Aprende cómo cobrar una deuda urgente en Bucaramanga con estrategias legales efectivas. Recupera tu dinero rápidamente y mejora tu flujo de caja.",
  keywords: [
    "cobrar deuda urgente Bucaramanga",
    "recuperar dinero rápido Bucaramanga",
    "cobro de deudas Bucaramanga",
    "cobranza urgente Colombia",
    "gestión de cartera Bucaramanga",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobrar-deuda-urgente-bucaramanga",
  },
  openGraph: {
    title: "Cómo cobrar una deuda urgente en Bucaramanga (Guía rápida)",
    description:
      "Recupera dinero de forma inmediata con estrategias de cobranza urgente en Bucaramanga.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobrar-deuda-urgente-bucaramanga",
    siteName: "Pravice Gestión de Cartera",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cobrar deuda urgente en Bucaramanga",
    description: "Estrategias efectivas para recuperar dinero rápidamente.",
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
    headline: "Cómo cobrar una deuda urgente en Bucaramanga (Guía 2026)",
    description: "Guía completa para recuperar deudas urgentes en Bucaramanga.",
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice",
    },
    mainEntityOfPage:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/cobrar-deuda-urgente-bucaramanga",
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

      <CobrarDeudaUrgenteBucaramangaContent />
    </>
  );
}
