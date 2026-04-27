import { Metadata } from "next";
import ProcesoRecuperacionCarteraColombiaContent from "./ProcesoRecuperacionCarteraColombiaContent";

export const metadata: Metadata = {
  title: "Proceso de recuperación de cartera en Colombia | Guía completa 2026",
  description:
    "Aprende cómo funciona el proceso de recuperación de cartera en Colombia paso a paso, desde el cobro amistoso hasta el cobro jurídico.",
  keywords: [
    "proceso recuperación de cartera Colombia",
    "cobro de deudas Colombia",
    "cobranza empresarial Colombia",
    "recuperar cartera vencida Colombia",
    "proceso cobro jurídico Colombia",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/proceso-recuperacion-cartera-colombia",
  },
  openGraph: {
    title: "Proceso de recuperación de cartera en Colombia explicado",
    description: "Guía paso a paso para recuperar deudas en Colombia.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/proceso-recuperacion-cartera-colombia",
    siteName: "Pravice Gestión de Cartera",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proceso de recuperación de cartera en Colombia",
    description: "Aprende cómo recuperar deudas de forma legal y efectiva.",
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
    headline: "Proceso de recuperación de cartera en Colombia (Guía 2026)",
    description: "Guía completa del proceso de cobranza en Colombia.",
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice",
    },
    mainEntityOfPage:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/proceso-recuperacion-cartera-colombia",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Gestión de Cartera",
    areaServed: "Colombia",
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

      <ProcesoRecuperacionCarteraColombiaContent />
    </>
  );
}
