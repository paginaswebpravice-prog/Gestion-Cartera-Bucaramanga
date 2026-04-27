import { Metadata } from "next";
import EstrategiasCobranzaBucaramangaContent from "./EstrategiasCobranzaBucaramangaContent";

export const metadata: Metadata = {
  title:
    "Estrategias de cobranza efectiva en Bucaramanga | Recupera cartera 2026",
  description:
    "Descubre las mejores estrategias de cobranza efectiva en Bucaramanga para recuperar cartera vencida, mejorar tu flujo de caja y reducir la morosidad en tu empresa.",
  keywords: [
    "estrategias de cobranza Bucaramanga",
    "cobranza efectiva Bucaramanga",
    "recuperar cartera Bucaramanga",
    "cobro de deudas Bucaramanga",
    "gestión de cartera empresarial",
  ],
  alternates: {
    canonical:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/estrategias-cobranza-bucaramanga",
  },
  openGraph: {
    title: "Estrategias de cobranza efectiva en Bucaramanga (Guía profesional)",
    description:
      "Aprende cómo mejorar la recuperación de cartera con estrategias de cobranza efectivas en Bucaramanga.",
    url: "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/estrategias-cobranza-bucaramanga",
    siteName: "Pravice Gestión de Cartera",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estrategias de cobranza efectiva en Bucaramanga",
    description:
      "Mejora tu flujo de caja con estrategias de cobranza profesional en Bucaramanga.",
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
    headline: "Estrategias de cobranza efectiva en Bucaramanga (Guía 2026)",
    description:
      "Guía completa sobre estrategias de cobranza para empresas en Bucaramanga.",
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice",
    },
    mainEntityOfPage:
      "https://gestion-cartera-bucaramanga-iota.vercel.app/blog/estrategias-cobranza-bucaramanga",
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
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schema, localBusiness]),
        }}
      />

      {/* Contenido */}
      <EstrategiasCobranzaBucaramangaContent />
    </>
  );
}
